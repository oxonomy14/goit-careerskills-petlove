export const selectNotices = state => state.noticesList.items;
export const selectNoticesLoading = state => state.noticesList.isLoading;
export const selectNoticesError = state => state.noticesList.error;
export const selectTotalPages = state => state.noticesList.totalPages;
export const selectPage = state => state.noticesList.page;
export const selectKeyword = state => state.noticesList.currentKeyword;


