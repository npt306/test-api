import { Controller, NotFoundException } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { GrpcService } from './grpc.service';

@Controller()
export class GrpcController {
    constructor(private readonly grpcService: GrpcService) {}

    @GrpcMethod('ProductService', 'CreateProduct')
    createProduct(data: any): any {
        const product = this.grpcService.create(data);
        return product;
    }

    @GrpcMethod('ProductService', 'GetProductById')
    getProduct(data: any): any {
        const product = this.grpcService.findById(data.id);
        if (!product) {
            throw new NotFoundException('Product not found');
        }
        return product;
    }

    @GrpcMethod('ProductService', 'GetProducts')
    getAllProducts(data: any): any {
        const products = this.grpcService.findAll();
        return { products };
    }

    @GrpcMethod('ProductService', 'UpdateProduct')
    updateProduct(data: any): any {
        const { id, ...rest } = data;
        const product = this.grpcService.update(id, rest);
        if (!product) {
            throw new NotFoundException('Product not found');
        }
        return product;
    }

    @GrpcMethod('ProductService', 'DeleteProduct')
    deleteProduct(data: any): any {
        const success = this.grpcService.delete(data.id);
        if (!success) {
            throw new NotFoundException('Product not found');
        }
        return { success: true };
    }
}