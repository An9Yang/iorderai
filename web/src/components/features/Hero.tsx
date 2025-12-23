"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Bot, Server, Play, PhoneOff, Volume2 } from "lucide-react";

export function Hero() {
    const [time, setTime] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => (prev + 1) % 21); // 0-20 loop
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden bg-background">
            {/* Soft Ambient Background Orbs */}
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-gradient-to-r from-orange-200 to-pink-200 rounded-full blur-[100px] opacity-40 pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-[120px] opacity-40 pointer-events-none mix-blend-multiply" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-xs font-bold uppercase tracking-widest text-ink-secondary shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Live in 25,000+ Restaurants
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-ink-primary">
                        The AI Staff <br />
                        <span className="text-chroma">
                            Never Misses.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-ink-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                        Stop losing orders to busy lines. iOrderAI answers every call, takes orders in English & Chinese, and sends them directly to your POS.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-3">
                        <button className="px-7 py-3.5 bg-black text-white text-base font-medium rounded-xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/20 w-full sm:w-auto">
                            Calculate Your Savings
                        </button>
                        <button className="px-7 py-3.5 bg-white/50 backdrop-blur-md border border-white/50 text-ink-primary text-base font-medium rounded-xl hover:bg-white/80 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                            <Play className="w-5 h-5 fill-ink-primary" />
                            Listen to Demo
                        </button>
                    </div>

                    <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-ink-tertiary pt-5">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="font-medium">Saves $40k/year</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="font-medium">Bilingual (CN/EN)</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Visual (Glass Cards Flow) */}
                <div className="relative z-10 w-full lg:h-[450px] flex flex-col justify-center perspective-1000">

                    {/* Connecting Lines (Dotted) */}
                    <div className="absolute inset-0 pointer-events-none hidden md:block z-0">
                        <svg className="absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 overflow-visible">
                            <path d="M100,40 C 250,40 250,40 400,40" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="2" strokeDasharray="8 8" />
                            <path d="M400,40 C 550,40 550,40 700,40" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="2" strokeDasharray="8 8" />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative z-10">

                        {/* Card 1: Customer Phone */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-xs font-bold text-ink-tertiary mb-5 uppercase tracking-widest text-center">1. Customer Calls</div>
                            <div className="glass-panel p-2 rounded-[1.75rem] relative w-[160px]">
                                <div className="h-[230px] bg-white rounded-[1.5rem] flex flex-col items-center pt-6 relative overflow-hidden shadow-inner">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center text-orange-600 font-bold mb-2 text-base">TW</div>
                                    <div className="text-ink-primary text-sm font-semibold">Tasty Wok</div>
                                    <div className="text-ink-tertiary text-xs mt-0.5 font-mono">
                                        00:{time.toString().padStart(2, '0')}
                                    </div>

                                    {/* Audio Waves - Colorful */}
                                    <div className="mt-8 flex gap-1 justify-center h-6 items-end opacity-80">
                                        {[1, 3, 2, 4, 3].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: [4, h * 5, 4] }}
                                                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
                                                className="w-1.5 bg-gradient-to-t from-orange-400 to-pink-500 rounded-full"
                                            />
                                        ))}
                                    </div>

                                    <div className="absolute bottom-5 w-full flex justify-center gap-3 px-4">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                            <Volume2 className="w-5 h-5" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-500/30">
                                            <PhoneOff className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: AI Core (Glass Orb) */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-5 uppercase tracking-widest text-center">2. AI Processes</div>

                            <div className="relative w-28 h-28 flex items-center justify-center">
                                {/* Glowing backdrop */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-full blur-[30px] opacity-30 animate-pulse" />

                                {/* Glass Orb */}
                                <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-white/60 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center z-10">
                                    <Bot className="w-9 h-9 mb-1 text-slate-800" strokeWidth={1.5} />
                                    <span className="text-[10px] font-bold tracking-wider text-slate-600">CORE AI</span>
                                </div>

                                {/* Orbiting rings */}
                                <div className="absolute inset-[-8px] border border-white/40 rounded-full opacity-60" />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-[-16px] rounded-full border border-dashed border-blue-300/50"
                                />
                            </div>

                            <div className="mt-5 bg-white/80 backdrop-blur-sm border border-white/50 shadow-sm px-4 py-2 rounded-full flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-xs text-ink-secondary font-medium">Transcribing...</span>
                            </div>
                        </motion.div>

                        {/* Card 3: POS Ticket */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-xs font-bold text-ink-tertiary mb-5 uppercase tracking-widest text-center">3. Sent to POS</div>
                            <div className="w-[185px] glass-panel rounded-[1.5rem] p-2.5 relative group">
                                <div className="bg-white rounded-[1.25rem] p-4 min-h-[175px] relative border border-secondary shadow-sm">
                                    <div className="flex justify-between border-b border-dashed border-gray-200 pb-2.5 mb-2.5">
                                        <span className="text-[10px] font-bold text-gray-400 tracking-wider">TICKET #1402</span>
                                        <div className="flex items-center gap-1 text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full">
                                            <Server className="w-2.5 h-2.5" />
                                            <span>POS</span>
                                        </div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.5, repeat: Infinity, repeatDelay: 5 }}
                                        className="mb-4"
                                    >
                                        <div className="text-sm font-bold text-gray-900">General Tso Chkn</div>
                                        <div className="text-xs text-gray-500 flex justify-between mt-1">
                                            <span>Regular • Spicy</span>
                                            <span className="font-mono">$14.95</span>
                                        </div>
                                    </motion.div>

                                    <div className="absolute bottom-4 left-4 right-4 pt-2.5 border-t border-gray-100 flex justify-between items-end">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase">Total</span>
                                        <span className="text-base font-bold text-black">$14.95</span>
                                    </div>
                                </div>
                                {/* Receipt Print Animation */}
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatDelay: 5 }}
                                    className="absolute -bottom-4 left-5 right-5 h-5 bg-white border border-gray-100 -z-10 origin-top shadow-sm rounded-b-lg"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}