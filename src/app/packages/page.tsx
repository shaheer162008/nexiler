"use client";
import { motion } from "framer-motion";
import { Check, Sparkles, Rocket, Zap, Crown, Building2, TrendingUp, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";

// One-Time Project Packages - Same UI as Pricing
const oneTimePackages = [
    {
        name: "Starter",
        price: "$1,500",
        priceEnd: "$3,000",
        period: "",
        description: "Essential digital foundation for new businesses and startups",
        features: [
            "Custom Website (4-5 pages)",
            "Basic SEO Setup & Optimization",
            "AI Chatbot (FAQ Bot)",
            "Mobile Responsive Design",
            "10 Social Media Graphics",
            "Contact Form Integration",
            "14 Days Post-Launch Support",
        ],
        popular: false,
    },
    {
        name: "Growth",
        price: "$4,000",
        priceEnd: "$7,500",
        period: "",
        description: "Complete package for businesses ready to scale",
        features: [
            "Custom Website with CMS",
            "AI Automation (2-3 Workflows)",
            "AI Chatbot (Lead Qualification)",
            "Full Brand Identity Package",
            "SEO Strategy & Implementation",
            "Social Media Ads Setup",
            "20 Graphic Designs",
            "Video Editing (10 Shorts)",
            "30 Days Support & Training",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        priceEnd: "",
        period: "Pricing",
        description: "Premium solutions for high-growth businesses",
        features: [
            "Custom Web Application",
            "AI Automation (5+ Workflows)",
            "Multi-channel AI Chatbot",
            "Complete Brand Creation",
            "API & System Integrations",
            "Video Editing (Shorts + Long)",
            "Motion Graphics Package",
            "3D Product Visualization",
            "Dedicated Development Team",
            "60 Days Priority Support",
        ],
        popular: false,
    },
];

// Monthly Retainer Packages - Same UI as Pricing
const monthlyPackages = [
    {
        name: "Essential",
        price: "$800",
        priceEnd: "$1,500",
        period: "/month",
        description: "Ongoing support for small businesses",
        features: [
            "Website Maintenance & Updates",
            "Basic SEO Monitoring",
            "AI Automation Maintenance",
            "10 Social Media Graphics",
            "Monthly Performance Report",
            "Email Support (48hr response)",
        ],
        popular: false,
    },
    {
        name: "Accelerator",
        price: "$2,000",
        priceEnd: "$4,000",
        period: "/month",
        description: "Full marketing & content for growing brands",
        features: [
            "Advanced SEO Strategy",
            "Social Media Ads Management",
            "AI Chatbot Management",
            "Video Editing (15 Shorts)",
            "20 Graphic Designs/month",
            "Content Creation (4 Blogs)",
            "Dedicated Account Manager",
            "Priority Support (24hr)",
        ],
        popular: true,
    },
    {
        name: "Full-Funnel",
        price: "Custom",
        priceEnd: "",
        period: "/month",
        description: "Complete digital management for enterprises",
        features: [
            "Full Brand Management",
            "Advanced AI Automation",
            "Premium SEO Strategy",
            "Social Media Ads (All Platforms)",
            "Video Editing (20 Shorts + 4 Long)",
            "Unlimited Graphic Designs",
            "Website Development & Updates",
            "24/7 Priority Support",
            "Quarterly Strategy Sessions",
        ],
        popular: false,
    },
];

// Individual Service Pricing
const servicePricing = [
    { name: "Website Development", oneTime: "$1,000 - $3,500+", monthly: "Included in packages" },
    { name: "AI Automation Setup", oneTime: "$1,000 - $2,500", monthly: "$400 - $700/mo" },
    { name: "AI Chatbot Integration", oneTime: "$1,000 - $1,800", monthly: "Included in Accelerator+" },
    { name: "Full Brand Creation", oneTime: "$2,500 - $4,500", monthly: "N/A" },
    { name: "Motion Graphics", oneTime: "$400 - $1,200/asset", monthly: "Custom quote" },
    { name: "Video Editing (Short)", oneTime: "$50 - $100/video", monthly: "$800 - $1,500/mo" },
    { name: "Video Editing (Long)", oneTime: "$150 - $300/video", monthly: "$1,200 - $2,500/mo" },
    { name: "SEO Optimization", oneTime: "$500 setup", monthly: "$700 - $1,500/mo" },
    { name: "Social Media Ads", oneTime: "$300 setup", monthly: "$800 - $1,500/mo" },
    { name: "Graphic Design", oneTime: "$30 - $100/design", monthly: "$600 - $1,000/mo" },
    { name: "Website Maintenance", oneTime: "N/A", monthly: "$350 - $600/mo" },
    { name: "3D Modeling", oneTime: "$300 - $1,500", monthly: "Custom quote" },
    { name: "API Integration", oneTime: "$800 - $2,500", monthly: "Included in Enterprise" },
    { name: "Custom Software", oneTime: "$2,000 - $5,000+", monthly: "Custom quote" },
];

export default function PackagesPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-28 sm:pt-32 pb-16 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10 opacity-50" />
                
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                                <Sparkles size={16} className="text-primary" />
                                <span className="text-sm text-primary font-semibold">Transparent Pricing</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                <span className="text-white">Packages Built for </span>
                                <span className="text-gradient">Your Growth</span>
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                                Whether you need a one-time project or ongoing monthly support, we have the perfect package to scale your business.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* One-Time Project Packages */}
            <section className="py-16 sm:py-20 relative">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
                            <Building2 size={16} className="text-primary" />
                            <span className="text-sm text-white/80 font-medium">One-Time Projects</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                            Project-Based Packages
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            Complete solutions for businesses that need specific deliverables. Pay once, own forever.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 xl:gap-6 max-w-6xl mx-auto items-stretch">
                        {oneTimePackages.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative mt-4 rounded-2xl p-5 sm:p-6 lg:p-7 backdrop-blur-sm transition-all duration-300 h-full flex flex-col ${
                                    plan.popular
                                        ? "bg-gradient-to-b from-primary/20 via-primary/10 to-transparent border-2 border-primary/50 shadow-xl shadow-primary/20 lg:scale-[1.03] z-10"
                                        : "bg-white/5 border border-white/10 hover:border-primary/30"
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-4 sm:px-5 py-1 sm:py-1.5 bg-[#00F6FF] rounded-full text-black text-dark font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg">
                                        <Sparkles size={14} />
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-5 sm:mb-6">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-3 sm:mb-4 flex-wrap">
                                        <span className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gradient">
                                            {plan.price}
                                        </span>
                                        {plan.priceEnd && (
                                            <>
                                                <span className="text-xl sm:text-2xl lg:text-2xl font-bold text-white/50 mx-1">–</span>
                                                <span className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gradient">
                                                    {plan.priceEnd}
                                                </span>
                                            </>
                                        )}
                                        {plan.period && (
                                            <span className="text-lg sm:text-xl font-medium text-white/50 ml-1">{plan.period}</span>
                                        )}
                                    </div>
                                    <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                                        {plan.description}
                                    </p>
                                </div>

                                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 grow">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className={`shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${
                                                plan.popular ? "bg-primary/20" : "bg-white/10"
                                            }`}>
                                                <Check size={14} className={plan.popular ? "text-primary" : "text-white"} />
                                            </div>
                                            <span className="text-sm sm:text-base text-white/80 leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/consultation"
                                    className={`block w-full text-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 border-2 ${
                                        plan.popular
                                            ? "bg-primary text-dark border-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50"
                                            : "bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
                                    }`}
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Monthly Retainer Packages */}
            <section className="py-16 sm:py-20 relative">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
                            <TrendingUp size={16} className="text-primary" />
                            <span className="text-sm text-white/80 font-medium">Monthly Retainers</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                            Ongoing Growth Packages
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            Consistent monthly support to keep your business growing. Cancel anytime with 30 days notice.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 xl:gap-6 max-w-6xl mx-auto items-stretch">
                        {monthlyPackages.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative mt-4 rounded-2xl p-5 sm:p-6 lg:p-7 backdrop-blur-sm transition-all duration-300 h-full flex flex-col ${
                                    plan.popular
                                        ? "bg-gradient-to-b from-primary/20 via-primary/10 to-transparent border-2 border-primary/50 shadow-xl shadow-primary/20 lg:scale-[1.03] z-10"
                                        : "bg-white/5 border border-white/10 hover:border-primary/30"
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-4 sm:px-5 py-1 sm:py-1.5 bg-[#00F6FF] rounded-full text-black text-dark font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg">
                                        <Sparkles size={14} />
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-5 sm:mb-6">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-3 sm:mb-4 flex-wrap">
                                        <span className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gradient">
                                            {plan.price}
                                        </span>
                                        {plan.priceEnd && (
                                            <>
                                                <span className="text-xl sm:text-2xl lg:text-2xl font-bold text-white/50 mx-1">–</span>
                                                <span className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gradient">
                                                    {plan.priceEnd}
                                                </span>
                                            </>
                                        )}
                                        {plan.period && (
                                            <span className="text-lg sm:text-xl font-medium text-white/50 ml-1">{plan.period}</span>
                                        )}
                                    </div>
                                    <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                                        {plan.description}
                                    </p>
                                </div>

                                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 grow">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className={`shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${
                                                plan.popular ? "bg-primary/20" : "bg-white/10"
                                            }`}>
                                                <Check size={14} className={plan.popular ? "text-primary" : "text-white"} />
                                            </div>
                                            <span className="text-sm sm:text-base text-white/80 leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/consultation"
                                    className={`block w-full text-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 border-2 ${
                                        plan.popular
                                            ? "bg-primary text-dark border-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50"
                                            : "bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
                                    }`}
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Individual Service Pricing Table */}
            <section className="py-16 sm:py-20 relative">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                            Individual Service Pricing
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            Need just one service? Here&apos;s our transparent pricing for each offering.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10 bg-white/5">
                                        <th className="text-left py-4 px-6 text-white font-semibold">Service</th>
                                        <th className="text-left py-4 px-6 text-white font-semibold">One-Time</th>
                                        <th className="text-left py-4 px-6 text-white font-semibold">Monthly</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {servicePricing.map((service, idx) => (
                                        <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                            <td className="py-4 px-6 text-white/90 font-medium">{service.name}</td>
                                            <td className="py-4 px-6 text-primary">{service.oneTime}</td>
                                            <td className="py-4 px-6 text-white/70">{service.monthly}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Custom Package CTA */}
            <section className="py-16 sm:py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent pointer-events-none" />
                
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="glass rounded-3xl p-8 sm:p-12 border border-primary/20">
                            <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6">
                                <MessageCircle size={40} className="text-primary" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                                Need a <span className="text-gradient">Custom Package</span>?
                            </h2>
                            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
                                Every business is unique. Tell us about your goals and we&apos;ll create a tailored package that fits your exact needs and budget.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/consultation"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-dark font-bold text-base hover:bg-primary/90 shadow-lg shadow-primary/30 transition-all duration-300 border-2 border-primary"
                                >
                                    Get Custom Quote
                                    <ArrowRight size={18} />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-bold text-base border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                                >
                                    Contact Us
                                </Link>
                            </div>
                            <p className="text-white/50 text-sm mt-6">
                                Free consultation • No obligation • Response within 24 hours
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Newsletter />
            <Footer />
        </main>
    );
}
