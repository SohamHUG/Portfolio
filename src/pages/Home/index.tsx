import React, { useRef } from "react";
import { Hero } from "../../components/Hero";
import { ProjectsList } from "../../components/ProjectsList";
import { SkillsHome } from "../../components/SkillsHome";
import { motion, useInView } from "framer-motion";
import { ContactForm } from "../../components/ContactForm";

const fadeInUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, } },
};

export const HomePage: React.FC = () => {
    // const heroRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const contactReff = useRef(null);

    // const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
    const projectsInView = useInView(projectsRef, { once: true, margin: "-250px" });
    const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" });
    const contactInView = useInView(contactReff, { once: true, margin: "-100px" });

    return (
        <>
            <section className="min-h-[80vh] min-w-full flex justify-center mb-[20vh]">
                <Hero />
            </section>

            <motion.section
                ref={projectsRef}
                initial="hidden"
                animate={projectsInView ? "visible" : "hidden"}
                variants={fadeInUp}
                className="flex flex-col items-center max-w-8/10 md:max-w-9/10 xl:max-w-7xl mx-auto mb-20"
            >
                <h2 className="text-3xl font-bold text-sky-500 mb-6">Mes projets</h2>
                <ProjectsList limit={3} featured={true} />
            </motion.section>

            <motion.section
                ref={skillsRef}
                initial="hidden"
                animate={skillsInView ? "visible" : "hidden"}
                variants={fadeInUp}
                className="my-50 max-w-8/10 md:max-w-9/10 xl:max-w-7xl mx-auto"
            >
                <h2 className=" text-center text-3xl text-sky-500 font-bold flex items-center justify-center gap-3 mb-10">
                    Mes compétences
                </h2>
                <SkillsHome />
            </motion.section>

            <motion.div
                ref={contactReff}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                variants={fadeInUp}
            >
                <h2 className=" text-center text-3xl text-sky-500 font-bold flex items-center justify-center gap-3 mb-10">
                    Contactez-moi !
                </h2>
                <ContactForm />
            </motion.div>
        </>
    );
};
