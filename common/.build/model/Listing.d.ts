import * as t from 'io-ts';
export declare const ListingC: t.IntersectionC<[t.TypeC<{
    saleType: t.StringC;
    propertyType: t.StringC;
    municipality: t.StringC;
    neighborhood: t.StringC;
    region: t.StringC;
    postalCode: t.StringC;
    price: t.NumberC;
    beds: t.NumberC;
    daysOnMarket: t.NumberC;
    status: t.StringC;
    url: t.StringC;
    source: t.StringC;
    favorite: t.BooleanC;
    interested: t.BooleanC;
    latitude: t.NumberC;
    longitude: t.NumberC;
}>, t.PartialC<{
    address: t.StringC;
    /** Date string */
    soldDate: t.NumberC;
    baths: t.NumberC;
    squareFeet: t.NumberC;
    lotSize: t.NumberC;
    pricePerSquareFoot: t.NumberC;
    yearBuilt: t.NumberC;
    hoaMonthlyFee: t.NumberC;
    /** Datetime string */
    nextOpenHouseStartTime: t.StringC;
    /** Datetime string */
    nextOpenHouseEndTime: t.StringC;
    mls: t.StringC;
}>]>;
export interface Listing extends t.TypeOf<typeof ListingC> {
}
