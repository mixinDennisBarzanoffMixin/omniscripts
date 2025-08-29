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
  Smartphone,
  Globe,
  Zap,
  Users,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  ExternalLink,
  Monitor,
  Palette,
  ShoppingCart,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background via-blue-50/30 to-brand-50/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-brand-200/20 to-ocean-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-br from-ocean-200/20 to-brand-200/20 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-br from-brand-100/10 to-ocean-100/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-backdrop-filter:bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2 animate-slide-in-left">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-brand-500 to-ocean-500 shadow-lg">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-foreground to-brand-600 bg-clip-text text-transparent">
              OmniScripts
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 animate-fade-in">
            <a
              href="#services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-500 hover:scale-105"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-500 hover:scale-105"
            >
              Portfolio
            </a>
            <a
              href="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-brand-600 transition-all duration-500 hover:scale-105"
            >
              Pricing
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-500 hover:scale-105"
            >
              Features
            </a>
          </nav>

          <div className="flex items-center space-x-4 animate-slide-in-right">
            <Button
              variant="ghost"
              size="sm"
              className="hover:scale-105 transition-all duration-500"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-linear-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600 transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 md:py-32 relative">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="secondary"
              className="mb-4 animate-fade-in bg-linear-to-r from-brand-50 to-ocean-50 border-brand-200 hover:scale-105 transition-all duration-500"
            >
              <Zap className="mr-1 h-3 w-3" />
              Modern Software Solutions
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl animate-scale-in">
              Build the{" "}
              <span className="bg-linear-to-r from-brand-600 via-ocean-500 to-brand-700 bg-clip-text text-transparent animate-gradient-x relative">
                Future
                <div className="absolute inset-0 bg-linear-to-r from-brand-600/10 via-ocean-500/10 to-brand-700/10 blur-lg animate-pulse-slow -z-10"></div>
              </span>{" "}
              of Digital
            </h1>
            <p
              className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              We craft exceptional apps, websites, and digital solutions that
              drive growth and innovation. Your vision, our expertise, unlimited
              possibilities.
            </p>
            <div
              className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                size="lg"
                // onClick={() => setIsProjectFormOpen(true)}
                className="h-12 px-8 bg-linear-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600 transform hover:scale-110 transition-transform duration-500 shadow-xl hover:shadow-2xl motion-safe:animate-[glow-50-100_3s_ease-in-out_infinite]"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 border-2 border-brand-200 hover:border-brand-300 bg-linear-to-r hover:from-brand-50 hover:to-ocean-50 transform hover:scale-105 transition-all duration-500"
              >
                <a href="#portfolio">View Portfolio</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-linear-to-r from-muted/20 via-brand-50/30 to-ocean-50/20 relative"
      >
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl bg-linear-to-r from-foreground to-brand-600 bg-clip-text text-transparent">
              What We Build
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From concept to deployment, we deliver cutting-edge solutions that
              exceed expectations
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 animate-slide-in-left group relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-brand-500/5 to-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-brand-500 to-brand-600 animate-float shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-brand-600 transition-colors duration-500">
                  Mobile Apps
                </CardTitle>
                <CardDescription>
                  Native and cross-platform mobile applications that deliver
                  exceptional user experiences
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center group-hover:text-foreground transition-colors duration-500">
                    <CheckCircle className="mr-2 h-4 w-4 text-brand-500" />
                    iOS & Android Development
                  </li>
                  <li className="flex items-center group-hover:text-foreground transition-colors duration-500">
                    <CheckCircle className="mr-2 h-4 w-4 text-brand-500" />
                    React Native & Flutter
                  </li>
                  <li className="flex items-center group-hover:text-foreground transition-colors duration-500">
                    <CheckCircle className="mr-2 h-4 w-4 text-brand-500" />
                    App Store Optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="border-0 shadow-xl bg-card/80 backdrop-blur-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 animate-fade-in group relative overflow-hidden"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-ocean-500/5 to-ocean-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="relative z-10">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-ocean-500 to-ocean-600 animate-float shadow-lg group-hover:shadow-xl transition-shadow duration-500"
                  style={{ animationDelay: "1s" }}
                >
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-ocean-600 transition-colors duration-500">
                  Web Applications
                </CardTitle>
                <CardDescription>
                  Scalable web platforms and progressive web apps built with
                  modern technologies
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center group-hover:text-foreground transition-colors duration-500">
                    <CheckCircle className="mr-2 h-4 w-4 text-ocean-500" />
                    React, Vue & Angular
                  </li>
                  <li className="flex items-center group-hover:text-foreground transition-colors duration-500">
                    <CheckCircle className="mr-2 h-4 w-4 text-ocean-500" />
                    Cloud-Native Architecture
                  </li>
                  <li className="flex items-center group-hover:text-foreground transition-colors duration-500">
                    <CheckCircle className="mr-2 h-4 w-4 text-ocean-500" />
                    Performance Optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card
              className="border-0 shadow-xl bg-card/80 backdrop-blur-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 animate-slide-in-right group relative overflow-hidden"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-navy-600/5 to-navy-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardHeader className="relative z-10">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-navy-600 to-navy-700 animate-float shadow-lg group-hover:shadow-xl transition-shadow duration-500"
                  style={{ animationDelay: "2s" }}
                >
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-navy-600 transition-colors duration-500">
                  Enterprise Solutions
                </CardTitle>
                <CardDescription>
                  Custom enterprise software and integrations that streamline
                  business operations
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center group-hover:text-foreground transition-colors duration-500">
                    <CheckCircle className="mr-2 h-4 w-4 text-navy-600" />
                    API Development
                  </li>
                  <li className="flex items-center group-hover:text-foreground transition-colors duration-500">
                    <CheckCircle className="mr-2 h-4 w-4 text-navy-600" />
                    Database Design
                  </li>
                  <li className="flex items-center group-hover:text-foreground transition-colors duration-500">
                    <CheckCircle className="mr-2 h-4 w-4 text-navy-600" />
                    System Integration
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative">
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl bg-linear-to-r from-foreground to-brand-600 bg-clip-text text-transparent">
              Our Latest Work
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real projects, real results. See how we've helped businesses
              transform their digital presence.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* TechFlow Platform */}
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 animate-scale-in group relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-brand-500/5 to-brand-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="aspect-video bg-linear-to-br from-brand-100 to-brand-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-brand-500/20 to-ocean-500/20"></div>
                <div className="absolute inset-4 bg-white/90 rounded-lg flex items-center justify-center">
                  <Monitor className="h-12 w-12 text-brand-500" />
                </div>
                <Badge className="absolute top-3 right-3 bg-green-500 text-white">
                  Live
                </Badge>
              </div>
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <CardTitle className="group-hover:text-brand-600 transition-colors duration-500">
                    TechFlow Platform
                  </CardTitle>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-brand-500 transition-colors" />
                </div>
                <CardDescription>
                  Modern SaaS platform for tech startups with advanced analytics
                  and team collaboration tools.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Node.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    PostgreSQL
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Built for a growing startup, featuring real-time collaboration
                  and advanced data visualization.
                </p>
              </CardContent>
            </Card>

            {/* EcoShop E-commerce */}
            <Card
              className="border-0 shadow-xl bg-card/80 backdrop-blur-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 animate-scale-in group relative overflow-hidden"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-green-500/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="aspect-video bg-linear-to-br from-green-100 to-green-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-green-500/20 to-green-600/20"></div>
                <div className="absolute inset-4 bg-white/90 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="h-12 w-12 text-green-500" />
                </div>
                <Badge className="absolute top-3 right-3 bg-green-500 text-white">
                  Live
                </Badge>
              </div>
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <CardTitle className="group-hover:text-green-600 transition-colors duration-500">
                    EcoShop
                  </CardTitle>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-green-500 transition-colors" />
                </div>
                <CardDescription>
                  Sustainable e-commerce platform with AI-powered product
                  recommendations and carbon footprint tracking.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Stripe
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    MongoDB
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Complete e-commerce solution with integrated sustainability
                  features and mobile optimization.
                </p>
              </CardContent>
            </Card>

            {/* DesignStudio Portfolio */}
            <Card
              className="border-0 shadow-xl bg-card/80 backdrop-blur-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 animate-scale-in group relative overflow-hidden"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="aspect-video bg-linear-to-br from-purple-100 to-purple-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-purple-600/20"></div>
                <div className="absolute inset-4 bg-white/90 rounded-lg flex items-center justify-center">
                  <Palette className="h-12 w-12 text-purple-500" />
                </div>
                <Badge className="absolute top-3 right-3 bg-green-500 text-white">
                  Live
                </Badge>
              </div>
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <CardTitle className="group-hover:text-purple-600 transition-colors duration-500">
                    DesignStudio
                  </CardTitle>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-purple-500 transition-colors" />
                </div>
                <CardDescription>
                  Creative agency portfolio with interactive animations and
                  client project showcase galleries.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    Vue.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Three.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    GSAP
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Stunning portfolio site with 3D animations and immersive user
                  experiences.
                </p>
              </CardContent>
            </Card>

            {/* MedConnect App */}
            <Card
              className="border-0 shadow-xl bg-card/80 backdrop-blur-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 animate-scale-in group relative overflow-hidden"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="aspect-video bg-linear-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-blue-600/20"></div>
                <div className="absolute inset-4 bg-white/90 rounded-lg flex items-center justify-center">
                  <Users className="h-12 w-12 text-blue-500" />
                </div>
                <Badge className="absolute top-3 right-3 bg-green-500 text-white">
                  Live
                </Badge>
              </div>
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <CardTitle className="group-hover:text-blue-600 transition-colors duration-500">
                    MedConnect
                  </CardTitle>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors" />
                </div>
                <CardDescription>
                  Healthcare platform connecting patients with medical
                  professionals through secure video consultations.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    React Native
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    WebRTC
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    HIPAA
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Secure telemedicine app with encrypted communications and
                  appointment scheduling.
                </p>
              </CardContent>
            </Card>

            {/* FinTrack Dashboard */}
            <Card
              className="border-0 shadow-xl bg-card/80 backdrop-blur-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 animate-scale-in group relative overflow-hidden"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="aspect-video bg-linear-to-br from-orange-100 to-orange-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-orange-500/20 to-orange-600/20"></div>
                <div className="absolute inset-4 bg-white/90 rounded-lg flex items-center justify-center">
                  <Zap className="h-12 w-12 text-orange-500" />
                </div>
                <Badge className="absolute top-3 right-3 bg-green-500 text-white">
                  Live
                </Badge>
              </div>
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <CardTitle className="group-hover:text-orange-600 transition-colors duration-500">
                    FinTrack
                  </CardTitle>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-orange-500 transition-colors" />
                </div>
                <CardDescription>
                  Financial analytics dashboard with real-time market data and
                  automated investment recommendations.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    Angular
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    D3.js
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Redis
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Advanced financial dashboard with machine learning-powered
                  insights and predictions.
                </p>
              </CardContent>
            </Card>

            {/* SmartHome IoT */}
            <Card
              className="border-0 shadow-xl bg-card/80 backdrop-blur-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 animate-scale-in group relative overflow-hidden"
              style={{ animationDelay: "1s" }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-teal-500/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="aspect-video bg-linear-to-br from-teal-100 to-teal-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-teal-500/20 to-teal-600/20"></div>
                <div className="absolute inset-4 bg-white/90 rounded-lg flex items-center justify-center">
                  <Shield className="h-12 w-12 text-teal-500" />
                </div>
                <Badge className="absolute top-3 right-3 bg-green-500 text-white">
                  Live
                </Badge>
              </div>
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <CardTitle className="group-hover:text-teal-600 transition-colors duration-500">
                    SmartHome
                  </CardTitle>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-teal-500 transition-colors" />
                </div>
                <CardDescription>
                  IoT platform for smart home automation with AI-powered energy
                  optimization and security monitoring.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs">
                    Flutter
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    AWS IoT
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    MQTT
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Complete IoT solution with mobile app control and intelligent
                  automation features.
                </p>
              </CardContent>
            </Card>
          </div>

          <div
            className="text-center mt-12 animate-fade-in"
            style={{ animationDelay: "1.2s" }}
          >
            <Button
              variant="outline"
              size="lg"
              // onClick={() => setIsProjectFormOpen(true)}
              className="border-2 border-brand-200 hover:border-brand-300 bg-linear-to-r hover:from-brand-50 hover:to-ocean-50 transform hover:scale-105 transition-all duration-500"
            >
              Start Your Project Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 bg-linear-to-r from-muted/20 via-brand-50/30 to-ocean-50/20 relative"
      >
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl bg-linear-to-r from-foreground to-brand-600 bg-clip-text text-transparent">
              Why Choose OmniScripts
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We combine technical excellence with creative innovation to
              deliver results that matter
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6 transform hover:scale-105 transition-all duration-500 animate-scale-in group">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-brand-100 to-brand-200 group-hover:from-brand-200 group-hover:to-brand-300 transition-all duration-500 animate-pulse-slow shadow-lg group-hover:shadow-xl">
                <Zap className="h-8 w-8 text-brand-600 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="mt-4 text-lg font-semibold group-hover:text-brand-600 transition-colors duration-500">
                Lightning Fast
              </h3>
              <p className="mt-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                Optimized performance and cutting-edge technologies for blazing
                fast applications
              </p>
            </div>

            <div
              className="flex flex-col items-center text-center p-6 transform hover:scale-105 transition-all duration-500 animate-scale-in group"
              style={{ animationDelay: "0.2s" }}
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-ocean-100 to-ocean-200 group-hover:from-ocean-200 group-hover:to-ocean-300 transition-all duration-500 animate-pulse-slow shadow-lg group-hover:shadow-xl"
                style={{ animationDelay: "1s" }}
              >
                <Users className="h-8 w-8 text-ocean-600 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="mt-4 text-lg font-semibold group-hover:text-ocean-600 transition-colors duration-500">
                User-Centric
              </h3>
              <p className="mt-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                Intuitive designs and seamless user experiences that delight and
                engage
              </p>
            </div>

            <div
              className="flex flex-col items-center text-center p-6 transform hover:scale-105 transition-all duration-500 animate-scale-in group"
              style={{ animationDelay: "0.4s" }}
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-navy-100 to-navy-200 group-hover:from-navy-200 group-hover:to-navy-300 transition-all duration-500 animate-pulse-slow shadow-lg group-hover:shadow-xl"
                style={{ animationDelay: "2s" }}
              >
                <Shield className="h-8 w-8 text-navy-600 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="mt-4 text-lg font-semibold group-hover:text-navy-600 transition-colors duration-500">
                Secure & Reliable
              </h3>
              <p className="mt-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                Enterprise-grade security and reliability you can trust for
                mission-critical applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="container relative z-10">
          <div className="mx-auto max-w-2xl text-center animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl bg-linear-to-r from-foreground to-brand-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 animate-slide-in-left group relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-brand-500/5 to-ocean-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardContent className="pt-6 relative z-10">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-500">
                  "OmniScripts delivered exactly what we needed. Their attention
                  to detail and technical expertise helped us launch a product
                  that exceeded our expectations."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-linear-to-br from-brand-400 to-brand-500 flex items-center justify-center text-white font-semibold animate-float shadow-lg">
                    SM
                  </div>
                  <div>
                    <p className="font-semibold group-hover:text-brand-600 transition-colors duration-500">
                      Sarah Mitchell
                    </p>
                    <p className="text-sm text-muted-foreground">
                      CEO, TechFlow
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="border-0 shadow-xl bg-card/80 backdrop-blur-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 animate-slide-in-right group relative overflow-hidden"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-ocean-500/5 to-brand-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <CardContent className="pt-6 relative z-10">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-500">
                  "Incredible team with deep technical knowledge. They
                  transformed our complex requirements into an elegant, scalable
                  solution. Highly recommended!"
                </p>
                <div className="flex items-center space-x-3">
                  <div
                    className="h-10 w-10 rounded-full bg-linear-to-br from-ocean-400 to-ocean-500 flex items-center justify-center text-white font-semibold animate-float shadow-lg"
                    style={{ animationDelay: "1s" }}
                  >
                    JD
                  </div>
                  <div>
                    <p className="font-semibold group-hover:text-ocean-600 transition-colors duration-500">
                      James Davidson
                    </p>
                    <p className="text-sm text-muted-foreground">
                      CTO, Innovate Labs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-r from-muted/20 via-brand-50/30 to-ocean-50/20 relative">
        <div className="absolute inset-0 bg-linear-to-br from-brand-500/5 via-ocean-500/5 to-navy-500/5 animate-gradient-xy"></div>
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center animate-scale-in">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl bg-linear-to-r from-foreground via-brand-600 to-ocean-600 bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss your project and turn your vision into reality. Our
              team is ready to help you succeed.
            </p>
            <div
              className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                size="lg"
                // onClick={() => setIsProjectFormOpen(true)}
                className="h-12 px-8 bg-linear-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600 transform hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-2xl animate-glow"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 border-2 border-brand-200 hover:border-brand-300 bg-linear-to-r hover:from-brand-50 hover:to-ocean-50 transform hover:scale-105 transition-all duration-500"
              >
                Schedule a Call
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
            <div className="space-y-4 animate-slide-in-left">
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

            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#services"
                    className="hover:text-brand-600 transition-colors duration-500 hover:translate-x-1 transform inline-block"
                  >
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-brand-600 transition-colors duration-500 hover:translate-x-1 transform inline-block"
                  >
                    Web Applications
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-brand-600 transition-colors duration-500 hover:translate-x-1 transform inline-block"
                  >
                    Enterprise Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="hover:text-brand-600 transition-colors duration-500 hover:translate-x-1 transform inline-block"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#features"
                    className="hover:text-ocean-600 transition-colors duration-500 hover:translate-x-1 transform inline-block"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="hover:text-ocean-600 transition-colors duration-500 hover:translate-x-1 transform inline-block"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-ocean-600 transition-colors duration-500 hover:translate-x-1 transform inline-block"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-ocean-600 transition-colors duration-500 hover:translate-x-1 transform inline-block"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#features"
                    className="hover:text-navy-600 transition-colors duration-500 hover:translate-x-1 transform inline-block"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="hover:text-navy-600 transition-colors duration-500 hover:translate-x-1 transform inline-block"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-navy-600 transition-colors duration-500 hover:translate-x-1 transform inline-block"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-navy-600 transition-colors duration-500 hover:translate-x-1 transform inline-block"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <p>&copy; 2024 OmniScripts. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Project Brief Form Modal */}
      {/* <ProjectBriefForm
        isOpen={isProjectFormOpen}
        onClose={() => setIsProjectFormOpen(false)}
      /> */}
    </div>
  );
}
