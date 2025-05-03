import React from "react";
import { projects } from "../../data";
import { ProjectsListProps } from "./props";
import { ProjectCard } from "../ProjectCard";
import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";

export const ProjectsList: React.FC<ProjectsListProps> = ({ limit, featured }) => {
    let filteredProjects = [...projects];

    if (featured) {
        filteredProjects = filteredProjects.filter((p) => p.featured);
    }

    if (limit) {
        filteredProjects = filteredProjects.slice(0, limit);
    }

    return (
        <div className="flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>

            {limit && (
                <div className="flex justify-center ">
                    <Link to="/projects"
                        className="flex gap-3 items-center content-center justify-center py-3 px-4 h-10 bg-linear-to-r from-sky-500 to-blue-400 text-white rounded-lg transition-all duration-300 hover:scale-110"
                    >
                        Voir tous les projets
                        <LuArrowRight size={19} />
                    </Link>
                </div>
            )}
        </div>
    );
};
