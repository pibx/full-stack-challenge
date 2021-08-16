import { Decoder } from "io-ts";
export declare const decode: <T>(Codec: Decoder<any, T>, value: unknown) => T;
export declare class DecodeError extends Error {
    name: string;
}
