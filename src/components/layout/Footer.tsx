import React from "react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-black/5 pt-16 pb-10">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-10 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 group mb-4">
                            <div className="relative w-7 h-7 md:w-8 md:h-8">
                                <img
                                    src="/logo.png"
                                    alt="iOrderAI Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-base md:text-lg font-bold tracking-tight text-ink-primary leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                                    iOrderAI
                                </span>
                                <span className="text-[10px] font-bold tracking-widest uppercase text-ink-tertiary leading-none mt-0.5">
                                    Voice Intelligence
                                </span>
                            </div>
                        </Link>
                        <p className="text-ink-secondary max-w-xs text-base leading-relaxed">
                            Reinventing restaurant communication with AI. Boundless service for the modern dining experience.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-black text-base">Product</h4>
                        <ul className="space-y-3 text-base text-ink-secondary">
                            <li><Link href="#product" className="hover:text-black transition-colors">Features</Link></li>
                            <li><Link href="#roi" className="hover:text-black transition-colors">Pricing & ROI</Link></li>
                            <li><Link href="#how-it-works" className="hover:text-black transition-colors">Integration</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4 text-black text-base">Contact</h4>
                        <ul className="space-y-3 text-base text-ink-secondary">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-ink-tertiary" />
                                <a href="mailto:support@iorderai.com" className="hover:text-black transition-colors">support@iorderai.com</a>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-ink-tertiary" />
                                <span className="">San Francisco, CA</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-tertiary">
                    <p>© 2025 iOrderAI. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-black transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
