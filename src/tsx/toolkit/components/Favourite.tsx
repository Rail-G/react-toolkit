import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

export function Favourite() {
    const {movieList, favouriteList, loading, error} = useSelector((state: {movie: InitialState}) => state.movie)
    console.log(favouriteList)
    return (
        <div className="favourite">
            <MovieList movies={favouriteList} favMovies={movieList} loading={loading} error={error} title={'Список избранных вами фильмов'}/>
        </div>
    )
}