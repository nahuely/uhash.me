import axios from "axios";
import endpoints from "./endpoints";

export const login = (email, password) =>
  axios.post(endpoints.login, {
    email,
    password
  });

export const checkAuth = token =>
  axios.get(endpoints.checkAuth, {
    headers: { Authorization: `Bearer ${token}` }
  });
