/**
 * @fileoverview gRPC-Web generated client stub for products
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.29.3
// source: products.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as products_pb from './products_pb'; // proto import: "products.proto"


export class ProductServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreateProduct = new grpcWeb.MethodDescriptor(
    '/products.ProductService/CreateProduct',
    grpcWeb.MethodType.UNARY,
    products_pb.Product,
    products_pb.Product,
    (request: products_pb.Product) => {
      return request.serializeBinary();
    },
    products_pb.Product.deserializeBinary
  );

  createProduct(
    request: products_pb.Product,
    metadata?: grpcWeb.Metadata | null): Promise<products_pb.Product>;

  createProduct(
    request: products_pb.Product,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: products_pb.Product) => void): grpcWeb.ClientReadableStream<products_pb.Product>;

  createProduct(
    request: products_pb.Product,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: products_pb.Product) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/products.ProductService/CreateProduct',
        request,
        metadata || {},
        this.methodDescriptorCreateProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/products.ProductService/CreateProduct',
    request,
    metadata || {},
    this.methodDescriptorCreateProduct);
  }

  methodDescriptorGetProducts = new grpcWeb.MethodDescriptor(
    '/products.ProductService/GetProducts',
    grpcWeb.MethodType.UNARY,
    products_pb.Empty,
    products_pb.ProductList,
    (request: products_pb.Empty) => {
      return request.serializeBinary();
    },
    products_pb.ProductList.deserializeBinary
  );

  getProducts(
    request: products_pb.Empty,
    metadata?: grpcWeb.Metadata | null): Promise<products_pb.ProductList>;

  getProducts(
    request: products_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: products_pb.ProductList) => void): grpcWeb.ClientReadableStream<products_pb.ProductList>;

  getProducts(
    request: products_pb.Empty,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: products_pb.ProductList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/products.ProductService/GetProducts',
        request,
        metadata || {},
        this.methodDescriptorGetProducts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/products.ProductService/GetProducts',
    request,
    metadata || {},
    this.methodDescriptorGetProducts);
  }

  methodDescriptorGetProductById = new grpcWeb.MethodDescriptor(
    '/products.ProductService/GetProductById',
    grpcWeb.MethodType.UNARY,
    products_pb.ProductID,
    products_pb.Product,
    (request: products_pb.ProductID) => {
      return request.serializeBinary();
    },
    products_pb.Product.deserializeBinary
  );

  getProductById(
    request: products_pb.ProductID,
    metadata?: grpcWeb.Metadata | null): Promise<products_pb.Product>;

  getProductById(
    request: products_pb.ProductID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: products_pb.Product) => void): grpcWeb.ClientReadableStream<products_pb.Product>;

  getProductById(
    request: products_pb.ProductID,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: products_pb.Product) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/products.ProductService/GetProductById',
        request,
        metadata || {},
        this.methodDescriptorGetProductById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/products.ProductService/GetProductById',
    request,
    metadata || {},
    this.methodDescriptorGetProductById);
  }

  methodDescriptorUpdateProduct = new grpcWeb.MethodDescriptor(
    '/products.ProductService/UpdateProduct',
    grpcWeb.MethodType.UNARY,
    products_pb.Product,
    products_pb.Product,
    (request: products_pb.Product) => {
      return request.serializeBinary();
    },
    products_pb.Product.deserializeBinary
  );

  updateProduct(
    request: products_pb.Product,
    metadata?: grpcWeb.Metadata | null): Promise<products_pb.Product>;

  updateProduct(
    request: products_pb.Product,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: products_pb.Product) => void): grpcWeb.ClientReadableStream<products_pb.Product>;

  updateProduct(
    request: products_pb.Product,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: products_pb.Product) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/products.ProductService/UpdateProduct',
        request,
        metadata || {},
        this.methodDescriptorUpdateProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/products.ProductService/UpdateProduct',
    request,
    metadata || {},
    this.methodDescriptorUpdateProduct);
  }

  methodDescriptorDeleteProduct = new grpcWeb.MethodDescriptor(
    '/products.ProductService/DeleteProduct',
    grpcWeb.MethodType.UNARY,
    products_pb.ProductID,
    products_pb.Empty,
    (request: products_pb.ProductID) => {
      return request.serializeBinary();
    },
    products_pb.Empty.deserializeBinary
  );

  deleteProduct(
    request: products_pb.ProductID,
    metadata?: grpcWeb.Metadata | null): Promise<products_pb.Empty>;

  deleteProduct(
    request: products_pb.ProductID,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: products_pb.Empty) => void): grpcWeb.ClientReadableStream<products_pb.Empty>;

  deleteProduct(
    request: products_pb.ProductID,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: products_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/products.ProductService/DeleteProduct',
        request,
        metadata || {},
        this.methodDescriptorDeleteProduct,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/products.ProductService/DeleteProduct',
    request,
    metadata || {},
    this.methodDescriptorDeleteProduct);
  }

}

