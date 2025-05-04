import { useEffect, useState, FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const location = useLocation();

    const handleToggle = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setIsOpen((prev) => !prev);
    };

    const closeMenu = (): void => setIsOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`w-full z-50 sticky top-0 left-0 right-0 text-white transition-all duration-300 ${hasScrolled
                ? "md:bg-[#0a0e17]/80 md:backdrop-blur-sm md:border-b md:border-white/10"
                : "md:bg-transparent md:border-b md:border-transparent"
                }`}
            // className="z-50 sticky top-0 left-0 right-0 text-white transition-all duration-300"
        >
            {/* Mobile nav */}
            <div className={`flex items-center justify-between px-7 py-3 md:hidden w-full transition-all duration-300 ${hasScrolled
                ? "bg-[#0a0e17]/80 backdrop-blur-sm border-b border-white/10"
                : "bg-transparent border-b border-transparent"
                }`}>
                <Link to="/" className="text-xl font-bold">
                    <span className="bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent">Soham</span>.H
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
                    <Link to="/" className="text-xl font-bold" onClick={closeMenu}>
                        <span className="bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent">Soham</span>.H
                    </Link>
                    <button onClick={handleToggle} aria-label="Close menu">
                        <FaTimes size={24} />
                    </button>
                </div>

                <nav className="flex flex-col items-center justify-center flex-1 space-y-6 text-2xl font-medium">
                    <Link
                        to="/"
                        onClick={closeMenu}
                        className={`${location.pathname === "/" ? "relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-sky-400 after:w-full after:bg-sky-400 text-sky-400" : "text-white"}`}
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/projects"
                        onClick={closeMenu}
                        className={`${location.pathname.startsWith("/projects") ? "relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-sky-400 after:w-full after:bg-sky-400 text-sky-400" : "text-white"}`}
                    >
                        Projets
                    </Link>
                    <Link
                        to="/about"
                        onClick={closeMenu}
                        className={`${location.pathname === "/about" ? "relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-sky-400 after:w-full after:bg-sky-400 text-sky-400" : "text-white"}`}
                    >
                        À propos
                    </Link>
                    <Link
                        to="/contact"
                        onClick={closeMenu}
                        className={`${location.pathname === "/contact" ? "relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-sky-400 after:w-full after:bg-sky-400 text-sky-400" : "text-white"}`}
                    >
                        Contact
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
            <div className={`hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 py-4 w-full relative`}
            >
                <Link to="/" className="text-2xl font-bold z-10">
                    <span className="bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent">Soham</span>.H
                </Link>

                <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
                    <Link
                        to="/"
                        className={`relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full ${location.pathname === "/" ? "after:w-full after:bg-sky-400 text-sky-400" : "text-white"
                            }`}
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/projects"
                        className={`relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full ${location.pathname.startsWith("/projects") ? "after:w-full after:bg-sky-400 text-sky-400" : "text-white"
                            }`}
                    >
                        Projets
                    </Link>
                    <Link
                        to="/about"
                        className={`relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full ${location.pathname === "/about" ? "after:w-full after:bg-sky-400 text-sky-400" : "text-white"
                            }`}
                    >
                        À propos
                    </Link>
                    <Link
                        to="/contact"
                        className={`relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full ${location.pathname === "/contact" ? "after:w-full after:bg-sky-400 text-sky-400" : "text-white"
                            }`}
                    >
                        Contact
                    </Link>
                </nav>

                <a
                    href="https://github.com/SohamHUG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border px-1.5 py-1.5 rounded hover:bg-white/10 transition text-xl z-10"
                >
                    <FaGithub size={20} />
                </a>
            </div>

        </header>
    );
};

export default Header;
