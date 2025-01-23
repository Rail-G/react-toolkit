/// <reference types="vite/client" />
/* eslint @typescript-eslint/no-explicit-any: 0 */

interface InitialState  {
    movieList: MovieListValue[],
    movie: MovieView | undefined,
    favouriteList: MovieListValue[],
    loading: boolean,
    error: string
}

interface MovieListValue {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

interface MovieesSearch {
    Search: MovieListValue[],
    totalResults: string,
    Response: string,
}

interface RejectValue {
    message: string;
}

interface Ratings {
    Source: string,
    Value: string
}

interface MovieView {
    Title: string,
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: Ratings[],
    Metascore: string,
    imdbRating: string,
    imdbVotes: string,
    imdbID: string,
    Type: string,
    DVD: string,
    BoxOffice: string,
    Production: string,
    Website: string,
    Response: string
  }