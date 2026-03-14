"use client";

import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="container mx-auto px-4 py-20 border-t border-border/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            I am a final-year Information Science & Engineering student with hands-on project experience in Data Analytics, Python development, and backend systems.
                        </p>
                        <p>
                            My focus is on extracting actionable insights using Python, SQL, and Power BI. I have practical experience in building ETL workflows, interactive dashboards, and scalable data-driven web applications.
                        </p>
                        <p>
                            With my strong foundation in software engineering and data analysis, I aim to create highly optimized, scalable solutions while ensuring business-driven metrics are at the forefront of the systems I build.
                        </p>
                    </div>
                    <div className="bg-secondary/50 p-6 rounded-2xl border border-border">
                        <h3 className="text-xl font-semibold mb-4 text-foreground">Education</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="font-medium text-foreground">Bachelor of Engineering in Information Science</h4>
                                    <span className="text-sm text-brand font-medium">Sep &apos;22 — Present</span>
                                </div>
                                <p className="text-muted-foreground">Rao Bahadur Y. Mahabaleswarappa Engineering College, Ballari</p>
                                <p className="text-sm mt-1 font-medium bg-background inline-block px-2 py-1 rounded border border-border">GPA: 7.2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
