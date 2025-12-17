import { Metadata } from "next";

// Base configuration
const siteConfig = {
  name: "Nexiler",
  description: "We help businesses grow through intelligent automation, modern web development, and strategic digital solutions. Transform your operations and scale your success with Nexiler.",
  url: "https://nexiler.tech",
  ogImage: "https://nexiler.tech/og-image.jpg",
  keywords: [
    "business growth",
    "automation solutions",
    "web development",
    "digital transformation",
    "business automation",
    "custom software",
    "mobile app development",
    "process automation",
    "tech solutions",
    "enterprise solutions",
    "automation services",
    "consulting",
    "growth strategies",
    "digital solutions",
    "business scaling"
  ],
  creator: "Nexiler",
  authors: [{ name: "Nexiler Team", url: "https://nexiler.tech" }],
  twitter: {
    creator: "@nexiler",
    site: "@nexiler",
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
  title: "Grow Your Business with Smart Automation & Web Solutions",
  description: "Nexiler helps businesses unlock growth through intelligent automation, stunning websites, and strategic digital solutions. Trusted by 230+ companies worldwide. Start your transformation today.",
  path: "",
  keywords: ["business growth", "automation", "web development", "digital solutions"],
});

// About page metadata
export const aboutMetadata = generateMetadata({
  title: "About Us | Your Growth Partner",
  description: "Nexiler is on a mission to help businesses grow through smart automation and modern development. Meet our team of experts dedicated to your success.",
  path: "/about",
  keywords: ["about nexiler", "growth partner", "automation experts", "development team"],
});

// Services page metadata
export const servicesMetadata = generateMetadata({
  title: "Our Services | Automation, Web Development & More",
  description: "From intelligent automation to custom web development, we offer comprehensive services to help your business grow. Scalable solutions tailored to your needs.",
  path: "/services",
  keywords: ["automation services", "web development", "custom software", "API integration", "consulting"],
});

// Our Work page metadata
export const portfolioMetadata = generateMetadata({
  title: "Our Work | Success Stories & Client Projects",
  description: "Explore our portfolio of successful projects. See how we have helped businesses grow through automation, web development, and digital transformation.",
  path: "/our-work",
  keywords: ["our work", "case studies", "success stories", "client projects", "portfolio"],
});

// Pricing page metadata
export const pricingMetadata = generateMetadata({
  title: "Pricing | Transparent & Affordable Plans",
  description: "Flexible pricing plans for businesses of all sizes. From startups to enterprises, find the perfect plan to grow your business. Free consultation included.",
  path: "/pricing",
  keywords: ["pricing", "plans", "affordable", "business packages", "growth plans"],
});

// Blog page metadata
export const blogMetadata = generateMetadata({
  title: "Blog | Insights & Tips for Business Growth",
  description: "Stay updated with the latest insights on automation, web development, and digital strategies. Expert tips to help your business grow faster.",
  path: "/blogs",
  keywords: ["blog", "business insights", "tech articles", "growth tips", "development guides"],
});

// Contact page metadata
export const contactMetadata = generateMetadata({
  title: "Contact Us | Get Your Free Consultation",
  description: "Ready to grow your business? Contact Nexiler for a free consultation. We respond within 24 hours. Let us discuss how we can help you succeed.",
  path: "/contact",
  keywords: ["contact", "free consultation", "get in touch", "business inquiry"],
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
  foundingDate: "2023",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "contact@nexiler.tech",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://twitter.com/nexiler",
    "https://linkedin.com/company/nexiler",
    "https://github.com/nexiler",
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
