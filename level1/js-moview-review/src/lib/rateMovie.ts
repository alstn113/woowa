import { MOVIE_RATING_LOCAL_STORAGE_KEY } from '../contants';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const getMovieRating = (): Record<number, number> => {
  const movieRatingMap = getLocalStorage(MOVIE_RATING_LOCAL_STORAGE_KEY);
  return movieRatingMap;
};

const rateMovie = (movieId: number, rating: number) => {
  const movieRatingMap = getMovieRating();
  movieRatingMap[movieId] = rating;

  setLocalStorage(MOVIE_RATING_LOCAL_STORAGE_KEY, movieRatingMap);
};

export { getMovieRating, rateMovie };
