import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GrpcClientModule } from './grpc-client.module';
import { ProductController } from './product.controller';
import { ProductServiceClient } from './product.service';

@Module({
  imports: [GrpcClientModule],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductServiceClient],
})
export class AppModule {}
