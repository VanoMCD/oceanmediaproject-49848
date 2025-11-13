import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams, Navigate, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./i18n/config";
import { languages } from "./i18n/config";

const queryClient = new QueryClient();

// Map countries to languages
const countryToLanguage: { [key: string]: string } = {
  RS: 'sr', // Serbia
  BR: 'pt', // Brazil
  PT: 'pt', // Portugal
  DE: 'de', // Germany
  AT: 'de', // Austria
  CH: 'de', // Switzerland (partial)
  FR: 'fr', // France
  BE: 'fr', // Belgium (partial)
  ES: 'es', // Spain
  MX: 'es', // Mexico
  AR: 'es', // Argentina
  CO: 'es', // Colombia
  CL: 'es', // Chile
  PE: 'es', // Peru
  VE: 'es', // Venezuela
  EC: 'es', // Ecuador
  GT: 'es', // Guatemala
  CU: 'es', // Cuba
  BO: 'es', // Bolivia
  DO: 'es', // Dominican Republic
  HN: 'es', // Honduras
  PY: 'es', // Paraguay
  SV: 'es', // El Salvador
  NI: 'es', // Nicaragua
  CR: 'es', // Costa Rica
  PA: 'es', // Panama
  UY: 'es', // Uruguay
};

const detectLanguage = async (): Promise<string> => {
  const availableLanguages = Object.keys(languages);
  
  // 1. Check browser language
  const browserLang = navigator.language.split('-')[0].toLowerCase();
  if (availableLanguages.includes(browserLang)) {
    return browserLang;
  }
  
  // 2. Check country by IP
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const countryCode = data.country_code;
    
    if (countryCode && countryToLanguage[countryCode]) {
      const langByCountry = countryToLanguage[countryCode];
      if (availableLanguages.includes(langByCountry)) {
        return langByCountry;
      }
    }
  } catch (error) {
    console.log('Could not detect country, using default language');
  }
  
  // 3. Default to English
  return 'en';
};

const LanguageWrapper = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n, ready } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const changeLang = async () => {
      if (lang && Object.keys(languages).includes(lang)) {
        if (i18n.language !== lang) {
          await i18n.changeLanguage(lang);
        }
      }
    };
    changeLang();
  }, [lang, i18n, navigate]);

  // Redirect invalid language codes
  if (lang && !Object.keys(languages).includes(lang)) {
    return <Navigate to="/en" replace />;
  }

  // Don't render until language is loaded
  if (!ready || i18n.language !== lang) {
    return null;
  }

  return <Index />;
};

const RootRedirect = () => {
  const [targetLang, setTargetLang] = useState<string | null>(null);

  useEffect(() => {
    const getLanguage = async () => {
      const lang = await detectLanguage();
      setTargetLang(lang);
    };
    getLanguage();
  }, []);

  if (!targetLang) {
    return null;
  }

  return <Navigate to={`/${targetLang}`} replace />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Redirect root to detected language */}
            <Route path="/" element={<RootRedirect />} />
            
            {/* Language-specific routes */}
            <Route path="/:lang" element={<LanguageWrapper />} />
            
            {/* Catch all - redirect to English */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
