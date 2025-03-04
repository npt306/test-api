import { GraphqlService } from './graphql.service';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Product } from './product.entity';
import { CreateProducDto, UpdateProductDto } from './dto/product.dto';

@Resolver(of => Product)
export class GraphqlResolver {
  constructor(private readonly graphqlService: GraphqlService) { }

  @Query(() => String)
  hello(): string {
    return 'Hello with graphql';
  }

  @Mutation(returns => Product)
  createProduct(
    @Args('createProductDto') createProductDto: CreateProducDto,
  ): Product {
    return this.graphqlService.create(createProductDto);
  }

  @Query(returns => [Product])
  products(): Product[] {
    return this.graphqlService.findAll();
  }

  @Query(returns => Product, { nullable: true })
  product(
    @Args('id', { type: () => Int }) id: number,
  ): Product {
    return this.graphqlService.findOne(id);
  }

  @Mutation(returns => Product)
  updateProduct(
    @Args('updateProductDto') updateProductDto: UpdateProductDto,
  ): Product {
    return this.graphqlService.update(updateProductDto);
  }

  @Mutation(returns => Product)
  removeProduct(
    @Args('id', { type: () => Int }) id: number,
  ): Product {
    const removedProduct = this.graphqlService.remove(id);
    if (!removedProduct) {
      throw new Error('Product not found');
    }
    return removedProduct;
  }
}
