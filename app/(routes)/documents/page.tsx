"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { FileText, Eye, ArrowLeft, Plus } from "lucide-react";
import { DOCUMENTS } from "@/app/_data/documents";

export default function DocumentsPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [q, setQ] = useState("");

  useEffect(() => {
    document.title = "Documents - Admin Dashboard | OmniScripts";
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/status');
        const data = await response.json();
        if (data.authenticated) setIsAuthenticated(true);
        else router.push('/login');
      } catch (_) {
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return DOCUMENTS;
    return DOCUMENTS.filter(d =>
      [d.title, d.number, d.subject, d.party?.name]
        .filter(Boolean)
        .some(v => (v as string).toLowerCase().includes(query))
    );
  }, [q]);

  if (!isAuthenticated) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-blue-50/30 to-brand-50/50">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-brand-500 to-ocean-500 shadow-lg">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-foreground to-brand-600 bg-clip-text text-transparent">
              Documents
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Input placeholder="Search..." value={q} onChange={e => setQ(e.target.value)} className="w-56" />
            <Button variant="ghost" onClick={() => router.push('/contracts')}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>
            <Button variant="secondary" disabled>
              <Plus className="mr-2 h-4 w-4" /> New (add in code)
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <Card className="border-0 shadow-xl bg-card/90 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Generic Documents</CardTitle>
            <CardDescription>Statements like Payments, TRC confirmations, etc.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Number</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Party</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map(doc => (
                  <TableRow key={doc.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{doc.number}</TableCell>
                    <TableCell className="max-w-xs truncate" title={doc.title}>{doc.title}</TableCell>
                    <TableCell className="uppercase text-xs">{doc.type}</TableCell>
                    <TableCell>{renderStatus(doc.status)}</TableCell>
                    <TableCell>{doc.date}</TableCell>
                    <TableCell className="max-w-[200px] truncate" title={doc.party?.name}>{doc.party?.name || '—'}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" onClick={() => router.push(`/documents/${doc.id}`)}>
                        <Eye className="h-4 w-4 mr-2" /> View
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

function renderStatus(status: 'draft'|'pending'|'ready'|'cancelled') {
  const map = {
    draft: 'bg-gray-100 text-gray-800',
    pending: 'bg-yellow-100 text-yellow-800',
    ready: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  } as const;
  const cls = map[status] || 'bg-secondary';
  return <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${cls}`}>{status}</span>;
}


