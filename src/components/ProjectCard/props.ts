import { IProject } from "../../types/IProjects";

export interface ProjectCardProps {
    project: IProject;
    index: number;
    className?: string;
}