export const uiSelector = state => state.ui;

export const loadingSelector = state => uiSelector(state).loading;
