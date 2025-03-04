import { Injectable } from '@nestjs/common';

export interface Product {
    id: number;
    name: string;
    des: string;
    price: number;
}


@Injectable()
export class RestService {
    private readonly products: Product[] = Array.from({ length: 5 }, (_, index) => ({
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

    createProduct(product: Omit<Product, 'id'>): Product {
        const newProduct = { id: this.products.length + 1, ...product };
        this.products.push(newProduct);
        return newProduct;
    }

    updateProduct(id: number, product: Partial<Product>): Product {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            throw new Error(`Product with id ${id} not found`);
        }
        this.products[index] = { ...this.products[index], ...product };
        return this.products[index];
    }

    deleteProduct(id: number): void {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1) {
            throw new Error(`Product with id ${id} not found`);
        }
        this.products.splice(index, 1);
    }
}
