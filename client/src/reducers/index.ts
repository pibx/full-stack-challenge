import { combineReducers } from "redux";

import { Listing } from "../actions";
import { listingsReducer } from "./listings";

export interface StoreState {
  listings: Listing[];
}

export const reducers = combineReducers<StoreState>({
  listings: listingsReducer,
});
