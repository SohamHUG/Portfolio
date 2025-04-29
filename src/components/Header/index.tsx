import { useState, FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleToggle = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setIsOpen((prev) => !prev);
    };

    const closeMenu = (): void => setIsOpen(false);

    return (
        <header className="w-full sticky top-0 left-0 text-white z-50 border-b border-white/10">
            {/* Mobile nav */}
            <div className="flex items-center justify-between px-7 py-3 md:hidden">
                <Link to="/" className="text-xl font-bold">
                    <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Soham</span>.H
                </Link>
                <button onClick={handleToggle} aria-label="Open menu">
                    <FaBars size={24} />
                </button>
            </div>

            {/* Mobile menu panel */}
            <div
                className={`fixed top-0 right-0 h-full w-full bg-[#0a0e17] transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between px-7 py-3 border-b border-white/10">
                    <Link to="/" className="text-xl font-bold">
                        <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Soham</span>.H
                    </Link>
                    <button onClick={handleToggle} aria-label="Close menu">
                        <FaTimes size={24} />
                    </button>
                </div>

                <nav className="flex flex-col items-center justify-center flex-1 space-y-6 text-2xl font-medium">
                    <Link to="/" onClick={closeMenu}>
                        Accueil
                    </Link>
                    <Link to="/projets" onClick={closeMenu}>
                        Projets
                    </Link>
                    <Link to="/a-propos" onClick={closeMenu}>
                        À propos
                    </Link>
                </nav>

                <div className="flex justify-center items-center pb-6">
                    <a
                        href="https://github.com/SohamHUG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded hover:bg-white/10 transition"
                    >
                        <FaGithub />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center justify-between px-8 py-4 lg:px-40">
                <Link to="/" className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">Soham</span>.H
                </Link>
                <nav className="flex gap-8 text-xl">
                    <Link to="/">Accueil</Link>
                    <Link to="/projets">Projets</Link>
                    <Link to="/a-propos">À propos</Link>
                </nav>
                <a
                    href="https://github.com/SohamHUG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border px-1.5 py-1.5 rounded hover:bg-white/10 transition text-xl"
                >
                    <FaGithub />
                    {/* <span className="hidden lg:inline">GitHub</span> */}
                </a>
            </div>
        </header>
    );
};

export default Header;
