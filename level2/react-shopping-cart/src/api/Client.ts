type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface ClientConfig {
  baseURL?: string;
}

export interface ClientResponse<
  StatusCode extends number = number,
  Data extends
    | Record<string, unknown>
    | string
    | number
    | undefined
    | null
    | unknown = unknown,
  Headers extends Record<string, string> = Record<string, string>,
> {
  statusCode: StatusCode;
  data: Data;
  headers: Headers;
}

class Client {
  private readonly baseURL: string;

  constructor(clientConfig: ClientConfig = {}) {
    this.baseURL = clientConfig.baseURL || '';
  }

  private buildURL(path: string) {
    return `${this.baseURL}/${path}`.replace(/([^:]\/)\/+/g, '$1');
  }

  private async parseJSON(response: Response) {
    try {
      return await response.json();
    } catch (error) {
      return null;
    }
  }

  private async fetch<T extends ClientResponse = ClientResponse>(
    method: HttpMethod,
    path: string,
    init?: RequestInit,
  ): Promise<T> {
    const response = await fetch(this.buildURL(path), {
      method,
      ...init,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        ...init?.headers,
      },
    });

    return {
      statusCode: response.status,
      data: await this.parseJSON(response),
      headers: Object.fromEntries(response.headers.entries()),
    } as T;
  }

  get<T extends ClientResponse>(path: string, init?: RequestInit) {
    return this.fetch<T>('GET', path, init);
  }

  post<T extends ClientResponse, Body extends object = object>(
    path: string,
    body?: Body,
    init?: RequestInit,
  ) {
    return this.fetch<T>('POST', path, {
      ...init,
      body: JSON.stringify(body),
    });
  }

  put<T extends ClientResponse, Body extends object = object>(
    path: string,
    body?: Body,
    init?: RequestInit,
  ) {
    return this.fetch<T>('PUT', path, {
      ...init,
      body: JSON.stringify(body),
    });
  }

  patch<T extends ClientResponse, Body extends object = object>(
    path: string,
    body?: Body,
    init?: RequestInit,
  ) {
    return this.fetch<T>('PATCH', path, {
      ...init,
      body: JSON.stringify(body),
    });
  }

  delete<T extends ClientResponse>(path: string, init?: RequestInit) {
    return this.fetch<T>('DELETE', path, init);
  }
}

export default Client;
