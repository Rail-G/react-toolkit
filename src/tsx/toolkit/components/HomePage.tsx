import { useSelector } from "react-redux";
import { InputBar } from "./InputBar";
import { MovieList } from "./MovieList";

export function HomePage() {
    const {movieList, favouriteList, loading, error} = useSelector((state: {movie: InitialState}) => state.movie)
    return (
        <div className="container">
            <InputBar />
            <MovieList movies={movieList} favMovies={favouriteList} loading={loading} error={error} title="Список доступных фильмов"/>
        </div>
    )
}