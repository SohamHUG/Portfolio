import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";


export const HomePage: React.FC = () => {

    return (
        <section className="min-h-screen min-w-full">
            <div className="flex flex-col md:flex-row items-center gap-10 px-4 md:px-6 md:w-9/10 lg:w-7/10 md:ml-auto md:mr-auto z-20 mt-10">
                <div className="md:w-1/2 md:mt-10 " >
                    <div className="mx-auto w-64 h-64 md:w-80 md:h-80">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-sky-500 shadow-xl glow">
                            <img src="/pfp.jpg" alt="HUGUENIN Soham" className="w-full h-full object-cover" />
                        </div>
                        {/* <div className="absolute -bottom-7 left-1/4 bg-[#0a0e17] rounded-lg py-2 px-4 shadow-lg border border-white/50">
                        <div className="flex items-center gap-2">
                            <span className="flex h-3 w-3 rounded-full bg-green-500"></span>
                            <span className="text-sm font-medium text-white">Disponible</span>
                        </div>
                    </div> */}

                    </div>
                </div>

                <div className="flex flex-col text-center md:text-left md:w-1/2">
                    <div className=" md:mt-0" >
                        <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-blue-600 text-white mt-3 mb-6">Développeur Fullstack Junior</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight py-3 bg-gradient-to-r from-blue-500 to-pink-400 bg-clip-text text-transparent" >
                        Soham HUGUENIN
                    </h1>
                    <p className="max-w-[700px] text-lg md:text-xl text-white mb-8">
                        Je crée des applications et services web innovants, en utilisant les technologies modernes pour transformer des idées en expériences numériques exceptionnelles.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start  z-30">
                        <a href="/projects" className="inline-block">
                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 group overflow-hidden bg-transparent border border-primary rounded-md text-white hover:text-blue-600 shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300 h-9 px-4 py-2 gap-2 ">
                                <span className=" z-10 flex items-center gap-2">
                                    Voir mes projets
                                    <FaArrowRight />
                                </span>
                                <span className="absolute inset-0 translate-y-full bg-primary transition-transform duration-300 group-hover:translate-y-0">
                                </span>
                            </button>
                        </a>
                        <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent text-white hover:text-blue-600 h-9 px-4 py-2 gap-2 ">
                                <HiOutlineDocumentText size={20} />
                                Voir mon CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    )
}
