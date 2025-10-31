"use client";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Send, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { useI18n } from "@/app/_i18n/I18nProvider";

interface ProjectBriefFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectBriefForm({
  isOpen,
  onClose,
}: ProjectBriefFormProps) {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/brief", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Failed to send. Please try again.");
      }

      // Fire Contact event to Conversions API (email + country from server)
      try {
        const event_source_url = typeof window !== "undefined" ? window.location.href : undefined;
        await fetch("/api/conversions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ event_name: "Contact", email: formData.email, event_source_url }),
          keepalive: true,
        });
      } catch {}

      setIsSubmitted(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unexpected error";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen || !mounted) return null;

  const modal = (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fade-in" style={{ zIndex: 999999 }}>
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto border-0 shadow-2xl bg-card/95 backdrop-blur-xl animate-scale-in">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4 h-8 w-8 p-0 hover:bg-muted"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>

          {!isSubmitted ? (
            <>
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-brand-500" />
                <CardTitle className="text-2xl bg-linear-to-r from-brand-600 to-ocean-600 bg-clip-text text-transparent">
                  {t('form.startTitle') as string}
                </CardTitle>
              </div>
              <CardDescription>
                {t('form.startSubtitle') as string}
              </CardDescription>
            </>
          ) : (
            <>
              <CardTitle className="text-2xl text-green-600">
                {t('form.thankYou') as string}
              </CardTitle>
              <CardDescription>
                {t('form.thankYouSubtitle') as string}
              </CardDescription>
            </>
          )}
        </CardHeader>

        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                  {error}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                  {t('form.name') as string}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    placeholder={t('form.namePlaceholder') as string}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('form.email') as string}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                    placeholder={t('form.emailPlaceholder') as string}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('form.company') as string}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  placeholder={t('form.companyPlaceholder') as string}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('form.projectType') as string}
                  </label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  >
                    <option value="">{t('form.selectProjectType') as string}</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="web-application">Web Application</option>
                    <option value="enterprise-solution">
                      Enterprise Solution
                    </option>
                    <option value="ecommerce">E-commerce Platform</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t('form.budgetRange') as string}
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  >
                    <option value="">{t('form.selectBudgetRange') as string}</option>
                    <option value="1k-5k">€1k - €5k</option>
                    <option value="5k-10k">€5k - €10k</option>
                    <option value="10k-25k">€10k - €25k</option>
                    <option value="25k+">€25k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('form.timeline') as string}
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                >
                  <option value="">{t('form.selectTimeline') as string}</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6-12 months">6-12 months</option>
                  <option value="12+ months">12+ months</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t('form.description') as string}
                </label>
                <textarea
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none"
                  placeholder={t('form.descriptionPlaceholder') as string}
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="flex-1 bg-linear-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600 disabled:opacity-60 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isLoading ? (t('form.sending') as string) : (t('buttons.sendBrief') as string)}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={onClose}
                  className="px-8"
                >
                  {t('buttons.cancel') as string}
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-linear-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-muted-foreground mb-6">
                {t('form.thankYouSubtitle') as string}
              </p>
              <Button onClick={onClose} size="lg">
                {t('buttons.close') as string}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );

  return createPortal(modal, document.body);
}
