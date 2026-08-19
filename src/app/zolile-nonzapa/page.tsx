import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/seo";

export default function ZolileNonzapaPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-[900px] mx-auto px-6">
          <header className="flex flex-col sm:flex-row items-start gap-8 mb-12 pb-12 border-b border-border-custom">
            <div className="relative w-28 h-28 rounded-2xl overflow-hidden border border-border-custom shrink-0">
              <Image
                src={siteConfig.image}
                alt={`${siteConfig.name}, ${siteConfig.jobTitle}`}
                fill
                className="object-cover object-top"
                sizes="112px"
                priority
              />
            </div>
            <div className="space-y-3">
              <p className="font-mono text-[10px] text-accent font-semibold tracking-widest uppercase">
                Official Profile
              </p>
              <h1 className="font-space text-4xl sm:text-5xl font-bold text-white tracking-tight">
                {siteConfig.name}
              </h1>
              <p className="text-text-secondary font-mono text-sm">
                Also known as {siteConfig.alternateName}
              </p>
              <p className="text-accent font-space text-lg font-semibold">
                {siteConfig.jobTitle}
              </p>
              <p className="text-text-secondary text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                Cape Town, South Africa
              </p>
            </div>
          </header>

          <article className="space-y-8 text-text-secondary leading-relaxed">
            <section className="space-y-4">
              <h2 className="font-space text-2xl font-bold text-white">
                About Zolile Nonzapa
              </h2>
              <p>
                <strong className="text-white">Zolile Nonzapa</strong> is a Technical Founder
                and Systems Architect based in Cape Town, South Africa. Also known as{" "}
                <strong className="text-white">Zolile Nonzaba</strong>, he designs, builds, and
                deploys the core systems and AI infrastructure that businesses depend on — from
                enterprise operating systems and fintech ledgers to analytics dashboards and
                AI governance platforms.
              </p>
              <p>
                Zolile Nonzapa is the founder of{" "}
                <a
                  href="https://mlkcomputer.com"
                  className="text-accent hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  MLK Computer Consulting
                </a>
                , an IT solutions and full-stack development firm established in 2012. He has
                also founded{" "}
                <strong className="text-white">Mintry Fabric</strong> (AI infrastructure and
                FinOps) and <strong className="text-white">PraxisOne</strong> (enterprise
                compliance workspace).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-space text-2xl font-bold text-white">
                What Zolile Nonzapa Builds
              </h2>
              <p>
                Over the past several years, Zolile Nonzapa has developed more than 23 software
                products across four major domains:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong className="text-white">AI Infrastructure</strong> — Mintry Fabric,
                  ScriptLens, and agent telemetry systems
                </li>
                <li>
                  <strong className="text-white">Enterprise Operating Systems</strong> —
                  PraxisOne, Vivid Accounting, and compliance tools
                </li>
                <li>
                  <strong className="text-white">Financial Technology</strong> — VoltAdvance,
                  Identity Banc, and utility finance ledgers
                </li>
                <li>
                  <strong className="text-white">Data Intelligence</strong> — Libo Insights, UVU
                  Africa, and market analytics platforms
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-space text-2xl font-bold text-white">
                Technical Background
              </h2>
              <p>
                Zolile Nonzapa is a Full-Stack Developer and AWS AI Practitioner with expertise
                spanning React, Next.js, TypeScript, Python, FastAPI, PostgreSQL, Docker, and
                Linux server administration. His work sits at the intersection of business
                analysis, software development, data analytics, and solution design.
              </p>
              <p>
                Whether building an AI governance platform, a fraud prevention network, a utility
                finance ledger, or a national analytics dashboard, Zolile Nonzapa&apos;s focus
                remains the same: transforming complex operational problems into scalable systems.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-space text-2xl font-bold text-white">Contact Zolile Nonzapa</h2>
              <ul className="space-y-3 font-mono text-sm">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 hover:text-white transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-accent" />
                    <span className="group-hover:underline">{siteConfig.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.telephone}`}
                    className="flex items-center gap-3 hover:text-white transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-accent" />
                    <span className="group-hover:underline">+27 82 531 9901</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/zolile-nonzapa-95b92140/"
                    className="flex items-center gap-3 hover:text-white transition-colors group"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="w-4 h-4 text-accent text-center font-bold text-xs">in</span>
                    <span className="group-hover:underline">linkedin.com/in/zolile-nonzapa-95b92140</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ZolileN"
                    className="flex items-center gap-3 hover:text-white transition-colors group"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="w-4 h-4 text-accent text-center font-bold text-xs">gh</span>
                    <span className="group-hover:underline">github.com/ZolileN</span>
                  </a>
                </li>
              </ul>
            </section>
          </article>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-bg-primary hover:bg-white transition-all font-semibold text-sm"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#contact"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-bg-secondary border border-border-custom hover:border-accent/40 transition-all text-white font-medium text-sm"
            >
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
