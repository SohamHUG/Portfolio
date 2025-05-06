import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { BiRightArrowAlt } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";

export const ContactForm: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const { executeRecaptcha } = useGoogleReCaptcha();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const [state, setState] = useState({
        isSubmitting: false,
        error: "",
        success: false
    });

    // Vérifie le localStorage
    const getLastSubmission = () => {
        if (typeof window !== 'undefined') {
            const last = localStorage.getItem('lastEmailSubmission');
            return last ? parseInt(last) : 0;
        }
        return 0;
    };

    const canSubmit = Date.now() - getLastSubmission() > 5 * 60 * 1000;

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!canSubmit) {
            setState({ ...state, error: "Vous venez d'envoyer un message, merci de patienter avant un nouvel envoi" });
            return;
        }

        if (form.current?.['bot-field'].value) return;

        const formData = new FormData(form.current!);
        const name = formData.get('name')?.toString().trim();
        const email = formData.get('email')?.toString().trim();
        const message = formData.get('message')?.toString().trim();

        if (!name || !email || !message) {
            setState({ ...state, error: "Tous les champs sont obligatoires." });
            return;
        }

        // vérification email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setState({ ...state, error: "Veuillez entrer un email valide." });
            return;
        }

        setState({ ...state, isSubmitting: true, error: "" });

        try {
            const token = await executeRecaptcha?.('contact_submit');
            if (!token) throw new Error("CAPTCHA invalide");

            await emailjs.sendForm(
                serviceId,
                templateId,
                form.current!,
                publicKey
            );

            // Stocke le timestamp dans le localStorage
            localStorage.setItem('lastEmailSubmission', Date.now().toString());

            setState({
                isSubmitting: false,
                success: true,
                error: ""
            });
            form.current?.reset();
        } catch (error) {
            setState({
                isSubmitting: false,
                success: false,
                error: "Erreur lors de l'envoi"
            });
        }
    };

    // Reset du message de succès après 8s
    useEffect(() => {
        if (state.success) {
            const timer = setTimeout(() => {
                setState(s => ({ ...s, success: false }));
            }, 8000);
            return () => clearTimeout(timer);
        }
    }, [state.success]);

    return (
        <div
            className="flex flex-col md:flex-row md:flex-wrap items-center justify-center content-center gap-3 max-w-8/10 md:max-w-9/10 xl:max-w-7/10 mx-auto mt-15 mb-20"
        >

            {/* <h2 className="mb-10 text-center flex items-center justify-center text-3xl text-sky-500 font-bold">Contactez-moi !</h2> */}


            <div className="h-full w-full mx-auto flex flex-col md:flex-row justify-evenly items-stretch gap-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col gap-3 h-full justify-between md:w-3/10"
                >
                    <a
                        href="mailto:69.hugue@gmail.com"
                        className="group h-full p-2 w-full flex flex-col justify-center items-center gap-2 text-white border border-sky-400 rounded-xl bg-blue-950/50 hover:shadow-lg hover:scale-101 transition-all duration-300"
                    >
                        <MdMail size={35} />
                        <span className="text-sky-500 font-bold">Email</span>
                        <span className="text-white/50 flex items-center justify-center gap-1">
                            M'envoyer un mail
                            <BiRightArrowAlt className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
                        </span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/soham-huguenin/" target="_blank" rel="noopener noreferrer"
                        className="group h-full p-4 w-full flex flex-col justify-center items-center gap-2 text-white border border-sky-400 rounded-xl bg-blue-950/50 hover:shadow-lg hover:scale-101 transition-all duration-300"
                    >
                        <FaLinkedin size={30} />
                        <span className="text-sky-500 font-bold">Linkedin</span>
                        <span className="text-white/50 flex items-center justify-center gap-1">
                            Via linkedin
                            <BiRightArrowAlt className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
                        </span>
                    </a>
                </motion.div>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className=" text-white w-full md:w-4/10"
                >

                    {/* Champ honeypot caché */}
                    <input
                        type="text"
                        name="bot-field"
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                    />

                    {/* <p className="mt-5 mb-3 md:mt-0 text-white/50 text-center">Un petit message pour en savoir plus ?</p> */}

                    {/* <div > */}
                    <motion.input
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        type="text"
                        name="name"
                        placeholder="Nom"
                        required
                        className="w-full p-3 mb-4 bg-sky-900/50 border border-sky-400 rounded-xl focus:ring-2 focus:ring-sky-400"
                    />
                    <motion.input
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="w-full p-3 mb-4 bg-sky-900/50 border border-sky-400 rounded-xl focus:ring-2 focus:ring-sky-400"
                    />
                    {/* </div> */}

                    <motion.textarea
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        name="message"
                        placeholder="Votre message..."
                        required
                        rows={5}
                        className="w-full p-3 mb-4 bg-sky-900/50 border border-sky-400 rounded-xl focus:ring-2 focus:ring-sky-400"
                    />

                    {/* Feedback utilisateur */}
                    {state.error && (
                        <p className="mb-4 text-red-400 text-center">{state.error}</p>
                    )}
                    {state.success && (
                        <p className="mb-4 text-green-400 text-center">Message envoyé avec succès !</p>
                    )}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <button
                            type="submit"
                            // disabled={state.isSubmitting || !canSubmit}
                            className="w-full py-3 px-4 text-white rounded-xl transition-all duration-300 bg-gradient-to-r from-sky-500 to-blue-400 hover:from-blue-400 hover:to-sky-500 hover:brightness-110 hover:cursor-pointer hover:scale-101"
                        >
                            {state.isSubmitting ? "Envoi en cours..." : "Envoyer"}
                        </button>
                        <div className="text-xs text-gray-500 mt-4 text-center">
                            Ce site est protégé par reCAPTCHA et les
                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline ml-1">Politique de confidentialité</a> et
                            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline ml-1">Conditions d'utilisation</a> de Google s'appliquent.
                        </div>
                    </motion.div>
                    {/* <div className="text-sm text-white/60 mt-4 text-center">
                        Un problème avec le formulaire ? <a href={'mailto:69.hugue@gmail.com'} className="text-sky-400 underline">Envoyez-moi directement un email </a>
                    </div> */}
                </form>

            </div>



        </div>
    );
};