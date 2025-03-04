import { Injectable } from '@nestjs/common';

interface Product {
    id: number;
    name: string;
    des: string;
    price: number;
}

@Injectable()
export class GrpcService {
    private readonly products: Product[] = Array.from({ length: 100 }, (_, index) => ({
            id: index + 1,
            name: `product${index + 1}`,
            des: `description${index + 1}`,
            price: (index + 1) * 100,
        }));
    private idCounter = 101; // Bộ đếm để tạo ID tự động

    create(product: Omit<Product, 'id'>): Product {
        const newProduct = { id: this.idCounter++, ...product };
        this.products.push(newProduct);
        return newProduct;
    }

    findById(id: number): Product | undefined {
        return this.products.find(p => p.id === id);
    }

    findAll(): Product[] {
        return this.products;
    }

    update(id: number, updatedProduct: Omit<Product, 'id'>): Product | undefined {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            const product = { id, ...updatedProduct };
            this.products[index] = product;
            return product;
        }
        return undefined;
    }

    delete(id: number): boolean {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
            return true;
        }
        return false;
    }
}