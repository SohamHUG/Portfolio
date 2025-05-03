import React from "react";
import { ProjectCardProps } from "./props";
import { Link } from "react-router-dom";
import { LuExternalLink, LuGithub } from "react-icons/lu";

export const ProjectCard: React.FC<ProjectCardProps> = ({
    project,
}) => {
    return (
        <div className={`border border-sky-500/50 border-w-xs p-6 rounded-xl bg-blue-950/50 hover:shadow-lg flex flex-col justify-between hover:scale-110 transition-all duration-300`}>
            <div className="w-full h-40 mb-5 overflow-hidden rounded-lg bg-secondary/20 -mx-1">
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-white/70 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-2 py-1 rounded-full bg-blue-900 text-xs text-white font-medium">{tech}</span>
                ))}
                {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-full bg-blue-900 text-xs text-white font-medium">
                        +{project.technologies.length - 4}
                    </span>
                )}
            </div>
            <div className="flex items-center gap-3">

                <Link
                    to={`/projects/${project.id}`}
                    className="flex-grow inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-9 px-4 py-2 bg-transparent border rounded-md text-white hover:cursor-pointer hover:text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-300 "
                >
                    Voir le projet
                </Link>

                {project.website && (
                    <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-blue-900 text-white hover:bg-sky-500 transition-all duration-300"
                    >
                        <LuExternalLink size={20} />
                    </a>
                )}
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-blue-900 text-white hover:bg-sky-500 transition-all duration-300"
                    >
                        <LuGithub size={20} />
                    </a>
                )}
            </div>
        </div>
    );
};
