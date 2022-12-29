import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Forks from "../../components/Forks";
import "./styles.css";

const GistDetailsInner = ({ fetchSingleGist, singleGist, location }) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchSingleGist(id);
    }
  }, [id]);

  const renderForks = () => {
    const { isLoading, error, forks } = singleGist;
    if (isLoading) {
      return <p className="text-white">Loading ...</p>;
    }
    if (forks.length && !error) {
      return <Forks forks={forks.slice(0, 3)} />;
    } else {
      return <span className="text-danger indent-left">{error}</span>;
    }
  };

  const { description, files } = location.state;

  return (
    <>
      <div className="container">
        <div className="details-box">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">GIST ID: {id}</div>
            <div className="card-body">
              <h5 className="card-title">Description</h5>
              <p className="card-text">{description || "No Description"}</p>
            </div>
          </div>
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">Files</div>
            <div className="card-body">
              <ol className="indent-left">
                {Object.values(files).map((file, index) => {
                  return (
                    <li key={index} className="text-white">
                      <a
                        href={file.raw_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white"
                      >
                        {file.filename}
                      </a>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Forks</div>
            <div className="card-body">{renderForks()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

GistDetailsInner.propTypes = {
  fetchSingleGist: PropTypes.func,
  singleGist: PropTypes.object,
  location: PropTypes.object,
};
export default GistDetailsInner;
