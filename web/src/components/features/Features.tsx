"use client";

import React from "react";
import { MessageSquare, Server, Globe2, Clock } from "lucide-react";
import { motion, Variants } from "framer-motion";

const features = [
    {
        title: "Bilingual Genius",
        description: "Fluent in English and Mandarin (plus Cantonese accents). Handles mixed-language orders naturally.",
        icon: <Globe2 className="w-6 h-6 text-white" />,
        bg: "bg-gradient-to-br from-blue-400 to-cyan-400",
    },
    {
        title: "Smart Upselling",
        description: "Automatically asks 'Want a drink with that?' or 'Spicy or mild?', boosting average order value.",
        icon: <MessageSquare className="w-6 h-6 text-white" />,
        bg: "bg-gradient-to-br from-purple-400 to-pink-400",
    },
    {
        title: "Direct POS Integration",
        description: "Orders go straight to your kitchen printer. Compatible with Tiger, RestPOS, and more.",
        icon: <Server className="w-6 h-6 text-white" />,
        bg: "bg-gradient-to-br from-green-400 to-emerald-400",
    },
    {
        title: "Never Busy",
        description: "Can handle multiple calls at once during Friday night rush. Zero missed customers.",
        icon: <Clock className="w-6 h-6 text-white" />,
        bg: "bg-gradient-to-br from-orange-400 to-yellow-400",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export function Features() {
    return (
        <section id="product" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-ink-primary"
                    >
                        everything you need to <span className="text-chroma">scale</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-ink-secondary max-w-2xl mx-auto font-normal tracking-wide text-base"
                    >
                        Designed for high-volume restaurants that refuse to compromise on service quality.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="group p-6 rounded-2xl glass-panel bg-white/60 hover:bg-white/90 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 border border-white/50"
                        >
                            <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-500`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-ink-primary group-hover:text-black transition-colors">{feature.title}</h3>
                            <p className="text-ink-secondary text-base leading-relaxed font-normal">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
