export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE';

export const setErrorMessage = message => ({
  type: SET_ERROR_MESSAGE,
  message,
});

export const clearErrorMessage = () => ({
  type: CLEAR_ERROR_MESSAGE,
});
