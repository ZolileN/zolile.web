export const INDEXNOW_KEY = "7f3a9c2e1b8d4f6a";

export const siteConfig = {
  name: "Zolile Nonzapa",
  alternateName: "Zolile Nonzaba",
  title: "Zolile Nonzapa | Technical Founder & Systems Architect",
  description:
    "Zolile Nonzapa (also known as Zolile Nonzaba) is a Full-Stack Developer, AWS AI Practitioner, and IT Consultant based in Cape Town, South Africa. Founder of Mintry Fabric and PraxisOne.",
  shortDescription:
    "Full-Stack Developer, AWS AI Practitioner, and IT Consultant. Building AI infrastructure, enterprise systems, and digital products.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://dev.mlkcomputer.com",
  jobTitle: "Technical Founder & Systems Architect",
  email: "zolile@mlkcomputer.com",
  telephone: "+27825319901",
  image: "/images/zolile-nonzapa.jpg",
  locale: "en_ZA",
  location: {
    locality: "Cape Town",
    region: "Western Cape",
    country: "ZA",
  },
  worksFor: {
    name: "MLK Computer Consulting",
    url: "https://mlkcomputer.com",
  },
  founded: ["Mintry Fabric", "PraxisOne"],
  sameAs: [
    "https://github.com/ZolileN",
    "https://www.linkedin.com/in/zolile-nonzapa-95b92140/",
    "https://mlkcomputer.com",
    "https://cal.com/zolile-nonzaba",
  ],
  keywords: [
    "Zolile Nonzapa",
    "Zolile Nonzaba",
    "Technical Founder",
    "Systems Architect",
    "Full-Stack Developer",
    "AWS AI Practitioner",
    "IT Consultant",
    "AI Infrastructure",
    "Mintry Fabric",
    "PraxisOne",
    "MLK Computer Consulting",
    "Cape Town Developer",
    "South Africa Tech Founder",
  ],
} as const;

export function absoluteUrl(path = ""): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path) return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export const indexablePaths = ["/", "/zolile-nonzapa", "/projects"] as const;

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    url: absoluteUrl("/zolile-nonzapa"),
    mainEntityOfPage: absoluteUrl("/zolile-nonzapa"),
    image: absoluteUrl(siteConfig.image),
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    knowsAbout: [
      "AI Infrastructure",
      "Enterprise Systems",
      "Financial Technology",
      "Full-Stack Development",
      "Systems Architecture",
      "AWS AI",
      "Data Analytics",
    ],
    worksFor: {
      "@type": "Organization",
      name: siteConfig.worksFor.name,
      url: siteConfig.worksFor.url,
    },
    founder: siteConfig.founded.map((name) => ({
      "@type": "Organization",
      name,
    })),
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.locality,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    sameAs: siteConfig.sameAs,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} — Portfolio`,
    alternateName: `${siteConfig.alternateName} — Portfolio`,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-ZA",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      alternateName: siteConfig.alternateName,
      url: siteConfig.url,
    },
  };
}

export function profilePageJsonLd() {
  const profileUrl = absoluteUrl("/zolile-nonzapa");
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: siteConfig.title,
    url: profileUrl,
    description: siteConfig.description,
    mainEntity: {
      "@type": "Person",
      name: siteConfig.name,
      alternateName: siteConfig.alternateName,
      url: profileUrl,
      image: absoluteUrl(siteConfig.image),
      jobTitle: siteConfig.jobTitle,
    },
  };
}

export function getSearchEngineVerification() {
  const google = process.env.GOOGLE_SITE_VERIFICATION;
  const bing = process.env.BING_SITE_VERIFICATION;

  return {
    ...(google ? { google } : {}),
    ...(bing ? { other: { "msvalidate.01": bing } } : {}),
  };
}
