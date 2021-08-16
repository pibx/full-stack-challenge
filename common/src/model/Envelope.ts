import * as t from 'io-ts'

export const SuccessMessageC = <T>(dataCodec: t.Type<T>, name: string) =>
  t.type(
    {
      status: t.literal('success'),
      data: dataCodec
    },
    name
  )

export const ErrorMessageC = t.type(
  {
    status: t.literal('error'),
    error: t.string
  },
  'ErrorMessage'
)
export interface ErrorMessage extends t.TypeOf<typeof ErrorMessageC> {}
