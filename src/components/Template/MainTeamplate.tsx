import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/index";
import BackGround from "../BackGround";
import { Footer } from "../Footer";

const MainTemplate: FunctionComponent = () => {

    return (
        <div className="w-full min-h-screen">
            <BackGround />
            <Header />
            <main>
                <Outlet />
            </main>

            <Footer />
        </div>

        // <div className="relative w-full h-screen bg-slate-900 overflow-hidden">
        //     <div className="relative w-full h-screen z-10">
        //         <Header />
        //         <main>
        //             <Outlet />
        //         </main>
        //     </div>
        // </div>
    )
}

export default MainTemplate;