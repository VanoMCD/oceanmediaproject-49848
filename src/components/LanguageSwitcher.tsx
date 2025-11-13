import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { languages } from '@/i18n/config';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    
    // Update URL with new language
    const pathParts = location.pathname.split('/').filter(Boolean);
    const currentLang = Object.keys(languages).find(lang => lang === pathParts[0]);
    
    if (currentLang) {
      pathParts[0] = lng;
    } else {
      pathParts.unshift(lng);
    }
    
    navigate(`/${pathParts.join('/')}`);
    setIsOpen(false);
  };

  const currentLanguage = languages[i18n.language as keyof typeof languages] || languages.en;

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 text-foreground hover:text-accent"
        >
          <Globe className="h-5 w-5 text-blue-500" />
          <span className="hidden md:inline">{currentLanguage.flag} {currentLanguage.name}</span>
          <span className="md:hidden">{currentLanguage.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {Object.entries(languages)
          .sort(([, a], [, b]) => a.order - b.order)
          .map(([code, { name, flag }]) => (
            <DropdownMenuItem
              key={code}
              onClick={() => changeLanguage(code)}
              className={`cursor-pointer ${i18n.language === code ? 'bg-accent/10' : ''}`}
            >
              <span className="mr-2">{flag}</span>
              {name}
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
