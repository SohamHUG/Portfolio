import { Route, Routes } from "react-router-dom";
import MainTemplate from "./components/Template/MainTeamplate";
import { HomePage } from "./pages/Home";
import { NotFound } from "./pages/Err/NotFound";

function App() {


    return (
        <>
            <Routes>
                <Route element={<MainTemplate />}>
                    <Route path={'/'} element={<HomePage />} />

                    <Route path={'*'} element={<NotFound />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
