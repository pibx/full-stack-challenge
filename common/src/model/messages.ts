import * as t from 'io-ts'
import { ListingC } from './Listing'

export const ListingSuccessMessageC = t.type(
  {
    status: t.literal('success'),
    data: t.array(ListingC)
  },
  'ListingSuccessMessage'
)
export interface ListingSuccessMessage
  extends t.TypeOf<typeof ListingSuccessMessageC> {}

export const ErrorMessageC = t.type(
  {
    status: t.literal('error'),
    error: t.string
  },
  'ErrorMessage'
)
export interface ErrorMessage extends t.TypeOf<typeof ErrorMessageC> {}
