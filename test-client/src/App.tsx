import React, { useState } from 'react';
import { ProductServiceClient } from './proto/ProductsServiceClientPb';
import { Product  } from './proto/products_pb';
import * as productsPb from './proto/products_pb';

const client = new ProductServiceClient('http://localhost:5000', null, null);

interface ProductObj  {
  id: number;
  name: string;
  des: string;
  price: number;
}

type Protocol = 'rest' | 'graphql' | 'grpc';

function App() {
  const [protocol, setProtocol] = useState<Protocol>('rest');
  const [products, setProducts] = useState<ProductObj []>([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    des: ''
  });
  const [updateProduct, setUpdateProduct] = useState({
    id: 0,
    name: '',
    price: 0,
    des: ''
  });
  const [deleteId, setDeleteId] = useState<string>('');

  // Lấy danh sách sản phẩm dựa trên giao thức đã chọn
  const fetchProducts = async () => {
    try {
      let response;
      if (protocol === 'rest') {
        response = await fetch('http://localhost:3000/rest/products');
        const data = await response.json();
        setProducts(data);
      } else if (protocol === 'graphql') {
        response = await fetch('http://localhost:3000/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
              query Products {
                products {
                  id
                  name
                  des
                  price
                }
              }
            `
          })
        });
        const json = await response.json();
        setProducts(json.data.products);
      } else if (protocol === 'grpc') {
        const request = new productsPb.Empty()
        client.getProducts(request, {}, (err, response) => {
          if (err) {
            console.error('Lỗi khi lấy sản phẩm qua gRPC:', err);
            return;
          }
          const grpcProducts = response.getProductsList().map((product) => ({
            id: product.getId(),
            name: product.getName(),
            des: product.getDes(),
            price: product.getPrice(),
          }));
          setProducts(grpcProducts);
        });
      }

    } catch (error) {
      console.error('Lỗi khi lấy sản phẩm:', error);
    }
  };

  // Thêm sản phẩm mới
  const addProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let response;
      if (protocol === 'rest') {
        response = await fetch('http://localhost:3000/rest/product', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newProduct)
        });
      } else if (protocol === 'graphql') {
        response = await fetch('http://localhost:3000/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
              mutation CreateProduct($createProductDto: CreateProductDto!) {
                createProduct(createProductDto: $createProductDto) {
                  id
                  name
                  des
                  price
                }
              }
            `,
            variables: { createProductDto: newProduct }
          })
        });
      } else if (protocol === 'grpc') {
        response = await fetch('http://localhost:5000/CreateProduct', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newProduct)
        });
      }
      if (response) {
        const data = await response.json();
        console.log('Đã thêm sản phẩm:', data);
        fetchProducts();
      }
    } catch (error) {
      console.error('Lỗi khi thêm sản phẩm:', error);
    }
  };

  // Cập nhật sản phẩm
  const updateProductHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let response;
      if (protocol === 'rest') {
        response = await fetch(`http://localhost:3000/rest/product/${updateProduct.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updateProduct)
        });
      } else if (protocol === 'graphql') {
        response = await fetch('http://localhost:3000/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
              mutation UpdateProduct($updateProductDto: UpdateProductDto!) {
                updateProduct(updateProductDto: $updateProductDto) {
                  id
                  name
                  des
                  price
                }
              }
            `,
            variables: { updateProductDto: updateProduct }
          })
        });
      } else if (protocol === 'grpc') {
        response = await fetch('http://localhost:5000/UpdateProduct', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updateProduct)
        });
      }
      if (response) {
        const data = await response.json();
        console.log('Đã cập nhật sản phẩm:', data);
        fetchProducts();
      }
    } catch (error) {
      console.error('Lỗi khi cập nhật sản phẩm:', error);
    }
  };

  // Xóa sản phẩm theo ID
  const deleteProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let response;
      if (protocol === 'rest') {
        response = await fetch(`http://localhost:3000/rest/product/${deleteId}`, {
          method: 'DELETE'
        });
      } else if (protocol === 'graphql') {
        response = await fetch('http://localhost:3000/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
              mutation RemoveProduct($id: Int!) {
                removeProduct(id: $id) {
                  id
                  name
                  des
                  price
                }
              }
            `,
            variables: { id: Number(deleteId) }
          })
        });
      } else if (protocol === 'grpc') {
        response = await fetch('http://localhost:5000/DeleteProduct', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: Number(deleteId) })
        });
      }
      if (response) {
        const data = await response.json();
        console.log('Đã xóa sản phẩm:', data);
        fetchProducts();
      }
    } catch (error) {
      console.error('Lỗi khi xóa sản phẩm:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Quản Lý Sản Phẩm - {protocol.toUpperCase()}
      </h1>

      {/* Chọn giao thức request */}
      <div className="mb-4">
        <label className="mr-2 font-semibold">Chọn giao thức:</label>
        <select
          value={protocol}
          onChange={(e) => setProtocol(e.target.value as Protocol)}
          className="border p-2 rounded"
        >
          <option value="rest">REST</option>
          <option value="graphql">GraphQL</option>
          <option value="grpc">gRPC</option>
        </select>
      </div>

      {/* Nút lấy danh sách sản phẩm */}
      <button
        onClick={fetchProducts}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Lấy hết sản phẩm
      </button>

      {/* Hiển thị danh sách sản phẩm */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Danh sách sản phẩm</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="border p-2 mb-2">
              <p>
                <strong>ID:</strong> {product.id}
              </p>
              <p>
                <strong>Tên:</strong> {product.name}
              </p>
              <p>
                <strong>Giá:</strong> {product.price}
              </p>
              <p>
                <strong>Mô tả:</strong> {product.des}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Form thêm sản phẩm */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Thêm sản phẩm</h2>
        <form onSubmit={addProduct} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Tên sản phẩm"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="border p-2"
            required
          />
          <input
            type="number"
            placeholder="Giá"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: Number(e.target.value) })
            }
            className="border p-2"
            required
          />
          <input
            type="text"
            placeholder="Mô tả"
            value={newProduct.des}
            onChange={(e) =>
              setNewProduct({ ...newProduct, des: e.target.value })
            }
            className="border p-2"
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Thêm sản phẩm
          </button>
        </form>
      </div>

      {/* Form cập nhật sản phẩm */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Cập nhật sản phẩm</h2>
        <form onSubmit={updateProductHandler} className="flex flex-col gap-2">
          <input
            type="number"
            placeholder="ID sản phẩm"
            value={updateProduct.id || ''}
            onChange={(e) =>
              setUpdateProduct({ ...updateProduct, id: Number(e.target.value) })
            }
            className="border p-2"
            required
          />
          <input
            type="text"
            placeholder="Tên sản phẩm"
            value={updateProduct.name}
            onChange={(e) =>
              setUpdateProduct({ ...updateProduct, name: e.target.value })
            }
            className="border p-2"
            required
          />
          <input
            type="number"
            placeholder="Giá"
            value={updateProduct.price}
            onChange={(e) =>
              setUpdateProduct({ ...updateProduct, price: Number(e.target.value) })
            }
            className="border p-2"
            required
          />
          <input
            type="text"
            placeholder="Mô tả"
            value={updateProduct.des}
            onChange={(e) =>
              setUpdateProduct({ ...updateProduct, des: e.target.value })
            }
            className="border p-2"
          />
          <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
            Cập nhật sản phẩm
          </button>
        </form>
      </div>

      {/* Form xóa sản phẩm */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Xóa sản phẩm</h2>
        <form onSubmit={deleteProduct} className="flex flex-col gap-2">
          <input
            type="number"
            placeholder="ID sản phẩm"
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
            className="border p-2"
            required
          />
          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
            Xóa sản phẩm
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
