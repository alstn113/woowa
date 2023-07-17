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
 */
type ExtractParamsFromPath<
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

const a: ExtractParamsFromPath<'/users'> = {};

const b: ExtractParamsFromPath<'/users/:id'> = {
  id: '1',
};

const c: ExtractParamsFromPath<'/users/:id/posts/:postId'> = {
  id: '1',
  postId: '1',
};

console.log(a);
