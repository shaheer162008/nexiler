"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { CTA } from "@/components/home/CTA";
import { Bot, Code, Box, Video, Palette, Search, Share2, Wrench, Globe, Zap, Settings, Film, CheckCircle2, ArrowRight, Users, Star, Shield, Plug, Layers } from "lucide-react";
import Link from "next/link";

interface ServiceData {
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    pricing: string;
    pricingRange?: string;
    pricingDetails?: string;
    features: string[];
    benefits: string[];
}

const serviceIcons: Record<string, React.ElementType> = {
    "website-development": Globe,
    "ai-automation-setup": Bot,
    "ai-chatbot-integration": Zap,
    "full-brand-creation": Settings,
    "motion-graphics": Video,
    "video-editing-short": Film,
    "video-editing-long": Film,
    "ai-automation-maintenance": Wrench,
    "seo-optimization": Search,
    "social-media-ads": Share2,
    "graphic-design": Palette,
    "website-maintenance": Wrench,
    "3d-modeling": Box,
    "api-integration": Plug,
    "custom-software": Layers,
};

const gradients: Record<string, string> = {
    "website-development": "from-blue-500 to-cyan-500",
    "ai-automation-setup": "from-purple-500 to-pink-500",
    "ai-chatbot-integration": "from-cyan-500 to-blue-500",
    "full-brand-creation": "from-orange-500 to-red-500",
    "motion-graphics": "from-green-500 to-teal-500",
    "video-editing-short": "from-pink-500 to-purple-500",
    "video-editing-long": "from-pink-500 to-purple-500",
    "ai-automation-maintenance": "from-green-500 to-cyan-500",
    "seo-optimization": "from-teal-500 to-green-500",
    "social-media-ads": "from-indigo-500 to-purple-500",
    "graphic-design": "from-red-500 to-pink-500",
    "website-maintenance": "from-yellow-500 to-orange-500",
    "3d-modeling": "from-blue-500 to-indigo-500",
    "api-integration": "from-emerald-500 to-teal-500",
    "custom-software": "from-violet-500 to-purple-500",
};

export function ServiceDetailClient({ service }: { service: ServiceData }) {
    const Icon = serviceIcons[service.slug] || Code;
    const gradient = gradients[service.slug] || "from-primary to-cyan-500";

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link 
                            href="/services" 
                            className="inline-flex items-center gap-2 text-white/60 hover:text-primary mb-6 transition-colors group"
                        >
                            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            <span className="text-sm">All Services</span>
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex items-start gap-5 mb-6"
                        >
                            {/* Icon */}
                            <div className={`p-4 rounded-xl bg-gradient-to-br ${gradient}`}>
                                <Icon size={32} className="text-white" />
                            </div>
                            
                            <div className="flex-1">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                                    {service.title}
                                </h1>
                                <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                                    {service.longDescription}
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="mb-8"
                        >
                            <div className="inline-flex items-center gap-4 sm:gap-6 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <Star size={16} className="text-primary" />
                                    <span className="text-sm text-white/70">98% Satisfaction</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users size={16} className="text-primary" />
                                    <span className="text-sm text-white/70">50+ Projects</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield size={16} className="text-primary" />
                                    <span className="text-sm text-white/70">Quality Guaranteed</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                        >
                            <Link
                                href="/contact"
                                className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-semibold text-sm sm:text-base hover:bg-white/20 hover:border-white/50 transition-all duration-500 inline-flex items-center justify-center gap-2"
                            >
                                Get Free Consultation
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-semibold text-sm sm:text-base hover:bg-white/20 hover:border-white/50 transition-all duration-500 inline-flex items-center justify-center"
                            >
                                Contact Us
                            </Link>
                        </motion.div>

                        {/* Pricing Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="mt-6"
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-primary/30">
                                <span className="text-sm text-white/60">Starting from</span>
                                <span className="text-sm font-bold text-primary">{service.pricingRange || service.pricing}</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features & Benefits */}
            <section className="py-12 sm:py-16 md:py-20 relative">
                <div className="container mx-auto px-4 sm:px-6">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10 sm:mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                            <span className="text-white">Everything You </span>
                            <span className="text-gradient">Need</span>
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            Comprehensive features and benefits designed to deliver exceptional results
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {/* What's Included */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group p-6 sm:p-8 rounded-2xl glass border border-white/10 hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-2 rounded-lg bg-gradient-to-br ${gradient}`}>
                                    <CheckCircle2 size={20} className="text-white" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white">
                                    What&apos;s Included
                                </h2>
                            </div>
                            <ul className="space-y-4">
                                {service.features.map((feature, i) => (
                                    <motion.li 
                                        key={i} 
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                        className="flex items-start gap-3 group/item"
                                    >
                                        <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform" />
                                        <span className="text-white/80 group-hover/item:text-white transition-colors">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Key Benefits */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group p-6 sm:p-8 rounded-2xl glass border border-white/10 hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-2 rounded-lg bg-gradient-to-br ${gradient}`}>
                                    <Star size={20} className="text-white" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white">
                                    Key Benefits
                                </h2>
                            </div>
                            <ul className="space-y-4">
                                {service.benefits.map((benefit, i) => (
                                    <motion.li 
                                        key={i} 
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.05 }}
                                        className="flex items-start gap-3 group/item"
                                    >
                                        <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform" />
                                        <span className="text-white/80 group-hover/item:text-white transition-colors">{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTA />

            <Newsletter />
            <Footer />
        </main>
    );
}
