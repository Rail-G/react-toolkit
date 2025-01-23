import { asyncThunkCreator, buildCreateSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InitialState = {
    movieList: [] as MovieListValue[],
    movie: undefined as MovieView | undefined,
    favouriteList: [] as MovieListValue[],
    loading: false,
    error: ''
}

const createSliceWithThunk = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

export const movieSlice = createSliceWithThunk({
    name: 'movie',
    initialState,
    reducers: (creator) => ({
        removeFavourite: creator.reducer((state, action: PayloadAction<string>) => {
            state.favouriteList = state.favouriteList.filter(movie => movie.imdbID !== action.payload);
        }),
        addFavourite: creator.reducer((state, action: PayloadAction<MovieListValue>) => {
            state.favouriteList.push(action.payload)
        }),
        fetchMovies: creator.asyncThunk(
            async (searchName: string, { rejectWithValue }) => {
                try {
                    const response = await fetch(`${import.meta.env.VITE_MOVIE_FETCH_URL_WITH_API}?${searchName}`);
                    if (!response.ok) {
                        return rejectWithValue("I'm sorry, I broke. Repeat the request");
                    }
                    return await response.json();
                } catch (error) {
                    return rejectWithValue(error instanceof Error ? error.message : "Unknown error");
                }
            },
            {
                pending: (state) => {
                    state.loading = true;
                    state.error = '';
                },
                fulfilled: (state, action) => {
                    if (action.payload.Search != undefined) {
                        state.movieList = action.payload.Search;
                    } else {
                        state.movieList = []
                    }
                    state.error = '';
                },
                rejected: (state) => {
                    state.error = "Sorry. I'm broke. Please try again.";
                },
                settled: (state) => {
                    state.loading = false;
                }
            }
        ), 
        fetchMovie: creator.asyncThunk(
            async(id: string, { rejectWithValue }) => {
                try {
                    const fetchParams = new URLSearchParams({apikey: import.meta.env.VITE_API_KEY, i: id})
                    const response = await fetch(`${import.meta.env.VITE_MOVIE_FETCH_URL_WITH_API}?${fetchParams.toString()}`)

                    if (!response.ok) {
                        return rejectWithValue('Bad request. Please try again')
                    }
                    return await response.json()
                } catch (error) {
                    return rejectWithValue(error instanceof Error ? error.message : "Unknown error")
                }
            }, 
            {
                pending: (state) => {
                    state.loading = true;
                    state.error = '';
                },
                fulfilled: (state, action) => {
                    state.error = '';
                    state.movie = action.payload;
                    state.movieList = [];
                },
                rejected: (state) => {
                    state.error = "Sorry. I'm broke. Please try again.";
                },
                settled: (state) => {
                    state.loading = false;
                }
            }
        )
    })
});

export const { removeFavourite, addFavourite, fetchMovies, fetchMovie } = movieSlice.actions;
export default movieSlice.reducer;