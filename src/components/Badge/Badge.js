import React, { useEffect, useState, memo } from "react";
import PropTypes from "prop-types";
import "./styles.css";

let tempFiles = [];

const Badge = ({ files }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    tempFiles = [];
    for (let file in files) {
      let language = files[file].language;
      //remove duplicate files
      if (tempFiles.indexOf(language) === -1) {
        tempFiles.push(language);
      }
    }
    setLanguages([...tempFiles]);
  }, [files]);

  return languages?.map((language, index) => (
    <span key={index} className="badge badge-success">
      {language}
    </span>
  ));
};

Badge.propTypes = {
  files: PropTypes.object.isRequired,
};

export default memo(Badge);
