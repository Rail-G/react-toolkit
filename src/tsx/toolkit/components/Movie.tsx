import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { addFavourite, removeFavourite } from "../redux/movieSlice";
import { useEffect, useState } from "react";

export function Movie({movieData, favMovies, number}: {movieData: MovieListValue, favMovies: MovieListValue[],  number: number}) {
    const dispatch = useDispatch<AppDispatch>()
    const [isFav, setFav] = useState<boolean>(true)
    const onDelToFav = (id: string) => {
            setFav(true)
            dispatch(removeFavourite(id))
        }
    
        const onAddToFav = () => {
            setFav(false)
            dispatch(addFavourite(movieData!))
        }

    useEffect(() => {
        favMovies.map(movie => {
                if (movie.imdbID == movieData?.imdbID) {
                    setFav(false)
                }
            })
        }, [favMovies, movieData?.imdbID])
    return (
        <div className="item">
            <div className="list-position">
                <span>{number}</span>
            </div>
            <div className="movie-poster">
                <NavLink to={`/movie/${movieData.imdbID}`}>
                    <img src={movieData.Poster} alt=""/>
                </NavLink>
            </div>
            <div className="movie-description-block">
                <NavLink to={`/movie/${movieData.imdbID}`}>
                    <div className="movie-title">
                        <span>{movieData.Title}</span>
                    </div>
                    <div className="movie-year">
                        <span>Год выпуска: {movieData.Year} г.</span>
                    </div>
                    <div className="movie-type">
                        <span>Movie: {movieData.Type}</span>
                    </div>
                </NavLink>
                <div className="more-info-btns">
                    <button className="movie-player">Смотреть</button>
                    {
                    isFav
                    ? <button className="movie-favourite" onClick={onAddToFav}>Добавить в избранный</button>
                    : <button className="mv-btn-btn-color-fav" onClick={() => onDelToFav(movieData?.imdbID as string)}>Удалить из избранных</button>
                    }
                </div>
            </div>
        </div>
    )
}