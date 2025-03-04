import * as jspb from 'google-protobuf'



export class Product extends jspb.Message {
  getId(): number;
  setId(value: number): Product;

  getName(): string;
  setName(value: string): Product;

  getDes(): string;
  setDes(value: string): Product;

  getPrice(): number;
  setPrice(value: number): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    id: number,
    name: string,
    des: string,
    price: number,
  }
}

export class ProductList extends jspb.Message {
  getProductsList(): Array<Product>;
  setProductsList(value: Array<Product>): ProductList;
  clearProductsList(): ProductList;
  addProducts(value?: Product, index?: number): Product;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductList.AsObject;
  static toObject(includeInstance: boolean, msg: ProductList): ProductList.AsObject;
  static serializeBinaryToWriter(message: ProductList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductList;
  static deserializeBinaryFromReader(message: ProductList, reader: jspb.BinaryReader): ProductList;
}

export namespace ProductList {
  export type AsObject = {
    productsList: Array<Product.AsObject>,
  }
}

export class ProductID extends jspb.Message {
  getId(): number;
  setId(value: number): ProductID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductID.AsObject;
  static toObject(includeInstance: boolean, msg: ProductID): ProductID.AsObject;
  static serializeBinaryToWriter(message: ProductID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductID;
  static deserializeBinaryFromReader(message: ProductID, reader: jspb.BinaryReader): ProductID;
}

export namespace ProductID {
  export type AsObject = {
    id: number,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

