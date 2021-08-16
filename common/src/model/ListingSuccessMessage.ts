import * as t from 'io-ts'
import { SuccessMessageC } from './Envelope'
import { ListingC } from './Listing'

export const ListingSuccessMessageC = SuccessMessageC(
  t.array(ListingC),
  'ListingSuccessMessage'
)
export interface ListingSuccessMessage
  extends t.TypeOf<typeof ListingSuccessMessageC> {}
