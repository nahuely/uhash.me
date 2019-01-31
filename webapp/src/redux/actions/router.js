export const ROUTE_REDIRECT = "ROUTE_REDIRECT";

export const changeRoute = ({ path, feature }) => ({
  type: `${feature} ${ROUTE_REDIRECT}`,
  meta: { path }
});
