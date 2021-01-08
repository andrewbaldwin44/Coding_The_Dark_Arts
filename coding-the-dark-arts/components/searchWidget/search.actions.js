export const NEW_SEARCH = 'NEW_SEARCH';
export const RESET_SEARCH = 'RESET_SEARCH';

export const newSearch = payload => ({
  type: NEW_SEARCH,
  payload,
});

export const resetSearch = payload => ({
  type: RESET_SEARCH,
  payload,
});
