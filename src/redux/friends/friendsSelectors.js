
export const selectFriends = state =>
  state.friendsList.items;
export const selectFriendsLoading = state => state.friendsList.isLoading;
export const selectFriendsError = state => state.friendsList.error;
