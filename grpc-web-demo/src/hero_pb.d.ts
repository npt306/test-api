import * as jspb from 'google-protobuf'



export class HeroById extends jspb.Message {
  getId(): number;
  setId(value: number): HeroById;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeroById.AsObject;
  static toObject(includeInstance: boolean, msg: HeroById): HeroById.AsObject;
  static serializeBinaryToWriter(message: HeroById, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeroById;
  static deserializeBinaryFromReader(message: HeroById, reader: jspb.BinaryReader): HeroById;
}

export namespace HeroById {
  export type AsObject = {
    id: number,
  }
}

export class Hero extends jspb.Message {
  getId(): number;
  setId(value: number): Hero;

  getName(): string;
  setName(value: string): Hero;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Hero.AsObject;
  static toObject(includeInstance: boolean, msg: Hero): Hero.AsObject;
  static serializeBinaryToWriter(message: Hero, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Hero;
  static deserializeBinaryFromReader(message: Hero, reader: jspb.BinaryReader): Hero;
}

export namespace Hero {
  export type AsObject = {
    id: number,
    name: string,
  }
}

