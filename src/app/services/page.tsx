"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { CTA } from "@/components/home/CTA";
import { ArrowRight, Sparkles, Code, Zap, MessageCircle, Palette, Film, Wrench, TrendingUp, Share2, Paintbrush, Box, Plug, Smartphone, Settings, BarChart3, Mail } from "lucide-react";
import Link from "next/link";
import { servicesContent } from "@/lib/siteContent";

const getServiceIcon = (slug: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
        "website-development": Code,
        "ai-automation-setup": Zap,
        "ai-chatbot-integration": MessageCircle,
        "full-brand-creation": Palette,
        "motion-graphics": Film,
        "video-editing-short": Film,
        "video-editing-long": Film,
        "ai-automation-maintenance": Wrench,
        "seo-optimization": TrendingUp,
        "social-media-ads": Share2,
        "graphic-design": Paintbrush,
        "website-maintenance": Wrench,
        "3d-modeling": Box,
        "api-integration": Plug,
        "mobile-app-development": Smartphone,
        "custom-software": Settings,
        "data-analytics": BarChart3,
        "email-marketing": Mail,
    };
    return iconMap[slug] || Code;
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Premium Hero Section */}
            <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/3 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    {/* Header Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center mb-6 sm:mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full border border-primary/40 bg-primary/5 backdrop-blur-sm">
                            <Sparkles size={16} className="text-primary" />
                            <span className="text-xs sm:text-sm text-white/80 font-medium">15+ Premium Services</span>
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-[1.1]">
                                <span className="text-white">Our Premium </span>
                                <span className="text-gradient">Services</span>
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                                Comprehensive solutions engineered for excellence and designed to drive measurable business growth.
                            </p>
                            <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/60">
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                    98% Satisfaction Rate
                                </span>
                                <span className="hidden sm:flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                    50+ Projects Success
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Premium Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
                        {servicesContent.services.map((service, index) => {
                            return (
                                <Link 
                                    key={service.slug} 
                                    href={`/services/${service.slug}`}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        whileHover={{ y: -12, scale: 1.03 }}
                                        className="group relative h-full rounded-2xl overflow-hidden cursor-pointer"
                                    >
                                        {/* Premium Card Background */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/6 to-white/1 border border-white/15 rounded-2xl group-hover:border-primary/40 transition-all duration-500" />
                                        
                                        {/* Luxury Accent Line */}
                                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10 pointer-events-none">
                                            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl" />
                                        </div>

                                        {/* Card Content */}
                                        <div className="relative p-6 sm:p-7 md:p-8 h-full flex flex-col">
                                            {/* Premium Icon from Lucide */}
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.4 }}
                                                className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-white/8 to-white/4 border border-white/8 mb-4 shadow-lg group-hover:shadow-primary/20 group-hover:border-primary/30 transition-all duration-300"
                                                style={{ width: '48px', height: '48px' }}
                                            >
                                                {(() => {
                                                    const IconComponent = getServiceIcon(service.slug);
                                                    return <IconComponent size={28} className="text-primary stroke-[1.5]" />;
                                                })()}
                                            </motion.div>

                                            {/* Title */}
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                                                {service.title}
                                            </h3>
                                            
                                            {/* Description */}
                                            <p className="text-sm sm:text-base text-white/65 leading-relaxed mb-5 line-clamp-3 group-hover:text-white/80 transition-colors duration-300 flex-grow">
                                                {service.description}
                                            </p>

                                            {/* CTA Arrow */}
                                            <motion.div
                                                whileHover={{ x: 6 }}
                                                className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300 mt-auto"
                                            >
                                                <span>Explore Service</span>
                                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                                            </motion.div>
                                        </div>

                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 pointer-events-none">
                                            <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl" />
                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section - Use existing component */}
            <CTA />

            <Newsletter />
            <Footer />
        </main>
    );
}
