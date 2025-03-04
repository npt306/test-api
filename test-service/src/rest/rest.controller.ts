import { Get, Controller, Param, Post, Delete, Put } from '@nestjs/common';
import { RestService } from './rest.service';

@Controller('rest')
export class RestController {
  constructor(private readonly restService: RestService) {}

  @Get()
  getHello(): string {
    return "Hello with REST";
  }

  @Get('products')
  getProducts() {
    return this.restService.getProducts();
  }

  @Get('product/:id')
  getProduct(@Param('id') id: string) {
      const productId = parseInt(id, 10);
      return this.restService.getProduct(productId);
  }

  @Post('product')
  createProduct() {
      return this.restService.createProduct({
          name: 'New Product',
          des: 'Description',
          price: 100,
      });
  }

  @Delete('product/:id')
  deleteProduct(@Param('id') id: string) {
      const productId = parseInt(id, 10); 
      this.restService.deleteProduct(productId);
      return {'message': 'Product deleted'};
  }

  @Put('product/:id')
  updateProduct(@Param('id') id: string) {
      const productId = parseInt(id, 10);
      return this.restService.updateProduct(productId, {
          price: 200,
      });
  }
}
