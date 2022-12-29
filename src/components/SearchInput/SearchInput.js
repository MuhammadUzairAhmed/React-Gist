import React, { useRef } from "react";
import "./searchStyles.css";
import PropTypes from "prop-types";

const SearchInput = ({ fetchGistReq }) => {
  const inputRef = useRef("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const username = inputRef.current.value.trim();
    if (username.length) {
      fetchGistReq(username);
    }
  };
  return (
    <div className="fixed-top">
      <div className="container-fluid head-filter">
        <h3>
          <b>React Gist Filter</b>
        </h3>
      </div>
      <div className="header container-fluid">
        <div className="container-fluid">
          <form onSubmit={handleFormSubmit} className="searchform">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-filter"></i>
                </span>
              </div>

              <input
                type="text"
                className="form-control"
                placeholder="Search by User name"
                aria-label="Username"
                ref={inputRef}
                aria-describedby="basic-addon1"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

SearchInput.propTypes = {
  fetchGistReq: PropTypes.func,
};

export default SearchInput;
