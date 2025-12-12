import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesContent } from "@/lib/siteContent";
import { ServiceDetailClient } from "@/components/ServiceDetailClient";

// SEO metadata for each service
const serviceMetadata: Record<string, { title: string; description: string; keywords: string[] }> = {
    "website-development": {
        title: "Website Development Services - Custom Web Design",
        description: "Professional website development with modern technologies. Custom designs, SEO optimization, and responsive layouts that convert visitors into customers.",
        keywords: ["website development", "web design", "custom website", "responsive design", "e-commerce website", "Next.js development"],
    },
    "ai-automation-setup": {
        title: "AI Automation Setup - Workflow Automation Services",
        description: "Intelligent AI automation setup to streamline operations. Reduce costs by 70% with custom workflow automation and lead generation systems.",
        keywords: ["ai automation", "workflow automation", "business automation", "lead generation automation", "crm automation"],
    },
    "ai-chatbot-integration": {
        title: "AI Chatbot Integration - 24/7 Customer Support Automation",
        description: "Smart AI chatbot integration for automated customer support and lead qualification. Multi-channel deployment with natural language understanding.",
        keywords: ["ai chatbot", "chatbot integration", "automated customer support", "lead qualification", "conversational ai"],
    },
    "full-brand-creation": {
        title: "Full Brand Creation - Complete Brand Identity Services",
        description: "Complete brand creation from logo to messaging. Professional brand identity, visual guidelines, and all assets to establish your unique presence.",
        keywords: ["brand creation", "brand identity", "logo design", "brand guidelines", "visual identity", "brand strategy"],
    },
    "motion-graphics": {
        title: "Motion Graphics Services - Professional Animation",
        description: "High-quality motion graphics and animation for explainer videos, ads, and engaging visual content that captivates audiences.",
        keywords: ["motion graphics", "animation services", "explainer videos", "2d animation", "product animation"],
    },
    "video-editing-short": {
        title: "Short Video Editing - Reels, TikTok, Shorts Editing",
        description: "Professional editing for viral short-form content. Transform raw footage into engaging Reels, TikToks, and Shorts that drive engagement.",
        keywords: ["video editing", "reels editing", "tiktok editing", "shorts editing", "social media video", "short form content"],
    },
    "video-editing-long": {
        title: "Long Video Editing - YouTube & Podcast Editing Services",
        description: "Comprehensive editing for YouTube videos, podcasts, and webinars. Professional quality with fast turnaround for content creators.",
        keywords: ["youtube editing", "podcast editing", "long form video", "video production", "content creator editing"],
    },
    "ai-automation-maintenance": {
        title: "AI Automation Maintenance - Ongoing Support & Optimization",
        description: "Monthly AI automation maintenance with 24/7 monitoring, optimization, and priority support to keep systems running at peak efficiency.",
        keywords: ["automation maintenance", "ai support", "system monitoring", "automation optimization", "technical support"],
    },
    "seo-optimization": {
        title: "SEO Optimization Services - Rank Higher on Google",
        description: "Comprehensive SEO services to dominate search rankings. Technical SEO, content optimization, and link building for long-term organic growth.",
        keywords: ["seo services", "search engine optimization", "seo strategy", "google ranking", "organic traffic", "local seo"],
    },
    "social-media-ads": {
        title: "Social Media Ads Management - Facebook, Instagram Ads",
        description: "Expert social media advertising management. Full-service campaign strategy, creative, and optimization to maximize ROI on all platforms.",
        keywords: ["social media ads", "facebook ads", "instagram ads", "paid social", "social media marketing", "ad management"],
    },
    "graphic-design": {
        title: "Graphic Design Services - Professional Design for Marketing",
        description: "Professional graphic design for social media, ads, and marketing materials. Consistent branding with fast turnaround and unlimited revisions.",
        keywords: ["graphic design", "social media design", "marketing design", "ad design", "brand design", "visual design"],
    },
    "website-maintenance": {
        title: "Website Maintenance Services - Security & Support",
        description: "Monthly website maintenance to keep your site secure, fast, and updated. Regular backups, security monitoring, and technical support.",
        keywords: ["website maintenance", "website support", "security updates", "website backup", "site maintenance"],
    },
    "3d-modeling": {
        title: "3D Modeling & Visualization - Photorealistic 3D Renders",
        description: "Professional 3D modeling and visualization services. Photorealistic product renders, architectural visualization, and AR/VR content creation.",
        keywords: ["3d modeling", "3d visualization", "product rendering", "architectural visualization", "3d animation"],
    },
    "api-integration": {
        title: "API Integration & Development - Connect Your Apps",
        description: "Connect your apps and automate data flow with custom API solutions. REST & GraphQL APIs, payment gateways, CRM integrations and more.",
        keywords: ["api integration", "api development", "rest api", "graphql", "payment gateway integration", "crm integration"],
    },
    "custom-software": {
        title: "Custom Software Solutions - Bespoke Web Applications",
        description: "Bespoke web apps, dashboards, and tools built exactly for your business needs. From internal tools to enterprise solutions.",
        keywords: ["custom software", "web application", "business software", "admin dashboard", "enterprise solutions"],
    },
};

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesContent.services.find(s => s.slug === slug);
    
    if (!service) {
        return {
            title: "Service Not Found | Nexiler",
            description: "The requested service could not be found.",
        };
    }

    const meta = serviceMetadata[slug] || {
        title: service.title,
        description: service.longDescription,
        keywords: [service.title.toLowerCase(), "nexiler"],
    };

    return {
        title: `${meta.title} | Nexiler`,
        description: meta.description,
        keywords: meta.keywords,
        openGraph: {
            title: `${meta.title} | Nexiler`,
            description: meta.description,
            url: `https://nexiler.tech/services/${slug}`,
            siteName: "Nexiler",
            type: "website",
            images: [
                {
                    url: "https://nexiler.tech/og-services.jpg",
                    width: 1200,
                    height: 630,
                    alt: meta.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${meta.title} | Nexiler`,
            description: meta.description,
            images: ["https://nexiler.tech/og-services.jpg"],
        },
        alternates: {
            canonical: `https://nexiler.tech/services/${slug}`,
        },
    };
}

// Generate static params for all services
export async function generateStaticParams() {
    return servicesContent.services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const service = servicesContent.services.find(s => s.slug === slug);

    if (!service) {
        notFound();
    }

    return <ServiceDetailClient service={service} />;
}
