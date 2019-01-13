import axios from "axios";

export const createShortener = url => {
  return axios.post("urls", {
    originalURL: url
  });
};
