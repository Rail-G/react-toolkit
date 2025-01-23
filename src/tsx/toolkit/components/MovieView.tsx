import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Loading } from "./Loading"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../redux/store"
import { addFavourite, fetchMovie, removeFavourite } from "../redux/movieSlice"
import { useSelector } from "react-redux"

export function MovieView() {
    const params = useParams()
    const [isFav, setFav] = useState<boolean>(true)
    // const [loading, setLoading] = useState<boolean>(true)
    const {favouriteList} = useSelector((state: {movie: InitialState}) => state.movie)
    const dispatch = useDispatch<AppDispatch>()
    const {movie, loading} = useSelector((state: {movie: InitialState}) => state.movie)

    useEffect(() => {
        const test = async () => {
            await dispatch(fetchMovie(params.id!))
        }
        test()
    }, [dispatch, params.id])
    console.log(movie, loading)
    useEffect(() => {
        favouriteList.forEach(favMovie => {
            if (favMovie.imdbID == movie?.imdbID) {
                setFav(false)
            }
        })
    }, [movie, favouriteList])

    const ChangeSvg = (number: number) => {
        switch (number) {
            case 0:
                return 'star'
            case 1:
                return 'tomato'
            case 2:
                return 'metacritic'
        }
    }

    const onDelToFav = (id: string) => {
        setFav(true)
        dispatch(removeFavourite(id))
    }

    const onAddToFav = () => {
        setFav(false)
        dispatch(addFavourite(movie!))
    }
    return (
        <>
            {loading && <Loading />}
            {(!loading && movie !== undefined) && <div className="movie-view">
                <div className="mv-poster">
                    <img src={movie?.Poster} alt="" />
                </div>
                <div className="mv-body">
                    <div className="mv-description">
                        <div className="mvd-title">
                            <span>{movie?.Title}</span>
                        </div>
                        <div className="mvd-body">
                            <p>{movie?.Plot}</p>
                        </div>
                    </div>
                    <div className="mv-buttons">
                        <button className="movie-player mv-btn-btn-color-play">Смотреть</button>
                        {
                        isFav
                        ? <button className="movie-favourite" onClick={onAddToFav}>Добавить в избранный</button>
                        : <button className="mv-btn-btn-color-fav" onClick={() => onDelToFav(movie?.imdbID as string)}>Удалить из избранных</button>
                        }
                    </div>
                    <div className="mv-informations">
                        <h3 className="mvis-title">О фильме</h3>
                        <div className="mvis-body">
                            <div className="mvis-information">
                                <div className="mvi-title">
                                    <span>Год производства</span>
                                </div>
                                <div className="mvi-body">
                                    <span>{movie?.Year}</span>
                                </div>
                            </div>
                            <div className="mvis-information">
                                <div className="mvi-title">
                                    <span>Страна</span>
                                </div>
                                <div className="mvi-body">
                                    <span>{movie?.Country}</span>
                                </div>
                            </div>
                            <div className="mvis-information">
                                <div className="mvi-title">
                                    <span>Жанр</span>
                                </div>
                                <div className="mvi-body">
                                    <span>{movie?.Genre}</span>
                                </div>
                            </div>
                            <div className="mvis-information">
                                <div className="mvi-title">
                                    <span>Режиссер</span>
                                </div>
                                <div className="mvi-body">
                                    <span>{movie?.Director}</span>
                                </div>
                            </div>
                            <div className="mvis-information">
                                <div className="mvi-title">
                                    <span>Сценарист</span>
                                </div>
                                <div className="mvi-body">
                                    <span>{movie?.Writer}</span>
                                </div>
                            </div>
                            <div className="mvis-information">
                                <div className="mvi-title">
                                    <span>Субтитры</span>
                                </div>
                                <div className="mvi-body">
                                    <span>{movie?.Language}</span>
                                </div>
                            </div>
                            <div className="mvis-information">
                                <div className="mvi-title">
                                    <span>Кассовый сбор</span>
                                </div>
                                <div className="mvi-body">
                                    <span>{movie?.BoxOffice != undefined ? `${movie?.BoxOffice}` : 'N/A'}</span>
                                </div>
                            </div>
                            <div className="mvis-information">
                                <div className="mvi-title">
                                    <span>Релиз на DVD</span>
                                </div>
                                <div className="mvi-body">
                                    <span>{movie?.DVD}</span>
                                </div>
                            </div>
                            <div className="mvis-information">
                                <div className="mvi-title">
                                    <span>Рейтинг</span>
                                </div>
                                <div className="mvi-body">
                                    <span>{movie?.Rated}</span>
                                </div>
                            </div>
                            <div className="mvis-information">
                                <div className="mvi-title">
                                    <span>Время</span>
                                </div>
                                <div className="mvi-body">
                                    <span>{movie?.Runtime}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mv-raitings">
                    {movie?.Ratings.map((el, index) => (
                        <div key={++index} className="raiting">
                            <h3 className="ratirng-title">{el.Source}</h3>
                            <div className="raiting-body">
                                <span className={ChangeSvg(index)}>{el.Value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>}
        </>
    )
}