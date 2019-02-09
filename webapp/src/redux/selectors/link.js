export const linksSelector = state => state.links;

export const linkPagesSelector = linksSelector(state).listOfLinks;
