import { asc, desc, newToOld, oldToNew } from '../constants';

const sortByReleaseDate = (a, b) => a.releaseDate - b.releaseDate;

const sortByTitle = (a, b) => a.title.localeCompare(b.title);

export const sortMovies = (type, movies) => {
  switch (type) {
    case oldToNew:
      return [...movies.sort(sortByReleaseDate)];
    case newToOld:
      return [...movies.sort(sortByReleaseDate)].reverse();
    case asc:
      return [...movies.sort(sortByTitle)];
    case desc:
      return [...movies.sort(sortByTitle).reverse()];
    default:
      return [...movies.sort(sortByReleaseDate)].reverse();
  }
};