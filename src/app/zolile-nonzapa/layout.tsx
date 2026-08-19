import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Technical Founder & Systems Architect`,
  description: `Official profile of ${siteConfig.name} (also known as ${siteConfig.alternateName}), a Full-Stack Developer, AWS AI Practitioner, and IT Consultant in Cape Town, South Africa. Founder of Mintry Fabric and PraxisOne.`,
  alternates: {
    canonical: "/zolile-nonzapa",
  },
  openGraph: {
    title: `${siteConfig.name} — Technical Founder & Systems Architect`,
    description: `Official profile of ${siteConfig.name} (${siteConfig.alternateName}). Building AI infrastructure, enterprise systems, and digital products in Cape Town, South Africa.`,
    url: "/zolile-nonzapa",
    type: "profile",
    images: [
      {
        url: absoluteUrl(siteConfig.image),
        width: 400,
        height: 400,
        alt: `${siteConfig.name}, ${siteConfig.jobTitle}`,
      },
    ],
  },
};

export default function ZolileNonzapaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
