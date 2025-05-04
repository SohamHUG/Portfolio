import React from "react";
import { experiences, personalInfo, skills, studies } from "../../data";
import { LuBriefcase, LuCode, LuComputer, LuDatabase, LuGitBranch, LuGlobe, LuGraduationCap, LuPalette, LuServer, LuSettings, LuUser } from "react-icons/lu";
import { motion } from "framer-motion";

export const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen py-10 px-4 max-w-6xl mx-auto">
            {/* Titre principal */}
            <motion.div
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                transition={{ duration: 0.8, }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl font-bold text-sky-500 mb-6">À propos de moi</h1>
                <p className="text-lg text-white/90 max-w-3xl mx-auto">
                    Jeune développeur Fullstack spécialisé en JavaScript (React/Node) et PHP, j’ai acquis une double expertise frontend et backend au cours de mon alternance. Partisan du code propre et des bonnes pratiques, je conçois des interfaces réactives connectées à des backends robustes. Mon objectif : créer des solutions efficaces, centrées sur les besoins utilisateurs, tout en garantissant la qualité et la maintenabilité du code.
                </p>
            </motion.div>

            {/* Image + Infos personnelles + Atouts */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-24">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-sky-500 shadow-xl glow">
                        <img src="/img/pfp.jpg" alt="HUGUENIN Soham" className="w-full h-full object-cover" />
                    </div>
                </motion.div>

                {/* Infos & Atouts */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="lg:col-span-2 space-y-10"
                >
                    {/* Infos personnelles */}
                    <div className="mx-auto">
                        <h2 className="text-2xl text-sky-500 font-bold flex items-center gap-3 mb-4">
                            <LuUser size={30} />
                            Informations personnelles
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {personalInfo.map((info, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-zinc-900 text-sky-500">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm text-white/40">
                                            {info.label}
                                        </p>
                                        <p className="font-medium text-white">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Atouts */}
                    <div>
                        <h3 className="text-xl font-semibold text-sky-500 mb-4">Atouts</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-lg border border-sky-400 bg-blue-950/50">
                                <h4 className="font-medium text-white mb-2">Adaptabilité</h4>
                                <p className="text-white/80">
                                    Capacité à m’adapter rapidement à de nouvelles technologies et à résoudre des problèmes complexes.
                                </p>
                            </div>
                            <div className="p-4 rounded-lg border border-sky-400 bg-blue-950/50">
                                <h4 className="font-medium text-white mb-2">Autonomie</h4>
                                <p className="text-white/80">
                                    Capable de mener à bien un projet de bout en bout, de la conception à la mise en production, tout en sachant identifier les moments clés pour solliciter de l’aide.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Expériences */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-15"
            >
                <h2 className="text-2xl text-sky-500 font-bold flex items-center gap-3 mb-10">
                    <LuBriefcase className="text-sky-500" size={30} />
                    Expérience professionnelle
                </h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="p-6 border border-sky-400 rounded-xl bg-blue-950/50 hover:shadow-lg transition-shadow">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="text-white/40">{exp.period}</span>
                                    <span className="px-2 py-1 rounded-full bg-blue-900 text-xs text-white font-medium">
                                        {exp.type}
                                    </span>
                                </div>
                            </div>
                            <div className="mb-3 text-lg flex items-center gap-2">
                                <span className="text-sky-500">{exp.company}</span>
                                <span className="text-white/40 text-sm">
                                    • {exp.location}
                                </span>
                            </div>
                            <p className="text-white">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Formation */}
            <section>
                <h2 className="text-2xl text-sky-500 font-bold flex items-center gap-3 mb-10">
                    <LuGraduationCap className="text-sky-500" size={30} />
                    Formation
                </h2>

                <div className="space-y-8">
                    {studies.map((exp, index) => (
                        <div key={index} className="p-6 border border-sky-400 rounded-xl bg-blue-950/50 hover:shadow-lg transition-shadow">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="text-white/40">{exp.period}</span>
                                    {exp.see &&
                                        <span className="px-2 py-1 rounded-full bg-blue-900 text-xs text-white font-medium">
                                            <a href={'https://diplome.3wa.fr/huguenin-soham'} target="_blank" rel="noopener noreferrer">{exp.see}</a>
                                        </span>
                                    }
                                </div>
                            </div>
                            <div className="mb-3 text-lg flex items-center gap-2">
                                <span className="text-sky-500">{exp.institution}</span>
                                <span className="text-white/40 text-sm">
                                    • {exp.location}
                                </span>
                            </div>
                            <p className="text-white">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Compétences */}

            <section className="mt-20">
                <h2 className="text-2xl text-sky-500 font-bold flex items-center gap-3 mb-10">
                    <LuCode className="text-sky-500" size={30} />
                    Compétences
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Frontend */}
                    <div className="p-6 border border-sky-400 rounded-xl bg-blue-950/50 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold flex items-center gap-3 text-white capitalize mb-4">
                            <LuComputer />
                            Frontend
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                            {skills.frontend.map((item, index) => (

                                <li key={index} className="px-3 py-1 rounded-full bg-blue-900 text-white border border-sky-500 text-sm">
                                    {item}
                                </li>

                            ))}
                        </ul>
                    </div>

                    {/* Backend */}
                    <div className="p-6 border border-sky-400 rounded-xl bg-blue-950/50 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold flex items-center gap-3 text-white capitalize mb-4">
                            <LuServer />
                            Backend
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                            {skills.backend.map((item, index) => (

                                <li key={index} className="px-3 py-1 rounded-full bg-blue-900 text-white border border-sky-500 text-sm">
                                    {item}
                                </li>

                            ))}
                        </ul>
                    </div>

                    {/* databases */}
                    <div className="p-6 border border-sky-400 rounded-xl bg-blue-950/50 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold flex items-center gap-3 text-white mb-4">
                            <LuDatabase />
                            Base de données
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                            {skills.databases.map((item, index) => (

                                <li key={index} className="px-3 py-1 rounded-full bg-blue-900 text-white border border-sky-500 text-sm">
                                    {item}
                                </li>

                            ))}
                        </ul>
                    </div>

                    {/* Versionnement & DevOps */}
                    <div className="p-6 border border-sky-400 rounded-xl bg-blue-950/50 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold flex items-center gap-3 text-white mb-4">
                            <LuGitBranch />
                            Versionnement & DevOps
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                            {skills.versionControlAndDevOps.map((item, index) => (

                                <li key={index} className="px-3 py-1 rounded-full bg-blue-900 text-white border border-sky-500 text-sm">
                                    {item}
                                </li>

                            ))}
                        </ul>
                    </div>

                    {/* Designs */}
                    <div className="p-6 border border-sky-400 rounded-xl bg-blue-950/50 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold flex items-center gap-3 text-white mb-4">
                            <LuPalette />
                            Design
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                            {skills.designTools.map((item, index) => (

                                <li key={index} className="px-3 py-1 rounded-full bg-blue-900 text-white border border-sky-500 text-sm">
                                    {item}
                                </li>

                            ))}
                        </ul>
                    </div>

                    {/* Cms */}
                    <div className="p-6 border border-sky-400 rounded-xl bg-blue-950/50 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-semibold flex items-center gap-3 text-white mb-4">
                            <LuGlobe />
                            CMS
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                            {skills.cms.map((item, index) => (

                                <li key={index} className="px-3 py-1 rounded-full bg-blue-900 text-white border border-sky-500 text-sm">
                                    {item}
                                </li>

                            ))}
                        </ul>
                    </div>



                </div>

                {/* En cours */}
                <div className="p-6 mt-8 border border-sky-400 rounded-xl bg-blue-950/50 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold flex items-center gap-3 text-white mb-4">
                        <LuSettings className="animate-spin slow-spin" />
                        En cours d'apprentissage...
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                        {skills.workInProgress.map((item, index) => (

                            <li key={index} className="px-3 py-1 rounded-full bg-blue-900 text-white border border-sky-500 text-sm">
                                {item}
                            </li>

                        ))}
                    </ul>
                </div>
            </section>


        </div>
    );
};
