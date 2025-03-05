import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductServiceClient } from './product.service';
import { Observable } from 'rxjs';

interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
}

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductServiceClient) {}

  @Post()
  createProduct(@Body() product: Product): Observable<Product> {
    return this.productService.createProduct(product);
  }

  @Get(':id')
  getProductById(@Param('id') id: string): Observable<Product> {
    return this.productService.getProductById(id);
  }

  @Get()
  getAllProducts(): Observable<{ products: Product[] }> {
    return this.productService.getProducts();
  }

  @Put(':id')
  updateProduct(@Param('id') id: string, @Body() product: Product): Observable<Product> {
    return this.productService.updateProduct({ ...product, id });
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): Observable<{}> {
    return this.productService.deleteProduct(id);
  }
}
