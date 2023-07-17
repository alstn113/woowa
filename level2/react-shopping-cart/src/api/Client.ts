import { HttpClient, HttpMethod } from './Http';

interface ClientDefaultConfig {
  baseURL?: string;
}

class Client<THttpClient extends HttpClient> {
  private readonly defaultConfig: ClientDefaultConfig;

  constructor(defaultConfig: ClientDefaultConfig = {}) {
    this.defaultConfig = defaultConfig;
  }

  private async fetchJson<
    Method extends THttpClient['request']['method'],
    URL extends THttpClient['request']['url'],
  >(method: Method, url: URL, init?: Omit<RequestInit, 'method'>) {
    const response = await fetch(url, { method, ...init });
    if (!response.ok) {
      throw new Error('API 요청 실패');
    }
    return response.json();
  }

  get(url: string) {
    return this.fetchJson('get', url);
  }

  post(url: string, data?: any) {
    return this.fetchJson('post', url, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  put(url: string, data?: any) {
    return this.fetchJson('put', url, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  patch(url: string, data?: any) {
    return this.fetchJson('patch', url, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  delete(url: string) {
    return this.fetchJson('delete', url);
  }
}

export default Client;
