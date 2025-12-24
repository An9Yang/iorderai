import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function CookiePolicy() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-32 pb-20 px-6 bg-background">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">Cookie Policy</h1>
                    <p className="text-muted-foreground mb-12 text-lg">Last Updated: December 2025</p>

                    <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies</h2>
                            <p>
                                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site. Cookies help us enhance your experience on our website and deliver personalized content.
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Cookies</h2>
                            <p className="mb-4">We use cookies for various purposes, including:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation, secure areas access, and remembering your preferences.</li>
                                <li><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.</li>
                                <li><strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization, such as remembering your language preferences or region.</li>
                                <li><strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites to display relevant advertisements. They help us measure the effectiveness of our marketing campaigns.</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Types of Cookies We Use</h2>

                            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">A. Strictly Necessary Cookies</h3>
                            <p className="mb-4">These cookies are essential for you to browse the website and use its features. Without these cookies, services like shopping carts and secure login cannot be provided.</p>
                            <div className="bg-slate-50 p-4 rounded-lg mb-6">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-2 font-semibold">Cookie Name</th>
                                            <th className="text-left py-2 font-semibold">Purpose</th>
                                            <th className="text-left py-2 font-semibold">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-2">session_id</td>
                                            <td className="py-2">Maintains user session</td>
                                            <td className="py-2">Session</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2">cookie_consent</td>
                                            <td className="py-2">Stores cookie preferences</td>
                                            <td className="py-2">1 year</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">B. Analytics Cookies</h3>
                            <p className="mb-4">These cookies collect information about how you use our website, such as which pages you visit most often.</p>
                            <div className="bg-slate-50 p-4 rounded-lg mb-6">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-2 font-semibold">Cookie Name</th>
                                            <th className="text-left py-2 font-semibold">Purpose</th>
                                            <th className="text-left py-2 font-semibold">Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="py-2">_ga</td>
                                            <td className="py-2">Google Analytics - distinguishes users</td>
                                            <td className="py-2">2 years</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2">_gid</td>
                                            <td className="py-2">Google Analytics - distinguishes users</td>
                                            <td className="py-2">24 hours</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. Third-Party Cookies</h2>
                            <p className="mb-4">Some cookies are placed by third-party services that appear on our pages. We use third-party cookies for:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior.</li>
                                <li><strong>Social Media:</strong> To enable sharing of content on social media platforms.</li>
                                <li><strong>Payment Processing:</strong> To facilitate secure payment transactions.</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Managing Your Cookie Preferences</h2>
                            <p className="mb-4">You have several options for managing cookies:</p>

                            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">A. Through Our Cookie Banner</h3>
                            <p className="mb-4">When you first visit our website, you will see a cookie consent banner that allows you to accept or customize your cookie preferences. You can change your preferences at any time by clicking on the "Cookie Settings" link in the footer of our website.</p>

                            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">B. Through Your Browser Settings</h3>
                            <p className="mb-4">Most web browsers allow you to control cookies through their settings. You can:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>View what cookies are stored on your device</li>
                                <li>Delete all or specific cookies</li>
                                <li>Block all cookies or cookies from specific websites</li>
                                <li>Set your browser to notify you when a cookie is being set</li>
                            </ul>
                            <p>Please note that blocking or deleting cookies may affect your experience on our website and limit certain functionalities.</p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights Under GDPR and CCPA</h2>
                            <p className="mb-4">Depending on your location, you may have the following rights regarding cookies and personal data:</p>

                            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">For EU/EEA Residents (GDPR)</h3>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Right to be informed about how your data is used</li>
                                <li>Right to access your personal data</li>
                                <li>Right to rectification of inaccurate data</li>
                                <li>Right to erasure ("right to be forgotten")</li>
                                <li>Right to restrict processing</li>
                                <li>Right to data portability</li>
                                <li>Right to object to processing</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">For California Residents (CCPA)</h3>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Right to know what personal information is collected</li>
                                <li>Right to know whether personal information is sold or disclosed</li>
                                <li>Right to say no to the sale of personal information</li>
                                <li>Right to access personal information</li>
                                <li>Right to equal service and price</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">7. Do Not Track Signals</h2>
                            <p>Some browsers have a "Do Not Track" feature that signals to websites that you do not want to have your online activity tracked. Our website currently does not respond to "Do Not Track" signals, but you can manage your cookie preferences as described above.</p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to This Cookie Policy</h2>
                            <p>We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.</p>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Us</h2>
                            <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us at: <strong>support@iorderai.com</strong></p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
