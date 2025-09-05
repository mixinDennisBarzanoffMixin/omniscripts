"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer } from "lucide-react";
import { RKOS, COMPANY_DATA } from "@/app/_data/invoices";

export default function RKOViewPage() {
  const router = useRouter();
  const params = useParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const rkoId = params.id as string;
  const rko = RKOS.find(r => r.id === rkoId);

  useEffect(() => {
    document.title = `RKO ${rkoId} | OmniScripts`;
    
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
  }, [router, rkoId]);

  const handlePrint = () => {
    window.print();
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("bg-BG", {
      style: "currency",
      currency: "BGN",
      minimumFractionDigits: 2,
    }).format(price);
  };

  const convertNumberToWords = (num: number): string => {
    // Simple number to words converter for Bulgarian
    const ones = ['', 'един', 'два', 'три', 'четири', 'пет', 'шест', 'седем', 'осем', 'девет'];
    const tens = ['', '', 'двадесет', 'тридесет', 'четиридесет', 'петдесет', 'шестдесет', 'седемдесет', 'осемдесет', 'деветдесет'];
    const teens = ['десет', 'единадесет', 'дванадесет', 'тринадесет', 'четиринадесет', 'петнадесет', 'шестнадесет', 'седемнадесет', 'осемнадесет', 'деветнадесет'];
    
    if (num === 0) return 'нула';
    if (num < 10) return ones[num];
    if (num >= 10 && num < 20) return teens[num - 10];
    if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? ' ' + ones[num % 10] : '');
    if (num < 1000) return ones[Math.floor(num / 100)] + 'стотин' + (num % 100 ? ' ' + convertNumberToWords(num % 100) : '');
    if (num < 1000000) {
      const thousands = Math.floor(num / 1000);
      const remainder = num % 1000;
      return convertNumberToWords(thousands) + ' хиляди' + (remainder ? ' ' + convertNumberToWords(remainder) : '');
    }
    
    return num.toString(); // fallback for very large numbers
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  if (!rko) {
    return (
      <div className="min-h-screen bg-linear-to-br from-background via-red-50/30 to-orange-50/50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">RKO Not Found</h1>
          <Button onClick={() => router.push('/rko')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to RKO List
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          .rko-container {
            max-width: none !important;
            margin: 0 !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            page-break-inside: avoid !important;
          }
          
          .grid {
            display: grid !important;
          }
          
          .grid-cols-12 {
            grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
          }
          
          .grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          
          .grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
          
          .col-span-1 { grid-column: span 1 / span 1 !important; }
          .col-span-2 { grid-column: span 2 / span 2 !important; }
          .col-span-3 { grid-column: span 3 / span 3 !important; }
          .col-span-4 { grid-column: span 4 / span 4 !important; }
          
          .border-4 { border-width: 4px !important; }
          .border-2 { border-width: 2px !important; }
          .border { border-width: 1px !important; }
          .border-b-2 { border-bottom-width: 2px !important; }
          .border-b { border-bottom-width: 1px !important; }
          .border-r { border-right-width: 1px !important; }
          .border-t-2 { border-top-width: 2px !important; }
          
          .bg-teal-700 { background-color: #0f766e !important; }
          .bg-gray-50 { background-color: #f9fafb !important; }
          .bg-white { background-color: #ffffff !important; }
          
          .text-white { color: #ffffff !important; }
          .text-gray-600 { color: #4b5563 !important; }
          .border-teal-700 { border-color: #0f766e !important; }
          .border-gray-300 { border-color: #d1d5db !important; }
          .border-gray-400 { border-color: #9ca3af !important; }
          
          .p-4 { padding: 1rem !important; }
          .p-2 { padding: 0.5rem !important; }
          .px-4 { padding-left: 1rem !important; padding-right: 1rem !important; }
          .mb-4 { margin-bottom: 1rem !important; }
          .mb-2 { margin-bottom: 0.5rem !important; }
          .mt-2 { margin-top: 0.5rem !important; }
          .mr-4 { margin-right: 1rem !important; }
          .mx-4 { margin-left: 1rem !important; margin-right: 1rem !important; }
          
          .text-center { text-align: center !important; }
          .text-right { text-align: right !important; }
          .font-bold { font-weight: 700 !important; }
          .text-sm { font-size: 0.875rem !important; }
          .text-xs { font-size: 0.75rem !important; }
          .text-lg { font-size: 1.125rem !important; }
          
          .flex { display: flex !important; }
          .items-center { align-items: center !important; }
          .justify-center { justify-content: center !important; }
          .flex-1 { flex: 1 1 0% !important; }
          .w-full { width: 100% !important; }
          .w-32 { width: 8rem !important; }
          .h-8 { height: 2rem !important; }
          .h-20 { height: 5rem !important; }
          
          .gap-4 { gap: 1rem !important; }
          
          .space-y-4 > * + * { margin-top: 1rem !important; }
          
          @page {
            size: A4;
            margin: 0.5in;
          }
          
          body {
            font-size: 12px !important;
            line-height: 1.3 !important;
          }
          
          .print\\:text-xs { font-size: 0.75rem !important; }
          .print\\:p-1 { padding: 0.25rem !important; }
          .print\\:p-2 { padding: 0.5rem !important; }
          .print\\:h-12 { height: 3rem !important; }
          .print\\:h-4 { height: 1rem !important; }
          .print\\:mb-1 { margin-bottom: 0.25rem !important; }
          .print\\:mb-2 { margin-bottom: 0.5rem !important; }
          .print\\:gap-1 { gap: 0.25rem !important; }
          .print\\:px-1 { padding-left: 0.25rem !important; padding-right: 0.25rem !important; }
          
          .rko-header .grid-cols-12 {
            display: grid !important;
            grid-template-columns: repeat(12, minmax(0, 1fr)) !important;
          }
          
          .border-b-2.border-gray-300 {
            border-bottom: 2px solid #d1d5db !important;
          }
          
          .border-4.border-teal-700 {
            border: 4px solid #0f766e !important;
          }
        }
      `}</style>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-brand-50 p-8 print:p-0 print:bg-white">
      {/* Print/Back Controls - Hidden in print */}
      <div className="max-w-4xl mx-auto mb-6 print:hidden">
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => router.push('/rko')}
            className="hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад към РКО (Back to RKO)
          </Button>
          <Button
            onClick={handlePrint}
            className="bg-linear-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600"
          >
            <Printer className="mr-2 h-4 w-4" />
            Печат (Print)
          </Button>
        </div>
      </div>

      <div className="rko-container max-w-4xl mx-auto bg-white shadow-xl rounded-xl print:shadow-none print:rounded-none print:max-w-none">
        {/* Header - Official RKO Style */}
        <div className="rko-header border-4 border-teal-700 rounded-t-xl print:rounded-none bg-white">
          <div className="border-b-2 border-gray-300 p-4">
            <div className="text-center text-sm text-gray-600 mb-2">
              организация, фирма
            </div>
            <div className="text-center font-bold text-lg">
              {COMPANY_DATA.name}
            </div>
          </div>
          
          <div className="grid grid-cols-12 border-b-2 border-gray-300">
            <div className="col-span-3 bg-teal-700 text-white p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="font-bold text-lg">РАЗХОДЕН</div>
                <div className="font-bold text-lg">КАСОВ ОРДЕР</div>
              </div>
            </div>
            <div className="col-span-3 border-r border-gray-300 p-4 text-center">
              <div className="text-sm text-gray-600 mb-2">№</div>
              <div className="font-bold text-lg">{rko.number.replace('РКО-', '')}</div>
            </div>
            <div className="col-span-3 border-r border-gray-300 p-4 text-center">
              <div className="text-sm text-gray-600 mb-2">Дата</div>
              <div className="font-bold text-lg">{rko.date}</div>
            </div>
            <div className="col-span-3 p-4 text-center">
              <div className="text-sm text-gray-600 mb-2">Идентификационен номер</div>
              <div className="font-bold">{COMPANY_DATA.eik}</div>
            </div>
          </div>
        </div>

        {/* Main Content - Official RKO Form Style */}
        <div className="border-4 border-teal-700 border-t-0 rounded-b-xl print:rounded-none bg-white">
          {/* Da se broi na (To be counted to) */}
          <div className="border-b-2 border-gray-300 p-4">
            <div className="flex items-center mb-4">
              <span className="font-bold mr-4">Да се брои на</span>
              <div className="flex-1 border-b border-gray-400 pb-1">
                <span className="font-semibold">{rko.payer}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-2">
                <span className="font-bold">гр./с.</span>
              </div>
              <div className="col-span-2">
                <div className="border-b border-gray-400 pb-1 text-center">София</div>
              </div>
              <div className="col-span-2">
                <span className="font-bold">ул.</span>
              </div>
              <div className="col-span-4">
                <div className="border-b border-gray-400 pb-1"></div>
              </div>
              <div className="col-span-1">
                <span className="font-bold">№</span>
              </div>
              <div className="col-span-1">
                <div className="border-b border-gray-400 pb-1"></div>
              </div>
            </div>
          </div>

          {/* Za (For) */}
          <div className="border-b-2 border-gray-300 p-4">
            <div className="flex items-center">
              <span className="font-bold mr-4">за</span>
              <div className="flex-1 border-b border-gray-400 pb-1">
                <span>{rko.purpose}</span>
              </div>
            </div>
          </div>

          {/* Sumata (Amount) */}
          <div className="border-b-2 border-gray-300 p-4">
            <div className="flex items-center">
              <span className="font-bold mr-4">Сумата</span>
              <div className="w-32 border-b border-gray-400 pb-1 text-center font-bold">
                {formatPrice(rko.amount)}
              </div>
              <span className="font-bold mx-4">лв. словом</span>
              <div className="flex-1 border-b border-gray-400 pb-1">
                <span className="text-sm">{convertNumberToWords(rko.amount)} лева</span>
              </div>
            </div>
          </div>

          {/* Empty space for additional notes */}
          <div className="border-b-2 border-gray-300 p-2 print:p-1 h-16 print:h-12">
            {rko.notes && (
              <div className="text-sm print:text-xs text-gray-700">
                <strong>Забележки:</strong> {rko.notes}
              </div>
            )}
          </div>

          {/* Signatures section - Official style */}
          <div className="grid grid-cols-2 border-b-2 border-gray-300">
            <div className="border-r border-gray-300 p-3 print:p-2 bg-gray-50">
              <div className="text-center mb-2 print:mb-1">
                <span className="font-bold text-sm print:text-xs">Гл. счетоводител:</span>
              </div>
              <div className="border-b border-gray-400 w-full h-6 print:h-4 mb-1"></div>
              <div className="text-center text-xs print:text-xs text-gray-600">подпис</div>
            </div>
            <div className="p-3 print:p-2 bg-gray-50">
              <div className="text-center mb-2 print:mb-1">
                <span className="font-bold text-sm print:text-xs">Ръководител:</span>
              </div>
              <div className="border-b border-gray-400 w-full h-6 print:h-4 mb-1"></div>
              <div className="text-center text-xs print:text-xs text-gray-600">подпис</div>
            </div>
          </div>

          {/* Payment confirmation section */}
          <div className="border-b-2 border-gray-300 p-3 print:p-2">
            <div className="grid grid-cols-12 gap-2 print:gap-1 items-center mb-3 print:mb-2">
              <div className="col-span-3">
                <span className="font-bold text-sm print:text-xs">Получих сумата, пълн. №</span>
              </div>
              <div className="col-span-2">
                <div className="border-b border-gray-400 pb-1 text-center text-sm print:text-xs">
                  {rko.invoiceRef || ''}
                </div>
              </div>
              <div className="col-span-1">
                <span className="font-bold text-sm print:text-xs">от</span>
              </div>
              <div className="col-span-2">
                <div className="border-b border-gray-400 pb-1 text-center text-sm print:text-xs">
                  {rko.date}
                </div>
              </div>
              <div className="col-span-1">
                <span className="font-bold text-sm print:text-xs">г., ЕГН</span>
              </div>
              <div className="col-span-3">
                <div className="border-b border-gray-400 pb-1"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-12 gap-2 print:gap-1 items-center">
              <div className="col-span-2">
                <span className="font-bold text-sm print:text-xs">лична карта №</span>
              </div>
              <div className="col-span-3">
                <div className="border-b border-gray-400 pb-1"></div>
              </div>
              <div className="col-span-2">
                <span className="font-bold text-sm print:text-xs">издадена на</span>
              </div>
              <div className="col-span-2">
                <div className="border-b border-gray-400 pb-1"></div>
              </div>
              <div className="col-span-1">
                <span className="font-bold text-sm print:text-xs">/</span>
              </div>
              <div className="col-span-2">
                <div className="border-b border-gray-400 pb-1"></div>
              </div>
            </div>
          </div>

          {/* Final signatures */}
          <div className="grid grid-cols-12 p-3 print:p-2 gap-2 print:gap-1">
            <div className="col-span-3">
              <span className="font-bold text-sm print:text-xs">от</span>
              <div className="border-b border-gray-400 w-full h-6 print:h-4 mt-1 mb-1"></div>
            </div>
            <div className="col-span-3 text-right px-2 print:px-1">
              <span className="font-bold text-sm print:text-xs">подпис:</span>
              <div className="border-b border-gray-400 w-full h-6 print:h-4 mt-1 mb-1"></div>
            </div>
            <div className="col-span-3">
              <span className="font-bold text-sm print:text-xs">Броил сумата:</span>
              <div className="border-b border-gray-400 w-full h-6 print:h-4 mt-1 mb-1"></div>
              <div className="text-center text-xs text-gray-600">касиер</div>
            </div>
            <div className="col-span-3 text-right">
              <span className="font-bold text-sm print:text-xs">Съставил:</span>
              <div className="border-b border-gray-400 w-full h-6 print:h-4 mt-1 mb-1"></div>
              <div className="text-center text-xs text-gray-600">подпис</div>
            </div>
          </div>
        </div>

        {/* Footer - Official RKO Style */}
        <div className="border-t-2 border-gray-300 p-2 bg-gray-50 text-center text-xs rounded-b-xl print:rounded-none">
          <div className="grid grid-cols-3 gap-4">
            <div>1-1401хим.</div>
            <div><strong>*Веа - 33</strong> &nbsp;&nbsp;&nbsp; Счетоводител:</div>
            <div className="text-right"><strong>Всичко</strong></div>
          </div>
          <div className="mt-2 text-xs">03.2008</div>
          <div className="text-xs">|||||||||||||||||||||||||||||||||||||||</div>
          <div className="text-xs">3||8 0 0 1 4 6 ||8 0 0 3</div>
        </div>
      </div>
      </div>
    </>
  );
}
