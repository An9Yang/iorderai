"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, DollarSign, Clock, Users } from "lucide-react";

export function ProblemSection() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-red-50 to-transparent rounded-full blur-[100px] opacity-60 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-14 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-widest mb-5">
                        <AlertCircle className="w-3 h-3" />
                        The Hidden Crisis
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ink-primary tracking-tight">
                        The Real Cost of <br />
                        <span className="text-red-500">"Just One More Employee"</span>
                    </h2>
                    <p className="text-ink-secondary text-base font-normal leading-relaxed">
                        It's not just the hourly wage. Hiring, training, and turnover bleed your profits silently every single year.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-14 items-center">
                    {/* Visual Breakdown Cards */}
                    <div className="relative">
                        <div className="relative space-y-5">
                            {/* Base Wage Card */}
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="glass-panel p-6 rounded-2xl flex justify-between items-center"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
                                        <DollarSign className="w-5 h-5 text-gray-700" />
                                    </div>
                                    <div>
                                        <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Base Salary</div>
                                        <div className="text-ink-primary text-base font-bold">Full-Time Staff</div>
                                    </div>
                                </div>
                                <div className="text-2xl font-mono font-bold text-ink-primary tracking-tight">$37,440</div>
                            </motion.div>

                            {/* Hidden Costs Group */}
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="pl-5 space-y-3 border-l-2 border-dashed border-red-100 ml-7"
                            >
                                <div className="bg-red-50/50 backdrop-blur-sm border border-red-100 p-4 rounded-xl flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Users className="w-5 h-5 text-red-500" />
                                        <div className="text-red-900 text-sm font-medium">Recruiting & Hiring</div>
                                    </div>
                                    <div className="font-mono font-bold text-red-600 text-base">+$1,450</div>
                                </div>

                                <div className="bg-red-50/50 backdrop-blur-sm border border-red-100 p-4 rounded-xl flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-red-500" />
                                        <div className="text-red-900 text-sm font-medium">Training Losses</div>
                                    </div>
                                    <div className="font-mono font-bold text-red-600 text-base">+$4,600</div>
                                </div>
                            </motion.div>

                            {/* Total Cost */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                                className="bg-black text-white p-6 rounded-2xl shadow-xl flex justify-between items-center"
                            >
                                <div>
                                    <div className="font-bold text-xs text-gray-400 uppercase tracking-widest mb-1">True Annual Cost</div>
                                    <div className="text-xs text-red-400 font-bold uppercase">PER STATION</div>
                                </div>
                                <div className="text-3xl font-bold tracking-tighter">$43,500</div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Narrative Text */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-ink-primary mb-3">Stop Paying for "Dead Time"</h3>
                            <p className="text-ink-secondary text-base leading-relaxed font-normal">
                                Your phone staff spends 60% of their time waiting for calls, but you pay for 100% of their shift.
                                Plus, when they quit after 4 months (industry average), you pay to recruit and train all over again.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl font-bold text-ink-primary mb-1">3-5 mo</div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Avg. Retention</div>
                            </div>
                            <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl font-bold text-ink-primary mb-1">3.5 wks</div>
                                <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Wasted Training</div>
                            </div>
                        </div>

                        <div className="pt-5 border-t border-gray-100">
                            <p className="text-sm text-gray-400 font-mono">
                                *Data based on US Restaurant Labor Statistics 2024 for Bilingual Staff.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}