import { TMDB } from '../contants';
import { MovieListResponse } from '../types';

class MovieClient {
  private readonly baseURL;
  private readonly apiKey;

  constructor() {
    this.baseURL = `${TMDB.BASE_URL}`;
    this.apiKey = `${TMDB.API_KEY}`;
  }

  async getPopularMovies(): Promise<MovieListResponse> {
    const response = await fetch(
      `${this.baseURL}/movie/popular?api_key=${this.apiKey}`,
    );
    if (!response.ok) throw new Error('API 호출에 실패했습니다.');
    return await response.json();
  }

  // async getPopularMovies(
  //   url: string,
  //   setLoading: Function,
  //   finishLoading: Function,
  // ) {
  //   try {
  //     setLoading();
  //     const response = await this.fetchData(url);
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     finishLoading();
  //   }
  // }

  // async fetchData(url: string) {
  //   try {
  //     const response = await fetch(`${this.baseURL}/${url}`);
  //     return response;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}

export default MovieClient;
