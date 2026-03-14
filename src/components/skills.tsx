"use client";

import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Programming & Data Analysis",
        skills: ["Python", "SQL", "Pandas", "NumPy", "Data Cleaning", "Java", "EDA", "Power BI"],
    },
    {
        category: "Databases",
        skills: ["MySQL", "SQL Query Optimization", "Data Modeling Basics"],
    },
    {
        category: "Cloud & Data Platforms",
        skills: ["Google Cloud Platform (GCP)", "AWS", "Cloud Fundamentals", "Data Storage Concepts"],
    },
    {
        category: "Data Engineering & Tools",
        skills: ["ETL Processes", "REST APIs", "Git", "Linux", "CI/CD Fundamentals", "Docker"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="container mx-auto px-4 py-20 bg-secondary/30 relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Technical Skills</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.map((group, i) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="font-semibold text-foreground mb-4 pb-2 border-b border-border/50">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center rounded-md bg-brand/10 px-2 py-1 text-sm font-medium text-brand ring-1 ring-inset ring-brand/20"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
