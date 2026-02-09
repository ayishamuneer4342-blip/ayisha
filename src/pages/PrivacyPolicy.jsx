import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
    return (
        <div className="pt-24 pb-16 bg-white">
            <Helmet>
                <title>Privacy Policy | Ayisha Muneer - Digital Marketing Strategist</title>
                <meta name="description" content="Privacy Policy for Ayisha Muneer's Digital Marketing Services. Learn how we collect, use, and protect your data." />
            </Helmet>

            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-deepBlue-900 mb-8 text-center">Privacy Policy</h1>

                    <div className="prose prose-lg text-slate-600 max-w-none">
                        <p className="mb-6">Last Updated: October 26, 2025</p>

                        <h2 className="text-xl font-bold text-deepBlue-900 mt-8 mb-4">1. Introduction</h2>
                        <p className="mb-4">
                            Welcome to Ayisha Muneer's Digital Marketing Services ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at ayishamuneer4342@gmail.com.
                        </p>

                        <h2 className="text-xl font-bold text-deepBlue-900 mt-8 mb-4">2. Information We Collect</h2>
                        <p className="mb-4">
                            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us.
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Name and Contact Data (email address, phone number, etc.)</li>
                            <li>Business Information (company name, website URL)</li>
                            <li>Any other information you choose to provide directly to us.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-deepBlue-900 mt-8 mb-4">3. How We Use Your Information</h2>
                        <p className="mb-4">
                            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>To facilitate account creation and logon process.</li>
                            <li>To send you marketing and promotional communications.</li>
                            <li>To send administrative information to you.</li>
                            <li>To fulfill and manage your orders.</li>
                        </ul>

                        <h2 className="text-xl font-bold text-deepBlue-900 mt-8 mb-4">4. Sharing Your Information</h2>
                        <p className="mb-4">
                            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal information to third parties.
                        </p>

                        <h2 className="text-xl font-bold text-deepBlue-900 mt-8 mb-4">5. Security of Your Information</h2>
                        <p className="mb-4">
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                        </p>

                        <h2 className="text-xl font-bold text-deepBlue-900 mt-8 mb-4">6. Contact Us</h2>
                        <p className="mb-4">
                            If you have questions or comments about this policy, you may email us at ayishamuneer4342@gmail.com or by post to:
                        </p>
                        <p className="mb-4 font-semibold">
                            Ayisha Muneer<br />
                            147, Emarat Atrium, 1st Floor<br />
                            Sheikh Zayed Road, Dubai, UAE
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
