"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Lock, Code } from "lucide-react";

// Password is now handled server-side via API

function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    document.title = "Login - Admin Access | OmniScripts";
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Make API request to authenticate
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        // Check if there's a redirect parameter, otherwise go to invoices
        const redirectTo = searchParams.get('redirect') || '/invoices';
        router.push(redirectTo);
      } else {
        setError("Λάθος κωδικός πρόσβασης (Wrong password)");
      }
    } catch (error) {
      setError("Σφάλμα σύνδεσης (Connection error)");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-blue-50/30 to-brand-50/50 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-brand-200/20 to-ocean-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-br from-ocean-200/20 to-brand-200/20 rounded-full blur-3xl"></div>
      </div>

      <Card className="w-full max-w-md border-0 shadow-2xl bg-card/90 backdrop-blur-xl relative z-10">
        <CardHeader className="text-center pb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-brand-500 to-ocean-500 shadow-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold bg-linear-to-r from-foreground to-brand-600 bg-clip-text text-transparent">
            OmniScripts Login
          </CardTitle>
          <CardDescription>
            Εισάγετε τον κωδικό πρόσβασης για πρόσβαση στα τιμολόγια
            <br />
            (Enter password to access invoices)
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Κωδικός Πρόσβασης (Password)
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Εισάγετε τον κωδικό..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12"
                disabled={isLoading}
                required
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full h-12 bg-linear-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              disabled={isLoading}
            >
              {isLoading ? "Σύνδεση..." : "Σύνδεση (Login)"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Button
              variant="ghost"
              onClick={() => router.push("/")}
              className="text-muted-foreground hover:text-foreground"
            >
              ← Επιστροφή στην αρχική (Back to Home)
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
