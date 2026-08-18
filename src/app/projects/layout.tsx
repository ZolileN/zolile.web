import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Projects | ${siteConfig.name}`,
  description: `Explore ${siteConfig.name}'s portfolio of AI infrastructure, enterprise systems, fintech products, and digital solutions built in Cape Town, South Africa.`,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description: `Flagship projects and product architectures by ${siteConfig.name} (${siteConfig.alternateName}).`,
    url: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
