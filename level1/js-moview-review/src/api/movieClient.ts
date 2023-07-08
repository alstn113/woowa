import { ERROR_MESSAGES, TMDB } from '../contants';
import { MovieListResponse } from '../types';
import qsStringify from '../utils/querystring';
import fetchData from './fetchData';
import { HttpErrorStatus } from '../types';

class MovieClient {
  private readonly baseURL;
  private readonly apiKey;

  constructor() {
    this.baseURL = `${TMDB.API_BASE_URL}`;
    this.apiKey = `${TMDB.API_KEY}`;
  }

  async getPopularMovieList(page: number): Promise<MovieListResponse> {
    const querystring = qsStringify(
      {
        api_key: this.apiKey,
        language: 'ko-KR',
        page,
      },
      true,
    );

    const { data, ok, status } = await fetchData<MovieListResponse>(
      `${this.baseURL}/movie/popular${querystring}`,
    );

    if (!ok) {
      if (!(status in ERROR_MESSAGES)) throw new Error(ERROR_MESSAGES[500]);
      throw new Error(ERROR_MESSAGES[status as HttpErrorStatus]);
    }

    return data;
  }

  async getSearchMovieList(
    query: string,
    page: number,
  ): Promise<MovieListResponse> {
    const querystring = qsStringify(
      {
        api_key: this.apiKey,
        language: 'ko-KR',
        query,
        page,
      },
      true,
    );

    const { data, ok, status } = await fetchData<MovieListResponse>(
      `${this.baseURL}/search/movie${querystring}`,
    );

    if (!ok) {
      if (!(status in ERROR_MESSAGES)) throw new Error(ERROR_MESSAGES[500]);
      throw new Error(ERROR_MESSAGES[status as HttpErrorStatus]);
    }

    return data;
  }
}

const movieClient = new MovieClient();
export default movieClient;
