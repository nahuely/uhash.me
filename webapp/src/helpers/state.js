export const loadState = () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      return {
        auth: {
          token,
          error: null,
          loading: false
        }
      };
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};
