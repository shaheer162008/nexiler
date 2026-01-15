import { Metadata } from "next";

// Base configuration
const siteConfig = {
  name: "Virtuo Edge",
  description: "We help businesses solve real problems through digital transformation. Full-service digital agency with web, design, and growth solutions.",
  url: "https://virtuoedge.tech",
  ogImage: "https://virtuoedge.tech/og-image.jpg",
  keywords: [
    "digital agency",
    "web development",
    "UI/UX design",
    "branding",
    "digital marketing",
    "business growth",
    "custom website",
    "digital transformation",
    "business solutions",
    "creative design",
    "web design",
    "digital strategy",
    "growth strategies",
    "digital solutions",
    "business scaling"
  ],
  creator: "Virtuo Edge",
  authors: [{ name: "Virtuo Edge Team", url: "https://virtuoedge.com" }],
  twitter: {
    creator: "@virtuoedge",
    site: "@virtuoedge",
  },
};

// Generate metadata for pages
export function generateMetadata({
  title,
  description,
  image,
  path = "",
  keywords = [],
  noIndex = false,
}: {
  title: string;
  description?: string;
  image?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const pageUrl = `${siteConfig.url}${path}`;
  const pageImage = image || siteConfig.ogImage;
  const pageDescription = description || siteConfig.description;
  const allKeywords = [...siteConfig.keywords, ...keywords];

  return {
    title: `${title} | ${siteConfig.name}`,
    description: pageDescription,
    keywords: allKeywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: pageUrl,
      title: `${title} | ${siteConfig.name}`,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description: pageDescription,
      images: [pageImage],
      creator: siteConfig.twitter.creator,
      site: siteConfig.twitter.site,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    verification: {
      google: "your-google-verification-code", // Add your Google Search Console verification code
      yandex: "your-yandex-verification-code", // Add if needed
      yahoo: "your-yahoo-verification-code", // Add if needed
    },
  };
}

// Home page metadata
export const homeMetadata = generateMetadata({
  title: "Virtuo Edge - Full-Service Digital Agency",
  description: "Build smarter with Virtuo Edge. Web development, design, branding, and growth strategies for businesses of all sizes.",
  path: "",
  keywords: [
    "Virtuo Edge",
    "digital agency",
    "web development",
    "UI/UX design",
    "branding agency",
    "digital marketing",
    "web design services",
    "business growth",
  ],
});

// About page metadata
export const aboutMetadata = generateMetadata({
  title: "About Us | Virtuo Edge - Your Digital Partner",
  description: "We help businesses solve real problems through digital transformation. Meet Ali Hamza and Muhammad Rayan, the founders.",
  path: "/about",
  keywords: ["about virtuo edge", "digital agency", "growth partners", "our team"],
});

// Services page metadata
export const servicesMetadata = generateMetadata({
  title: "Our Services | Web Development, Automation & Growth",
  description: "From custom websites to workflow automation, we offer services that help your business scale. Real solutions for real growth.",
  path: "/services",
  keywords: ["web development", "automation", "custom software", "business growth", "digital services"],
});

// Our Work page metadata
export const portfolioMetadata = generateMetadata({
  title: "Our Work | Projects That Deliver Results",
  description: "See how we've helped businesses grow. Real projects, real results. From websites to automation systems.",
  path: "/our-work",
  keywords: ["portfolio", "case studies", "our work", "client projects", "success stories"],
});

// Pricing page metadata
export const pricingMetadata = generateMetadata({
  title: "Pricing | Clear, Honest Pricing",
  description: "Transparent pricing for businesses of all sizes. No hidden fees. Free consultation to get you started.",
  path: "/pricing",
  keywords: ["pricing", "packages", "plans", "affordable", "business pricing"],
});

// Blog page metadata
export const blogMetadata = generateMetadata({
  title: "Blog | Business Growth Tips & Tech Insights",
  description: "Practical advice on growing your business with technology. Tips on automation, web development, and digital strategy.",
  path: "/blogs",
  keywords: ["blog", "business tips", "tech insights", "growth strategies", "automation guides"],
});

// Contact page metadata
export const contactMetadata = generateMetadata({
  title: "Contact Us | Let's Talk About Your Project",
  description: "Ready to grow your business? Get in touch for a free consultation. We respond fast and we're here to help.",
  path: "/contact",
  keywords: ["contact", "get in touch", "free consultation", "business inquiry"],
});

// Generate dynamic blog post metadata
export function generateBlogMetadata(slug: string, title: string, excerpt: string, image?: string) {
  return generateMetadata({
    title,
    description: excerpt,
    path: `/blogs/${slug}`,
    image,
    keywords: ["blog post", title.toLowerCase()],
  });
}

// Structured data (JSON-LD) for organization
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
  foundingDate: "2024",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "contact@virtuoedge.com",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://twitter.com/virtuoedge",
    "https://linkedin.com/company/virtuoedge",
    "https://github.com/virtuo-edge",
  ],
};

// Structured data for services
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Automation & Custom Development",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI & Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "API Integration",
        },
      },
    ],
  },
};

export { siteConfig };
