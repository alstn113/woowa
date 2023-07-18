import ClientResponse from './ClientResponse';
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

  private fetchJson<
    Method extends TRestAPI['request']['method'],
    Path extends TRestAPI['request']['path'],
  >(method: Method, path: Path, init?: Omit<RequestInit, 'method'>) {
    return new ClientResponse<ExtractResponseFromRestAPI<TRestAPI, Method>>(
      async () => {
        const response = await fetch(path, {
          ...init,
          method,
        });
        return {
          statusCode: response.status,
          data: await response.json(),
          headers: Object.fromEntries(response.headers.entries()),
        };
      },
    );
  }

  get<Path extends ExtractPathFromRestAPI<TRestAPI, 'get'>>(
    path: Path,
    params: ExtractParamsFromPath<Path>,
  ) {
    return this.fetchJson('get', path);
  }

  post<Path extends ExtractPathFromRestAPI<TRestAPI, 'post'>>(
    path: Path,
    params: ExtractParamsFromPath<Path>,
    body: ExtractBodyFromRestAPI<TRestAPI, 'post'>,
  ) {
    return this.fetchJson('post', path, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }

  put<Path extends ExtractPathFromRestAPI<TRestAPI, 'put'>>(
    path: Path,
    params: ExtractParamsFromPath<Path>,
    body: ExtractBodyFromRestAPI<TRestAPI, 'put'>,
  ) {
    return this.fetchJson('put', path, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }

  patch<Path extends ExtractPathFromRestAPI<TRestAPI, 'patch'>>(
    path: Path,
    params: ExtractParamsFromPath<Path>,
    body: ExtractBodyFromRestAPI<TRestAPI, 'patch'>,
  ) {
    return this.fetchJson('patch', path, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }

  delete<Path extends ExtractPathFromRestAPI<TRestAPI, 'delete'>>(
    path: Path,
    params: ExtractParamsFromPath<Path>,
  ) {
    return this.fetchJson('delete', path);
  }
}

export default Client;
