import { Get, Controller, Param } from '@nestjs/common';
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
}
