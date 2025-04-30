import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export const ContactPage: React.FC = () => {
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
        <section className="min-h-[70vh] max-w-9/10 md:max-w-5/10 mx-auto flex items-start mt-20">
            <form
                ref={form}
                onSubmit={sendEmail}
                className=" mx-auto text-white w-full p-3 bg-gray-800 rounded-lg"
            >
                {/* Champ honeypot caché */}
                <input
                    type="text"
                    name="bot-field"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                />

                <h1 className="text-center mb-8 text-3xl font-bold text-sky-400">Contactez-moi !</h1>

                <input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    required
                    className="w-full p-3 mb-4 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-sky-400"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full p-3 mb-4 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-sky-400"
                />
                <textarea
                    name="message"
                    placeholder="Votre message..."
                    required
                    rows={5}
                    className="w-full p-3 mb-6 bg-gray-700 border border-gray-600 rounded focus:ring-2 focus:ring-sky-400"
                />

                {/* Feedback utilisateur */}
                {state.error && (
                    <p className="mb-4 text-red-400 text-center">{state.error}</p>
                )}
                {state.success && (
                    <p className="mb-4 text-green-400 text-center">Message envoyé avec succès ! Patientez avant un nouvel envoi</p>
                )}

                <button
                    type="submit"
                    disabled={state.isSubmitting || !canSubmit}
                    className={`w-full py-3 px-4 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition ${state.isSubmitting || !canSubmit ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                >
                    {state.isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </button>
                <div className="text-xs text-gray-500 mt-4 text-center">
                    Ce site est protégé par reCAPTCHA et les
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline ml-1">Politique de confidentialité</a> et
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline ml-1">Conditions d'utilisation</a> de Google s'appliquent.
                </div>
            </form>

        </section>
    );
};