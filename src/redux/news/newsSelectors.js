//export const selectNews = state => state.newsList.items;
const EMPTY_ARRAY = [];
export const selectNews = state =>
  state.newsList.itemsByPage[state.newsList.page] ?? EMPTY_ARRAY;
export const selectNewsLoading = state => state.newsList.isLoading;
export const selectNewsError = state => state.newsList.error;
export const selectTotalPages = state => state.newsList.totalPages;
export const selectPage = state => state.newsList.page;
