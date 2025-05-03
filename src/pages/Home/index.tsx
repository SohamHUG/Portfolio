import React from "react";
import { Hero } from "../../components/Hero";
import { ProjectsList } from "../../components/ProjectsList";
import { SkillsHome } from "../../components/SkillsHome";
import { ContactPage } from "../Contact";

export const HomePage: React.FC = () => {

    return (
        <>
            <section className="min-h-[80vh] min-w-full flex justify-center mb-[20vh]">
                <Hero />
            </section>

            <section className="flex flex-col items-center max-w-8/10 md:max-w-9/10 xl:max-w-7xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-sky-500 mb-6">Mes projets</h2>
                <ProjectsList limit={3} featured={true} />
            </section>

            <SkillsHome />

            <ContactPage />

        </>
    )
}
