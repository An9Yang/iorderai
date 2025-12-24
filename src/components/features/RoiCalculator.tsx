"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, UserMinus } from "lucide-react";

export function RoiCalculator() {
    const [staffCount, setStaffCount] = useState(1);
    const monthlyWage = 3500; // Average monthly cost per staff
    const aiCost = 1200; // Estimated monthly cost for AI
    const annualSavings = (staffCount * monthlyWage - aiCost) * 12;

    return (
        <section id="roi" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 text-xs font-bold uppercase tracking-widest mb-5 text-black">
                            <TrendingUp className="w-3 h-3" />
                            ROI Analysis
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ink-primary tracking-tight"> Stop Paying for "Hello" </h2>
                        <p className="text-base text-ink-secondary mb-8 leading-relaxed font-normal">
                            A dedicated phone staff costs you $42k+/year. iOrderAI handles unlimited calls for a fraction of the cost, 24/7.
                        </p>

                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-red-50 text-red-500">
                                    <UserMinus className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-base text-ink-primary mb-1">Eliminate Hiring Headaches</div>
                                    <div className="text-sm text-ink-secondary">No more training, scheduling, or turnover.</div>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-green-50 text-green-600">
                                    <DollarSign className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-base text-ink-primary mb-1">Instant Profit Increase</div>
                                    <div className="text-sm text-ink-secondary">Add ~$30k directly to your bottom line per location.</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Calculator Card */}
                    <div className="glass-panel p-7 rounded-2xl bg-white/60 shadow-xl relative">
                        <h3 className="text-lg font-bold mb-6 text-center text-ink-primary">Your Savings Calculator</h3>

                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <label className="font-bold text-base text-ink-secondary">Number of Phone Staff</label>
                                <span className="text-3xl font-bold text-black">{staffCount}</span>
                            </div>

                            <div className="relative h-5 flex items-center">
                                <input
                                    type="range"
                                    min="1"
                                    max="5"
                                    step="1"
                                    value={staffCount}
                                    onChange={(e) => setStaffCount(parseInt(e.target.value))}
                                    className="w-full h-6 absolute opacity-0 z-20 cursor-pointer"
                                />
                                <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden absolute z-10">
                                    <div style={{ width: `${((staffCount - 1) / 4) * 100}%` }} className="h-full bg-gradient-to-r from-orange-400 to-pink-500" />
                                </div>
                                <div
                                    style={{ left: `${((staffCount - 1) / 4) * 100}%` }}
                                    className="w-4 h-4 bg-white border-2 border-orange-400 rounded-full shadow-md absolute z-10 -ml-2 pointer-events-none"
                                />
                            </div>

                            <div className="flex justify-between text-[10px] font-bold text-ink-tertiary mt-3 tracking-widest uppercase">
                                <span>1 Staff</span>
                                <span>5 Staff</span>
                            </div>
                        </div>

                        <div className="bg-white/80 rounded-xl p-6 border border-white space-y-4 shadow-sm">
                            <div className="flex justify-between items-center pb-4 border-b border-black/5">
                                <span className="text-ink-secondary text-base font-medium">Current Labor Cost</span>
                                <span className="font-mono font-bold text-red-400 text-base">-${(staffCount * monthlyWage * 12).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center pb-4 border-b border-black/5">
                                <span className="text-ink-secondary text-base font-medium">iOrderAI Cost</span>
                                <span className="font-mono font-bold text-ink-primary text-base">-${(aiCost * 12).toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center pt-1">
                                <span className="font-bold text-base text-ink-primary">Annual Savings</span>
                                <motion.span
                                    key={annualSavings}
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                    className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400 tracking-tight"
                                >
                                    +${annualSavings.toLocaleString()}
                                </motion.span>
                            </div>
                        </div>

                        <p className="text-xs text-center text-ink-tertiary mt-5 opacity-60 font-mono">
                            *Based on standard $18/hr wage + hiring costs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
