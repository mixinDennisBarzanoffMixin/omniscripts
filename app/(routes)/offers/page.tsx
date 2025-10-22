"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Code, FileText, Eye, LogOut } from "lucide-react";
import { OFFERS } from "@/app/_data/offers";

export default function OffersPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    document.title = "Offers - Admin Dashboard | OmniScripts";
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/status');
        const data = await response.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
        } else {
          router.push('/login');
        }
      } catch (_) {
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (_) {}
    router.push('/');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'accepted':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Εγκεκριμένη (Accepted)</Badge>;
      case 'sent':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Απεσταλμένη (Sent)</Badge>;
      case 'draft':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Πρόχειρη (Draft)</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Απορρίφθηκε (Rejected)</Badge>;
      case 'expired':
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Έληξε (Expired)</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-blue-50/30 to-brand-50/50">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-brand-200/20 to-ocean-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-br from-ocean-200/20 to-brand-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-brand-500 to-ocean-500 shadow-lg">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-foreground to-brand-600 bg-clip-text text-transparent">
              OmniScripts
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => router.push('/contracts')} className="hover:scale-105 transition-all duration-300">Συμβόλαια</Button>
            <Button variant="ghost" onClick={() => router.push('/invoices')} className="hover:scale-105 transition-all duration-300">Τιμολόγια</Button>
            <Button variant="ghost" onClick={() => router.push('/documents')} className="hover:scale-105 transition-all duration-300">Documents</Button>
            <Button variant="ghost" onClick={() => router.push('/')} className="hover:scale-105 transition-all duration-300">Αρχική</Button>
            <Button variant="outline" onClick={handleLogout} className="hover:scale-105 transition-all duration-300">
              <LogOut className="mr-2 h-4 w-4" /> Αποσύνδεση
            </Button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container py-8 relative z-10">
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <FileText className="h-8 w-8 text-brand-600" />
            <h1 className="text-3xl font-bold bg-linear-to-r from-foreground to-brand-600 bg-clip-text text-transparent">
              Προσφορές (Offers)
            </h1>
          </div>
          <p className="text-muted-foreground">Λίστα προσφορών. Δεν περιλαμβάνουν στοιχεία πελάτη. (No customer data)</p>
        </div>

        <Card className="border-0 shadow-xl bg-card/90 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Λίστα Προσφορών (Offers List)</CardTitle>
            <CardDescription>Όλες οι προσφορές και η κατάστασή τους</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Αριθμός</TableHead>
                  <TableHead>Τίτλος</TableHead>
                  <TableHead>Ημερομηνία</TableHead>
                  <TableHead>Κατάσταση</TableHead>
                  <TableHead>Ενέργειες</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {OFFERS.map((offer) => (
                  <TableRow key={offer.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{offer.number}</TableCell>
                    <TableCell className="max-w-xs truncate" title={offer.title}>{offer.title}</TableCell>
                    <TableCell>{offer.date}</TableCell>
                    <TableCell>{getStatusBadge(offer.status)}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" onClick={() => router.push(`/offers/${offer.id}`)} className="hover:scale-105 transition-all duration-300">
                        <Eye className="h-4 w-4 mr-2" /> Προβολή (View)
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}


