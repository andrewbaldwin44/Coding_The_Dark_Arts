const BASE_URL = 'http://localhost:3000/api/';
export enum REQUEST_METHODS {
  GET = 'GET',
  POST = 'POST',
}

interface IRequestOptions {
  type?: typeof REQUEST_METHODS;
  body?: string;
}

const DEFAULT_OPTIONS: IRequestOptions = {
  type: REQUEST_METHODS.GET,
  body: null,
};

const getRequestHeaders = ({ type, body }: IRequestOptions) => ({
  headers: { 'Content-Type': 'application/json' },
  method: type,
  body,
});

export async function asynchrounousRequest(
  request,
  { type, body }: IRequestOptions = DEFAULT_OPTIONS,
) {
  const response = await fetch(`${BASE_URL}${request}`, getRequestHeaders({ type, body }));
  return await response.json();
}
