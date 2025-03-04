import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateProducDto {
  @Field()
  name: string;

  @Field()
  des: string;

  @Field(type => Int)
  price: number;
}

@InputType()
export class UpdateProductDto {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  des?: string;

  @Field(type => Int, { nullable: true })
  price?: number;
}
