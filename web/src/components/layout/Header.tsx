"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // No scroll effect needed for style change as it's always an "Island"
    // But we might want to hide it on scroll down or something? 
    // Spec says: "Floating island". Let's keep it simple fixed first.

    const navLinks = [
        { name: "Product", href: "#product" },
        { name: "ROI", href: "#roi" },
        { name: "How it Works", href: "#how-it-works" },
    ];

    return (
        <header className="fixed top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 z-50 flex justify-center pointer-events-none">
            {/* Glass Island Container */}
            <div className="pointer-events-auto bg-header-bg/80 backdrop-blur-xl border border-white/40 shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.06)] rounded-2xl px-4 py-2.5 md:px-6 md:py-3 w-full max-w-5xl flex items-center justify-between transition-all duration-300">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-6 h-6 md:w-7 md:h-7">
                        <img
                            src="/logo.png"
                            alt="iOrderAI Logo"
                            className="w-full h-full object-contain filter drop-shadow-sm"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base md:text-lg font-semibold tracking-tight text-ink-primary leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-500 transition-all duration-300">
                            iOrderAI
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base text-ink-secondary font-medium hover:text-ink-primary transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-orange-400 to-pink-500 transition-all group-hover:w-full duration-300" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link
                        href="#contact"
                        className="px-6 py-2.5 bg-black text-white text-base font-medium rounded-lg hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
                    >
                        Book a Demo
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-ink-primary p-1.5 hover:bg-black/5 rounded-full transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-full left-0 right-0 mt-2 pointer-events-auto mx-4 md:hidden"
                    >
                        <div className="bg-white/90 backdrop-blur-2xl border border-white/50 rounded-xl p-4 shadow-xl flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-ink-primary py-2 px-3 rounded-lg hover:bg-black/5 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-black/5 w-full my-1" />
                            <Link
                                href="#contact"
                                className="w-full text-center px-4 py-2.5 bg-black text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-all active:scale-95"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Book a Demo
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
