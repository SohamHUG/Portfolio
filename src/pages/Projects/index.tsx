import React from "react";
import { ProjectsList } from "../../components/ProjectsList";
import { motion } from "framer-motion";

export const ProjectsPage: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, }}
            className="flex flex-col items-center max-w-8/10 md:max-w-9/10 xl:max-w-7xl mx-auto mb-20"
        >

            <h1 className="text-4xl font-bold text-sky-500 my-6">Mes projets</h1>
            <p className="text-center max-w-[650px] text-lg text-white/50 mb-8">
                Découvrez les différents projets sur lesquels j'ai travaillé.
            </p>
            <ProjectsList limit={0} featured={false} />
        </motion.section>

    )
}