import { Listing, Action, ActionTypes } from "../actions";

/// Default value empty array
export const listingsReducer = (state: Listing[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchMlsListings:
      return action.payload;
    default:
      return state;
  }
};
