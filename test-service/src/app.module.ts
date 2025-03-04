import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestModule } from './rest/rest.module';
import { GraphqlModule } from './graphql/graphql.module';
import { GrpcModule } from './grpc/grpc.module';

@Module({
  imports: [RestModule, GraphqlModule, GrpcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
