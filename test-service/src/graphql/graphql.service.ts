import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { CreateProducDto, UpdateProductDto } from './dto/product.dto';

@Injectable()
export class GraphqlService {
    private readonly products: Product[] = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        name: `product${index + 1}`,
        des: `description${index + 1}`,
        price: (index + 1) * 100,
    }));

    private idCounter = 101;

    create(createProductInput: CreateProducDto): Product {
        const product: Product = {
            id: this.idCounter++,
            ...createProductInput,
        };
        this.products.push(product);
        return product;
    }

    findAll(): Product[] {
        return this.products;
    }

    findOne(id: number): Product {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw new Error(`Product with id ${id} not found`);
        }
        return product;
    }

    update(updateProductInput: UpdateProductDto): Product {
        const product = this.findOne(updateProductInput.id);
        if (product) { 
            Object.assign(product, updateProductInput);
        }
        return product;
    }

    remove(id: number): Product | undefined {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            const removed = this.products.splice(index, 1)[0];
            return removed;
        }
        return undefined;
    }
}
