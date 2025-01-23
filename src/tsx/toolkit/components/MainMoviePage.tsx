import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "./HomePage";
import { MovieView } from "./MovieView";
import { Favourite } from "./Favourite";
import { NotFound } from "./NotFound";

export function MainMoviePage() {
    return (
        <BrowserRouter basename="/react-toolkit">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="movie/:id" element={<MovieView />}/>
                    <Route path="favourite" element={<Favourite/>}/>
                </Route>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}