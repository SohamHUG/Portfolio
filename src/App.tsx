import { Route, Routes } from "react-router-dom";
import MainTemplate from "./components/Template/MainTeamplate";
import { HomePage } from "./pages/Home";
import { NotFound } from "./pages/Err/NotFound";
import { ContactPage } from "./pages/Contact";
import { AboutPage } from "./pages/About";
import { ProjectsPage } from "./pages/Projects";
import { ProjectDetailPage } from "./pages/ProjectPage";

function App() {


    return (
        <>
            <Routes>
                <Route element={<MainTemplate />}>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={'/projects'} element={<ProjectsPage />} />
                    <Route path={'/projects/:projectId'} element={<ProjectDetailPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/contact'} element={<ContactPage />} />

                    <Route path={'*'} element={<NotFound />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
