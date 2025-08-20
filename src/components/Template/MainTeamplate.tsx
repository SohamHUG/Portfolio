import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/index";
import BackGround from "../BackGround";
import { Footer } from "../Footer";
import { motion, useScroll } from "framer-motion";

const MainTemplate: FunctionComponent = () => {
    const { scrollYProgress } = useScroll();

    const headerRef = useRef<HTMLDivElement | null>(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, []);


    return (
        <div className="w-full min-h-screen max-w-screen">
            <BackGround />
            <Header ref={headerRef} /> 
            <main>
                <motion.div
                    id="scroll-indicator"
                    style={{
                        scaleX: scrollYProgress,
                        position: "fixed",
                        top: headerHeight,
                        left: 0,
                        right: 0,
                        height: 5,
                        originX: 0,
                        backgroundColor: "#155DFC",
                        opacity: 1.1,
                        zIndex: 1000,
                    }}
                />
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