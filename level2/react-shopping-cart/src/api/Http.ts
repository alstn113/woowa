export type HttpHeaders = Record<string, string>;
export type HttpMethod = 'get' | 'post' | 'patch' | 'put' | 'delete';

export interface HttpRequest<
  Method extends HttpMethod,
  Path extends `/${string}` = `/`,
  QueryParams extends Record<string, unknown> = Record<string, never>,
  Body extends object = object,
> {
  path: string;
  method: Method;
  params?: ExtractParamsFromPath<Path>;
  queryParams?: QueryParams;
  body: Body;
  headers?: HttpHeaders;
}

export interface HttpResponse<
  StatusCode extends number = number,
  Data = unknown,
> {
  statusCode: StatusCode;
  data: Data;
  headers?: HttpHeaders;
}

export interface RestAPI {
  request: HttpRequest<HttpMethod>;
  response: HttpResponse;
}

/**
 * @description path로부터 params를 추출합니다.
 *
 * @example
 * '/product/:productId'인 경우`ExtractParamsFromPath<'/product/:productId'>`는 `{ productId: string }`를 반환합니다.
 *            '/product'인 경우 `ExtractParamsFromPath<'/'>`는 `{}`를 반환합니다. TODO: 이 경우만 문제될 것!!
 */
export type ExtractParamsFromPath<
  THttpPath extends string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  TParams extends Record<string, string> = {},
> = THttpPath extends `/${infer Remain}`
  ? ExtractParamsFromPath<Remain, TParams>
  : THttpPath extends `:${infer Param}/${infer Remain}`
  ? ExtractParamsFromPath<Remain, TParams & { [K in Param]: string }>
  : THttpPath extends `${string}/${infer Remain}`
  ? ExtractParamsFromPath<Remain, TParams>
  : THttpPath extends `:${infer Param}`
  ? TParams & { [K in Param]: string }
  : TParams;

/**
 * @description RestAPI에서 path를 추출합니다.
 */
export type ExtractPathFromRestAPI<
  TRestAPI extends RestAPI,
  Method extends TRestAPI['request']['method'] = TRestAPI['request']['method'],
> = Extract<TRestAPI['request'], { method: Method }>['path'];

/**
 * @description RestAPI에서 params를 추출합니다.
 */
export type ExtractBodyFromRestAPI<
  TRestAPI extends RestAPI,
  Method extends TRestAPI['request']['method'] = TRestAPI['request']['method'],
> = Extract<TRestAPI['request'], { method: Method }>['body'];

/**
 * @description RestAPI에서 response를 추출합니다.
 */
export type ExtractResponseFromRestAPI<
  TRestAPI extends RestAPI,
  Method extends TRestAPI['request']['method'] = TRestAPI['request']['method'],
  Path extends TRestAPI['request']['path'] = TRestAPI['request']['path'],
> = Extract<TRestAPI, { request: { method: Method; path: Path } }>['response'];
