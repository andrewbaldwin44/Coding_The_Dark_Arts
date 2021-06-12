import { asynchrounousRequest, REQUEST_METHODS } from './utils';

export const COMMENT_CONTROLLER = {
  index: param => asynchrounousRequest(`comments/${param}`),
  create: (param, body) =>
    asynchrounousRequest(`comments/${param}/add`, { body, type: REQUEST_METHODS.POST }),
  edit: (param, body) =>
    asynchrounousRequest(`comments/${param}/edit`, { body, type: REQUEST_METHODS.PUT }),
  destroy: (param, body) =>
    asynchrounousRequest(`comments/${param}/delete`, { body, type: REQUEST_METHODS.DELETE }),
};
