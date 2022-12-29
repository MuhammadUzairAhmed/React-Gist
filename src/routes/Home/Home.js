import React, { Component } from "react";

import SearchInput from "../../components/SearchInput";
import SearchResults from "../../components/SearchResults";

class SearchAndResults extends Component {
  render() {
    return (
      <>
        {/* input field form */}
        <SearchInput />
        {/* List of search result */}
        <div className="container">
          <SearchResults />
        </div>
      </>
    );
  }
}

export default SearchAndResults;
