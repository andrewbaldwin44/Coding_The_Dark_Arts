export const createActionTypes = (root: string, types: string[]): { [key: string]: string } =>
  types.reduce((actionTypes, type) => ({ ...actionTypes, [type]: `${root}_${type}` }), {});
