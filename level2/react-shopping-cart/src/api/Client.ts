type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface ClientConfig {
  baseURL?: string;
}

class Client {
  private readonly baseURL: string;

  constructor(clientConfig: ClientConfig = {}) {
    this.baseURL = clientConfig.baseURL || '';
  }

  private buildURL(path: string) {
    return `${this.baseURL}/${path}`.replace(/([^:]\/)\/+/g, '$1');
  }

  private async fetch<T>(
    method: HttpMethod,
    path: string,
    init?: Omit<RequestInit, 'method'>,
  ) {
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
      data: (await response.json()) as T,
      headers: response.headers,
    };
  }

  get<T>(path: string, init?: Omit<RequestInit, 'method'>) {
    return this.fetch<T>('GET', path, init);
  }
}

export default Client;
