import React from "react";
import { connect } from "react-redux";
import { Listing, fetchMlsListings } from "../actions";
import { StoreState } from "../reducers";

// import { todosReducer } from "../reducers/todos";

interface AppProps {
  listings: Listing[];
  fetchMlsListings(): any;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  state = { fetching: false };

  onButtonClick = (): void => {
    setTimeout(this.props.fetchMlsListings());
    this.setState({ fetching: true });
  };

  renderList(): JSX.Element[] {
    return this.props.listings.map((listing: Listing, index) => {
      return (
        <div key={index}>
          {" "}
          {this.state.fetching ? console.log("loading...") : null}
          {listing}
        </div>
      );
    });
  }

  render() {
    console.log(this.props.listings);
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ listings }: StoreState): { listings: Listing[] } => {
  return { listings };
};

export const App = connect(mapStateToProps, { fetchMlsListings })(_App);
