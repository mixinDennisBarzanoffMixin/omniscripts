import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Check,
  ArrowRight,
  Zap,
  Users,
  Shield,
  Crown,
  Sparkles,
  Star,
} from "lucide-react";
import PricingCTA from "@/components/PricingCTA";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { getDictionary } from "@/app/_i18n/getDictionary";

export const metadata: Metadata = {
  title: "Pricing - Affordable Software Development Packages Bulgaria",
  description: "Transparent pricing for professional software development in Bulgaria. Starter package from $2,999, Professional from $7,999, Enterprise from $19,999. All packages include modern React, Flutter, Next.js development, deployment, and 3-12 months support. No hidden fees.",
  keywords: [
    "software development pricing Bulgaria",
    "app development cost Bulgaria", 
    "web development pricing Sofia",
    "mobile app development cost",
    "custom software pricing Bulgaria",
    "React development packages",
    "Flutter app development cost",
    "Next.js development pricing",
    "enterprise software pricing",
    "transparent development costs",
    "цени за разработка на софтуер България",
    "цена за мобилно приложение",
    "цени за уеб разработка"
  ],
  openGraph: {
    title: "OmniScripts Pricing - Affordable Software Development Packages Bulgaria",
    description: "Transparent pricing for professional software development in Bulgaria. From startup-friendly packages to enterprise solutions. All inclusive with modern technologies and support.",
    url: "https://omniscripts.com/pricing",
    images: [
      {
        url: "/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "OmniScripts Pricing Plans - Software Development Bulgaria",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OmniScripts Pricing - Affordable Software Development Packages Bulgaria",
    description: "Transparent pricing for professional software development in Bulgaria. From startup-friendly to enterprise solutions.",
    images: ["/twitter-pricing.jpg"],
  },
  alternates: {
    canonical: "https://omniscripts.com/pricing",
  },
};

export default async function Pricing() {
  const cookieStore = await cookies();
  const preferredLang = cookieStore.get("preferred_lang")?.value;
  const lang = preferredLang === "de" ? "de" : "en";
  const t = await getDictionary(lang);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small projects and startups",
      price: 2999,
      icon: Zap,
      gradient: "from-brand-500 to-brand-600",
      bgGradient: "from-brand-50 to-brand-100",
      textColor: "text-brand-600",
      features: [
        "Single web application or mobile app",
        "Modern responsive design",
        "Basic SEO optimization",
        "3 months support & maintenance",
        "Cloud deployment setup",
        "Basic analytics integration",
      ],
      timeline: "2-4 weeks delivery",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and scale-ups",
      price: 7999,
      icon: Users,
      gradient: "from-ocean-500 to-ocean-600",
      bgGradient: "from-ocean-50 to-ocean-100",
      textColor: "text-ocean-600",
      features: [
        "Complex web platform or mobile app",
        "Custom UI/UX design system",
        "Advanced integrations & APIs",
        "6 months support & maintenance",
        "Performance optimization",
        "Advanced analytics & reporting",
        "User authentication system",
        "Database design & optimization",
      ],
      timeline: "4-8 weeks delivery",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations and complex projects",
      price: 19999,
      icon: Crown,
      gradient: "from-navy-600 to-navy-700",
      bgGradient: "from-navy-50 to-navy-100",
      textColor: "text-navy-600",
      features: [
        "Multi-platform solution (web + mobile)",
        "Enterprise-grade architecture",
        "Custom integrations & workflows",
        "12 months support & maintenance",
        "Dedicated project manager",
        "Advanced security implementations",
        "Load balancing & scalability",
        "Multi-environment deployments",
        "Priority support & SLA",
      ],
      timeline: "8-16 weeks delivery",
      popular: false,
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-blue-50/30 to-brand-50/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-brand-200/20 to-ocean-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-br from-ocean-200/20 to-brand-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-brand-100/10 to-ocean-100/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-backdrop-filter:bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-brand-500 to-ocean-500 shadow-lg">
              <Code className="h-5 w-5 text-white" />
            </div>
            <a
              href="/"
              className="text-xl font-bold bg-linear-to-r from-foreground to-brand-600 bg-clip-text text-transparent"
            >
              OmniScripts
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/#services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
            >
              Services
            </a>
            <a
              href="/#portfolio"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
            >
              Portfolio
            </a>
            <a
              href="/pricing"
              className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-all duration-300 hover:scale-105"
            >
              Pricing
            </a>
            <a
              href="/#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
            >
              Features
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="/login?redirect=%2Finvoices">Sign In</a>
            </Button>
            <PricingCTA
              size="sm"
              className="bg-linear-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </PricingCTA>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 md:py-32 relative">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="secondary"
              className="mb-4 bg-linear-to-r from-brand-50 to-ocean-50 border-brand-200"
            >
              <Sparkles className="mr-1 h-3 w-3" />
              {t.pricing.transparentPricing}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              {t.pricing.titleA}{" "}
              <span className="bg-linear-to-r from-brand-600 via-ocean-500 to-brand-700 bg-clip-text text-transparent">
                {t.pricing.titleB}
              </span>{" "}
              
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
              {t.pricing.subtitle}
            </p>


          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24 relative">
        <div className="container relative z-10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card
                  key={plan.name}
                  className={`relative border-0 shadow-2xl bg-card/90 backdrop-blur-xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-4 transition-all duration-500 overflow-hidden ${
                    plan.popular ? "ring-2 ring-brand-200 scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-px left-1/2 -translate-x-1/2">
                      <Badge className="bg-linear-to-r from-brand-500 to-ocean-500 text-white border-0 px-4 py-1">
                        <Star className="mr-1 h-3 w-3" />
                        {t.pricing.mostPopular}
                      </Badge>
                    </div>
                  )}

                  <div
                    className={`absolute inset-0 bg-linear-to-br ${plan.bgGradient} opacity-50`}
                  ></div>

                  <CardHeader className="relative z-10 text-center pb-8 pt-10">
                    <div
                      className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br ${plan.gradient} shadow-lg mb-4`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle
                      className={`text-2xl font-bold ${plan.textColor}`}
                    >
                      {t.pricing.plans[plan.name.toLowerCase() as 'starter'|'professional'|'enterprise'].name}
                    </CardTitle>
                    <CardDescription className="text-base mt-2 text-muted-foreground">
                      {t.pricing.plans[plan.name.toLowerCase() as 'starter'|'professional'|'enterprise'].description}
                    </CardDescription>

                    <div className="mt-6">
                      <div className="flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-foreground">
                          {formatPrice(plan.price)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t.pricing.plans[plan.name.toLowerCase() as 'starter'|'professional'|'enterprise'].oneTimeFee}
                      </p>
                      <Badge
                        variant="outline"
                        className="mt-3 border-brand-200 text-brand-600"
                      >
                        {t.pricing.plans[plan.name.toLowerCase() as 'starter'|'professional'|'enterprise'].timeline}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 px-8 pb-8">
                    <ul className="space-y-3 text-sm">
                      {(
                        t.pricing.plans[plan.name.toLowerCase() as 'starter'|'professional'|'enterprise'].features as string[]
                      ).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className={`h-4 w-4 mt-0.5 shrink-0 ${plan.textColor}`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <PricingCTA
                      className={`w-full mt-8 bg-linear-to-r ${plan.gradient} hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white`}
                      size="lg"
                    >
                      {t.buttons.getStarted}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </PricingCTA>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-linear-to-r from-muted/20 via-brand-50/30 to-ocean-50/20 relative">
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl bg-linear-to-r from-foreground to-brand-600 bg-clip-text text-transparent">
              {t.pricing.faqTitle}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.pricing.faqSubtitle}
            </p>
          </div>

          <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-lg">{t.pricing.faq.includedQ}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.pricing.faq.includedA}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-lg">{t.pricing.faq.customizeQ}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.pricing.faq.customizeA}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-lg">{t.pricing.faq.changesQ}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.pricing.faq.changesA}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-lg">{t.pricing.faq.paymentQ}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.pricing.faq.paymentA}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-linear-to-br from-brand-500/5 via-ocean-500/5 to-navy-500/5"></div>
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl bg-linear-to-r from-foreground via-brand-600 to-ocean-600 bg-clip-text text-transparent">
              {t.pricing.ctaTitle}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.pricing.ctaSubtitle}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <PricingCTA
                size="lg"
                className="h-12 px-8 bg-linear-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600 transform hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                {t.buttons.getCustomQuote}
                <ArrowRight className="ml-2 h-4 w-4" />
              </PricingCTA>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 border-2 border-brand-200 hover:border-brand-300 bg-linear-to-r hover:from-brand-50 hover:to-ocean-50 transform hover:scale-105 transition-all duration-300"
              >
                <a href="/#portfolio">{t.buttons.viewOurWork}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-linear-to-r from-muted/30 via-brand-50/20 to-ocean-50/30 backdrop-blur-xl relative">
        <div className="absolute inset-0 bg-linear-to-br from-transparent via-brand-500/5 to-ocean-500/5"></div>
        <div className="container py-12 relative z-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-brand-500 to-ocean-500 shadow-lg">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-linear-to-r from-foreground to-brand-600 bg-clip-text text-transparent">
                  OmniScripts
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building the future of digital experiences through innovative
                software solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/#services"
                    className="hover:text-brand-600 transition-colors duration-300"
                  >
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    className="hover:text-brand-600 transition-colors duration-300"
                  >
                    Web Applications
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    className="hover:text-brand-600 transition-colors duration-300"
                  >
                    Enterprise Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="hover:text-brand-600 transition-colors duration-300"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/"
                    className="hover:text-ocean-600 transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/#portfolio"
                    className="hover:text-ocean-600 transition-colors duration-300"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-ocean-600 transition-colors duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-ocean-600 transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/"
                    className="hover:text-navy-600 transition-colors duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/#portfolio"
                    className="hover:text-navy-600 transition-colors duration-300"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-navy-600 transition-colors duration-300"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:text-navy-600 transition-colors duration-300"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 OmniScripts. All rights reserved.</p>
          </div>
        </div>
      </footer>


    </div>
  );
}
