import React from "react";
import { skills } from "../../data";
import { LuComputer, LuServer, LuSettings, } from "react-icons/lu";

export const SkillsHome: React.FC = () => {
    return (
        <section className="my-30 max-w-8/10 md:max-w-9/10 xl:max-w-7xl mx-auto">
            <h2 className=" text-center text-3xl text-sky-500 font-bold flex items-center justify-center gap-3 mb-10">
                Mes compétences
            </h2>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Frontend */}
                <div className="p-5 border border-sky-400 rounded-xl bg-blue-950/50 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold flex items-center gap-3 text-white capitalize mb-4">
                        <LuComputer size={20} />
                        Frontend
                    </h3>
                    <ul className="flex flex-wrap gap-3">
                        {skills.frontend.map((item, index) => (
                            <li key={index} className="px-3 py-1 rounded-full bg-blue-900 text-white border border-sky-500 text-sm">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Backend */}
                <div className="p-6 border border-sky-400 rounded-xl bg-blue-950/50 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold flex items-center gap-3 text-white capitalize mb-4">
                        <LuServer size={20} />
                        Backend
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                        {skills.backend.map((item, index) => (
                            <li key={index} className="px-3 py-1 rounded-full bg-blue-900 text-white border border-sky-500 text-sm">
                                {item}
                            </li>
                        ))}
                        {skills.databases.map((item, index) => (

                            <li key={index} className="px-3 py-1 rounded-full bg-blue-900 text-white border border-sky-500 text-sm">
                                {item}
                            </li>

                        ))}
                    </ul>
                </div>

                {/* Autres */}
                <div className="p-6 border border-sky-400 rounded-xl bg-blue-950/50 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold flex items-center gap-3 text-white mb-4">
                        <LuSettings size={20} />
                        Autres
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                        {skills.versionControlAndDevOps.map((item, index) => (
                            <li key={index} className="px-3 py-1 rounded-full bg-blue-900 text-white border border-sky-500 text-sm">
                                {item}
                            </li>
                        ))}
                        {skills.designTools.map((item, index) => (
                            <li key={index} className="px-3 py-1 rounded-full bg-blue-900 text-white border border-sky-500 text-sm">
                                {item}
                            </li>
                        ))}
                        {skills.cms.map((item, index) => (
                            <li key={index} className="px-3 py-1 rounded-full bg-blue-900 text-white border border-sky-500 text-sm">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    )
}