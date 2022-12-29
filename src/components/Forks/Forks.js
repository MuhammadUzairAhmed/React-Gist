import React, { memo } from "react";
import PropTypes from "prop-types";
import { GITHUB_GIST_URL } from "../../config/urlConstants";
import "./style.css";

const Forks = ({ forks }) => {
  return (
    <ul className="indent-left">
      {forks.map((fork, index) => {
        const { avatar_url, login } = fork.user;
        return (
          <li key={index} className="text-white">
            <a
              href={`${GITHUB_GIST_URL}/${fork.id}`}
              rel="noreferrer"
              target="_blank"
            >
              <img
                key="image"
                src={avatar_url}
                alt={login}
                className="avatar"
              />
              <span key="username" className="text-white">
                {login}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

Forks.propTypes = {
  forks: PropTypes.array.isRequired,
};

export default memo(Forks);
