import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Terms of Service - Nexiler",
    description: "Read our terms of service and understand the guidelines for using Nexiler's digital services.",
    openGraph: {
        title: "Terms of Service - Nexiler",
        description: "Read our terms of service and understand the guidelines for using Nexiler's digital services.",
        type: "website",
    },
};

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
                
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
                        <span className="text-gradient">Terms of Service</span>
                    </h1>
                    <p className="text-white/60 text-center mb-12">Last updated: December 12, 2025</p>

                    <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-10">
                        <p className="text-white/80 text-center">
                            📤 <strong className="text-white">Quick Summary:</strong> We believe in clear, fair agreements. These terms protect both you and us, ensuring a smooth working relationship. If you have any questions, we&apos;re always happy to explain.
                        </p>
                    </div>

                    <div className="space-y-8 text-white/80 leading-relaxed">
                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">1</span>
                                Acceptance of Terms
                            </h2>
                            <p>
                                By engaging Nexiler for any services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
                                These terms apply to all services provided by Nexiler including but not limited to web development, AI automation, branding, video editing, SEO, and consulting services.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">2</span>
                                Services We Provide
                            </h2>
                            <p className="mb-4">
                                Nexiler is a digital services agency specializing in:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Website Development and Web Applications</li>
                                <li>AI Automation and Chatbot Integration</li>
                                <li>Brand Identity and Graphic Design</li>
                                <li>Video Editing (Short-form and Long-form Content)</li>
                                <li>Motion Graphics and 3D Visualization</li>
                                <li>SEO Optimization and Digital Marketing</li>
                                <li>Social Media Ads Management</li>
                                <li>Custom Software Development and API Integration</li>
                            </ul>
                            <p className="mt-4">
                                Service scope, deliverables, and timelines will be outlined in individual project proposals or contracts.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">3</span>
                                Project Engagement Process
                            </h2>
                            <p className="mb-4">Our standard engagement process includes:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Consultation:</strong> Free initial consultation to understand your requirements</li>
                                <li><strong>Proposal:</strong> Detailed project proposal with scope, timeline, and pricing</li>
                                <li><strong>Agreement:</strong> Signed agreement and initial payment to begin work</li>
                                <li><strong>Execution:</strong> Project development with regular updates and milestones</li>
                                <li><strong>Delivery:</strong> Final delivery upon completion and approval</li>
                                <li><strong>Support:</strong> Post-delivery support as specified in your package</li>
                            </ul>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">4</span>
                                Client Responsibilities
                            </h2>
                            <p className="mb-4">To ensure successful project delivery, clients agree to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide accurate and complete project requirements</li>
                                <li>Supply all necessary content, assets, and access credentials in a timely manner</li>
                                <li>Respond to communications and feedback requests within reasonable timeframes</li>
                                <li>Review and approve deliverables at each milestone</li>
                                <li>Make payments according to the agreed schedule</li>
                                <li>Not share confidential project details or access credentials with unauthorized parties</li>
                            </ul>
                            <p className="mt-4">
                                Delays caused by late client responses or missing information may affect project timelines and are not the responsibility of Nexiler.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">5</span>
                                Payment Terms
                            </h2>
                            <p className="mb-4">Payment terms vary by project type:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>One-Time Projects:</strong> Typically 50% upfront, 50% upon completion (may vary based on project size)</li>
                                <li><strong>Monthly Retainers:</strong> Full payment due at the beginning of each billing cycle</li>
                                <li><strong>Custom Projects:</strong> Payment schedule as specified in the project agreement</li>
                            </ul>
                            <p className="mt-4 mb-4">Additional terms:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Invoices are due within 7 days of issue unless otherwise specified</li>
                                <li>Late payments may result in project suspension until payment is received</li>
                                <li>We accept payments via bank transfer, PayPal, Wise, or other agreed methods</li>
                                <li>All prices are in USD unless otherwise specified</li>
                                <li>Clients are responsible for any applicable taxes in their jurisdiction</li>
                            </ul>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">6</span>
                                Revisions and Changes
                            </h2>
                            <p className="mb-4">
                                Each project includes a specified number of revision rounds as outlined in your package or proposal:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Minor revisions within scope are included in the project cost</li>
                                <li>Major scope changes or additional features will be quoted separately</li>
                                <li>Revision requests should be consolidated and submitted clearly</li>
                                <li>Additional revisions beyond the included rounds may incur extra charges</li>
                            </ul>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">7</span>
                                Intellectual Property
                            </h2>
                            <p className="mb-4">Upon full payment:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Client receives full ownership of custom-developed deliverables (websites, designs, etc.)</li>
                                <li>Client receives necessary licenses for any third-party assets used</li>
                                <li>Nexiler retains the right to showcase work in our portfolio unless otherwise agreed</li>
                                <li>Pre-existing Nexiler tools, frameworks, or code libraries remain our intellectual property</li>
                            </ul>
                            <p className="mt-4">
                                Until full payment is received, all deliverables remain the property of Nexiler.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">8</span>
                                Confidentiality
                            </h2>
                            <p>
                                Both parties agree to maintain the confidentiality of any proprietary information, business strategies, 
                                access credentials, and trade secrets shared during the course of our engagement. This obligation survives 
                                the completion or termination of services. We will never share your data with third parties without your explicit consent.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">9</span>
                                Project Cancellation
                            </h2>
                            <p className="mb-4">
                                If you need to cancel a project:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Before work begins:</strong> Full refund of any payments made</li>
                                <li><strong>After work has started:</strong> Payment is due for work completed to date</li>
                                <li><strong>Monthly retainers:</strong> Cancel with 30 days written notice; no refund for current billing period</li>
                            </ul>
                            <p className="mt-4">
                                Nexiler reserves the right to cancel projects if clients fail to meet their responsibilities or breach these terms, 
                                with payment due for all work completed.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">10</span>
                                Limitation of Liability
                            </h2>
                            <p>
                                Nexiler shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                                including but not limited to loss of profits, data, or business opportunities. Our total liability shall not 
                                exceed the amount paid by you for the specific service giving rise to the claim. We are not responsible for 
                                issues arising from third-party services, hosting providers, or platforms beyond our control.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">11</span>
                                Warranties and Disclaimers
                            </h2>
                            <p className="mb-4">
                                Nexiler provides services with professional skill and care. However:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>We do not guarantee specific business results, rankings, or ROI</li>
                                <li>SEO and marketing results depend on many factors beyond our control</li>
                                <li>Third-party platforms may change their policies or algorithms</li>
                                <li>We provide technical support for the duration specified in your package</li>
                            </ul>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">12</span>
                                Dispute Resolution
                            </h2>
                            <p>
                                In case of any disputes, both parties agree to first attempt resolution through good-faith negotiation. 
                                If a resolution cannot be reached, disputes shall be settled through mediation or arbitration. 
                                These terms shall be governed by applicable international business laws.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">13</span>
                                Changes to Terms
                            </h2>
                            <p>
                                We may update these Terms of Service from time to time to reflect changes in our services or legal requirements. 
                                Material changes will be communicated via email or our website. Continued use of our services after such changes 
                                constitutes acceptance of the updated terms.
                            </p>
                        </section>

                        <section className="p-6 rounded-xl bg-primary/10 border border-primary/30">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-primary/30 flex items-center justify-center text-primary text-sm font-bold">14</span>
                                Contact Us
                            </h2>
                            <p>
                                For questions, concerns, or clarifications about these Terms of Service, please contact us at:{" "}
                                <a href="mailto:contact@nexiler.tech" className="text-primary hover:underline">
                                    contact@nexiler.tech
                                </a>
                            </p>
                            <p className="mt-4">
                                We are committed to maintaining transparent and fair business practices with all our clients.
                            </p>
                        </section>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
