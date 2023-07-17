import {
  RestAPI,
  HttpMethod,
  ExtractPathFromRestAPI,
  ExtractParamsFromPath,
  ExtractBodyFromRestAPI,
  ExtractResponseFromRestAPI,
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
    Path extends TRestAPI['request']['path'],
  >(method: Method, path: Path, init?: Omit<RequestInit, 'method'>) {
    const response = await fetch(path, { method, ...init });
    if (!response.ok) {
      throw new Error('API 요청 실패');
    }

    return {
      statusCode: response.status,
      data: response.json() as Promise<
        ExtractResponseFromRestAPI<TRestAPI, Method, Path>
      >,
      headers: Object.fromEntries(response.headers.entries()),
    };
  }

  get<Path extends ExtractPathFromRestAPI<TRestAPI, 'get'>>(
    request: Path extends `${infer PathPrefix}/:${string}`
      ? {
          path: Path;
          params: ExtractParamsFromPath<Path>;
        }
      : {
          path: Path;
          params?: ExtractParamsFromPath<Path>;
        },
  ): Promise<ExtractResponseFromRestAPI<TRestAPI, 'get', Path>> {
    const a = request.params;
    return this.fetchJson('get', request.path);
  }

  post<Path extends ExtractPathFromRestAPI<TRestAPI, 'post'>>(
    request: Path extends `${infer PathPrefix}/:${string}`
      ? {
          path: Path;
          params: ExtractParamsFromPath<Path>;
          body: ExtractBodyFromRestAPI<TRestAPI, 'post'>;
        }
      : {
          path: Path;
          params?: ExtractParamsFromPath<Path>;
          body: ExtractBodyFromRestAPI<TRestAPI, 'post'>;
        },
  ) {
    return this.fetchJson('post', request.path, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request.body),
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
