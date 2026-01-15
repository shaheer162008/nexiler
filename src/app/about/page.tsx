"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { LinkedInProfile } from "@/components/LinkedInProfile";
import SpecialThanks from "@/components/SpecialThanks";
import CoFoundersSection from "@/components/CoFoundersSection";
import { Target, Users, Zap, Award, Heart, Lightbulb, Globe, ExternalLink } from "lucide-react";
import { teamMembers, teamExpertise } from "@/lib/team";

// Metadata is set in layout.tsx for client components

const values = [
    {
        icon: Lightbulb,
        title: "Problem Solvers",
        description: "We identify root causes and build solutions that work.",
    },
    {
        icon: Users,
        title: "True Partners",
        description: "We act in our clients' long-term interests and share responsibility for results.",
    },
    {
        icon: Globe,
        title: "Transparency",
        description: "Clear communication, fair pricing, and documented decisions.",
    },
    {
        icon: Award,
        title: "Craftsmanship",
        description: "Attention to detail and quality that stands the test of time.",
    },
];

export default function AboutPage() {
    const isOdd = teamMembers.length % 2 === 1;
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6">
                            <span className="text-white">Meet </span>
                            <span className="text-gradient">Virtuo Edge Team</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white/70">
                            A passionate team of developers, designers, and strategists working together to help businesses grow globally.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founder & Origin Story Section */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
                                <span className="text-gradient">Our Story</span>
                            </h2>
                            
                            <div className="space-y-6 text-white/70 text-base sm:text-lg md:text-xl leading-relaxed">
                                <p>
                                    <strong className="text-white">Virtuo Edge is a full-service digital agency</strong> born from a single idea: helping businesses solve real problems by making them truly digital. We combine creativity, technology, and strategic thinking to build digital experiences that drive measurable growth—whether you're a startup finding product-market fit or an established company scaling to the next level.
                                </p>
                                <p>
                                    <strong className="text-white">Virtuo Edge started when a small group of freelancers and digital specialists</strong> saw the same recurring problem: companies were getting beautiful websites and campaigns that looked impressive but failed to solve real business challenges. <strong className="text-white">Founded by Ali Hamza</strong>, Virtuo Edge was created to change that — to deliver digital solutions that are practical, measurable, and aligned with clients' real goals.
                                </p>
                                <p>
                                    Today, our team works as one integrated unit to <strong className="text-white">design, build, and optimize solutions that produce meaningful results.</strong>
                                </p>

                                <p className="text-white/60 italic border-l-4 border-primary/50 pl-4 mt-8 text-base sm:text-lg md:text-xl">
                                    <strong className="text-white">Our Team:</strong> Everyone at Virtuo Edge shares the same values, vision, and commitment to excellence. We work as one team with one goal: to solve your problems and drive your business growth.
                                </p>
                            </div>

                            {/* Vision Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                                <div className="p-4 sm:p-6 rounded-xl glass border border-white/10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <Lightbulb size={24} className="text-primary" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">The Vision</h3>
                                    </div>
                                    <p className="text-sm sm:text-base md:text-lg text-white/60">
                                        To empower every business with digital clarity — turning pain points into scalable opportunities. We envision a world where technology and design work together to solve problems, reduce friction, and unlock sustainable growth for businesses of all sizes.
                                    </p>
                                </div>
                                <div className="p-4 sm:p-6 rounded-xl glass border border-white/10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <Globe size={24} className="text-primary" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">Our Goal</h3>
                                    </div>
                                    <p className="text-sm sm:text-base md:text-lg text-white/60">
                                        To deliver practical, high-quality digital solutions that save time, build trust, and drive revenue. We achieve this by listening first, diagnosing clearly, and executing with craftsmanship, transparency, and accountability.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Co-Founders Section */}
            <CoFoundersSection />

            {/* Team Expertise Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6">
                                <span className="text-white">Our </span>
                                <span className="text-gradient">Expertise</span>
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-white/60">
                                We have experts in every area you need to grow your business
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {teamExpertise.map((expertise, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="px-5 py-3 rounded-full glass border border-white/10 hover:border-primary/50 transition-all"
                            >
                                <span className="text-white/80 text-base sm:text-lg">{expertise}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6">
                                <span className="text-white">Meet the </span>
                                <span className="text-gradient">Team</span>
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed">
                                We are a growing team of 11+ skilled professionals who share one goal, helping your business succeed. 
                                Below are some of our key team members. Each one brings years of experience and a genuine passion for what they do. 
                                We work together, we learn together, and we deliver together.
                                Not all of our team members use LinkedIn; where a profile is available we link to it for convenience.
                            </p>
                        </motion.div>
                    </div>

                    {/* Virtuo Edge Company LinkedIn */}
                    <motion.a
                        href="https://www.linkedin.com/company/virtuoedge"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -8, scale: 1.01 }}
                        className="group block max-w-3xl mx-auto mb-12 rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#0A66C2]/50 transition-all duration-300 cursor-pointer"
                    >
                        {/* Banner */}
                        <div className="relative h-32 sm:h-40 overflow-hidden">
                            <img
                                src="https://media.licdn.com/dms/image/v2/D4D3DAQFLQdOlg3tMmw/image-scale_191_1128/B4DZXm04QWHsAc-/0/1743334378415/virtuo_edge_cover?e=1768680000&v=beta&t=hmdJIc0Qz00LARixWckwmt_TDBhnnKIX180xfV3Yiss"
                                alt="Virtuo Edge Banner"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#00040F] via-transparent to-transparent" />
                        </div>
                        
                        {/* Company Info */}
                        <div className="p-6 flex items-center gap-4">
                            <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-white/20 group-hover:border-[#0A66C2]/50 transition-all shrink-0 bg-white">
                                <img
                                    src="https://media.licdn.com/dms/image/v2/D4D0BAQHugQYCz0D8TQ/company-logo_200_200/company-logo_200_200/0/1738965253639/virtuo_edge_logo?e=1769644800&v=beta&t=AEXfzOChCpmsTWZInPbZhdCtctub6d7IkIZ5LuZlvm0"
                                    alt="Virtuo Edge Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-white group-hover:text-[#0A66C2] transition-colors">
                                    Virtuo Edge
                                </h3>
                                <p className="text-white/60 text-base sm:text-lg">
                                    Full-Service Digital Agency | Web, Design & Business Growth
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-white/50 group-hover:text-[#0A66C2] transition-colors">
                                <span className="hidden sm:inline">Follow on LinkedIn</span>
                                <ExternalLink size={18} />
                            </div>
                        </div>
                    </motion.a>

                    {/* LinkedIn Profile Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {teamMembers.map((member, index) => {
                            // Ali Hamza and Muhammad Rayan - 2 columns
                            const isCentered = false;
                            return (
                                <motion.div
                                    key={member.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={isCentered ? "md:col-span-2 flex justify-center" : ""}
                                >
                                    <div className="w-full max-w-[380px]">
                                        <LinkedInProfile
                                            profileUrl={member.linkedinUrl}
                                            name={member.name}
                                            headline={member.headline || member.role}
                                            imageUrl={member.imageUrl}
                                            isFounder={member.isFounder}
                                            founderBadgeText={member.founderBadgeText}
                                            size="md"
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Special Thanks */}
                    <SpecialThanks />
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                <span className="text-white">Our </span>
                                <span className="text-gradient">Values</span>
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-white/60">
                                The principles that guide everything we do
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-4 sm:p-6 rounded-xl glass border border-white/10 hover:border-primary/50 transition-all text-center"
                            >
                                <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                                    <value.icon size={28} className="text-primary" />
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-white/60 text-sm sm:text-base md:text-lg">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Newsletter />
            <Footer />
        </main>
    );
}
