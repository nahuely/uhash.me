import axios from "axios";
import endpoints from "./endpoints";

export const createShortener = url =>
  axios.post(endpoints.shortener, {
    originalURL: url
  });
