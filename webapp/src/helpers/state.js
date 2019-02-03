export const loadState = () => {
  const token = localStorage.getItem("token");
  let lang = localStorage.getItem("lang");

  if (!lang) {
    lang = navigator.language.split("-")[0];
    localStorage.setItem("lang", lang);
  }

  const initialState = {};

  if (token) initialState.auth = token;
  initialState.ui = { loading: false, lang };

  return initialState;
};
