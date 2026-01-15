// Team data file - manage all team members here

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    headline?: string; // LinkedIn headline
    linkedinUrl: string;
    imageUrl?: string; // Profile picture URL (optional)
    isFounder?: boolean;
    founderBadgeText?: string; // Custom founder badge text (e.g., "Founder" or "Co-founder")
}

// Maximum allowed characters for a team member's `headline` (tagline).
// Keep `headline` values under this limit to avoid visual overlap in profile cards.
// We recommend keeping taglines concise so they appear on a single line
// across most viewports. Headlines longer than this will be truncated
// with an ellipsis in the UI.
export const MAX_HEADLINE_CHARS = 60;

export const teamMembers: TeamMember[] = [
    {
        id: "ali-hamza",
        name: "Ali Hamza",
        role: "Founder & CEO",
        headline: "Founder & CEO",
        linkedinUrl: "https://www.linkedin.com/in/ali-hamza-link/",
        isFounder: true,
        founderBadgeText: "Founder",
        imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQF45-VNphS-aw/profile-displayphoto-shrink_200_200/B4EZTRO4f0HMAg-/0/1738677132595?e=1769644800&v=beta&t=lBDrZ_P-tqi6DsbY-XhmS0pCjMNXW4LjWbwXXEmIkJI",
    },
    {
        id: "muhammad-rayan",
        name: "Muhammad Rayan",
        role: "Co-founder & Director of Operations",
        headline: "Co-founder & Operations Director",
        linkedinUrl: "https://www.linkedin.com/in/mahummad-rayan-9ba016261/",
        isFounder: true,
        founderBadgeText: "Co-Founder",
        imageUrl: "https://media.licdn.com/dms/image/v2/D4E35AQG2HaTd-dwpSg/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1734793967145?e=1768665600&v=beta&t=5XqFIu_V4XdzeAakW7Kt-HBBK3r2MbP4qbgWj3c6qAU",
    },
];

// Headline character summary (keep <= MAX_HEADLINE_CHARS):
// - Muhammad Shaheer: "Founder & CEO" (18 chars)
// - Saim Khalid: "Full Stack Developer, Next.js" (29 chars)
// - Amir Hamja: "Digital Marketing Specialist" (28 chars)

// Team expertise areas (matches your services)
export const teamExpertise = [
    "Full Stack Web Development",
    "AI & Automation",
    "Graphic Design & Branding",
    "Video Production & Motion Graphics",
    "3D Modeling & Visualization",
    "SEO & Digital Marketing",
];
