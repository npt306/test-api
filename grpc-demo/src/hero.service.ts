import { Injectable } from '@nestjs/common';

interface Hero {
  id: number;
  name: string;
}

interface HeroById {
  id: number;
}

@Injectable()
export class HeroService {
  private readonly heroes: Hero[] = [
    { id: 1, name: 'Batman' },
    { id: 2, name: 'Superman' },
  ];

  // Hàm tìm hero theo id
  findOne(data: HeroById): Hero {
    const hero = this.heroes.find(({ id }) => id === data.id);
    if (!hero) {
      throw new Error(`Hero with id ${data.id} not found`);
    }
    return hero;
  }
}
