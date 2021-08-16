import * as t from 'io-ts'

export const ListingC = t.intersection(
  [
    t.type({
      saleType: t.string,
      propertyType: t.string,
      municipality: t.string,
      neighborhood: t.string,
      region: t.string,
      postalCode: t.string,
      price: t.number,
      beds: t.number,
      daysOnMarket: t.number,
      status: t.string,
      url: t.string,
      source: t.string,
      favorite: t.boolean,
      interested: t.boolean,
      latitude: t.number,
      longitude: t.number
    }),
    t.partial({
      address: t.string,
      /** Date string */
      soldDate: t.number,
      baths: t.number,
      squareFeet: t.number,
      lotSize: t.number,
      pricePerSquareFoot: t.number,
      yearBuilt: t.number,
      hoaMonthlyFee: t.number,
      /** Datetime string */
      nextOpenHouseStartTime: t.string,
      /** Datetime string */
      nextOpenHouseEndTime: t.string,
      mls: t.string
    })
  ],
  'Listing'
)
export interface Listing extends t.TypeOf<typeof ListingC> {}
