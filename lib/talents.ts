export type Talent = {
  slug: string;
  name: string;
  role: string;
  rank: string;
  price: string;
  location: string;
  qualification: string;
  stack: string[];
  remark: string;
  summary: string;
  email: string;
  phone: string;
  experience: string;
};

export const talents: Talent[] = [
  {
    slug: "ada-owen",
    name: "Ada Owen",
    role: "Full-stack Creator",
    rank: "Elite",
    price: "$750",
    location: "Lagos, Nigeria",
    qualification: "BSc Computer Science",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
    remark: "Strong product builder with clean UI taste and reliable API delivery.",
    summary: "Builds end-to-end products for startups with a focus on speed and polished UX.",
    email: "ada.owen@example.com",
    phone: "+234 801 234 5678",
    experience: "4+ years",
  },
  {
    slug: "mike-ade",
    name: "Mike Ade",
    role: "Full-stack Creator",
    rank: "Pro",
    price: "$520",
    location: "Abuja, Nigeria",
    qualification: "BEng Software Engineering",
    stack: ["React", "Express", "MongoDB", "TypeScript"],
    remark: "Solid on dashboards, auth flows, and fast feature shipping.",
    summary: "Good fit for internal tools, admin panels, and MVPs that need a steady hand.",
    email: "mike.ade@example.com",
    phone: "+234 802 987 1122",
    experience: "3+ years",
  },
  {
    slug: "sade-kelvin",
    name: "Sade Kelvin",
    role: "Full-stack Creator",
    rank: "Senior",
    price: "$900",
    location: "Remote",
    qualification: "MSc Information Systems",
    stack: ["Next.js", "Prisma", "Supabase", "Framer Motion"],
    remark: "Works well on premium landing pages and SaaS frontends with sharp attention to detail.",
    summary: "Best for teams that need a creator who can design, build, and refine without hand-holding.",
    email: "sade.kelvin@example.com",
    phone: "+1 555 201 4488",
    experience: "6+ years",
  },
  {
    slug: "chioma-nelson",
    name: "Chioma Nelson",
    role: "Full-stack Creator",
    rank: "Growth",
    price: "$390",
    location: "Port Harcourt, Nigeria",
    qualification: "BSc Software Engineering",
    stack: ["React", "Firebase", "CSS", "API Integration"],
    remark: "Best for straightforward builds, integrations, and polished MVP execution.",
    summary: "Ideal for businesses that need practical delivery without heavy process.",
    email: "chioma.nelson@example.com",
    phone: "+234 803 445 7788",
    experience: "2+ years",
  },
];

