import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { projects } from "../../data";
import { LuArrowLeft, LuCalendar, LuGithub, LuGlobe } from "react-icons/lu";
import { motion } from "framer-motion";

export const ProjectDetailPage: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === projectId);

    if (!project) {
        return <Navigate to={'/projects'} />
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="py-5 px-4 max-w-4xl mx-auto mb-15"
        >
            <button
                onClick={() => navigate("/projects")}
                className="flex items-center font-bold gap-2 text-sm text-sky-400 hover:underline hover:cursor-pointer mb-6"
            >
                <LuArrowLeft />
                Tous les projets
            </button>

            <h1 className="text-4xl font-bold mb-4 text-white">{project.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                {project.createdAt && (
                    <div className="flex items-center gap-1">
                        <LuCalendar size={20} />
                        <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                    </div>
                )}

            </div>



            <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-2 py-1 rounded-full bg-blue-900 text-xs text-white font-medium"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex gap-4 flex-wrap mb-6">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-transparent border border-sky-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                    >
                        <LuGithub size={20} />
                        GitHub
                    </a>
                )}

                {project.website && (
                    <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500/80 via-blue-500/80 to-violet-500/80 text-white px-4 py-2 rounded hover:scale-105 hover:from-sky-500 hover:via-blue-500 hover:to-violet-500 transition-all duration-300"
                    >
                        <LuGlobe size={20} />
                        Voir le site
                    </a>
                )}
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl mb-5">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                />
            </div>
            <div className="border border-sky-500 rounded-xl bg-blue-950/50 p-5 relative overflow-hidden">
                {/* bottom left */}
                <span className="absolute w-30 h-30 bg-gradient-to-br from-sky-400 via-blue-500 to-violet-500 opacity-30 rounded-full blur-2xl bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 transition-all duration-700 pointer-events-none" />
                {/* top right */}
                <span className="absolute w-40 h-40 bg-gradient-to-tl from-pink-400 via-fuchsia-500 to-violet-500 opacity-30 rounded-full blur-2xl top-0 right-0 transform translate-x-1/4 -translate-y-1/4 transition-all duration-700 pointer-events-none" />

                <h2 className="text-2xl font-bold mb-4 text-white">À propos du <span className="text-sky-400">projet</span> :</h2>
                <p
                    className="text-lg leading-relaxed text-gray-200 prose"
                    dangerouslySetInnerHTML={{ __html: project.longDescription || project.description }}
                />
            </div>




        </motion.section>
    );
};
