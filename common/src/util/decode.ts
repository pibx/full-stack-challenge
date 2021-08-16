import { Decoder, Errors } from "io-ts";
import { PathReporter } from "io-ts/lib/PathReporter";
import { getOrElse, left } from "fp-ts/lib/Either";

export const decode = <T>(Codec: Decoder<any, T>, value: unknown): T =>
  getOrElse<Errors, T>((errors) => {
    throw new DecodeError(PathReporter.report(left(errors)).join("\n"));
  })(Codec.decode(value));

export class DecodeError extends Error {
  name = "DecodeError";
}
