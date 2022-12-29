import axios from "axios";

/**
 * @description Call an asynchronous XHR request
 * @param {String} url* required
 * @param {String} method* required
 * @param {Object} data optional
 * @param {Signal} cancelToken optional
 * @param {Object} customHeader optional
 * @param {String} headerVariant* required, by default 'authorization'
 * @return {Object} XHR response
 */
export const request = async ({
  url,
  method,
  data,
  params,
  cancelToken,
  customHeaders,
  headerVariant = "authorization",
  authorizationTokenProvided,
  ...rest
}) => {
  if (!url) {
    throw new Error("request func arg @param url is missing");
  }
  if (!method) {
    throw new Error(`
      request func arg @param method is missing. Valid options "GET"|"POST"|"PUT" etc
    `);
  }

  // Overrides headers object based on variant if "customHeaders" object provided
  const headers = { ...customHeaders };
  try {
    const result = await axios(url, {
      method,
      headers,
      ...(data && { data }),
      ...(params && { params }),
      ...(cancelToken && { cancelToken }),
      ...rest,
    });
    return result.data;
  } catch (error) {
    throw error;
  }
};
