import { GET_GISTS, GET_GIST_DETAIL } from "../config/urlConstants";
import { request } from "../utils/axios";

export const getGists = (username) => {
  return request({
    url: `${GET_GISTS}/${username}/gists`,
    method: "get",
  });
};

export const getGistDetail = (gistId) => {
  return request({
    url: `${GET_GIST_DETAIL}/${gistId}`,
    method: "get",
  });
};
