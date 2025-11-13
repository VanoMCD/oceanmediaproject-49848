import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X, Waves } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navigation = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: t('nav.home') },
    { href: "#about", label: t('nav.about') },
    { href: "#portfolio", label: t('nav.catalog') },
    { href: "#clients", label: t('nav.forWhom') },
    { href: "#request", label: t('nav.request') },
  ];

  const smoothScrollTo = (targetPosition: number) => {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeInOutCubic = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      window.scrollTo(0, startPosition + distance * easeInOutCubic);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - 80;
      smoothScrollTo(targetPosition);
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="https://oceanmediaproject.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300 cursor-pointer"
          >
            <Waves className="h-8 w-8 text-accent animate-ocean-wave" />
            <span className="text-xl font-bold text-primary">OCEAN MEDIA PROJECT</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-foreground hover:text-accent transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="default" 
              className="bg-gradient-ocean text-primary-foreground shadow-ocean hover:shadow-depth transition-all duration-300 cursor-pointer"
              onClick={() => {
                const target = document.querySelector('#contact');
                if (target) {
                  const targetPosition = target.getBoundingClientRect().top + window.scrollY - 80;
                  smoothScrollTo(targetPosition);
                }
              }}
            >
              {t('nav.contact')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <LanguageSwitcher />
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-foreground hover:text-accent transition-colors duration-300 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <Button 
                variant="default" 
                className="bg-gradient-ocean text-primary-foreground w-full cursor-pointer"
                onClick={() => {
                  const target = document.querySelector('#contact');
                  if (target) {
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 80;
                    smoothScrollTo(targetPosition);
                    setIsOpen(false);
                  }
                }}
              >
                {t('nav.contact')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;