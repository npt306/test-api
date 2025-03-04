import { Injectable } from '@nestjs/common';

export interface Product {
    id: number;
    name: string;
    des: string;
    price: number;
}


@Injectable()
export class RestService {
    private readonly products: Product[] = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        name: `product${index + 1}`,
        des: `description${index + 1}`,
        price: (index + 1) * 100,
    }));

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw new Error(`Product with id ${id} not found`);
        }
        return product;
    }

}
