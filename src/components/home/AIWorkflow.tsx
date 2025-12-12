"use client";
import { motion } from "framer-motion";
import { Bot, Zap, Database, Users, GitBranch, MessageSquare, FileText, Settings, CheckCircle, Slack, BarChart3 } from "lucide-react";

// Workflow Node Component
function WorkflowNode({ 
    icon: Icon, 
    label, 
    sublabel,
    color = "primary",
    delay = 0,
    isMain = false,
    className = ""
}: { 
    icon: React.ElementType; 
    label: string; 
    sublabel?: string;
    color?: "primary" | "purple" | "orange" | "green" | "blue" | "pink" | "cyan";
    delay?: number;
    isMain?: boolean;
    className?: string;
}) {
    const colorClasses = {
        primary: "border-primary/50 bg-primary/10",
        purple: "border-purple-500/50 bg-purple-500/10",
        orange: "border-orange-500/50 bg-orange-500/10",
        green: "border-green-500/50 bg-green-500/10",
        blue: "border-blue-500/50 bg-blue-500/10",
        pink: "border-pink-500/50 bg-pink-500/10",
        cyan: "border-cyan-500/50 bg-cyan-500/10",
    };

    const iconColors = {
        primary: "text-primary",
        purple: "text-purple-400",
        orange: "text-orange-400",
        green: "text-green-400",
        blue: "text-blue-400",
        pink: "text-pink-400",
        cyan: "text-cyan-400",
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`relative ${className}`}
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                className={`${isMain ? 'px-4 py-3' : 'p-3'} rounded-xl border ${colorClasses[color]} backdrop-blur-sm flex items-center gap-3 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-${color}/20`}
            >
                <div className={`${isMain ? 'w-10 h-10' : 'w-8 h-8'} rounded-lg bg-black/50 flex items-center justify-center`}>
                    <Icon className={`${isMain ? 'w-5 h-5' : 'w-4 h-4'} ${iconColors[color]}`} />
                </div>
                <div className="text-left">
                    <p className={`${isMain ? 'text-sm' : 'text-xs'} font-medium text-white`}>{label}</p>
                    {sublabel && <p className="text-[10px] text-white/50">{sublabel}</p>}
                </div>
            </motion.div>
        </motion.div>
    );
}

// Animated Connection Line
function ConnectionLine({ 
    direction = "horizontal",
    animated = true,
    delay = 0,
    className = ""
}: {
    direction?: "horizontal" | "vertical" | "diagonal-down" | "diagonal-up";
    animated?: boolean;
    delay?: number;
    className?: string;
}) {
    const lineClass = direction === "horizontal" 
        ? "w-8 sm:w-12 h-0.5" 
        : direction === "vertical" 
        ? "w-0.5 h-8 sm:h-12" 
        : "w-12 h-12";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay }}
            className={`relative ${className}`}
        >
            {direction === "horizontal" && (
                <div className={`${lineClass} bg-white/20 relative overflow-hidden rounded-full`}>
                    {animated && (
                        <motion.div
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay }}
                            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
                        />
                    )}
                </div>
            )}
            {direction === "vertical" && (
                <div className={`${lineClass} bg-white/20 relative overflow-hidden rounded-full`}>
                    {animated && (
                        <motion.div
                            animate={{ y: ["-100%", "200%"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay }}
                            className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-primary to-transparent"
                        />
                    )}
                </div>
            )}
            {(direction === "diagonal-down" || direction === "diagonal-up") && (
                <svg width="48" height="48" viewBox="0 0 48 48" className="text-white/20">
                    <motion.path
                        d={direction === "diagonal-down" ? "M 0 0 Q 24 24 48 48" : "M 0 48 Q 24 24 48 0"}
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay }}
                    />
                </svg>
            )}
        </motion.div>
    );
}

// Branch Split Indicator
function BranchSplit({ delay = 0 }: { delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay }}
            className="relative"
        >
            <div className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                <GitBranch className="w-5 h-5 text-green-400" />
            </div>
            <div className="absolute -top-1 -right-1 px-1.5 py-0.5 bg-green-500 rounded text-[8px] font-bold text-black">
                IF
            </div>
        </motion.div>
    );
}

// Connector Dot
function ConnectorDot({ delay = 0, className = "" }: { delay?: number; className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay }}
            className={`w-3 h-3 rounded-full bg-white/30 border-2 border-white/50 ${className}`}
        />
    );
}

export function AIWorkflow() {
    return (
        <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                backgroundSize: '24px 24px'
            }} />
            
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0a1628]/80 border border-white/10 mb-6 shadow-lg">
                        <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center">
                            <Zap className="w-3 h-3 text-white/80" />
                        </div>
                        <span className="text-sm text-white/80 font-medium tracking-wide">Next-Gen AI Automation</span>
                        <span className="text-white/40">·</span>
                        <span className="text-sm text-white/60">Trusted by 230+ Companies</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="text-white">Visual </span>
                        <span className="text-gradient">AI Workflows</span>
                        <span className="text-white"> That Scale</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
                        Connect your apps, automate processes, and let AI handle the complexity. No coding required.
                    </p>
                </motion.div>

                {/* Workflow Diagram - Desktop */}
                <div className="hidden lg:block">
                    <div className="max-w-5xl mx-auto p-8 rounded-2xl glass border border-white/10 relative overflow-hidden">
                        {/* Row 1: Main Flow */}
                        <div className="flex items-center justify-center gap-2 mb-8">
                            {/* Trigger */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -left-2 -top-2 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                                    <Zap className="w-2.5 h-2.5 text-white" />
                                </div>
                                <WorkflowNode 
                                    icon={MessageSquare} 
                                    label="Form Submission" 
                                    sublabel="Trigger"
                                    color="orange"
                                    delay={0.1}
                                />
                            </motion.div>

                            <ConnectionLine direction="horizontal" delay={0.2} />
                            <ConnectorDot delay={0.25} />
                            <ConnectionLine direction="horizontal" delay={0.3} />

                            {/* AI Agent - Main Node */}
                            <WorkflowNode 
                                icon={Bot} 
                                label="AI Agent" 
                                sublabel="Tools Agent"
                                color="primary"
                                delay={0.4}
                                isMain
                            />

                            <ConnectionLine direction="horizontal" delay={0.5} />
                            <ConnectorDot delay={0.55} />
                            <ConnectionLine direction="horizontal" delay={0.6} />

                            {/* Branch Decision */}
                            <BranchSplit delay={0.7} />

                            {/* Two Branches */}
                            <div className="flex flex-col gap-4 ml-2">
                                {/* True Branch */}
                                <div className="flex items-center gap-2">
                                    <div className="text-[10px] text-green-400 font-medium px-1.5 py-0.5 bg-green-500/20 rounded">TRUE</div>
                                    <ConnectionLine direction="horizontal" delay={0.8} />
                                    <WorkflowNode 
                                        icon={Slack} 
                                        label="Add to Channel" 
                                        sublabel="invite: channel"
                                        color="pink"
                                        delay={0.9}
                                    />
                                </div>
                                {/* False Branch */}
                                <div className="flex items-center gap-2">
                                    <div className="text-[10px] text-red-400 font-medium px-1.5 py-0.5 bg-red-500/20 rounded">FALSE</div>
                                    <ConnectionLine direction="horizontal" delay={1.0} />
                                    <WorkflowNode 
                                        icon={Users} 
                                        label="Update Profile" 
                                        sublabel="updateProfile: user"
                                        color="pink"
                                        delay={1.1}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Connected Tools (Below AI Agent) */}
                        <div className="flex justify-center">
                            <div className="flex items-start gap-16">
                                {/* Model Connection */}
                                <div className="flex flex-col items-center gap-2">
                                    <div className="text-[10px] text-white/40 font-medium">Model</div>
                                    <ConnectionLine direction="vertical" delay={0.5} />
                                    <WorkflowNode 
                                        icon={Bot} 
                                        label="Anthropic" 
                                        sublabel="Chat Model"
                                        color="purple"
                                        delay={0.6}
                                    />
                                </div>

                                {/* Memory Connection */}
                                <div className="flex flex-col items-center gap-2">
                                    <div className="text-[10px] text-white/40 font-medium">Memory</div>
                                    <ConnectionLine direction="vertical" delay={0.6} />
                                    <WorkflowNode 
                                        icon={Database} 
                                        label="Postgres" 
                                        sublabel="Chat Memory"
                                        color="cyan"
                                        delay={0.7}
                                    />
                                </div>

                                {/* Tools */}
                                <div className="flex flex-col items-center gap-2">
                                    <div className="text-[10px] text-white/40 font-medium">Tools</div>
                                    <ConnectionLine direction="vertical" delay={0.7} />
                                    <div className="flex gap-3">
                                        <WorkflowNode 
                                            icon={Users} 
                                            label="Microsoft" 
                                            sublabel="getAll: user"
                                            color="blue"
                                            delay={0.8}
                                        />
                                        <WorkflowNode 
                                            icon={Settings} 
                                            label="Jira" 
                                            sublabel="create: user"
                                            color="blue"
                                            delay={0.9}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Animated Particles */}
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-primary rounded-full"
                                animate={{
                                    x: [0, 100, 200, 300, 400],
                                    y: [50, 50, 50, i % 2 === 0 ? 30 : 70, i % 2 === 0 ? 30 : 70],
                                    opacity: [0, 1, 1, 1, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    delay: i * 0.6,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{ top: '30%', left: '10%' }}
                            />
                        ))}
                    </div>
                </div>

                {/* Workflow Diagram - Mobile */}
                <div className="lg:hidden">
                    <div className="max-w-sm mx-auto p-4 sm:p-6 rounded-2xl glass border border-white/10">
                        <div className="space-y-4">
                            {/* Trigger */}
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="absolute -left-1 -top-1 w-3 h-3 bg-orange-500 rounded-full flex items-center justify-center">
                                        <Zap className="w-2 h-2 text-white" />
                                    </div>
                                    <WorkflowNode 
                                        icon={MessageSquare} 
                                        label="Form Trigger" 
                                        color="orange"
                                        delay={0.1}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <ConnectionLine direction="vertical" delay={0.2} />
                            </div>

                            {/* AI Agent */}
                            <WorkflowNode 
                                icon={Bot} 
                                label="AI Agent" 
                                sublabel="Process & Decide"
                                color="primary"
                                delay={0.3}
                                isMain
                            />

                            {/* Connected Tools Row */}
                            <div className="flex justify-center gap-2 py-2">
                                <WorkflowNode icon={Bot} label="AI Model" color="purple" delay={0.4} />
                                <WorkflowNode icon={Database} label="Memory" color="cyan" delay={0.5} />
                            </div>

                            <div className="flex justify-center">
                                <ConnectionLine direction="vertical" delay={0.6} />
                            </div>

                            {/* Branch */}
                            <div className="flex justify-center">
                                <BranchSplit delay={0.7} />
                            </div>

                            {/* Outcomes */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <div className="text-[10px] text-green-400 font-medium text-center">✓ TRUE</div>
                                    <WorkflowNode 
                                        icon={Slack} 
                                        label="Add to Channel" 
                                        color="pink"
                                        delay={0.8}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="text-[10px] text-red-400 font-medium text-center">✗ FALSE</div>
                                    <WorkflowNode 
                                        icon={Users} 
                                        label="Update Profile" 
                                        color="pink"
                                        delay={0.9}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
                >
                    {[
                        { icon: Bot, value: "50+", label: "AI Models" },
                        { icon: Zap, value: "200+", label: "Integrations" },
                        { icon: BarChart3, value: "70%", label: "Time Saved" },
                        { icon: CheckCircle, value: "99.9%", label: "Uptime" },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                            className="p-4 sm:p-5 rounded-xl glass border border-white/10 text-center hover:border-primary/30 transition-all duration-300"
                        >
                            <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                            <p className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</p>
                            <p className="text-xs sm:text-sm text-white/60">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
