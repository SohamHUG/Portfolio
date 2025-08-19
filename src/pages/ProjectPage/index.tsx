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
            className="py-5 px-4 max-w-4xl mx-auto"
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
                        className="inline-flex items-center gap-2 bg-linear-to-r from-sky-500 to-blue-400 text-white px-4 py-2 rounded hover:scale-110 transition"
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

            <h2 className="text-2xl font-bold mb-4 text-white">À propos du projet</h2>
            <p
                className="text-lg leading-relaxed text-white/70 mb-8 prose"
                dangerouslySetInnerHTML={{ __html: project.longDescription || project.description }}
            />


        </motion.section>
    );
};
