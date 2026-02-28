export const selectNotices = state => state.noticesList.items;
export const selectNoticesLoading = state => state.noticesList.isNoticesLoading;
export const selectNoticesError = state => state.noticesList.error;
export const selectTotalPages = state => state.noticesList.totalPages;
export const selectPage = state => state.noticesList.page;
export const selectKeyword = state => state.noticesList.currentKeyword;
export const selectCategories = state => state.noticesList.categories;
export const selectSelectedCategory = state =>
  state.noticesList.selectedCategory;

export const selectGender = state => state.noticesList.gender;
export const selectSelectedGender = state =>
  state.noticesList.selectedGender;


