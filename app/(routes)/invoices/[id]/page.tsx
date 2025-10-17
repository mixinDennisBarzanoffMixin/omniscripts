"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Printer } from "lucide-react";
import { INVOICES, COMPANY_DATA, calculateInvoiceTotal, addDays } from "@/app/_data/invoices";

export default function InvoiceViewPage() {
  const router = useRouter();
  const params = useParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const invoiceId = params.id as string;
  const invoice = INVOICES.find(inv => inv.id === invoiceId);

  useEffect(() => {
    document.title = `Invoice ${invoiceId} | OmniScripts`;
    
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
  }, [router, invoiceId]);

  // Auto-calculated values
  const calculatedData = useMemo(() => {
    if (!invoice) return null;

    const calculations = calculateInvoiceTotal(invoice.services);
    const dueDate = addDays(invoice.date, invoice.paymentTermsDays);

    return {
      ...calculations,
      dueDate,
    };
  }, [invoice]);

  const handlePrint = () => {
    window.print();
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'paid':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Πληρωμένο (Paid)</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Εκκρεμεί (Pending)</Badge>;
      case 'draft':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Πρόχειρο (Draft)</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Ακυρώθηκε (Cancelled)</Badge>;
      case 'overdue':
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Καθυστερημένο (Overdue)</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  if (!invoice || !calculatedData) {
    return (
      <div className="min-h-screen bg-linear-to-br from-background via-blue-50/30 to-brand-50/50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Invoice Not Found</h1>
          <Button onClick={() => router.push('/invoices')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Invoices
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-blue-50 p-6 print:p-0 print:bg-white">
      {/* Print/Back Controls - Hidden in print */}
      <div className="max-w-5xl mx-auto mb-4 print:hidden">
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => router.push('/invoices')}
            className="hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Επιστροφή (Back to Invoices)
          </Button>
          <Button
            onClick={handlePrint}
            className="bg-linear-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600"
          >
            <Printer className="mr-2 h-4 w-4" />
            Εκτύπωση (Print)
          </Button>
        </div>
      </div>

      <div className="invoice-container max-w-5xl mx-auto bg-white shadow-xl rounded-xl print:shadow-none print:rounded-none print:max-w-4xl print:mx-4">
        {/* Header with Logo */}
        <div className="invoice-header bg-gradient-to-r from-brand-600 to-brand-700 p-4 rounded-t-xl print:rounded-none print:p-2">
          <div className="flex justify-between items-start text-white">
            <div>
              <div className="flex items-center gap-3 mb-1">
                {/* Company Logo */}
                <div className="w-10 h-10 flex items-center justify-center">
                  <div className="w-full h-full bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center text-white font-bold text-lg border border-white/30">
                    <img src="/logo.png" alt="OmniScripts" width={40} height={40} />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold">{COMPANY_DATA.name}</h1>
                  <p className="text-brand-100 text-sm">
                    {COMPANY_DATA.nameEn}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-2xl font-bold mb-0.5">ФАКТУРА</h2>
              <p className="text-brand-100 text-base">
                № {invoice.number}
              </p>
              <div className="mt-2 print:hidden">
                {getStatusBadge(invoice.status)}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4 print:p-2 text-[13px] leading-tight print:text-[11px]">
          {/* Company and Client Info */}
          <div className="grid grid-cols-2 gap-4 mb-4 border border-gray-300 rounded-lg print:rounded-none print:gap-2 print:mb-2">
            {/* Company Info */}
            <div className="p-3 bg-gradient-to-br from-brand-50 to-blue-50 print:p-2">
              <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">
                ИЗДАТЕЛ
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Фирма:</strong> {COMPANY_DATA.name}
                </div>
                <div>
                  <strong>Адрес:</strong> {COMPANY_DATA.address}
                </div>
                <div>
                  <strong>ЕИК:</strong> {COMPANY_DATA.eik}
                </div>
                <div>
                  <strong>Управител:</strong> {COMPANY_DATA.manager}
                </div>
                <div>
                  <strong>Email:</strong> {COMPANY_DATA.email}
                </div>
                <div>
                  <strong>Телефон:</strong> {COMPANY_DATA.phone}
                </div>
              </div>
            </div>

            {/* Client Info */}
            <div className="p-3 print:p-2">
              <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">
                ПОЛУЧАТЕЛ
              </h3>
              <div className="space-y-2 text-sm">
                <div>
                  <strong>Фирма:</strong> {invoice.client.nameLocal}
                </div>
                <div>
                  <strong>Адрес:</strong> {invoice.client.address}
                </div>
                <div>
                  <strong>ЕИК:</strong> {invoice.client.eik}
                </div>
                <div>
                  <strong>Управител:</strong> {invoice.client.manager}
                </div>
              </div>

              {/* Invoice Details */}
              <div className="mt-3 p-2 bg-gray-50 rounded border">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <strong>Дата:</strong> {invoice.date}
                  </div>
                  <div>
                    <strong>Падеж:</strong> {calculatedData.dueDate}
                  </div>
                  <div>
                    <strong>Място:</strong> {invoice.place}
                  </div>
                  <div>
                    <strong>Условия:</strong>{" "}
                    {invoice.paymentTermsDays} дни
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Table */}
          <div className="services-table mb-4 print:mb-2">
            <div className="overflow-hidden rounded-lg border border-gray-300">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-brand-600 to-brand-700 text-white">
                  <tr>
                    <th className="px-3 py-2 text-left text-sm font-semibold w-10 print:px-2 print:py-1">
                      №
                    </th>
                    <th className="px-3 py-2 text-left text-sm font-semibold print:px-2 print:py-1">
                      Описание на услугата
                    </th>
                    <th className="px-3 py-2 text-center text-sm font-semibold w-16 print:px-2 print:py-1 print:w-12">
                      Кол.
                    </th>
                    <th className="px-3 py-2 text-right text-sm font-semibold w-28 print:px-2 print:py-1 print:w-20">
                      Ед. цена
                    </th>
                    <th className="px-3 py-2 text-right text-sm font-semibold w-28 print:px-2 print:py-1 print:w-20">
                      Сума
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {Array.from({ length: Math.max(5, calculatedData.services.length) }, (_, index) => {
                    const service = calculatedData.services[index];
                    if (service) {
                      return (
                        <tr
                          key={service.id}
                          className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                          <td className="px-3 py-2 text-center text-sm print:px-2 print:py-1">
                            {service.id}
                          </td>
                          <td className="px-3 py-2 text-sm print:px-2 print:py-1">
                            <div className="font-medium text-gray-900">
                              {service.description}
                            </div>
                          </td>
                          <td className="px-3 py-2 text-center text-sm print:px-2 print:py-1">
                            {service.quantity}
                          </td>
                          <td className="px-3 py-2 text-right text-sm print:px-2 print:py-1">
                            {service.unitPrice.toFixed(2)} лв.
                          </td>
                          <td className="px-3 py-2 text-right text-sm font-medium print:px-2 print:py-1">
                            {service.total.toFixed(2)} лв.
                          </td>
                        </tr>
                      );
                    } else {
                      return (
                        <tr
                          key={`empty-${index}`}
                          className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                          <td className="px-3 py-2 text-center text-sm print:px-2 print:py-1">
                            {index + 1}
                          </td>
                          <td className="px-3 py-2 text-sm print:px-2 print:py-1">
                            <div className="font-medium text-gray-900">
                              &nbsp;
                            </div>
                          </td>
                          <td className="px-3 py-2 text-center text-sm print:px-2 print:py-1">
                            &nbsp;
                          </td>
                          <td className="px-3 py-2 text-right text-sm print:px-2 print:py-1">
                            &nbsp;
                          </td>
                          <td className="px-3 py-2 text-right text-sm font-medium print:px-2 print:py-1">
                            &nbsp;
                          </td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment Information and Summary - Side by side */}
          <div className="flex flex-row gap-4 mb-4">
            {/* Payment Information */}
            <div className="w-3/5">
              <div className="payment-terms p-3 bg-gradient-to-r from-brand-50 to-blue-50 border border-gray-300 rounded-lg h-full">
                <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">
                  Информация за плащане
                </h3>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div>
                    <p className="font-medium mb-1">За банков превод:</p>
                    <p>
                      <strong>Получател:</strong> {COMPANY_DATA.name}
                    </p>
                    <p>
                      <strong>IBAN:</strong> {COMPANY_DATA.iban}
                    </p>
                    <p>
                      <strong>BIC:</strong> {COMPANY_DATA.bic}
                    </p>
                    <p>
                      <strong>Банка:</strong> {COMPANY_DATA.bank}
                    </p>
                    <p className="text-xs text-gray-600 mt-1 print:hidden">
                      {COMPANY_DATA.bankAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="w-2/5">
              <div className="bg-gradient-to-br from-gray-50 to-brand-50 border border-gray-300 rounded-lg p-3 h-full">
                <h4 className="text-sm font-bold text-brand-800 mb-3 uppercase">
                  Обобщение
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Междинна сума:</span>
                    <span className="font-medium">
                      {calculatedData.totals.subtotal.toFixed(2)} лв.
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>ДДС:</span>
                    <span>Не се начислява*</span>
                  </div>
                  <div className="border-t border-gray-300 pt-2">
                    <div className="flex justify-between text-lg font-bold text-brand-800">
                      <span>Общо за плащане:</span>
                      <span>{calculatedData.totals.total.toFixed(2)} лв.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terms and Notes */}
          <div className="notes-section border-t border-gray-300 pt-3">
            <div className="text-xs text-gray-700 space-y-1">
              <p>
                <strong>*ДДС:</strong> Фирмата не е регистрирана по ЗДДС и не
                начислява данък добавена стойност.
              </p>
              <p>
                <strong>Условия за плащане:</strong> Плащането се извършва в
                срок от {invoice.paymentTermsDays} дни от датата
                на фактурата.
              </p>
            </div>
          </div>

          {/* Signatures Section */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-300 pt-18">
            <div>
              <h4 className="text-sm font-bold text-brand-800 mb-2">ИЗДАТЕЛ</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm mb-1">Съставил:</p>
                  <div className="border-b border-gray-400 w-48 h-6 flex items-end">
                    <span className="text-sm">{COMPANY_DATA.manager}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-1">Подпис:</p>
                  <div className="border-b border-gray-400 w-48 h-6"></div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-brand-800 mb-2">
                ПОЛУЧАТЕЛ
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm mb-1">Получил:</p>
                  <div className="border-b border-gray-400 w-48 h-6">
                    <span className="text-sm">{invoice.client.manager}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-1">Подпис:</p>
                  <div className="border-b border-gray-400 w-48 h-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Hidden in print since we use page margins */}
        <div className="invoice-footer border-t border-gray-300 p-4 bg-gradient-to-r from-gray-50 to-brand-50 rounded-b-xl print:rounded-none print:hidden">
          <div className="text-center text-sm text-gray-600">
            <p>
              <strong>{COMPANY_DATA.name}</strong> | {COMPANY_DATA.address}
            </p>
            <p>
              {COMPANY_DATA.email} | {COMPANY_DATA.phone} |{" "}
              {COMPANY_DATA.website}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
