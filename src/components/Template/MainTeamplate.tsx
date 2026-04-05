import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/index";
import BackGround from "../BackGround";
import { Footer } from "../Footer";
import { motion, useScroll } from "framer-motion";

function LoadingScreen() {
    return (
        <motion.div
            className="fixed inset-0 z-[1400] flex flex-col items-center justify-center gap-5 bg-[#060d17]/92 backdrop-blur-md"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
        >
            <div className="relative h-20 w-20">
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#2b7fff] border-r-[#9061d4]"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                />
                <div className="absolute inset-[18px] rounded-full bg-white/6 shadow-[0_0_30px_rgba(43,127,255,0.25)]" />
            </div>
            <div className="space-y-2 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.45em] text-white/45">Chargement...</p>
                {/* <p className="text-sm text-white/70">Initialisation du background 3D...</p> */}
            </div>
        </motion.div>
    );
}

const MainTemplate: FunctionComponent = () => {
    const { scrollYProgress } = useScroll();

    const headerRef = useRef<HTMLDivElement | null>(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isSceneLoading, setIsSceneLoading] = useState(true);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, []);


    return (
        <div className="relative isolate w-full min-h-screen max-w-screen">
            {isSceneLoading ? <LoadingScreen /> : null}
            <BackGround onModelReady={() => setIsSceneLoading(false)} />
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