import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

export const NotFound: React.FC = () => {
    useEffect(() => {
        const metaRobots = document.createElement("meta");
        metaRobots.name = "robots";
        metaRobots.content = "noindex, nofollow";
        document.head.appendChild(metaRobots);

        return () => {
            document.head.removeChild(metaRobots);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="min-h-[90vh] flex items-center justify-center p-4 relative"
        >
            <div className="max-w-3xl mx-auto text-center">
                {/* 404 */}
                <h1 className=" text-9xl font-bold text-blue-600 mb-8">
                    404
                </h1>

                {/* Titre */}
                <h1 className="text-3xl md:text-4xl text-white font-bold mb-4">
                    Page non trouvée
                </h1>
                <p className="text-gray-200 mb-8 max-w-md mx-auto">
                    La page que vous recherchez semble avoir été déplacée, supprimée ou n'a jamais existé.
                </p>

                {/* Console style dev */}
                <div className="max-w-md mx-auto mb-8 rounded-lg overflow-hidden bg-[#1e1e1e] border border-gray-700">
                    <div className="bg-[#2d2d2d] p-2 flex items-center gap-2 border-b border-gray-700">
                        <FaCode size={16} className="text-green-400" />
                        <span className="text-sm font-mono text-white">Console</span>
                    </div>
                    <div className="p-4 font-mono text-sm text-left text-gray-300">
                        <p className="mb-1 text-red-500">Uncaught Error: Page not found</p>
                        <p className="mb-2">
                            at <span className="text-green-400">Router</span> (router.js:97:4)
                        </p>
                        <p>
                            {">"} Status: <span className="text-yellow-400">404</span>
                        </p>
                        <p className="mt-2">
                            {">"} Suggested fix: <span className="text-green-400">return home</span>
                        </p>
                    </div>
                </div>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/">
                        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:cursor-pointer hover:bg-blue-700 transition">
                            <FaHome size={18} />
                            Retour à l'accueil
                        </button>
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md hover:cursor-pointer border border-blue-600 text-blue-600 hover:bg-sky-400 transition"
                    >
                        <FaArrowLeft size={18} />
                        Page précédente
                    </button>
                </div>
            </div>
        </motion.div>
    );
};
