"use client";

import { motion } from "framer-motion";

const internships = [
    {
        role: "DevOps Intern",
        company: "Rooman Technologies",
        period: "Feb '26 — Present",
        location: "Bangalore, India (Remote)",
        stack: "Python, Git, Linux, CI/CD, Cloud Basics",
        desc: [
            "Completed a hands-on internship, gaining practical exposure to industry-standard DevOps tools and workflows.",
            "Worked extensively with Git and GitHub for version control, branching strategies, and collaborative development.",
            "Gained practical knowledge of Linux systems and cloud infrastructure fundamentals, including environment setup and troubleshooting."
        ]
    },
    {
        role: "Java Full Stack Intern",
        company: "Cloud Institution",
        period: "Feb '26 — Present",
        location: "Bangalore, India",
        stack: "Java, Spring Boot, HTML, CSS, JavaScript, SQL",
        desc: [
            "Contributing to the design and development of full-stack web applications following industry standards.",
            "Developed robust backend applications using Java and Spring Boot, implementing MVC architecture and RESTful APIs.",
            "Designed responsive user interfaces using HTML, CSS, and JavaScript. Integrated frontend with backend services."
        ]
    }
];

const certifications = [
    {
        name: "DataCamp - SQL Career Track",
        desc: "Data Analysis, Data Manipulation, Joins, Aggregations, Query Optimization",
        date: "Jan '26"
    },
    {
        name: "DevOps intern",
        desc: "Rooman Technologies",
        date: "Feb '26"
    },
    {
        name: "Java full stack intern",
        desc: "Cloud Institution",
        date: "Feb '26"
    }
];

export function Experience() {
    return (
        <section id="experience" className="container mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-3 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-2 space-y-8"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-8">Internships & Experience</h2>
                    <div className="space-y-12 border-l-2 border-border pl-6 relative">
                        {internships.map((job, i) => (
                            <div key={i} className="relative">
                                <span className="absolute -left-[33px] top-1 px-1 bg-background text-brand">
                                    <div className="w-4 h-4 rounded-full border-2 border-brand bg-background" />
                                </span>
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                                    <span className="text-sm font-medium text-brand">{job.period}</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                    <span className="text-foreground/80 font-medium">{job.company}</span>
                                    <span className="text-sm text-muted-foreground">{job.location}</span>
                                </div>
                                <div className="mb-4">
                                    <span className="text-sm text-muted-foreground font-mono bg-secondary/50 px-2 py-1 rounded">
                                        {job.stack}
                                    </span>
                                </div>
                                <ul className="list-disc leading-relaxed text-muted-foreground space-y-2 ml-4">
                                    {job.desc.map((d, index) => (
                                        <li key={index}>{d}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <div className="bg-secondary/30 p-8 rounded-2xl border border-border sticky top-24">
                        <h2 className="text-2xl font-bold tracking-tight mb-8">Certifications</h2>
                        <div className="space-y-6">
                            {certifications.map((cert, i) => (
                                <div key={i} className="pb-6 border-b border-border/50 last:border-0 last:pb-0">
                                    <h3 className="font-semibold text-foreground">{cert.name}</h3>
                                    <p className="text-sm text-muted-foreground mt-1 mb-2">{cert.desc}</p>
                                    <span className="text-xs font-medium px-2 py-1 bg-brand/10 text-brand rounded ring-1 ring-brand/20">
                                        {cert.date}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
