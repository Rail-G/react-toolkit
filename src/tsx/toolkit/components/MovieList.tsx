import { Loading } from "./Loading";
import { Movie } from "./Movie";

export function MovieList({movies, favMovies, loading, error, title}: {movies: MovieListValue[], favMovies: MovieListValue[],  loading: boolean, error: string, title: string}) {
    return (
        <div className="item-list">
            <h3>{title}</h3>
            {loading && <Loading />}
            {error && <h3>Oops... Something is wrong</h3>}
            <ul>
                {movies.length 
                ? movies.map((movie: MovieListValue, index) => (
                    <li key={movie.imdbID}>
                        <Movie movieData={movie} favMovies={favMovies} number={++index}/>
                    </li>
                ))
                : <p className={loading ? `empty-movie-list eml-not-active` : 'empty-movie-list'}>Not movies</p>
                }
            </ul>
        </div>
    )
}