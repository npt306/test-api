import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
}

interface ProductById {
  id: string;
}

interface ProductService {
  createProduct(data: Product): Observable<Product>;
  getProductById(data: ProductById): Observable<Product>;
  getProducts(data: {}): Observable<{ products: Product[] }>;
  updateProduct(data: Product): Observable<Product>;
  deleteProduct(data: ProductById): Observable<{}>;
}

@Injectable()
export class ProductServiceClient {
  private productService: ProductService;

  constructor(@Inject('PRODUCT_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.productService = this.client.getService<ProductService>('ProductService');
  }

  createProduct(product: Product): Observable<Product> {
    return this.productService.createProduct(product);
  }

  getProductById(id: string): Observable<Product> {
    return this.productService.getProductById({ id });
  }

  getProducts(): Observable<{ products: Product[] }> {
    return this.productService.getProducts({});
  }

  updateProduct(product: Product): Observable<Product> {
    return this.productService.updateProduct(product);
  }

  deleteProduct(id: string): Observable<{}> {
    return this.productService.deleteProduct({ id });
  }
}
