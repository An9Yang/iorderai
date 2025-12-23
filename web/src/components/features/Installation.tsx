"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Upload, Bot, PhoneForwarded, Store } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Upload Your Menu",
        description: "Send us your menu photo or link. We support all formats including handwritten notes.",
        icon: <Upload className="w-5 h-5 text-white" />,
    },
    {
        id: 2,
        title: "AI Training (24 Hrs)",
        description: "We build a custom model for your restaurant that knows your dishes, modifiers, and prices.",
        icon: <Bot className="w-5 h-5 text-white" />,
    },
    {
        id: 3,
        title: "Set Up Forwarding",
        description: "Simply forward your restaurant line to the dedicated AI number we provide.",
        icon: <PhoneForwarded className="w-5 h-5 text-white" />,
    },
    {
        id: 4,
        title: "Go Live",
        description: "iOrderAI starts answering calls immediately. You focus on cooking.",
        icon: <Store className="w-5 h-5 text-white" />,
    },
];

export function Installation() {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden bg-background">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-blue-50/30 -skew-y-3 transform origin-top-left -z-10" />

            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-ink-primary">
                        Setup in Minutes, <span className="text-chroma">Not Months</span>
                    </h2>
                    <p className="text-ink-secondary text-center max-w-2xl mx-auto mb-8 font-normal tracking-wide text-base">
                        No complex hardware. No technician visits. Just intelligent automation.
                    </p>
                </div>

                <div className="relative grid md:grid-cols-4 gap-8">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.75rem] left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 -z-10 rounded-full opacity-50" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Step Icon */}
                            <div className="w-18 h-18 rounded-xl bg-black flex items-center justify-center shadow-xl shadow-black/20 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 relative z-10 mb-5 border-2 border-white">
                                {step.icon}
                                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-black font-bold flex items-center justify-center text-sm border border-black/10 shadow-md">
                                    {step.id}
                                </div>
                            </div>

                            <h3 className="text-base font-bold mb-2 text-ink-primary">{step.title}</h3>
                            <p className="text-sm text-ink-secondary leading-relaxed px-1 font-normal">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
