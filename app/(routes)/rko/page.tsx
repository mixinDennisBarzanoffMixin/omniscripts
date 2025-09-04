"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Code, LogOut, Receipt, DollarSign, Calendar, TrendingDown, Eye } from "lucide-react";
import { RKOS } from "@/app/_data/invoices";

export default function RKOPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    document.title = "RKO - Expense Orders | OmniScripts";
    
    // Check authentication via API (since we use HTTPOnly cookies)
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
      // Call logout API to clear cookie properly
      await fetch('/api/auth/logout', {
        method: 'POST',
      });
    } catch (error) {
      console.log('Logout error:', error);
    }
    
    // Redirect to home page
    router.push('/');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("bg-BG", {
      style: "currency",
      currency: "BGN",
      minimumFractionDigits: 2,
    }).format(price);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Завършен (Completed)</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Чакащ (Pending)</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Отменен (Cancelled)</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getCategoryBadge = (category: string) => {
    const colors = {
      "Офис разходи": "bg-blue-100 text-blue-800",
      "Оборудване": "bg-purple-100 text-purple-800", 
      "Софтуер и лицензи": "bg-indigo-100 text-indigo-800",
      "Маркетинг": "bg-pink-100 text-pink-800",
      "Командировки": "bg-orange-100 text-orange-800",
      "Комунални услуги": "bg-green-100 text-green-800",
      "Други разходи": "bg-gray-100 text-gray-800",
    };
    
    const colorClass = colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
    
    return <Badge className={`${colorClass} hover:${colorClass}`}>{category}</Badge>;
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
              onClick={() => router.push('/invoices')}
              className="hover:scale-105 transition-all duration-300"
            >
              Τιμολόγια (Invoices)
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
            <Receipt className="h-8 w-8 text-brand-600" />
            <h1 className="text-3xl font-bold bg-linear-to-r from-foreground to-brand-600 bg-clip-text text-transparent">
              РКО - Приходни касови ордери
            </h1>
          </div>
          <p className="text-muted-foreground">
            Управление на всички приходни касови ордери и получени плащания
            <br />
            (Manage all incoming cash orders and received payments)
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <DollarSign className="h-4 w-4 mr-2" />
                Общо Приходи (Total Income)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {formatPrice(RKOS.filter(rko => rko.status === 'completed').reduce((sum, rko) => sum + rko.amount, 0))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Чакащи (Pending)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {formatPrice(RKOS.filter(rko => rko.status === 'pending').reduce((sum, rko) => sum + rko.amount, 0))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <DollarSign className="h-4 w-4 mr-2" />
                Брой РКО (Total RKOs)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-brand-600">
                {RKOS.length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RKO Table */}
        <Card className="border-0 shadow-xl bg-card/90 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Списък РКО (RKO List)</CardTitle>
            <CardDescription>
              Всички разходни касови ордери и тяхното състояние
              (All expense cash orders and their status)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Номер (Number)</TableHead>
                  <TableHead>Платец (Payer)</TableHead>
                  <TableHead>Цел (Purpose)</TableHead>
                  <TableHead>Категория (Category)</TableHead>
                  <TableHead>Сума (Amount)</TableHead>
                  <TableHead>Състояние (Status)</TableHead>
                  <TableHead>Дата (Date)</TableHead>
                  <TableHead>Действия (Actions)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {RKOS.map((rko) => (
                  <TableRow key={rko.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{rko.number}</TableCell>
                    <TableCell>{rko.payer}</TableCell>
                    <TableCell className="max-w-xs truncate" title={rko.purpose}>
                      {rko.purpose}
                    </TableCell>
                    <TableCell>
                      {getCategoryBadge(rko.category)}
                    </TableCell>
                    <TableCell className="font-semibold">
                      {formatPrice(rko.amount)}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(rko.status)}
                    </TableCell>
                    <TableCell>
                      {new Date(rko.date.split('.').reverse().join('-')).toLocaleDateString('bg-BG')}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => router.push(`/rko/${rko.id}`)}
                        className="hover:scale-105 transition-all duration-300"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Преглед (View)
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
