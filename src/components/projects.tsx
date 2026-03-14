"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Folder, Star, Eye } from "lucide-react";
import Image from "next/image";

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
            "Conducted end-to-end sales data analysis on retail dataset using Python & Pandas. Cleaned and transformed raw transactional data to ensure accuracy and consistency. Performed trend analysis to identify peak revenue months and top-performing product categories. Improved analytical insights.",
        tech: ["Python", "Pandas", "Matplotlib"],
        date: "Nov '25",
        link: "https://github.com/ismail-at-git",
        highlight: true,
        image: null
    },
    {
        name: "IPL Data Analysis",
        description:
            "Performed comprehensive data cleaning using Python libraries. Conducted in-depth EDA to uncover key patterns and match-winning factors. Designed interactive Power BI dashboards to visualize actionable insights, including top run-scorers and wicket-takers.",
        tech: ["Power BI", "Python", "Pandas", "NumPy"],
        date: "Aug '25",
        link: "https://github.com/ismail-at-git",
        highlight: true,
        image: null
    },
    {
        name: "Static Website",
        description: "Static website built with core web technologies: HTML for content and structure, and CSS for styling and basic responsive layout. Features a standard set of pages (home, about, contact).",
        tech: ["HTML", "CSS"],
        link: "https://github.com/ismail-at-git/Static-Website",
        image: "/p1.png"
    },
    {
        name: "To-Do list",
        description: "A functional To-Do List application built with HTML5, CSS3, and JavaScript (ES6+). Tasks can be added, marked as complete, deleted, and persisted in local Storage.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        link: "https://github.com/ismail-at-git/To-do-list-",
        image: "/p2.png"
    },
    {
        name: "Portfolio Website",
        description: "A personal portfolio webpage built with HTML and CSS to showcase projects and skills in a single-page layout with custom styling and animations.",
        tech: ["HTML", "CSS"],
        link: "https://github.com/ismail-at-git/Portfolio-Website",
        image: "/pi.png"
    },
    {
        name: "Random Colour Generator",
        description: "A web app that generates random colors with each click and displays their HEX and RGB codes. Users can copy the color codes and use them in their own designs.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/ismail-at-git/Random-Colour-Generator",
        image: "/p4.png"
    },
    {
        name: "Dice Rolling Game",
        description: "An engaging application that simulates a dice roll generating a random number between 1 and 6, visually updating the dice face accordingly.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/ismail-at-git/Dice-Rolling-Game",
        image: "/p5.png"
    },
    {
        name: "Password Generator",
        description: "A simple and secure password generator website that creates strong, random passwords to help protect your online accounts. Customize password length and options.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/ismail-at-git/Password-Generator/tree/main",
        image: "/p6.png"
    }
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
                    Highlighting key projects from my experience, combining data analysis, python development, web, and interactive visualizations.
                </p>

                {/* Manual Highlighted Projects */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 perspective">
                    {highlightedProjects.map((project, i) => (
                        <div key={i} className="card-3d bg-card border border-brand/30 rounded-2xl shadow-lg relative overflow-hidden group hover:border-brand transition-colors flex flex-col h-full">
                            {project.image ? (
                                <div className="w-full h-48 relative overflow-hidden border-b border-border/50">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                </div>
                            ) : (
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Folder className="w-24 h-24 text-brand" />
                                </div>
                            )}
                            <div className="relative z-10 flex flex-col h-full p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-foreground truncate mr-2">{project.name}</h3>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 bg-secondary/50 rounded-full hover:bg-brand hover:text-white transition-colors flex-shrink-0"
                                    >
                                        <Github className="w-4 h-4" />
                                    </a>
                                </div>
                                <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
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
                        </div>
                    ))}
                </div>

                <h3 className="text-2xl font-bold tracking-tight mb-8 text-center flex items-center justify-center gap-2">
                    <Github className="w-6 h-6" /> Recent GitHub Activity
                </h3>

                {/* GitHub Repositories */}
                {loading ? (
                    <div className="flex justify-center py-10">
                        <div className="w-8 h-8 rounded-full border-4 border-brand border-t-transparent animate-spin" />
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
                                className="bg-card border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col h-full group hover:-translate-y-1 hover:border-brand/50"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <Folder className="w-8 h-8 text-brand/70 group-hover:text-brand transition-colors" />
                                    <div className="flex items-center gap-3">
                                        {repo.homepage && (
                                            <a href={repo.homepage} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-brand">
                                                <Eye className="w-5 h-5" />
                                            </a>
                                        )}
                                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-brand">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-foreground truncate group-hover:text-brand transition-colors">{repo.name}</h4>
                                <p className="text-muted-foreground text-sm flex-grow line-clamp-3 mb-4">
                                    {repo.description || "No description provided."}
                                </p>
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50 text-xs font-medium">
                                    {repo.language ? (
                                        <span className="flex items-center gap-1.5 text-foreground/80">
                                            <span className="w-2.5 h-2.5 rounded-full bg-brand" />
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
