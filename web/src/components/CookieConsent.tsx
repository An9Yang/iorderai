"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie, Settings } from "lucide-react";

type CookiePreferences = {
    necessary: boolean;
    analytics: boolean;
    functional: boolean;
    marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
    necessary: true,
    analytics: false,
    functional: false,
    marketing: false,
};

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            setIsVisible(true);
        } else {
            try {
                const savedPreferences = JSON.parse(consent);
                setPreferences(savedPreferences);
            } catch {
                setIsVisible(true);
            }
        }
    }, []);

    const savePreferences = (prefs: CookiePreferences) => {
        localStorage.setItem("cookie_consent", JSON.stringify(prefs));
        localStorage.setItem("cookie_consent_date", new Date().toISOString());
        setIsVisible(false);
    };

    const acceptAll = () => {
        const allAccepted: CookiePreferences = {
            necessary: true,
            analytics: true,
            functional: true,
            marketing: true,
        };
        setPreferences(allAccepted);
        savePreferences(allAccepted);
    };

    const acceptNecessary = () => {
        savePreferences(defaultPreferences);
    };

    const saveCustomPreferences = () => {
        savePreferences(preferences);
        setShowSettings(false);
    };

    const togglePreference = (key: keyof CookiePreferences) => {
        if (key === "necessary") return;
        setPreferences((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
            >
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                        {!showSettings ? (
                            <div className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                                        <Cookie className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-foreground mb-2">
                                            We Value Your Privacy
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our{" "}
                                            <Link href="/cookies" className="text-primary hover:underline">
                                                Cookie Policy
                                            </Link>{" "}
                                            to learn more.
                                        </p>
                                        <div className="flex flex-wrap gap-3">
                                            <button
                                                onClick={acceptAll}
                                                className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                                            >
                                                Accept All
                                            </button>
                                            <button
                                                onClick={acceptNecessary}
                                                className="px-5 py-2.5 bg-slate-100 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors"
                                            >
                                                Necessary Only
                                            </button>
                                            <button
                                                onClick={() => setShowSettings(true)}
                                                className="px-5 py-2.5 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2"
                                            >
                                                <Settings className="w-4 h-4" />
                                                Customize
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-lg font-bold text-foreground">Cookie Settings</h3>
                                    <button
                                        onClick={() => setShowSettings(false)}
                                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                                    >
                                        <X className="w-5 h-5 text-slate-500" />
                                    </button>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <CookieOption
                                        title="Strictly Necessary"
                                        description="These cookies are essential for the website to function properly."
                                        checked={preferences.necessary}
                                        disabled
                                        onChange={() => {}}
                                    />
                                    <CookieOption
                                        title="Analytics"
                                        description="Help us understand how visitors interact with our website."
                                        checked={preferences.analytics}
                                        onChange={() => togglePreference("analytics")}
                                    />
                                    <CookieOption
                                        title="Functional"
                                        description="Enable enhanced functionality and personalization."
                                        checked={preferences.functional}
                                        onChange={() => togglePreference("functional")}
                                    />
                                    <CookieOption
                                        title="Marketing"
                                        description="Used to track visitors for displaying relevant advertisements."
                                        checked={preferences.marketing}
                                        onChange={() => togglePreference("marketing")}
                                    />
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        onClick={saveCustomPreferences}
                                        className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                                    >
                                        Save Preferences
                                    </button>
                                    <button
                                        onClick={acceptAll}
                                        className="px-5 py-2.5 bg-slate-100 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-200 transition-colors"
                                    >
                                        Accept All
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

function CookieOption({
    title,
    description,
    checked,
    disabled = false,
    onChange,
}: {
    title: string;
    description: string;
    checked: boolean;
    disabled?: boolean;
    onChange: () => void;
}) {
    return (
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div className="flex-1 pr-4">
                <h4 className="font-semibold text-foreground text-sm">{title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{description}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                    className="sr-only peer"
                />
                <div className={`w-11 h-6 rounded-full peer transition-colors ${
                    disabled
                        ? "bg-primary cursor-not-allowed"
                        : checked
                            ? "bg-primary"
                            : "bg-slate-300"
                } peer-focus:ring-2 peer-focus:ring-primary/20 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all ${
                    checked ? "after:translate-x-5" : ""
                }`} />
            </label>
        </div>
    );
}
