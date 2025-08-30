import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Particles from "@/components/Particles"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Rohit Amal Raj | Portfolio",
  description: "Personal portfolio of Rohit Amal Raj - Web3 Developer & CS Student",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-black">
        <div className="fixed inset-0 w-full h-full z-0">
          <Particles
            particleColors={['#84cc16', '#a3e635', '#ffffff']}
            particleCount={150}
            particleSpread={15}
            speed={0.3}
            particleBaseSize={80}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
            particleHoverFactor={0.5}
          />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
