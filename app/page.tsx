import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Hobbies } from "@/components/hobbies"
import { Contact } from "@/components/contact"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for personal portfolio
  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rohit Amal Raj",
    jobTitle: "Computer Science Student & Web Developer",
    description: "Passionate Computer Science student with expertise in software development, Web3, AI, and blockchain technologies",
    url: "https://rohitamalraj.com",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "LOYOLA-ICAM COLLEGE OF ENGINEERING AND TECHNOLOGY",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressCountry: "India"
      }
    },
    knowsAbout: [
      "Web Development",
      "Mobile App Development", 
      "Artificial Intelligence",
      "Cybersecurity",
      "Blockchain Technology",
      "Software Engineering"
    ]
  }

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://theskitbit.com/",
    name: "Skitbit | 3D Animation Made Simple, Reliable & Scalable",
    description:
      "From product launches to full-scale campaigns, Skitbit delivers 3D animation that’s fast, consistent, and built to wow your audience.",
    url: "https://theskitbit.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Skitbit",
      url: "https://theskitbit.com",
      sameAs: [
        "https://twitter.com/theskitbit",
        "https://www.youtube.com/@skitbitinternational",
        "https://instagram.com/theskitbit",
        "https://threads.com/theskitbit",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://theskitbit.com/#pricing",
        name: "Pricing Section",
        url: "https://theskitbit.com/#pricing",
      },
    ],
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Hobbies />
        <Contact />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="portfolio-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
