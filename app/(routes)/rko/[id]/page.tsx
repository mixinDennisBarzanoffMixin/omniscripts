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
          <div className="border-b-2 border-gray-300 p-4 h-20">
            {rko.notes && (
              <div className="text-sm text-gray-700">
                <strong>Забележки:</strong> {rko.notes}
              </div>
            )}
          </div>

          {/* Signatures section - Official style */}
          <div className="grid grid-cols-2 border-b-2 border-gray-300">
            <div className="border-r border-gray-300 p-4 bg-gray-50">
              <div className="text-center mb-4">
                <span className="font-bold">Гл. счетоводител:</span>
              </div>
              <div className="border-b border-gray-400 w-full h-8 mb-2"></div>
              <div className="text-center text-xs text-gray-600">подпис</div>
            </div>
            <div className="p-4 bg-gray-50">
              <div className="text-center mb-4">
                <span className="font-bold">Ръководител:</span>
              </div>
              <div className="border-b border-gray-400 w-full h-8 mb-2"></div>
              <div className="text-center text-xs text-gray-600">подпис</div>
            </div>
          </div>

          {/* Payment confirmation section */}
          <div className="border-b-2 border-gray-300 p-4">
            <div className="grid grid-cols-12 gap-4 items-center mb-4">
              <div className="col-span-3">
                <span className="font-bold">Получих сумата, пълн. №</span>
              </div>
              <div className="col-span-2">
                <div className="border-b border-gray-400 pb-1 text-center">
                  {rko.invoiceRef || ''}
                </div>
              </div>
              <div className="col-span-1">
                <span className="font-bold">от</span>
              </div>
              <div className="col-span-2">
                <div className="border-b border-gray-400 pb-1 text-center">
                  {rko.date}
                </div>
              </div>
              <div className="col-span-1">
                <span className="font-bold">г., ЕГН</span>
              </div>
              <div className="col-span-3">
                <div className="border-b border-gray-400 pb-1"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-2">
                <span className="font-bold">лична карта №</span>
              </div>
              <div className="col-span-3">
                <div className="border-b border-gray-400 pb-1"></div>
              </div>
              <div className="col-span-2">
                <span className="font-bold">издадена на</span>
              </div>
              <div className="col-span-2">
                <div className="border-b border-gray-400 pb-1"></div>
              </div>
              <div className="col-span-1">
                <span className="font-bold">/</span>
              </div>
              <div className="col-span-2">
                <div className="border-b border-gray-400 pb-1"></div>
              </div>
            </div>
          </div>

          {/* Final signatures */}
          <div className="grid grid-cols-12 p-4">
            <div className="col-span-3">
              <span className="font-bold">от</span>
              <div className="border-b border-gray-400 w-full h-8 mt-2 mb-2"></div>
            </div>
            <div className="col-span-3 text-right px-4">
              <span className="font-bold">подпис:</span>
              <div className="border-b border-gray-400 w-full h-8 mt-2 mb-2"></div>
            </div>
            <div className="col-span-3">
              <span className="font-bold">Броил сумата:</span>
              <div className="border-b border-gray-400 w-full h-8 mt-2 mb-2"></div>
              <div className="text-center text-xs text-gray-600">касиер</div>
            </div>
            <div className="col-span-3 text-right">
              <span className="font-bold">Съставил:</span>
              <div className="border-b border-gray-400 w-full h-8 mt-2 mb-2"></div>
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
  );
}
