import * as t from 'io-ts';
export declare const SuccessMessageC: <T>(dataCodec: t.Type<T, T, unknown>, name: string) => t.TypeC<{
    status: t.LiteralC<"success">;
    data: t.Type<T, T, unknown>;
}>;
export declare const ErrorMessageC: t.TypeC<{
    status: t.LiteralC<"error">;
    error: t.StringC;
}>;
export interface ErrorMessage extends t.TypeOf<typeof ErrorMessageC> {
}
