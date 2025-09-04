"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
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
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-blue-50 p-8 print:p-0 print:bg-white">
      {/* Print/Back Controls - Hidden in print */}
      <div className="max-w-5xl mx-auto mb-6 print:hidden">
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

      <div className="invoice-container max-w-5xl mx-auto bg-white shadow-xl rounded-xl print:shadow-none print:rounded-none print:max-w-none">
        {/* Header with Logo */}
        <div className="invoice-header bg-gradient-to-r from-brand-600 to-brand-700 p-6 rounded-t-xl print:rounded-none">
          <div className="flex justify-between items-start text-white">
            <div>
              <div className="flex items-center gap-4 mb-2">
                {/* Company Logo */}
                <div className="w-12 h-12 flex items-center justify-center">
                  <div className="w-full h-full bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white font-bold text-lg border border-white/30">
                    OS
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{COMPANY_DATA.name}</h1>
                  <p className="text-brand-100 text-sm">
                    {COMPANY_DATA.nameEn}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-3xl font-bold mb-1">ФАКТУРА</h2>
              <p className="text-brand-100 text-lg">
                № {invoice.number}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 print:p-4">
          {/* Company and Client Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6 border border-gray-300 rounded-lg print:rounded-none">
            {/* Company Info */}
            <div className="p-4 bg-gradient-to-br from-brand-50 to-blue-50">
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
                  <strong>Дейност:</strong> {COMPANY_DATA.activity}
                </div>
                <div>
                  <strong>Email:</strong> {COMPANY_DATA.email}
                </div>
                <div>
                  <strong>Телефон:</strong> {COMPANY_DATA.phone}
                </div>
                <div>
                  <strong>Уебсайт:</strong> {COMPANY_DATA.website}
                </div>
              </div>
            </div>

            {/* Client Info */}
            <div className="p-4">
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
              <div className="mt-6 p-3 bg-gray-50 rounded border">
                <div className="grid grid-cols-2 gap-4 text-sm">
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
          <div className="services-table mb-6">
            <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">
              УСЛУГИ
            </h3>
            <div className="overflow-hidden rounded-lg border border-gray-300">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-brand-600 to-brand-700 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold w-12">
                      №
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">
                      Описание на услугата
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold w-20">
                      Кол.
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold w-32">
                      Ед. цена
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-semibold w-32">
                      Сума
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {calculatedData.services.map((service, index) => (
                    <tr
                      key={service.id}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-3 text-center text-sm">
                        {service.id}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        <div className="font-medium text-gray-900">
                          {service.description}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center text-sm">
                        {service.quantity}
                      </td>
                      <td className="px-4 py-3 text-right text-sm">
                        {service.unitPrice.toFixed(2)} лв.
                      </td>
                      <td className="px-4 py-3 text-right text-sm font-medium">
                        {service.total.toFixed(2)} лв.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Payment Information and Summary - Side by side */}
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            {/* Payment Information */}
            <div className="w-full lg:w-3/5">
              <div className="payment-terms p-4 bg-gradient-to-r from-brand-50 to-blue-50 border border-gray-300 rounded-lg h-full">
                <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">
                  Информация за плащане
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium mb-2">Начини на плащане:</p>
                    <p>• SEPA превод</p>
                    <p>• В брой</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">За банков превод:</p>
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
                    <p className="text-xs text-gray-600 mt-1">
                      {COMPANY_DATA.bankAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="w-full lg:w-2/5">
              <div className="bg-gradient-to-br from-gray-50 to-brand-50 border border-gray-300 rounded-lg p-4 h-full">
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
          <div className="notes-section border-t border-gray-300 pt-4">
            <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">
              Условия и забележки
            </h3>
            <div className="text-sm text-gray-700 space-y-2">
              <p>
                <strong>*ДДС:</strong> Фирмата не е регистрирана по ЗДДС и не
                начислява данък добавена стойност.
              </p>
              <p>
                <strong>Условия за плащане:</strong> Плащането се извършва в
                срок от {invoice.paymentTermsDays} дни от датата
                на фактурата.
              </p>
              <p>
                <strong>Гаранция:</strong> Всички разработени софтуерни решения
                имат 90-дневна гаранция за отстраняване на грешки.
              </p>
              <p>
                <strong>Интелектуална собственост:</strong> След пълното
                заплащане, всички персонализирани разработки стават собственост
                на клиента, с изключение на proprietary frameworks и библиотеки.
              </p>
            </div>
          </div>

          {/* Signatures Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-300 pt-6">
            <div>
              <h4 className="text-sm font-bold text-brand-800 mb-4">ИЗДАТЕЛ</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm mb-2">Съставил:</p>
                  <div className="border-b border-gray-400 w-48 h-8 flex items-end">
                    <span className="text-sm">{COMPANY_DATA.manager}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">(име и длъжност)</p>
                </div>
                <div>
                  <p className="text-sm mb-2">Подпис:</p>
                  <div className="border-b border-gray-400 w-48 h-8"></div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-brand-800 mb-4">
                ПОЛУЧАТЕЛ
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm mb-2">Получил:</p>
                  <div className="border-b border-gray-400 w-48 h-8"></div>
                  <p className="text-xs text-gray-600 mt-1">(име и длъжност)</p>
                </div>
                <div>
                  <p className="text-sm mb-2">Подпис:</p>
                  <div className="border-b border-gray-400 w-48 h-8"></div>
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
