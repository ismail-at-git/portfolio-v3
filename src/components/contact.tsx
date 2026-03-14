"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="container mx-auto px-4 py-20 border-t border-border/50">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center"
            >
                <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
                <p className="text-muted-foreground mb-12 text-lg">
                    I am always open to discussing product design work or partnership opportunities. Feel free to reach out via email or connect on LinkedIn.
                </p>

                <div className="grid sm:grid-cols-3 gap-6 mb-12">
                    <a
                        href="mailto:ismail.ise.rymec@gmail.com"
                        className="flex flex-col items-center justify-center p-6 bg-secondary/30 rounded-2xl hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 group border border-border"
                    >
                        <div className="w-12 h-12 bg-blue-500/10 text-blue-500 group-hover:bg-white/20 group-hover:text-white rounded-full flex items-center justify-center mb-4 transition-colors">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-foreground group-hover:text-white mb-2">Email</h3>
                        <span className="text-sm text-muted-foreground group-hover:text-white/80 select-all">ismail.ise.rymec@gmail.com</span>
                    </a>

                    <div className="flex flex-col items-center justify-center p-6 bg-secondary/30 rounded-2xl border border-border">
                        <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-4">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                        <span className="text-sm text-muted-foreground">+91 7975971565</span>
                    </div>

                    <div className="flex flex-col items-center justify-center p-6 bg-secondary/30 rounded-2xl border border-border">
                        <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-4">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">Location</h3>
                        <span className="text-sm text-muted-foreground">Karnataka, India</span>
                    </div>
                </div>

                <a
                    href="mailto:ismail.ise.rymec@gmail.com"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background shadow transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
}
