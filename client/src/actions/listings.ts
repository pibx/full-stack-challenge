import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Listing {
  soldDate: number;
  address: string;
  city: boolean;
  state: string;
  zipcode: string;
  price: number;
  beds: number;
  sqFeet: number;
  lotSize: number;
  yearBuilt: number;
  daysOnMarket: number;
  squareFeet: number;
  hoaFee: number;
  status: string;
  nextOpenHouseStartTime: Date;
  nextOpenHouseEndTime: Date;
  url: string;
  source: string;
  favorite: boolean;
  intrested: boolean;
  latitude: number;
  longitude: number;
}

export interface listings {
  data: string;
}

export interface FetchListingsAction {
  type: ActionTypes.fetchMlsListings;
  payload: Listing[];
}

const url = "https://localhost:3000/Listings";

export const fetchMlsListings = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);
    console.log(response);
    dispatch<FetchListingsAction>({
      type: ActionTypes.fetchMlsListings,
      payload: response.data,
    });
  };
};
