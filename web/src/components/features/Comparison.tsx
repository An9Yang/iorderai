"use client";

import React from "react";
import { Check, X, Clock, Wallet, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Comparison() {
    return (
        <section className="py-24 bg-background relative mb-10">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-ink-primary"
                    >
                        Upgrade Your Front Desk
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-ink-secondary max-w-2xl mx-auto font-normal tracking-wide text-base"
                    >
                        Why hire another temp when you can install a permanent expert?
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
                    {/* Human Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-panel p-7 rounded-2xl bg-white/40 border border-white/40 relative hover:shadow-lg transition-all duration-500 scale-95 opacity-80 hover:opacity-100 hover:scale-100"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5 text-ink-primary">
                            <UsersIcon className="w-24 h-24" />
                        </div>
                        <h3 className="text-lg font-bold mb-1 text-ink-secondary">Human Staff</h3>
                        <div className="text-2xl font-bold mb-6 text-ink-tertiary line-through decoration-red-400/50">$3,625 <span className="text-sm font-normal text-ink-tertiary no-underline">/ month</span></div>

                        <ul className="space-y-4">
                            <ListItem type="negative" text="Availability: 8-10 Hours/Day" icon={<Clock className="w-4 h-4" />} />
                            <ListItem type="negative" text="Training: 2 Weeks Required" icon={<ShieldCheck className="w-4 h-4" />} />
                            <ListItem type="negative" text="Memory: Forgets Upselling" icon={<Zap className="w-4 h-4" />} />
                            <ListItem type="negative" text="Cost: Rising Annually" icon={<Wallet className="w-4 h-4" />} />
                        </ul>
                    </motion.div>

                    {/* AI Card - Wrapper for floating badge */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative scale-105 z-10 pt-3"
                    >
                        {/* Floating Recommended Badge */}
                        <div className="absolute -top-0 right-6 bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-2 z-30">
                            <Zap className="w-3.5 h-3.5 fill-current" /> Recommended
                        </div>

                        {/* Card Content */}
                        <div className="glass-panel p-8 rounded-2xl bg-white/80 border border-white relative shadow-xl overflow-hidden">
                            {/* Chroma Glow */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 w-full" />

                            <h3 className="text-xl font-bold mb-1 text-ink-primary mt-2">iOrderAI Voice AI</h3>
                            <div className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">$1,200 <span className="text-sm font-normal text-ink-secondary uppercase tracking-wider text-black">/ month</span></div>

                            <ul className="space-y-4 relative z-10">
                                <ListItem type="positive" text="Availability: 24/7/365" icon={<Clock className="w-4 h-4" />} />
                                <ListItem type="positive" text="Training: Instant Download" icon={<ShieldCheck className="w-4 h-4" />} />
                                <ListItem type="positive" text="Memory: Perfect Upselling" icon={<Zap className="w-4 h-4" />} />
                                <ListItem type="positive" text="Cost: Fixed & Lower" icon={<Wallet className="w-4 h-4" />} />
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ListItem({ type, text, icon }: { type: "positive" | "negative", text: string, icon: React.ReactNode }) {
    const isPos = type === "positive";
    return (
        <li className="flex items-center gap-3">
            <div className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors",
                isPos ? "bg-black text-white" : "bg-red-50 text-red-400"
            )}>
                {isPos ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
            </div>
            <span className={cn(
                "text-base font-medium",
                isPos ? "text-ink-primary" : "text-ink-secondary"
            )}>{text}</span>
        </li>
    )
}

function UsersIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}
