"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RefreshCw, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const DEMOS = [
    {
        id: "accent",
        title: "Heavy Accent Handling",
        desc: "Customer speaking 'General Tso' with strong accent.",
        duration: "0:14",
        transcript: [
            { role: "customer", text: "Yeah, gimme uh... Jen-Rel Tso Chkn." },
            { role: "ai", text: "One General Tso's Chicken. Setting that to mild spice?" }
        ]
    },
    {
        id: "bilingual",
        title: "Mid-Sentence Switching",
        desc: "Customer switches from English to Mandarin.",
        duration: "0:22",
        transcript: [
            { role: "customer", text: "Can I also get, uh... (switches to CN) 还要一个红烧肉." },
            { role: "ai", text: "(In CN) 好的，一份红烧肉。需要加米饭吗？" }
        ]
    },
    {
        id: "noisy",
        title: "Noisy Bar Background",
        desc: "Loud ambient noise filtering.",
        duration: "0:18",
        transcript: [
            { role: "customer", text: "(Loud Music) ...and two cokes!" },
            { role: "ai", text: "Got it, two Cokes added. Anything else?" }
        ]
    }
];

export function AudioDemo() {
    const [activeDemo, setActiveDemo] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // Mock play function
    const togglePlay = (index: number) => {
        if (activeDemo === index) {
            setIsPlaying(!isPlaying);
        } else {
            setActiveDemo(index);
            setIsPlaying(true);
        }
    };

    return (
        <section className="py-24 bg-background border-y border-white/50 relative">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-14 items-stretch">

                    {/* Left: Playlist */}
                    <div className="flex flex-col">
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-ink-primary">
                                Native Understanding
                            </h2>
                            <p className="text-ink-secondary font-normal tracking-wide text-base leading-relaxed">
                                Most AI fails at accents and mixed languages. Ours thrives on them.
                                Listen to raw audio samples below.
                            </p>
                        </div>

                        <div className="space-y-3 flex-1">
                            {DEMOS.map((demo, idx) => (
                                <button
                                    key={demo.id}
                                    onClick={() => togglePlay(idx)}
                                    className={cn(
                                        "w-full text-left p-5 rounded-xl border transition-all flex items-center justify-between group",
                                        activeDemo === idx
                                            ? "bg-white border-black/10 shadow-md ring-1 ring-black/5"
                                            : "glass-panel bg-white/40 border-transparent hover:bg-white/60"
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm",
                                            activeDemo === idx ? "bg-black text-white" : "bg-white text-ink-secondary group-hover:scale-110"
                                        )}>
                                            {activeDemo === idx && isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                                        </div>
                                        <div>
                                            <div className={cn("font-bold text-base transition-colors", activeDemo === idx ? "text-ink-primary" : "text-ink-secondary")}>
                                                {demo.title}
                                            </div>
                                            <div className="text-sm text-ink-tertiary">{demo.desc}</div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-mono text-ink-tertiary px-2.5 py-1 rounded-full bg-black/5">{demo.duration}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visualizer & Transcript */}
                    <div className="relative flex flex-col">
                        {/* Soft Glow behind */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-purple-200 blur-[60px] rounded-full opacity-40" />

                        <div className="relative glass-panel bg-white/80 rounded-2xl p-7 flex-1 flex flex-col shadow-xl">
                            {/* Visualizer Header */}
                            <div className="flex justify-between items-center mb-5 border-b border-black/5 pb-4">
                                <div className="flex items-center gap-2 text-xs font-bold text-ink-tertiary uppercase tracking-widest">
                                    <MessageSquare className="w-4 h-4 text-ink-primary" />
                                    Live Transcript
                                </div>
                                {isPlaying && (
                                    <div className="flex items-end gap-0.5 h-4">
                                        {[1, 2, 3, 2, 1, 3, 1].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: [3, h * 4, 3] }}
                                                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                                                className="w-0.5 bg-black rounded-full"
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Transcript Body */}
                            <div className="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-2">
                                {DEMOS[activeDemo].transcript.map((line, i) => (
                                    <motion.div
                                        key={activeDemo + i}
                                        initial={{ opacity: 0, x: line.role === "ai" ? 10 : -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (i * 0.5) }}
                                        className={cn(
                                            "max-w-[85%] rounded-lg p-4 text-base leading-relaxed shadow-sm",
                                            line.role === "ai"
                                                ? "ml-auto bg-black text-white rounded-tr-sm"
                                                : "bg-white text-ink-primary border border-black/5 rounded-tl-sm"
                                        )}
                                    >
                                        <div className={cn("text-[10px] font-bold opacity-60 mb-1.5 uppercase tracking-wide", line.role === "ai" ? "text-white" : "text-ink-tertiary")}>
                                            {line.role === "ai" ? "iOrderAI" : "Customer"}
                                        </div>
                                        {line.text}
                                    </motion.div>
                                ))}
                            </div>

                            {/* Playback Controls (Visual) */}
                            <div className="mt-5 pt-4 border-t border-black/5 flex items-center gap-3 text-xs text-ink-tertiary font-mono">
                                <span>00:00</span>
                                <div className="flex-1 h-1.5 bg-black/5 rounded-full overflow-hidden">
                                    <motion.div
                                        animate={{ width: isPlaying ? "100%" : "0%" }}
                                        transition={{ duration: 10, ease: "linear" }}
                                        className="h-full bg-black"
                                    />
                                </div>
                                <span>{DEMOS[activeDemo].duration}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
