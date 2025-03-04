import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'hero',         
      protoPath: 'src/hero.proto', 
      url: '0.0.0.0:50051',     
    },
  });
  await app.listen();
  console.log('gRPC server is running on port 50051');
}
bootstrap();
