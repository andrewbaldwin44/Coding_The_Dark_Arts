export const createActionTypes = (root: string, types: string[]): { [key: string]: string } =>
  types.reduce((actionTypes, type) => ({ ...actionTypes, [type]: `${root}_${type}` }), {});

export const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};
