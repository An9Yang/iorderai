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
                <div className="relative z-10 w-full lg:h-[520px] flex flex-col justify-center perspective-1000">

                    {/* Connecting Lines (Dotted) - Hidden on smaller screens, aligned with AI orb center */}
                    <div className="absolute inset-0 pointer-events-none hidden lg:flex items-start justify-center z-0" style={{ paddingTop: '250px' }}>
                        <div className="w-full flex items-center justify-center">
                            {/* Left line - using background gradient for clean dots without extra dot at end */}
                            <div className="w-[90px] h-[2px]" style={{ background: 'repeating-linear-gradient(to right, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 6px, transparent 6px, transparent 12px)' }} />
                            <div className="w-[192px]" />
                            {/* Right line */}
                            <div className="w-[90px] h-[2px]" style={{ background: 'repeating-linear-gradient(to left, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 6px, transparent 6px, transparent 12px)' }} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 items-center relative z-10">

                        {/* Card 1: Customer Phone */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-xs font-bold text-ink-tertiary mb-5 uppercase tracking-widest text-center">1. Customer Calls</div>
                            <div className="glass-panel p-2.5 rounded-[2rem] relative w-[180px]">
                                <div className="h-[280px] bg-white rounded-[1.75rem] flex flex-col items-center pt-8 relative overflow-hidden shadow-inner">
                                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center text-orange-600 font-bold mb-3 text-lg">TW</div>
                                    <div className="text-ink-primary text-base font-semibold">Tasty Wok</div>
                                    <div className="text-ink-tertiary text-sm mt-1 font-mono">
                                        00:{time.toString().padStart(2, '0')}
                                    </div>

                                    {/* Audio Waves - Colorful */}
                                    <div className="mt-6 flex gap-1.5 justify-center h-8 items-end opacity-80">
                                        {[1, 3, 2, 4, 3].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: [5, h * 6, 5] }}
                                                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
                                                className="w-2 bg-gradient-to-t from-orange-400 to-pink-500 rounded-full"
                                            />
                                        ))}
                                    </div>

                                    <div className="absolute bottom-6 w-full flex justify-center gap-3 px-4">
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

                            <div className="relative w-36 h-36 flex items-center justify-center">
                                {/* Glowing backdrop */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-full blur-[40px] opacity-30 animate-pulse" />

                                {/* Glass Orb */}
                                <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-white/60 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center z-10">
                                    <Bot className="w-11 h-11 mb-1.5 text-slate-800" strokeWidth={1.5} />
                                    <span className="text-[11px] font-bold tracking-wider text-slate-600">CORE AI</span>
                                </div>

                                {/* Orbiting rings */}
                                <div className="absolute inset-[-10px] border border-white/40 rounded-full opacity-60" />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-[-20px] rounded-full border border-dashed border-blue-300/50"
                                />
                            </div>

                            <div className="mt-6 bg-white/80 backdrop-blur-sm border border-white/50 shadow-sm px-5 py-2.5 rounded-full flex items-center gap-2.5">
                                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm text-ink-secondary font-medium">Transcribing...</span>
                            </div>
                        </motion.div>

                        {/* Card 3: POS Ticket */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col items-center ml-7"
                        >
                            <div className="text-xs font-bold text-ink-tertiary mb-5 uppercase tracking-widest text-center">3. Sent to POS</div>
                            <div className="w-[220px] glass-panel rounded-[1.75rem] p-3 relative group">
                                <div className="bg-white rounded-[1.5rem] p-5 min-h-[220px] relative border border-secondary shadow-sm">
                                    <div className="flex justify-between border-b border-dashed border-gray-200 pb-2.5 mb-3">
                                        <span className="text-xs font-bold text-gray-400 tracking-wider">TICKET #1402</span>
                                        <div className="flex items-center gap-1.5 text-xs text-green-600 font-bold bg-green-50 px-2.5 py-1 rounded-full">
                                            <Server className="w-3.5 h-3.5" />
                                            <span>POS</span>
                                        </div>
                                    </div>

                                    {/* Menu items container */}
                                    <div className="space-y-2.5 mb-14">
                                        {/* First item - appears at time >= 8 */}
                                        <div
                                            className={`transition-all duration-500 ${time >= 8 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'}`}
                                        >
                                            <div className="text-base font-bold text-gray-900">Orange Chicken</div>
                                            <div className="text-xs text-gray-500 flex justify-between mt-1">
                                                <span>Large • Spicy</span>
                                                <span className="font-mono font-medium">$15.95</span>
                                            </div>
                                        </div>

                                        {/* Second item - appears at time >= 14 */}
                                        <div
                                            className={`transition-all duration-500 ${time >= 14 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'}`}
                                        >
                                            <div className="text-base font-bold text-gray-900">Fried Rice</div>
                                            <div className="text-xs text-gray-500 flex justify-between mt-1">
                                                <span>Regular</span>
                                                <span className="font-mono font-medium">$8.50</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-5 left-5 right-5 pt-2.5 border-t border-gray-100 flex justify-between items-end">
                                        <span className="text-xs font-bold text-gray-400 uppercase">Total</span>
                                        <span className="text-lg font-bold text-black">
                                            ${time >= 14 ? '24.45' : time >= 8 ? '15.95' : '0.00'}
                                        </span>
                                    </div>
                                </div>
                                {/* Receipt Print Animation - shows after second item */}
                                <div
                                    className={`absolute -bottom-4 left-5 right-5 h-5 bg-white border border-gray-100 -z-10 origin-top shadow-sm rounded-b-lg transition-all duration-500 ${time >= 16 ? 'scale-y-100' : 'scale-y-0'}`}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}