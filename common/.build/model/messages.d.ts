import * as t from 'io-ts';
export declare const ListingSuccessMessageC: t.TypeC<{
    status: t.LiteralC<"success">;
    data: t.ArrayC<t.IntersectionC<[t.TypeC<{
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
        soldDate: t.NumberC;
        baths: t.NumberC;
        squareFeet: t.NumberC;
        lotSize: t.NumberC;
        pricePerSquareFoot: t.NumberC;
        yearBuilt: t.NumberC;
        hoaMonthlyFee: t.NumberC;
        nextOpenHouseStartTime: t.StringC;
        nextOpenHouseEndTime: t.StringC;
        mls: t.StringC;
    }>]>>;
}>;
export interface ListingSuccessMessage extends t.TypeOf<typeof ListingSuccessMessageC> {
}
export declare const ErrorMessageC: t.TypeC<{
    status: t.LiteralC<"error">;
    error: t.StringC;
}>;
export interface ErrorMessage extends t.TypeOf<typeof ErrorMessageC> {
}
