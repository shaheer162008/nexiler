import Link from "next/link";
import { Logo } from "./Logo";
import { Twitter, Linkedin, Github, Mail, Instagram, Facebook, Youtube } from "lucide-react";

const footerLinks = {
    company: [
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Blog", href: "/blogs" },
    ],
    resources: [
        { label: "Case Studies", href: "/portfolio" },
        { label: "Pricing", href: "/pricing" },
        { label: "Free Consultation", href: "/consultation" },
        { label: "Contact", href: "/contact" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Cookie Policy", href: "/cookie-policy" },
    ],
};

const socialLinks = [
    { Icon: Twitter, href: "https://x.com/NexilerOfficial", label: "Twitter" },
    { Icon: Youtube, href: "https://www.youtube.com/@Nexiler.Official", label: "Youtube" },
    // { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    // { Icon: Github, href: "https://github.com", label: "GitHub" },
    { Icon: Instagram, href: "https://www.instagram.com/nexiler.official?igsh=MXdzMXB2ejM2ODZ3bw==", label: "Instagram" },
    { Icon: Mail, href: "mailto:info@nexiler.com", label: "Email" },
    { Icon: Facebook, href: "https://www.facebook.com/share/1APYFEoejH/", label: "Facebook" },
    
];

export const Footer = () => {
    return (
        <footer className="border-t border-white/10 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 sm:col-span-2">
                        <Logo className="mb-4" />
                        <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
                            Transforming businesses with cutting-edge AI automation and custom solutions.
                            Your partner in digital transformation.
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            {socialLinks.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95"
                                    aria-label={label}
                                >
                                    <Icon size={18} className="sm:w-5 sm:h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base">Company</h3>
                        <ul className="space-y-2.5 sm:space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-primary text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base">Resources</h3>
                        <ul className="space-y-2.5 sm:space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-primary text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base">Legal</h3>
                        <ul className="space-y-2.5 sm:space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-primary text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                    <p className="text-white/40 text-xs sm:text-sm text-center sm:text-left">
                        © {new Date().getFullYear()} Nexiler. All rights reserved.
                    </p>
                    <p className="text-white/40 text-xs sm:text-sm text-center sm:text-right">
                        Created by Team Nexiler
                    </p>
                </div>
            </div>
        </footer>
    );
};
