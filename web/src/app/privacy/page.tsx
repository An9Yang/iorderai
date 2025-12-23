import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-32 pb-20 px-6 bg-background">
                <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">Privacy Policy</h1>
                <p className="text-muted-foreground mb-12 text-lg">Last Updated: December 2025</p>

                <div className="prose prose-slate prose-lg max-w-none text-slate-600">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                        <p>
                            SJ FUND LLC ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered ordering platform, including our website, mobile application, voice ordering system, API, and related services (collectively, the "Services").
                        </p>
                        <p className="mt-4">
                            Please read this Privacy Policy carefully. By accessing or using our Services, you agree to the terms of this policy. If you do not agree with the practices described in this policy, you should not use our Services.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                        <p className="mb-4">We collect several types of information to provide and improve our Services.</p>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">A. Information You Provide Directly:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Account Information:</strong> When a restaurant registers, we collect business name, address, contact person's name, email, phone number, and tax ID.</li>
                            <li><strong>Menu and Content:</strong> Details about your menu items, including names, descriptions, prices, images, and ingredients.</li>
                            <li><strong>Customer Order Information:</strong> When an end-customer places an order, we collect information necessary to fulfill it, which may include name, delivery address, phone number, and specific order details and preferences.</li>
                            <li><strong>Payment Information:</strong> We work with third-party payment processors. While we facilitate the transaction, we do not store full credit card details on our servers. The processor provides us with a token and limited information for transaction records.</li>
                            <li><strong>Communications:</strong> Records of your correspondence with us, including feedback and support requests.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">B. Information Collected Automatically:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Usage Data:</strong> We collect information on how the Services are accessed and used. This may include your IP address, browser type, device identifiers, operating system, pages visited, clickstream data, and the time and date of your visits.</li>
                            <li><strong>AI Interaction Data:</strong> To improve our AI's accuracy, we may collect and analyze data related to order interactions, including voice recordings (where applicable), transcriptions, and how users modify or correct their orders.</li>
                            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our Services and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>To Provide and Maintain our Services:</strong> including processing and fulfilling orders.</li>
                            <li><strong>To Improve and Train Our AI:</strong> We use order data and interaction patterns (anonymized and aggregated where appropriate) to enhance the accuracy and functionality of our artificial intelligence.</li>
                            <li><strong>To Manage Your Account:</strong> and provide customer support.</li>
                            <li><strong>To Process Transactions:</strong> and send you related information, including confirmations and invoices.</li>
                            <li><strong>To Communicate with You:</strong> including sending you service-related announcements, technical notices, and support messages.</li>
                            <li><strong>For Legal and Security Purposes:</strong> such as fraud prevention, enforcing our terms, and complying with legal obligations.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">4. How We Share Your Information</h2>
                        <p className="mb-4">We do not sell your personal information. We may share the information we collect in the following limited circumstances:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>With Restaurants and End-Customers:</strong> Order details are shared between the restaurant and the customer to facilitate fulfillment.</li>
                            <li><strong>With Service Providers:</strong> We share information with trusted third parties who assist us in operating our Services, such as payment processors, cloud hosting providers, and analytics companies, under strict contractual obligations.</li>
                            <li><strong>For Business Transfers:</strong> In connection with a merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
                            <li><strong>To Comply with Law:</strong> If required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
                            <li><strong>To Protect Rights:</strong> To protect and defend our rights or property, or the safety of our users or the public.</li>
                        </ul>
                        <div className="bg-slate-100 p-6 rounded-xl border-l-4 border-primary">
                            <p className="font-semibold text-foreground">Crucially, and as stated in our Terms:</p>
                            <p className="mt-2">No mobile information (including phone numbers) will be shared with third parties/affiliates for marketing or promotional purposes. Information related to text messaging originator opt-in data and consent will not be shared with any third parties.</p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Retention</h2>
                        <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, or as needed to comply with our legal obligations, resolve disputes, and enforce our agreements. We regularly review our data retention periods.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Privacy Rights</h2>
                        <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, such as:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>The right to access and receive a copy of your personal information.</li>
                            <li>The right to rectify or update inaccurate information.</li>
                            <li>The right to delete your personal information.</li>
                            <li>The right to restrict or object to our processing of your information.</li>
                            <li>The right to data portability.</li>
                        </ul>
                        <p>To exercise these rights, please contact us using the details provided in Section 10. We will respond to your request in accordance with applicable law.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Security</h2>
                        <p>We implement appropriate technical and organizational security measures designed to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">8. International Data Transfers</h2>
                        <p>Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ. By using our Services, you consent to such transfer.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">9. Children's Privacy</h2>
                        <p>Our Services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that a child under 16 has provided us with personal information, we will take steps to delete such information.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Privacy Policy</h2>
                        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy or our data practices, please contact us at: <strong>support@iorderai.com</strong>.</p>
                    </section>
                </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
