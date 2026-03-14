"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 space-y-6 text-center md:text-left"
            >
                <div className="inline-flex items-center rounded-lg bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-500 ring-1 ring-inset ring-blue-500/20">
                    Available for Hire
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Hi, I&apos;m <span className="text-blue-500">Mohammed Ismail</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
                    Data Analyst, Python Developer & Full-Stack Engineer. Building data-driven insights and scalable web applications.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                    <a
                        href="https://github.com/ismail-at-git"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-secondary rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:scale-110"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/md-ismailll"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-secondary rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:scale-110"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:ismail.ise.rymec@gmail.com"
                        className="p-3 bg-secondary rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:scale-110"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
                <div className="pt-6">
                    <a href="#projects" className="inline-flex h-11 items-center justify-center rounded-md bg-blue-500 px-8 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                        View My Work
                    </a>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 flex justify-center"
            >
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                    <Image
                        src="/profile.jpg"
                        alt="Mohammed Ismail"
                        fill
                        className="object-cover rounded-full border-4 border-background shadow-2xl z-10"
                        priority
                    />
                </div>
            </motion.div>
        </section>
    );
}
