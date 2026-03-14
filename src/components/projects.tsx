"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Folder, Star, Eye } from "lucide-react";

interface Repo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    homepage: string;
    topics: string[];
    language: string;
}

const highlightedProjects = [
    {
        name: "Retail Sales Data Analysis",
        description:
            "Conducted end-to-end sales data analysis on retail dataset using Python & Pandas. Cleaned and transformed raw transactional data to ensure accuracy and consistency. Performed trend analysis to identify peak revenue months and top-performing product categories. Improved analytical insights by transforming raw sales data into structured reports and visual summaries.",
        tech: ["Python", "Pandas", "Matplotlib"],
        date: "Nov '25",
        link: "https://github.com/ismail-at-git",
        highlight: true,
    },
    {
        name: "IPL Data Analysis",
        description:
            "Performed comprehensive data cleaning using Python libraries (Pandas, NumPy) to handle missing values, removing duplicates improving data quality by 95%. Conducted in-depth Exploratory Data Analysis (EDA) to uncover key patterns, player performance metrics, team trends, and critical match-winning factors. Designed interactive Power BI dashboards to visualize actionable insights, including top run-scorers and wicket-takers.",
        tech: ["Power BI", "Python", "Pandas", "NumPy"],
        date: "Aug '25",
        link: "https://github.com/ismail-at-git",
        highlight: true,
    },
];

export function Projects() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRepos() {
            try {
                const res = await fetch("https://api.github.com/users/ismail-at-git/repos?sort=updated&per_page=6");
                if (res.ok) {
                    const data = await res.json();
                    setRepos(data);
                }
            } catch (error) {
                console.error("Failed to fetch repos", error);
            } finally {
                setLoading(false);
            }
        }
        fetchRepos();
    }, []);

    return (
        <section id="projects" className="container mx-auto px-4 py-20 bg-secondary/10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold tracking-tight mb-2 text-center">Featured Projects</h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                    Highlighting key projects from my experience, combining data analysis, python development, and interactive visualizations.
                </p>

                {/* Manual Highlighted Projects */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {highlightedProjects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-card dark:bg-card border border-blue-500/30 p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:border-blue-500 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Folder className="w-24 h-24 text-blue-500" />
                            </div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-foreground">{project.name}</h3>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 bg-secondary/50 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed flex items-center">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-mono font-medium px-2 py-1 bg-secondary rounded text-secondary-foreground">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <h3 className="text-2xl font-bold tracking-tight mb-8 text-center flex items-center justify-center gap-2">
                    <Github className="w-6 h-6" /> Recent GitHub Activity
                </h3>

                {/* GitHub Repositories */}
                {loading ? (
                    <div className="flex justify-center py-10">
                        <div className="w-8 h-8 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {repos.map((repo, i) => (
                            <motion.div
                                key={repo.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col h-full group hover:-translate-y-1 hover:border-blue-500/50"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <Folder className="w-8 h-8 text-blue-500/70 group-hover:text-blue-500 transition-colors" />
                                    <div className="flex items-center gap-3">
                                        {repo.homepage && (
                                            <a href={repo.homepage} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-blue-500">
                                                <Eye className="w-5 h-5" />
                                            </a>
                                        )}
                                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-blue-500">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-foreground truncate group-hover:text-blue-500 transition-colors">{repo.name}</h4>
                                <p className="text-muted-foreground text-sm flex-grow line-clamp-3 mb-4">
                                    {repo.description || "No description provided."}
                                </p>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50 text-xs font-medium">
                                    {repo.language ? (
                                        <span className="flex items-center gap-1.5 text-foreground/80">
                                            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                                            {repo.language}
                                        </span>
                                    ) : (
                                        <span></span>
                                    )}
                                    <span className="flex items-center gap-1 text-muted-foreground">
                                        <Star className="w-4 h-4 text-yellow-500" /> {repo.stargazers_count}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </motion.div>
        </section>
    );
}
