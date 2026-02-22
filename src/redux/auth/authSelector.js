import { createSelector } from '@reduxjs/toolkit';

export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsLoading = state => state.auth.isLoading;
export const selectError = state => state.auth.error;
export const selectToken = state => state.auth.token;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectFavoriteIds = state => state.auth.favorites;

export const selectNotices = state => state.noticesList.items;

export const selectFavoriteItems = createSelector(
  [selectFavoriteIds, selectNotices],
  (favoriteIds, notices) =>
    notices.filter(notice =>
      favoriteIds.includes(notice._id)
    )
);


export const selectViewedItems = state => state.auth.viewed;

export const selectPets = state => state.auth.pets;