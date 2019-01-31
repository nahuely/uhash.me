export const loadState = () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      return {
        auth: token
      };
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};
