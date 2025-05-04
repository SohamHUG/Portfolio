import React from "react";
import { ProjectCardProps } from "./props";
import { Link, useNavigate } from "react-router-dom";
import { LuExternalLink, LuGithub } from "react-icons/lu";

export const ProjectCard: React.FC<ProjectCardProps> = ({
    project,
}) => {
    const navigate = useNavigate();

    const navTo = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).closest("a, button")) return;
        navigate(`/projects/${project.id}`);
    }

    return (
        <div onClick={navTo} className={`border border-sky-500 p-6 rounded-xl bg-blue-950/50 hover:shadow-lg flex flex-col justify-between group hover:scale-101 hover:cursor-pointer transition-all duration-300`}>
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
                    className="relative flex-grow inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-9 px-4 py-2 bg-transparent border border-sky-500 rounded-md text-white overflow-hidden group transition-all duration-300"
                >
                    <span className="absolute inset-0 bg-sky-500 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-0" />
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                        Voir le projet
                    </span>
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
