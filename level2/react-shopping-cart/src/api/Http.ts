export type HttpHeaders = Record<string, string>;
export type HttpMethod = 'get' | 'post' | 'patch' | 'put' | 'delete';

export interface HttpRequest<
  Method extends HttpMethod,
  Params extends Record<string, string> = Record<string, never>,
  QueryParams extends Record<string, unknown> = Record<string, never>,
  Body extends object = object,
> {
  url: string;
  method: Method;
  params?: Params;
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

export interface HttpClient {
  request: HttpRequest<HttpMethod>;
  response: HttpResponse;
}

/**
 * path로부터 params를 추출합니다.
 *
 * @example
 * type Params = ExtractHttpParamsFromPath<'/users/:id'>;
 * // Params = ['id']
 *
 * type Params = ExtractHttpParamsFromPath<'/users/:id/posts/:postId'>;
 * // Params = ['id', 'postId']
 *
 * type Params = ExtractHttpParamsFromPath<'/users'>;
 * // Params = []
 */
export type ExtractHttpParamsFromPath<
  THttpPath extends string,
  TParams extends unknown[] = [],
> = THttpPath extends `/${infer Remain}`
  ? ExtractHttpParamsFromPath<Remain, TParams>
  : THttpPath extends `:${infer Param}/${infer Remain}`
  ? ExtractHttpParamsFromPath<Remain, [...TParams, unknown]>
  : THttpPath extends `${string}/${infer Remain}`
  ? ExtractHttpParamsFromPath<Remain, TParams>
  : THttpPath extends `:${infer Param}`
  ? [...TParams, unknown]
  : TParams;
