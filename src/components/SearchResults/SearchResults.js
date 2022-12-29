import React from "react";
import GistCard from "../Gistcard";
import PropTypes from "prop-types";

import "./styles.css";

const SearchResults = ({ allGists }) => {
  const { gists, username, isLoading, error } = allGists;
  if (isLoading) {
    return (
      <div className="results-box loader">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div className="results-box">
      {gists.length && !error ? (
        <div>
          <div className="status-box">
            <p className="lead">
              <strong>{gists.length}</strong> results found for{" "}
              <strong>{username}</strong>
            </p>
          </div>
          <ul>
            {gists.map((gist) => {
              return <GistCard key={gist.id} gistData={gist} />;
            })}
          </ul>
        </div>
      ) : (
        <div className="error-box">
          <p className="text-danger">{error}</p>
        </div>
      )}
    </div>
  );
};

SearchResults.propTypes = {
  allGists: PropTypes.object,
};

export default SearchResults;
