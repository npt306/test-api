import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { GrpcModule } from './grpc/grpc.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
  
  const grpcApp = await NestFactory.createMicroservice<MicroserviceOptions>(
    GrpcModule,
    {
        transport: Transport.GRPC, 
        options: {
            package: 'products',
            protoPath: join(__dirname, './grpc/proto/products.proto'),
        },
    },
);
await grpcApp.listen();
}
bootstrap();
