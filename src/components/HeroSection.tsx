import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-underwater.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Underwater coral reef scene" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float text-white">
          {t('hero.title')}
        </h1>
        <h2 className="text-xl md:text-3xl mb-8 text-white font-light">
          {t('hero.subtitle')}
        </h2>
        <div className="text-lg md:text-xl mb-12 text-white max-w-3xl mx-auto space-y-2">
          <p className="text-white">{t('hero.point1')}</p>
          <p className="text-white">{t('hero.point2')}</p>
          <p className="text-white">{t('hero.point3')}</p>
        </div>
        
        <div className="flex justify-center items-center">
          <a 
            href="https://www.youtube.com/@OceanMediaProject"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white shadow-depth hover:shadow-ocean transition-all duration-500 transform hover:scale-105 px-12"
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              {t('hero.youtubeButton')}
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ArrowDown className="h-6 w-6 text-primary-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
