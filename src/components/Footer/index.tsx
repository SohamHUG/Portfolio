import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Footer: React.FC = () => {
    return (
        <footer className="text-white border-t-2 border-white w-full">

            <div className="md:max-w-7xl px-7 py-5 md:px-6 md:py-4 mx-auto">

                <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between text-center md:text-left gap-12">
                    <div className="flex flex-col gap-5 md:max-w-1/3 items-center md:items-start">
                        <Link to="/" className="text-xl md:text-2xl font-bold">
                            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Soham</span>.H
                        </Link>
                        <p className="hidden md:block text-base text-white text-white/70">
                            Développeur fullstack passionné, je conçois des solutions web modernes et dynamiques, en alliant performance et expérience utilisateur pour donner vie à vos projets.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5 md:max-w-1/3 items-center md:items-start">
                        <p className="text-xl font-bold">Liens</p>
                        <nav className="flex flex-col gap-2 text-base text-white/70">
                            <Link className="hover:text-white/50" to={'/'}>Accueil</Link>
                            <Link className="hover:text-white/50" to={'/projects'}>Projets</Link>
                            <Link className="hover:text-white/50" to={'/about'}>À propos</Link>
                            <Link className="hover:text-white/50" to={'/contact'}>Contact</Link>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-5 md:max-w-1/3 items-center md:items-start">
                        <p className="text-xl font-bold">Contact</p>
                        <p className="text-base text-white/70">
                            Contactez-moi par email ou sur les réseaux
                        </p>
                        <div className="flex gap-5 items-center">
                            <a href={'https://github.com/SohamHUG'} target="_blank" rel="noopener noreferrer"><FaGithub className="text-white/70 hover:text-white/50" size={25} /></a>
                            <a href={'https://www.linkedin.com/in/soham-huguenin/'} target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-white/70 hover:text-white/50" size={25} /></a>
                            <a href={'mailto:69.hugue@gmail.com'}><MdEmail className="text-white/70 hover:text-white/50" size={30} /></a>
                        </div>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="mt-6 pt-6 border-t border-white/50 flex flex-col md:flex-row justify-center md:justify-between items-center gap-5">
                    <p className="text-sm text-white/70 text-center">
                        © 2025 Soham HUGUENIN. Tous droits réservés.
                    </p>
                    <p className="text-sm text-white/70 text-center">
                        Créé avec React, TypeScript et Tailwind.
                    </p>
                </div>
            </div>
        </footer>
    );
};
