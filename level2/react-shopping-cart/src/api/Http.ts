export type HttpHeaders = Record<string, string>;
export type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

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
