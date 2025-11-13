import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Globe, Zap, Fish, Sailboat, Trees, Sparkles } from "lucide-react";
import teamImage from "@/assets/about-team.jpg";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="pt-10 pb-10 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('about.title')}
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-6 font-medium">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                {t('hero.title')}
              </span>{' '}
              <span className="text-foreground">{t('about.subtitle')}</span>
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              {t('about.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={teamImage} 
                alt="Professional video production team" 
                className="rounded-xl shadow-ocean w-full"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  {t('about.offerTitle')}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-primary">{t('about.offer1Title')}</p>
                          <p className="text-muted-foreground text-sm">{t('about.offer1Desc')}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Award className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-primary">{t('about.offer2Title')}</p>
                          <p className="text-muted-foreground text-sm">{t('about.offer2Desc')}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Globe className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-primary">{t('about.offer3Title')}</p>
                          <p className="text-muted-foreground text-sm">{t('about.offer3Desc')}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Zap className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold text-primary">{t('about.offer4Title')}</p>
                          <p className="text-muted-foreground text-sm">{t('about.offer4Desc')}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Content Categories */}
          <div id="portfolio" className="bg-gradient-ocean rounded-xl p-8 text-primary-foreground scroll-mt-20">
            <h3 className="text-2xl font-bold mb-6 text-center">{t('about.libraryTitle')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-primary-foreground/10 rounded-lg p-4 border border-primary-foreground/20 hover:border-accent/50 transition-colors">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="flex items-center gap-2">
                    <Fish className="h-5 w-5 text-emerald-300" />
                    <h4 className="font-bold text-primary-foreground">{t('about.category1')}</h4>
                  </div>
                  <p className="text-sm text-primary-foreground/80">{t('about.category1Desc')}</p>
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4 border border-primary-foreground/20 hover:border-accent/50 transition-colors">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="flex items-center gap-2">
                    <Sailboat className="h-5 w-5 text-emerald-300" />
                    <h4 className="font-bold text-primary-foreground">{t('about.category2')}</h4>
                  </div>
                  <p className="text-sm text-primary-foreground/80">{t('about.category2Desc')}</p>
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4 border border-primary-foreground/20 hover:border-accent/50 transition-colors">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="flex items-center gap-2">
                    <Trees className="h-5 w-5 text-emerald-300" />
                    <h4 className="font-bold text-primary-foreground">{t('about.category3')}</h4>
                  </div>
                  <p className="text-sm text-primary-foreground/80">{t('about.category3Desc')}</p>
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4 border border-primary-foreground/20 hover:border-accent/50 transition-colors">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-emerald-300" />
                    <h4 className="font-bold text-primary-foreground">{t('about.category4')}</h4>
                  </div>
                  <p className="text-sm text-primary-foreground/80">{t('about.category4Desc')}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
