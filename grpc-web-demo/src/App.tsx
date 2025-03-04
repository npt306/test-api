import React, { useState } from 'react';
// Import các client và message đã sinh
import { HeroServiceClient } from './HeroServiceClientPb';
import { HeroById } from './hero_pb';

const client = new HeroServiceClient('http://localhost:8080'); // Địa chỉ của proxy (Envoy) chuyển tiếp tới gRPC server

function App() {
  const [heroName, setHeroName] = useState<string>('');
  const [heroId, setHeroId] = useState<number>(1);
  const [error, setError] = useState<string>('');

  const fetchHero = () => {
    setError('');
    const request = new HeroById();
    request.setId(heroId);

    client.findOne(request, {}, (err, response) => {
      if (err) {
        console.error('Lỗi khi gọi RPC:', err);
        setError('Không lấy được dữ liệu');
        return;
      }
      // Giả sử message trả về có phương thức getName() (tương ứng với trường name)
      setHeroName(response.getName());
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>gRPC-Web với React & TypeScript</h1>
      <div>
        <label htmlFor="heroId">Nhập ID của Hero:</label>
        <input
          id="heroId"
          type="number"
          value={heroId}
          onChange={(e) => setHeroId(parseInt(e.target.value))}
          style={{ marginLeft: '10px' }}
        />
      </div>
      <button onClick={fetchHero} style={{ marginTop: '10px' }}>
        Lấy thông tin Hero
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {heroName && <p>Hero: {heroName}</p>}
    </div>
  );
}

export default App;
