"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingC = void 0;
var t = __importStar(require("io-ts"));
exports.ListingC = t.intersection([
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
], 'Listing');
