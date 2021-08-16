import * as t from 'io-ts';
export declare const ListingSuccessMessageC: t.TypeC<{
    status: t.LiteralC<"success">;
    data: t.Type<({
        saleType: string;
        propertyType: string;
        municipality: string;
        neighborhood: string;
        region: string;
        postalCode: string;
        price: number;
        beds: number;
        daysOnMarket: number;
        status: string;
        url: string;
        source: string;
        favorite: boolean;
        interested: boolean;
        latitude: number;
        longitude: number;
    } & {
        address?: string | undefined;
        soldDate?: number | undefined;
        baths?: number | undefined;
        squareFeet?: number | undefined;
        lotSize?: number | undefined;
        pricePerSquareFoot?: number | undefined;
        yearBuilt?: number | undefined;
        hoaMonthlyFee?: number | undefined;
        nextOpenHouseStartTime?: string | undefined;
        nextOpenHouseEndTime?: string | undefined;
        mls?: string | undefined;
    })[], ({
        saleType: string;
        propertyType: string;
        municipality: string;
        neighborhood: string;
        region: string;
        postalCode: string;
        price: number;
        beds: number;
        daysOnMarket: number;
        status: string;
        url: string;
        source: string;
        favorite: boolean;
        interested: boolean;
        latitude: number;
        longitude: number;
    } & {
        address?: string | undefined;
        soldDate?: number | undefined;
        baths?: number | undefined;
        squareFeet?: number | undefined;
        lotSize?: number | undefined;
        pricePerSquareFoot?: number | undefined;
        yearBuilt?: number | undefined;
        hoaMonthlyFee?: number | undefined;
        nextOpenHouseStartTime?: string | undefined;
        nextOpenHouseEndTime?: string | undefined;
        mls?: string | undefined;
    })[], unknown>;
}>;
export interface ListingSuccessMessage extends t.TypeOf<typeof ListingSuccessMessageC> {
}
