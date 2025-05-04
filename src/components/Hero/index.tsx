import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Link } from "react-router-dom";


export const Hero: React.FC = () => {

    return (
        <div className="min-w-full min-h-full flex">
            <div className="flex flex-col md:flex-row items-center gap-10 px-4 md:px-6 md:w-9/10 lg:w-7/10 md:mx-auto z-20 mt-10">
                <div className="md:w-1/2 md:mt-10 " >
                    <div className="mx-auto w-64 h-64 md:w-80 md:h-80">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-sky-500 shadow-xl glow">
                            <img src="/img/pfp.jpg" alt="HUGUENIN Soham" className="w-full h-full object-cover" />
                        </div>

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
                        Développeur fullstack passionné, je conçois des solutions web modernes et dynamiques, en alliant performance et expérience utilisateur pour donner vie à vos projets.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start  z-30">
                        <Link to={'/projects'} className="inline-block">
                            <button className="relative inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 group overflow-hidden bg-transparent border border-sky-500 rounded-md text-white hover:cursor-pointer shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300 h-9 px-4 py-2 gap-2">
                                {/* Background animation */}
                                <span className="absolute inset-0 bg-sky-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />

                                {/* Text + Icon in front */}
                                <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                                    Voir mes projets
                                    <FaArrowRight />
                                </span>
                            </button>
                        </Link>
                        <a href="/Doc/CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-block">
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium text-white text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 border border-input border-white/10 bg-transparent shadow-sm hover:cursor-pointer hover:bg-white/10 shadow-[0_0_15px_rgba(139,92,246,0.5)] h-9 px-4 py-2 gap-2 relative">
                                <HiOutlineDocumentText size={20} />
                                Voir mon CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}
