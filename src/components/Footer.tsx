import { useTranslation } from "react-i18next";
import { Waves, Phone } from "lucide-react";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const startYear = 2025;
  const yearDisplay = currentYear === startYear ? `${startYear}` : `${startYear}-${currentYear}`;
  
  // Adjust line spacing for different languages
  const getDescriptionLeading = () => {
    switch (i18n.language) {
      case 'en':
        return 'leading-loose';
      case 'de':
        return 'leading-normal';
      case 'pt':
        return 'leading-snug';
      case 'sr':
        return 'leading-[1.8]';
      case 'es':
        return 'leading-relaxed';
      case 'fr':
        return 'leading-relaxed';
      default:
        return 'leading-relaxed';
    }
  };
  
  const descriptionLeading = getDescriptionLeading();
  
  const getContactSpacing = () => {
    switch (i18n.language) {
      case 'en':
        return 'space-y-2';
      case 'de':
      case 'sr':
        return 'space-y-1.5';
      case 'pt':
        return 'space-y-1';
      case 'es':
      case 'fr':
        return 'space-y-2.5';
      default:
        return 'space-y-3';
    }
  };
  
  const contactSpacing = getContactSpacing();
  
  return (
    <footer id="contact" className="bg-gradient-ocean text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 mb-8">
            {/* Logo and Description */}
            <div className="flex flex-col space-y-4 max-w-md">
              <div className="flex items-center space-x-2">
                <Waves className="h-6 w-6 text-accent animate-ocean-wave" />
                <span className="text-lg font-bold">{t('hero.title')}</span>
              </div>
              <p className={`text-primary-foreground/80 text-sm ${descriptionLeading} flex-1 text-justify`}>
                {t('footer.description')}
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-6 w-6 text-white animate-ocean-wave" />
                <span className="text-lg font-bold">{t('footer.contactTitle')}</span>
              </div>
              <div className={`${contactSpacing} text-sm text-primary-foreground/80 flex-1`}>
                <div>📧 {t('footer.email')}: <a href="mailto:o666699999@gmail.com" className="hover:text-white hover:underline transition-colors">o666699999@gmail.com</a></div>
                <div>📱 {t('footer.whatsapp')}: <a href="https://wa.me/381666699999" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">+381 66 66 999 99</a></div>
                <div>📱 {t('footer.telegram')}: <a href="https://t.me/+381666699999" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">+381 66 66 999 99</a></div>
                <div>🌍 {t('footer.website')}: <a href="https://www.oceanmediaproject.com" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">www.oceanmediaproject.com</a></div>
                <div>📘 {t('footer.facebook')}: <a href="https://www.facebook.com/OceanMediaProject/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">Ocean Media Project</a></div>
                <div>💼 {t('footer.linkedin')}: <a href="https://linkedin.com/in/oceanmediaproject" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">Ocean Media Project</a></div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
              <div>
                © {yearDisplay} {t('footer.copyright')}
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-end mt-4 md:mt-0 text-xs">
                <a href="https://www.youtube.com/@OceanMediaProject" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">YouTube</a>
                <a href="https://vimeo.com/oceanmediaproject" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">Vimeo</a>
                <a href="https://stock.adobe.com/contributor/205029892/videodive" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">Adobe Stock</a>
                <a href="https://istockphoto.com/ru/portfolio/VIDEODIVE?assettype=film" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">iStockphoto</a>
                <a href="https://pond5.com/artist/vmsartstudio619" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">Pond5</a>
                <a href="https://shutterstock.com/ru/g/vmsartstudio/video?rid=371249757" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">Shutterstock</a>
                <a href="https://creator-en.pixtastock.com/@videoton/footage" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">Pixtastock</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
