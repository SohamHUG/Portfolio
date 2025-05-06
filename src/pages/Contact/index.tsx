import React from "react";
import { motion } from "framer-motion";
import { ContactForm } from "../../components/Contact";

export const ContactPage: React.FC = () => {

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10"
            // className="flex flex-col md:flex-row md:flex-wrap items-center justify-center content-center gap-3 max-w-8/10 md:max-w-9/10 xl:max-w-7/10 mx-auto mt-15 mb-20"
        >

            <h2 className="mb-10 text-center flex items-center justify-center text-5xl text-sky-500 font-bold">Contactez-moi !</h2>


            <ContactForm />


        </motion.section>
    );
};