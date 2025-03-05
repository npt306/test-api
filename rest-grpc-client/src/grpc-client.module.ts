import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCT_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5000',
          package: 'products',
          protoPath: join(__dirname, 'products.proto'),
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class GrpcClientModule {}
