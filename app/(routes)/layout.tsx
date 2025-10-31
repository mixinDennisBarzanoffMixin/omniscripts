import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MetaEventsTracker from "@/app/_components/MetaEventsTracker";
import ThirdPartyNotice from "@/app/_components/ThirdPartyNotice";
import { cookies } from "next/headers";
import { getDictionary } from "@/app/_i18n/getDictionary";
import { I18nProvider } from "@/app/_i18n/I18nProvider";

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
    default: "OmniScripts - Professional Software Development & Digital Solutions",
    template: "%s | OmniScripts"
  },
  description: "OmniScripts LTD - Leading Bulgarian software development company. We create exceptional mobile apps, websites, and enterprise solutions using React, Flutter, Next.js. Transform your business with our expert development services.",
  keywords: [
    "software development Bulgaria", 
    "mobile app development", 
    "web development", 
    "React development", 
    "Flutter apps", 
    "Next.js", 
    "digital solutions", 
    "custom software", 
    "enterprise software", 
    "Bulgarian tech company",
    "Sofia software development",
    "OmniScripts LTD",
    "професионална разработка на софтуер",
    "мобилни приложения",
    "уеб разработка"
  ],
  authors: [{ name: "OmniScripts Development Team", url: "https://omniscripts.com" }],
  creator: "OmniScripts LTD",
  publisher: "OmniScripts LTD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://omniscripts.com"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en',
      'bg-BG': '/bg',
    },
  },
  openGraph: {
    title: "OmniScripts - Professional Software Development & Digital Solutions",
    description: "Leading Bulgarian software development company creating exceptional mobile apps, websites, and enterprise solutions. Expert React, Flutter, and Next.js development services.",
    url: "https://omniscripts.com",
    siteName: "OmniScripts",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OmniScripts - Professional Software Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OmniScripts - Professional Software Development & Digital Solutions",
    description: "Leading Bulgarian software development company creating exceptional mobile apps, websites, and enterprise solutions.",
    images: ["/twitter-image.jpg"],
    creator: "@omniscripts",
    site: "@omniscripts",
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
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "Technology",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const preferredLang = cookieStore.get("preferred_lang")?.value;
  const htmlLang = preferredLang === "de" ? "de" : "en";
  const dict = await getDictionary(htmlLang);
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
        priceCurrency: "EUR",
        category: "Software Development"
      },
      {
        "@type": "Offer",
        name: "Professional Package",
        description: "Ideal for growing businesses and scale-ups",
        price: "7999",
        priceCurrency: "EUR",
        category: "Software Development"
      },
      {
        "@type": "Offer",
        name: "Enterprise Package",
        description: "For large organizations and complex projects",
        price: "19999",
        priceCurrency: "EUR",
        category: "Software Development"
      }
    ],
    serviceType: ["Mobile App Development", "Web Development", "Enterprise Solutions", "Custom Software Development"]
  };

  return (
    <html lang={htmlLang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider lang={htmlLang} dict={dict}>
          {children}
          <MetaEventsTracker />
          <ThirdPartyNotice />
        </I18nProvider>
      </body>
    </html>
  );
}
