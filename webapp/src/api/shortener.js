import axios from "axios";
import endpoints from "./endpoints";

export const createShortener = url => {
  return axios.post(endpoints.urls, {
    originalURL: url
  });
};
