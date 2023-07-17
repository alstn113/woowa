import {
  RestAPI,
  HttpMethod,
  ExtractPathFromRestAPI,
  ExtractParamsFromPath,
  ExtractBodyFromRestAPI,
} from './Http';

interface ClientDefaultConfig {
  baseURL?: string;
}

class Client<TRestAPI extends RestAPI> {
  private readonly defaultConfig: ClientDefaultConfig;

  constructor(defaultConfig: ClientDefaultConfig = {}) {
    this.defaultConfig = defaultConfig;
  }

  private async fetchJson<
    Method extends TRestAPI['request']['method'],
    URL extends TRestAPI['request']['path'],
  >(method: Method, url: URL, init?: Omit<RequestInit, 'method'>) {
    const response = await fetch(url, { method, ...init });
    if (!response.ok) {
      throw new Error('API 요청 실패');
    }
    return response.json();
  }

  get<Path extends ExtractPathFromRestAPI<TRestAPI, 'get'>>(url: {
    path: Path;
    params: ExtractParamsFromPath<Path>;
  }) {
    return this.fetchJson('get', url.path);
  }

  post<Path extends ExtractPathFromRestAPI<TRestAPI, 'post'>>(
    url: {
      path: Path;
      params: ExtractParamsFromPath<Path>;
    },
    data: ExtractBodyFromRestAPI<TRestAPI, 'post'>,
  ) {
    return this.fetchJson('post', url.path, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  put<Path extends ExtractPathFromRestAPI<TRestAPI, 'put'>>(
    url: {
      path: Path;
      params?: ExtractParamsFromPath<Path>;
    },
    data: ExtractBodyFromRestAPI<TRestAPI, 'put'>,
  ) {
    return this.fetchJson('put', url.path, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  patch<Path extends ExtractPathFromRestAPI<TRestAPI, 'patch'>>(
    url: {
      path: Path;
      params?: ExtractParamsFromPath<Path>;
    },
    data: ExtractBodyFromRestAPI<TRestAPI, 'patch'>,
  ) {
    return this.fetchJson('patch', url.path, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  delete<Path extends ExtractPathFromRestAPI<TRestAPI, 'delete'>>(url: {
    path: Path;
    params: ExtractParamsFromPath<Path>;
  }) {
    return this.fetchJson('delete', url.path);
  }
}

export default Client;
