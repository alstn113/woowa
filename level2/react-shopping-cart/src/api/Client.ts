import { HttpMethod } from './Http';

interface ClientDefaultConfig {
  baseURL?: string;
}

class Client {
  private readonly defaultConfig: ClientDefaultConfig;

  constructor(defaultConfig: ClientDefaultConfig = {}) {
    this.defaultConfig = defaultConfig;
  }

  private async fetchJson(
    method: HttpMethod,
    url: string,
    init?: Omit<RequestInit, 'method'>,
  ) {
    const response = await fetch(url, { method, ...init });
    if (!response.ok) {
      throw new Error('API 요청 실패');
    }
    return response.json();
  }

  get(url: string) {
    return this.fetchJson('GET', url);
  }

  post(url: string, data?: any) {
    return this.fetchJson('POST', url, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  put(url: string, data?: any) {
    return this.fetchJson('PUT', url, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  patch(url: string, data?: any) {
    return this.fetchJson('PATCH', url, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  delete() {
    return;
  }
}

export default Client;
