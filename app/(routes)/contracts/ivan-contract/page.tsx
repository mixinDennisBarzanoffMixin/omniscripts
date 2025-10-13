"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer } from "lucide-react";


const COMPANY_DATA = {
    name: "ОмниСкриптс ЕООД",
    nameEn: "OmniScripts LTD",
    address: "гр. Костинброд, ул. Александър Стамболийски, 2",
    city: "Костинброд",
    postalCode: "2230",
    eik: "208165760",
    vatNumber: "-",
    manager: "Денис Руменов Бързанов",
    managerTitle: "Управител",
    activity: "62.01 - Компютърно програмиране",
    email: "service@omniscripts.eu",
    phone: "+359 88 360 0203",
    website: "www.omniscripts.eu",
    bank: "Postbank",
    iban: "BG51 BPBI 7940 1094 8630 01",
    bic: "BPBIBGSF",
    bankAddress: "OKOLOVRASTEN PAT STR 260, SOFIA",
    // Accounting and signature data
    accountant: {
    name: "Денис Руменов Бързанов",
    title: "МОЛ",
    certification: "",
    phone: "+359 88 360 0203"
    },
    cashier: {
    name: "Денис Руменов Бързанов", 
    title: "Управител",
    employeeId: "EMP-001"
    }
};

export default function FreelancerContractPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    document.title = "Договор за изработка на уебсайт | OmniScripts";
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

  // Възложител — CarsBG-11 OOD
  const CLIENT = {
    nameLocal: "КарсБГ-11 ООД",
    nameEn: "CarsBG-11 LTD",
    eik: "204743277",
    pic: "20170830163009",
    legalForm: "Дружество с ограничена отговорност (ООД)",
    address:
      'ж.к. Люлин 1, бул. "Сливница" 357А, 1360 София',
    email: "rentauto@abv.bg",
    phone: "—",
    manager: "Елеонора Богданова Хардалиева",
  } as const;

  const formatDateBG = (date: Date) => {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
  };

  const today = new Date("2025-10-14");
  const estimatedCompletion = new Date(today.getTime());
  estimatedCompletion.setDate(estimatedCompletion.getDate() + 30);
  const contractNumber = `CTR-${today.getFullYear()}-WS-002`;

  if (!isAuthenticated) return <div className="p-6">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-blue-50 p-6 print:p-0 print:bg-white">
      {/* Controls (hidden in print) */}
      <div className="max-w-5xl mx-auto mb-4 print:hidden">
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => router.push("/contracts")}
            className="hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Назад
          </Button>
          <Button
            onClick={handlePrint}
            className="bg-linear-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600"
          >
            <Printer className="mr-2 h-4 w-4" /> Печат
          </Button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl print:shadow-none print:rounded-none print:max-w-4xl print:mx-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-600 to-brand-700 p-4 rounded-t-xl print:rounded-none text-white">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/80 border border-white/30 flex items-center justify-center">
                <img src="/logo.png" alt="OmniScripts" width={40} height={40} />
              </div>
              <div>
                <h1 className="text-xl font-bold">Договор за изработка на уебсайт</h1>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold leading-none">ДОГОВОР</div>
              <div className="text-brand-100">№ {contractNumber} | Дата: {formatDateBG(today)}</div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 print:p-2 text-[13px] leading-tight print:text-[11px]">
          {/* Parties */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border border-gray-300 rounded-lg print:rounded-none">
            <div className="p-3 bg-gradient-to-br from-brand-50 to-blue-50">
              <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">Изпълнител</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Име:</strong> {COMPANY_DATA.name} / {COMPANY_DATA.nameEn}</div>
                <div><strong>Адрес:</strong> {COMPANY_DATA.address}, {COMPANY_DATA.postalCode} {COMPANY_DATA.city}</div>
                <div><strong>ЕИК:</strong> {COMPANY_DATA.eik} | <strong>ДДС №:</strong> {COMPANY_DATA.vatNumber}</div>
                <div><strong>Представлявано от:</strong> {COMPANY_DATA.manager} ({COMPANY_DATA.managerTitle})</div>
                <div><strong>Email:</strong> {COMPANY_DATA.email}</div>
                <div><strong>Телефон:</strong> {COMPANY_DATA.phone}</div>
              </div>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold text-brand-800 mb-3 uppercase">Възложител</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Фирма:</strong> {CLIENT.nameLocal} / {CLIENT.nameEn}</div>
                <div><strong>Правна форма:</strong> {CLIENT.legalForm}</div>
                <div><strong>Седалище и адрес:</strong> {CLIENT.address}</div>
                <div><strong>ЕИК:</strong> {CLIENT.eik} | <strong>ПИК:</strong> {CLIENT.pic}</div>
                <div><strong>Представител:</strong> {CLIENT.manager}</div>
                <div><strong>Email:</strong> {CLIENT.email} | <strong>Телефон:</strong> {CLIENT.phone}</div>
              </div>
              <div className="mt-3 p-2 bg-gray-50 rounded border text-sm grid grid-cols-2 gap-2">
                <div><strong>Начало:</strong> {formatDateBG(today)}</div>
                <div><strong>Приблизителен Край:</strong> {formatDateBG(estimatedCompletion)}</div>
              </div>
            </div>
          </div>

          {/* Terms */}
          <section className="mb-4">
            <div className="rounded-lg border border-gray-300 p-4 bg-white">
              <h3 className="text-base font-bold text-brand-800 mb-3">Основни клаузи</h3>
              <div className="grid md:grid-cols-2 gap-4 text-[13px] leading-6">
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">1) Обхват</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Изработка на уебсайт с модерен responsive дизайн.</li>
                    <li>Превод на съдържанието на сайта автоматично в български език.</li>
                    <li>Интеграция на съдържание, формa за контакт, SEO настройка.</li>
                    <li>Система за аналитика за проследяване на посетителите и посещаваните страници</li>
                    <li>Админ панел за управление на сайта чрез Directus или подобна система, в случай че проектът запазва данни и е необходима лесната им модификация</li>
                    <li>Технологии по избор на Изпълнителя.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">2) Цена и плащане</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Обща цена: 12 000 лв.</li>
                    <li>Аванс 6500 лв при подписване на договора.</li>
                    <li>Остатък 5500 лв при финално приемане.</li>
                    <li>Плащане в кеш чрез ордер или по банков път към IBAN: {COMPANY_DATA.iban}, Bank: {COMPANY_DATA.bank}, BIC: {COMPANY_DATA.bic}.</li>
                    <li>Просрочие: законна лихва след 5 работни дни от падеж.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">3) Предаване и приемане</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Демо среда за преглед от Възложителя.</li>
                    <li>Възложителят има 30 работни дни за писмени забележки.</li>
                    <li>При липса на забележки в срока: приемане по право.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">4) Права върху резултата</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Пълните права върху финалния проект се прехвърлят на Възложителя след пълно плащане.</li>
                    <li>Предварително съществуващи инструменти/библиотеки на Изпълнителя не се прехвърлят.</li>
                    <li>Изпълнителят може да показва проекта в портфолио, без поверителни данни.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">5) Промени</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Извън-обхватни промени изискват писмено одобрение.</li>
                    <li>Може да повлияят на срок и бюджет.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">6) Гаранция и поддръжка</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>30 дни гаранция за отстраняване на дефекти.</li>
                    <li>2 години безплатна поддръжка за малки корекции и поправки на уебсайта.</li>
                    <li>Значителни промени и разширения изискват допълнително заплащане/фактура.</li>
                    <li>По-нататъшно развитие и мащабни промени по отделно споразумение.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">7) Поверителност</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Строга конфиденциалност на данните на страните.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">8) Прекратяване</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>При съществено нарушение – писмено предизвестие 7 дни.</li>
                    <li>Дължимо заплащане за реално извършена работа до датата на прекратяване.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">9) Отговорност</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Без косвени/последващи вреди.</li>
                    <li>Отговорност на Изпълнителя е ограничена до платените по договора суми.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">10) Приложимо право</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Българско право. Компетентен съд: София.</li>
                    <li>Страните полагат усилия за добронамерено уреждане преди съд.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-800 mb-1">11) Оперативни разходи за уебсайта</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Текущите разходи за поддържане на уебсайта (хостинг, домейн и др.) се поемат първоначално от Изпълнителя (ОмниСкриптс ЕООД), освен ако не е уговорено друго.</li>
                    <li>Изпълнителят издава фактури към Възложителя за тези разходи за възстановяване на направените плащания.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Signatures */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-300 pt-4">
            {/* Възложител */}
            <div>
              <h4 className="text-sm font-bold text-brand-800 mb-2">Възложител</h4>
              <div className="space-y-3">
                {/* Company */}
                <div>
                  <p className="text-sm mb-1">Фирма</p>
                  <div className="border-b border-gray-400 w-64 h-6 flex items-end">
                    <span className="text-sm">{CLIENT.nameLocal}</span>
                  </div>
                </div>
                {/* Name of representative */}
                <div>
                  <p className="text-sm mb-1">Представител</p>
                  <div className="border-b border-gray-400 w-64 h-6 flex items-end">
                    <span className="text-sm">{CLIENT.manager ? CLIENT.manager : ""}</span>
                  </div>
                </div>
                {/* Signature */}
                <div>
                  <p className="text-sm mb-1">Подпис</p>
                  <div className="border-b border-gray-400 w-64 h-6" />
                </div>
              </div>
            </div>
            {/* Изпълнител */}
            <div>
              <h4 className="text-sm font-bold text-brand-800 mb-2">Изпълнител</h4>
              <div className="space-y-3">
                {/* Company */}
                <div>
                  <p className="text-sm mb-1">Фирма</p>
                  <div className="border-b border-gray-400 w-64 h-6 flex items-end">
                    <span className="text-sm">{COMPANY_DATA.name}</span>
                  </div>
                </div>
                {/* Name of representative */}
                <div>
                  <p className="text-sm mb-1">Представител</p>
                  <div className="border-b border-gray-400 w-64 h-6 flex items-end">
                    <span className="text-sm">{COMPANY_DATA.manager}</span>
                  </div>
                </div>
                {/* Signature */}
                <div>
                  <p className="text-sm mb-1">Подпис</p>
                  <div className="border-b border-gray-400 w-64 h-6" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-300 p-4 bg-gradient-to-r from-gray-50 to-brand-50 rounded-b-xl print:rounded-none print:hidden text-center text-sm text-gray-600">
          <p><strong>{COMPANY_DATA.website}</strong> | Email: {COMPANY_DATA.email}</p>
          <p>IBAN: {COMPANY_DATA.iban} | BIC: {COMPANY_DATA.bic} | Bank: {COMPANY_DATA.bank}</p>
        </div>
      </div>
    </div>
  );
}

