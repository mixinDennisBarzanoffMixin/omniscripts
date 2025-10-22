"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Code, LogOut, FileText, Calendar, User, Eye } from "lucide-react";
import { CONTRACTS } from "@/app/_data/contracts";

export default function ContractsPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    document.title = "Contracts - Admin Dashboard | OmniScripts";
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/status');
        const data = await response.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (error) {
      console.log('Logout error:', error);
    }
    router.push('/');
  };

  // Simple counts for stats (no money aggregation)
  const totalContracts = CONTRACTS.length;
  const activeContracts = CONTRACTS.filter(c => c.status === 'active').length;
  const uniqueClients = new Set(CONTRACTS.map(c => c.client.nameLocal)).size;

  const formatDate = (date: Date) => {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
  };
  const todayStr = formatDate(new Date());

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Ενεργό (Active)</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Εκκρεμεί (Pending)</Badge>;
      case 'draft':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Πρόχειρο (Draft)</Badge>;
      case 'expired':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Ληγμένο (Expired)</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-blue-50/30 to-brand-50/50">
      {/* Background Elements */}
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
            <Button
              variant="ghost"
              onClick={() => router.push('/offers')}
              className="hover:scale-105 transition-all duration-300"
            >
              Προσφορές (Offers)
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push('/invoices')}
              className="hover:scale-105 transition-all duration-300"
            >
              Τιμολόγια (Invoices)
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push('/rko')}
              className="hover:scale-105 transition-all duration-300"
            >
              РКО (Expenses)
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push('/documents')}
              className="hover:scale-105 transition-all duration-300"
            >
              Documents
            </Button>
            <Button
              variant="ghost"
              onClick={() => router.push('/')}
              className="hover:scale-105 transition-all duration-300"
            >
              Αρχική (Home)
            </Button>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="hover:scale-105 transition-all duration-300"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Αποσύνδεση (Logout)
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8 relative z-10">
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <FileText className="h-8 w-8 text-brand-600" />
            <h1 className="text-3xl font-bold bg-linear-to-r from-foreground to-brand-600 bg-clip-text text-transparent">
              Συμβόλαια (Contracts)
            </h1>
          </div>
          <p className="text-muted-foreground">
            Διαχείριση όλων των συμβολαίων έργων και υποστήριξης
            <br />
            (Manage all project and support contracts)
          </p>
        </div>

        {/* Stats Cards (counts only) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Σύνολο Συμβολαίων (Total Contracts)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-600">
                {totalContracts}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Ενεργά (Active)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {activeContracts}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <User className="h-4 w-4 mr-2" />
                Σύνολο Πελατών (Total Clients)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-600">
                {uniqueClients}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contracts Table */}
        <Card className="border-0 shadow-xl bg-card/90 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Λίστα Συμβολαίων (Contracts List)</CardTitle>
            <CardDescription>
              Όλα τα συμβόλαια και η κατάστασή τους
              (All contracts and their status)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Αριθμός (Number)</TableHead>
                  <TableHead>Πελάτης (Client)</TableHead>
                  <TableHead>Τίτλος (Title)</TableHead>
                  <TableHead>Κατάσταση (Status)</TableHead>
                  <TableHead>Έναρξη (Start)</TableHead>
                  <TableHead>Λήξη (End)</TableHead>
                  <TableHead>Ενέργειες (Actions)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {CONTRACTS.map((contract) => (
                  <TableRow key={contract.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{contract.number}</TableCell>
                    <TableCell>{contract.client.nameLocal}</TableCell>
                    <TableCell className="max-w-xs truncate" title={contract.title}>
                      {contract.title}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(contract.status)}
                    </TableCell>
                    <TableCell>
                      {contract.startDate === 'today' ? todayStr : contract.startDate}
                    </TableCell>
                    <TableCell>
                      {contract.endDate || '—'}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => router.push(`/contracts/${contract.id}`)}
                        className="hover:scale-105 transition-all duration-300"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Προβολή (View)
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


