"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer } from "lucide-react";

export default function FreelancerContractPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    document.title = "Freelancer Contract | OmniScripts";
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/status");
        const data = await res.json();
        if (data.authenticated) setIsAuthenticated(true);
        else router.push("/login");
      } catch (_) {
        router.push("/login");
      }
    };
    checkAuth();
  }, [router]);

  const handlePrint = () => window.print();

  if (!isAuthenticated) return <div>PLACEHOLDER</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-blue-50 p-6 print:p-0 print:bg-white">
      {/* Controls (hidden in print) */}
      <div className="max-w-5xl mx-auto mb-4 print:hidden">
        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={() => router.push("/contracts")} className="hover:scale-105 transition-all duration-300">
            <ArrowLeft className="mr-2 h-4 w-4" /> PLACEHOLDER
          </Button>
          <Button onClick={handlePrint} className="bg-linear-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600">
            <Printer className="mr-2 h-4 w-4" /> PLACEHOLDER
          </Button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl print:shadow-none print:rounded-none print:max-w-4xl print:mx-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-700 p-4 rounded-t-xl print:rounded-none text-white">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/80 border border-white/30 flex items-center justify-center">
                <img src="/logo.png" alt="PLACEHOLDER" width={40} height={40} />
              </div>
              <div>
                <h1 className="text-xl font-bold">PLACEHOLDER</h1>
                <p className="text-brand-100 text-sm">PLACEHOLDER</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold leading-none">PLACEHOLDER</div>
              <div className="text-brand-100">№ PLACEHOLDER</div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 print:p-2 text-[13px] leading-tight print:text-[11px]">
          {/* Parties */}
          <div className="grid grid-cols-2 gap-4 mb-4 border border-gray-300 rounded-lg print:rounded-none">
            <div className="p-3 bg-gradient-to-br from-brand-50 to-blue-50">
              <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">PLACEHOLDER</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Name:</strong> PLACEHOLDER</div>
                <div><strong>Address:</strong> PLACEHOLDER</div>
                <div><strong>UIC:</strong> PLACEHOLDER</div>
                <div><strong>Manager:</strong> PLACEHOLDER</div>
                <div><strong>Email:</strong> PLACEHOLDER</div>
                <div><strong>Phone:</strong> PLACEHOLDER</div>
              </div>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">PLACEHOLDER</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Contractor:</strong> PLACEHOLDER</div>
                <div><strong>Address:</strong> PLACEHOLDER</div>
                <div><strong>UIC:</strong> PLACEHOLDER</div>
                <div><strong>Manager:</strong> PLACEHOLDER</div>
              </div>
              <div className="mt-3 p-2 bg-gray-50 rounded border text-sm grid grid-cols-2 gap-2">
                <div><strong>Start:</strong> PLACEHOLDER</div>
                <div><strong>End:</strong> PLACEHOLDER</div>
              </div>
            </div>
          </div>

          {/* Terms */}
          <section className="mb-4">
            <div className="rounded-lg border border-gray-300 p-4 bg-white">
              <h3 className="text-base font-bold text-brand-800 mb-3">PLACEHOLDER</h3>
              <div className="grid md:grid-cols-2 gap-4 text-[13px] leading-6">
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">PLACEHOLDER</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>PLACEHOLDER</li>
                    <li>PLACEHOLDER</li>
                    <li>PLACEHOLDER</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">PLACEHOLDER</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>PLACEHOLDER</li>
                    <li>PLACEHOLDER</li>
                    <li>PLACEHOLDER</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">PLACEHOLDER</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>PLACEHOLDER</li>
                    <li>PLACEHOLDER</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">PLACEHOLDER</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>PLACEHOLDER</li>
                    <li>PLACEHOLDER</li>
                    <li>PLACEHOLDER</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">PLACEHOLDER</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>PLACEHOLDER</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">PLACEHOLDER</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>PLACEHOLDER</li>
                    <li>PLACEHOLDER</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Signatures */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-300 pt-4">
            <div>
              <h4 className="text-sm font-bold text-brand-800 mb-2">PLACEHOLDER</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm mb-1">PLACEHOLDER</p>
                  <div className="border-b border-gray-400 w-48 h-6 flex items-end"><span className="text-sm">PLACEHOLDER</span></div>
                </div>
                <div>
                  <p className="text-sm mb-1">PLACEHOLDER</p>
                  <div className="border-b border-gray-400 w-48 h-6" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-800 mb-2">PLACEHOLDER</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm mb-1">PLACEHOLDER</p>
                  <div className="border-b border-gray-400 w-48 h-6"><span className="text-sm">PLACEHOLDER</span></div>
                </div>
                <div>
                  <p className="text-sm mb-1">PLACEHOLDER</p>
                  <div className="border-b border-gray-400 w-48 h-6" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-300 p-4 bg-gradient-to-r from-gray-50 to-brand-50 rounded-b-xl print:rounded-none print:hidden text-center text-sm text-gray-600">
          <p><strong>PLACEHOLDER</strong> | PLACEHOLDER</p>
          <p>PLACEHOLDER | PLACEHOLDER | PLACEHOLDER</p>
        </div>
      </div>
    </div>
  );
}

