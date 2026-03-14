"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight">
                    Ismail<span className="text-blue-500">.</span>
                </Link>
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link href="#about" className="hover:text-blue-500 transition-colors">About</Link>
                    <Link href="#skills" className="hover:text-blue-500 transition-colors">Skills</Link>
                    <Link href="#experience" className="hover:text-blue-500 transition-colors">Experience</Link>
                    <Link href="#projects" className="hover:text-blue-500 transition-colors">Projects</Link>
                    <Link href="#contact" className="hover:text-blue-500 transition-colors">Contact</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <div className="relative w-9 h-9 flex items-center justify-center">
                        <ThemeToggle />
                    </div>
                    <a
                        href="/resume.pdf"
                        download
                        className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background shadow transition-colors hover:bg-foreground/90"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </header>
    );
}
