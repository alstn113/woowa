export type HttpHeaders = Record<string, string>;
export type HttpMethod = 'get' | 'post' | 'patch' | 'put' | 'delete';

export interface HttpRequest<
  Method extends HttpMethod,
  Path extends `/${string}` = '/',
  QueryParams extends Record<string, unknown> = Record<string, never>,
  Body extends object = object,
> {
  path: Path;
  method: Method;
  params: ExtractParamsFromPath<Path>;
  queryParams: QueryParams;
  body: Body;
  headers: HttpHeaders;
}

export interface HttpResponse<
  StatusCode extends number = number,
  Data = unknown,
  Headers extends HttpHeaders = HttpHeaders,
> {
  statusCode: StatusCode;
  data: Data;
  headers: Headers;
}

export interface RestAPI {
  request: HttpRequest<HttpMethod, `/${string}`>;
  response: HttpResponse;
}

/**
 * @description path로부터 params를 추출합니다.
 *
 * @example
 * type Params = ExtractParamsFromPath<'/users/:id'>;
 * // type Params = { id: string };
 *
 * type Params = ExtractParamsFromPath<'/users/:id/posts/:postId'>;
 * // type Params = { id: string; postId: string };
 *
 * type Params = ExtractParamsFromPath<'/users'>;
 * // type Params = null;
 */
export type ExtractParamsFromPath<
  THttpPath extends string,
  TParams extends Record<string, string> = NonNullable<unknown>,
> = THttpPath extends `/${infer Remain}`
  ? ExtractParamsFromPath<Remain, TParams>
  : THttpPath extends `:${infer Param}/${infer Remain}`
  ? ExtractParamsFromPath<Remain, TParams & { [K in Param]: string }>
  : THttpPath extends `${string}/${infer Remain}`
  ? ExtractParamsFromPath<Remain, TParams>
  : THttpPath extends `:${infer Param}`
  ? TParams & { [K in Param]: string }
  : TParams extends NonNullable<unknown>
  ? null
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
