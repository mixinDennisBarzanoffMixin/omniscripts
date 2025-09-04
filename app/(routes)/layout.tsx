import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "OmniScripts - Modern Software Solutions & Development",
    template: "%s | OmniScripts"
  },
  description: "OmniScripts creates exceptional mobile apps, websites, and digital solutions. Expert development in React, Flutter, Next.js with modern technologies. Transform your vision into reality.",
  keywords: ["software development", "mobile apps", "web applications", "React", "Flutter", "Next.js", "digital solutions", "custom software", "app development"],
  authors: [{ name: "OmniScripts Team" }],
  creator: "OmniScripts",
  publisher: "OmniScripts",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://omniscripts.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OmniScripts - Modern Software Solutions & Development",
    description: "We craft exceptional apps, websites, and digital solutions that drive growth and innovation. Your vision, our expertise, unlimited possibilities.",
    url: "https://omniscripts.com",
    siteName: "OmniScripts",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OmniScripts - Modern Software Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OmniScripts - Modern Software Solutions & Development",
    description: "We craft exceptional apps, websites, and digital solutions that drive growth and innovation.",
    images: ["/twitter-image.jpg"],
    creator: "@omniscripts",
  },
  robots: {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OmniScripts",
    description: "Modern software development company specializing in mobile apps, web applications, and digital solutions",
    url: "https://omniscripts.com",
    logo: "https://omniscripts.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-0123",
      contactType: "customer service",
      availableLanguage: ["English", "Greek"]
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US"
    },
    sameAs: [
      "https://twitter.com/omniscripts",
      "https://linkedin.com/company/omniscripts",
      "https://github.com/omniscripts"
    ],
    offers: [
      {
        "@type": "Offer",
        name: "Starter Package",
        description: "Perfect for small projects and startups",
        price: "2999",
        priceCurrency: "USD",
        category: "Software Development"
      },
      {
        "@type": "Offer",
        name: "Professional Package",
        description: "Ideal for growing businesses and scale-ups",
        price: "7999",
        priceCurrency: "USD",
        category: "Software Development"
      },
      {
        "@type": "Offer",
        name: "Enterprise Package",
        description: "For large organizations and complex projects",
        price: "19999",
        priceCurrency: "USD",
        category: "Software Development"
      }
    ],
    serviceType: ["Mobile App Development", "Web Development", "Enterprise Solutions", "Custom Software Development"]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
