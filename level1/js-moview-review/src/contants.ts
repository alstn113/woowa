export const TMDB = {
  API_KEY: '0824ed77efa71b5efa0d52a34af6475b',
  API_BASE_URL: 'https://api.themoviedb.org/3',
  POSTER_BASE_URL: `https://image.tmdb.org/t/p/w220_and_h330_face`,
};

export const MOVIE_RATING_LOCAL_STORAGE_KEY = 'MOVIE_RATING';

export const MOVIE_RATING_MESSAGE: { [key: number]: string } = {
  2: '별로에요',
  4: '그저 그래요',
  6: '보통이에요',
  8: '좋아요',
  10: '최고에요',
};

export const GENRE_MAP: { [key: number]: string } = {
  28: '액션',
  12: '모험',
  16: '애니메이션',
  35: '코미디',
  80: '범죄',
  99: '다큐멘터리',
  18: '드라마',
  10751: '가족',
  14: '판타지',
  36: '역사',
  27: '공포',
  10402: '음악',
  9648: '미스터리',
  10749: '로맨스',
  878: 'SF',
  10770: 'TV 영화',
  53: '스릴러',
  10752: '전쟁',
  37: '서부',
};
