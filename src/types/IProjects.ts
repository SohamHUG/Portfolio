export interface IProject {
    id: string;
    title: string;
    createdAt?: string
    description: string;
    longDescription: string;
    thumbnail: string;
    technologies: string[];
    github?: string;
    website?: string;
    featured: boolean;


}