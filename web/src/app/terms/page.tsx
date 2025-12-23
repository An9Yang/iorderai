import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function TermsAndConditions() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-32 pb-20 px-6 bg-background">
                <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">Terms and Conditions</h1>
                <p className="text-muted-foreground mb-12 text-lg">Last Updated: December 2025</p>

                <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                        <p>
                            Welcome to iOrderAI which belongs to SJ FUND LLC ("we," "our," "us"). These Terms and Conditions ("Terms") govern your access to and use of our AI-powered ordering platform, including our website, mobile application, voice ordering system, API, and related services (collectively, the "Services").
                        </p>
                        <p className="mt-4">
                            By accessing or using our Services, you ("you," "your," "User") agree to be bound by these Terms and our Privacy Policy. If you are using the Services on behalf of a restaurant or other business entity, you represent and warrant that you have the authority to bind that entity to these Terms, and "you" will refer to that entity. If you do not agree to these Terms, you may not access or use our Services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Services</h2>
                        <p className="mb-4">Our Services provide an artificial intelligence platform that enables restaurants to accept and manage customer orders placed through various digital channels, including but not limited to:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Our branded website and mobile app.</li>
                            <li>Integrated third-party platforms (e.g., delivery partners, social media).</li>
                            <li>Voice-activated devices and systems.</li>
                            <li>QR code-based menu and ordering.</li>
                        </ul>
                        <p>The Services include order processing, payment facilitation, menu management, customer data analytics, and other related features.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts and Registration</h2>
                        <p className="mb-4">To use certain features of the Services, you must register for an account. You agree to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide accurate, current, and complete information during the registration process.</li>
                            <li>Maintain and promptly update your account information to keep it accurate and complete.</li>
                            <li>Maintain the security of your password and accept all risks of unauthorized access to your account.</li>
                            <li>Notify us immediately of any unauthorized use of your account or any other security breach.</li>
                            <li>You are responsible for all activities that occur under your account.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">4. Orders and Payments</h2>
                        <div className="space-y-4">
                            <p><strong>4.1 Order Placement:</strong> Orders placed through our AI system are binding. You, as the restaurant, are responsible for fulfilling orders accepted through the Services. We act as a facilitator and are not a party to the transaction between you and the end-customer.</p>
                            <p><strong>4.2 Menu and Pricing:</strong> You are solely responsible for the accuracy, description, pricing, and availability of all menu items listed on the Services. You must promptly update your menu to reflect changes.</p>
                            <p><strong>4.3 Payment Processing:</strong> We may use third-party payment processors to handle all transactions. By using the Services, you agree to the terms and conditions of our payment processors. All fees are subject to applicable taxes.</p>
                            <p><strong>4.4 Service Fees:</strong> You agree to pay us the service fees as outlined in your separate Service Agreement or pricing plan. Fees may be deducted directly from your transaction proceeds before settlement.</p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">5. The AI System: Disclaimers and Limitations</h2>
                        <div className="space-y-4">
                            <p><strong>5.1 AI is Not Perfect:</strong> You acknowledge that our Services utilize artificial intelligence and machine learning. While we strive for accuracy, the AI may occasionally misinterpret complex orders, accents, background noise, or custom requests. We do not guarantee 100% order accuracy.</p>
                            <p><strong>5.2 Your Responsibility for Verification:</strong> It is your responsibility to verify the details of each order received through our system before fulfillment. We recommend implementing a simple confirmation process (e.g., a kitchen ticket or digital alert) to catch any potential AI errors.</p>
                            <p><strong>5.3 Continuous Improvement:</strong> You agree that data from orders (anonymized and aggregated in accordance with our Privacy Policy) may be used to train and improve our AI models.</p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
                        <p className="mb-4"><strong>6.1 Our IP:</strong> The Services, including our AI technology, software, logos, trademarks, and all content therein, are and will remain the exclusive property of SJ FUND LLC and its licensors.</p>
                        <p><strong>6.2 Your IP:</strong> You retain all intellectual property rights in your menu items, restaurant name, logo, and branding ("Restaurant Content"). By submitting Restaurant Content to the Services, you grant us a worldwide, non-exclusive, royalty-free license to use, display, and reproduce such content for the sole purpose of providing the Services to you.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Privacy and Security</h2>
                        <p className="mb-4">We are committed to protecting your data and the data of your customers. Our collection, use, and disclosure of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>
                        <div className="bg-slate-100 p-6 rounded-xl border-l-4 border-primary">
                            <p>No mobile information will be shared with third parties/ affiliates for marketing or promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
                        </div>
                        <p className="mt-4">You agree to comply with all applicable data privacy laws in your use of the Services. You are responsible for ensuring you have a lawful basis to provide end-customer data to us and for providing appropriate notices to your customers regarding the processing of their data through our platform.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">8. Your Responsibilities and Conduct</h2>
                        <p className="mb-4">You agree not to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Use the Services for any illegal or unauthorized purpose.</li>
                            <li>Upload any content that is unlawful, offensive, or infringes on any third-party rights.</li>
                            <li>Interfere with or disrupt the integrity or performance of the Services.</li>
                            <li>Attempt to gain unauthorized access to the Services or its related systems or networks.</li>
                            <li>Use the AI system to generate fraudulent orders or engage in any fraudulent activity.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">9. Disclaimer of Warranties</h2>
                        <div className="bg-slate-50 p-6 rounded-lg uppercase text-sm tracking-wide text-slate-800 leading-relaxed font-medium">
                            THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY ACCURATE.
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">10. Limitation of Liability</h2>
                        <div className="bg-slate-50 p-6 rounded-lg uppercase text-sm tracking-wide text-slate-800 leading-relaxed font-medium">
                            TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL SJ FUND LLC, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                            <br /><br />
                            (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES;
                            <br />
                            (II) ANY AI-RELATED ORDER ERRORS OR MISINTERPRETATIONS;
                            <br />
                            (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS AND/OR ANY PERSONAL INFORMATION STORED THEREIN.
                            <br /><br />
                            OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE TOTAL AMOUNT OF FEES PAID BY YOU TO US IN THE SIX (6) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE CLAIM.
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">11. Indemnification</h2>
                        <p>You agree to defend, indemnify, and hold harmless SJ FUND LLC and its affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from: (a) your use of and access to the Services; (b) your violation of any term of these Terms; (c) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or (d) any claim that your Restaurant Content caused damage to a third party.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">12. Termination</h2>
                        <p>We may suspend or terminate your account and access to the Services at any time for any reason, including if you breach these Terms. Upon termination, your right to use the Services will immediately cease.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">13. Governing Law and Dispute Resolution</h2>
                        <p>These Terms shall be governed by the laws of [Your State/ Country], without regard to its conflict of law provisions. Any dispute arising from these Terms shall be resolved through final and binding arbitration in [Your City, State/Country] in accordance with the rules of [e.g., the American Arbitration Association].</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">14. Changes to Terms</h2>
                        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of material changes by posting the new Terms on our website or via email. By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">15. Contact Information</h2>
                        <p>If you have any questions about these Terms, please contact us at: <strong>support@iorderai.com</strong></p>
                    </section>
                </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
