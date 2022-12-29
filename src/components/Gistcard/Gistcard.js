import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.css";
import Badge from "../Badge";

const GistCard = ({ gistData }) => {
  const noOfFiles = Object.keys(gistData.files).length;
  return (
    <div className="card" style={{ marginBottom: "10px" }}>
      <div className="card-body">
        <h5 className="card-title">GIST ID: {gistData?.id || "N/A"}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {noOfFiles} {noOfFiles > 1 ? "Files" : "File"}
        </h6>
        <p className="card-text">{gistData.description || "No Description"}</p>
        <div>
          <Badge files={gistData.files} />
        </div>
        <Link
          to={{
            pathname: `/${gistData.id}`,
            state: {
              description: gistData.description,
              files: gistData.files,
            },
          }}
          className="card-link"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

GistCard.propTypes = {
  gistData: PropTypes.object,
};

export default memo(GistCard);
