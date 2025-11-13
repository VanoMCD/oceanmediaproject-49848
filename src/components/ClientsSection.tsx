import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Waves, Heart, Monitor, Tv, Play, Youtube, Users, Utensils } from "lucide-react";
import clientsImage from "@/assets/clients-showcase.jpg";

const ClientsSection = () => {
  const { t } = useTranslation();
  
  const clientTypes = [
    {
      icon: <Play className="h-8 w-8" />,
      title: t('clients.client1'),
      description: t('clients.client1Desc'),
      use: t('clients.client1Use')
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: t('clients.client2'),
      description: t('clients.client2Desc'),
      use: t('clients.client2Use')
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: t('clients.client3'),
      description: t('clients.client3Desc'),
      use: t('clients.client3Use')
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t('clients.client4'),
      description: t('clients.client4Desc'),
      use: t('clients.client4Use')
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: t('clients.client5'),
      description: t('clients.client5Desc'),
      use: t('clients.client5Use')
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: t('clients.client6'),
      description: t('clients.client6Desc'),
      use: t('clients.client6Use')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('clients.client7'),
      description: t('clients.client7Desc'),
      use: t('clients.client7Use')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('clients.client8'),
      description: t('clients.client8Desc'),
      use: t('clients.client8Use')
    },
    {
      icon: <Youtube className="h-8 w-8" />,
      title: t('clients.client9'),
      description: t('clients.client9Desc'),
      use: t('clients.client9Use')
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: t('clients.client10'),
      description: t('clients.client10Desc'),
      use: t('clients.client10Use')
    }
  ];

  return (
    <section id="clients" className="pt-1 pb-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('clients.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('clients.subtitle')}
            </p>
          </div>

          {/* Showcase Image */}
          <div className="mb-16">
            <img 
              src={clientsImage} 
              alt="Luxury environment with nature video displays" 
              className="w-full h-96 object-cover rounded-xl shadow-depth"
            />
          </div>

          {/* Client Types Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-16">
            {clientTypes.map((client, index) => (
              <Card key={index} className="text-center shadow-ocean hover:shadow-depth transition-all duration-300 group border-accent/20 hover:border-accent/40">
                <CardContent className="pt-4 pb-4">
                  <div className="text-accent mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="scale-75">{client.icon}</div>
                  </div>
                  <h4 className="text-sm font-semibold text-primary mb-2 leading-tight">{client.title}</h4>
                  <p className="text-xs text-muted-foreground mb-2 leading-snug">{client.description}</p>
                  <div className="text-xs text-accent font-medium bg-accent/10 rounded-full px-2 py-1">
                    {client.use}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div id="request" className="text-center bg-gradient-ocean rounded-xl p-12 text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">{t('clients.ctaTitle')}</h3>
            <p 
              className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-center"
              dangerouslySetInnerHTML={{ __html: t('clients.ctaText') }}
            />
            <div className="flex justify-center">
              <a 
                href="mailto:o666699999@gmail.com?subject=WEB%20Request&body=Hello!%0A%0AWe%20are%20interested%20in%20Relax%20content%20for%20display%20on%20...%0AWe%20need%20approximately%20...%20hours%0ATerritories%20of%20use%20-%20..."
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors duration-300 w-full max-w-md"
              >
                {t('clients.ctaButton')}
              </a>
            </div>
          </div>

          {/* Content Types Section */}
          <div className="mt-5">
            <h3 className="text-3xl font-bold text-primary text-center mb-8">{t('clients.categoriesTitle')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a 
                href="https://www.youtube.com/@OceanMediaProject"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-accent/20 rounded-lg p-3 text-center hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="text-2xl mb-2">🧘</div>
                <h4 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                  {t('clients.cat1')}
                </h4>
                <p className="text-muted-foreground text-xs">{t('clients.cat1Desc')}</p>
              </a>
              <a 
                href="https://www.youtube.com/@OceanMediaProject"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-accent/20 rounded-lg p-3 text-center hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="text-2xl mb-2">☯️</div>
                <h4 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                  {t('clients.cat2')}
                </h4>
                <p className="text-muted-foreground text-xs">{t('clients.cat2Desc')}</p>
              </a>
              <a 
                href="https://www.youtube.com/@OceanMediaProject"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-accent/20 rounded-lg p-3 text-center hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="text-2xl mb-2">🌿</div>
                <h4 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                  {t('clients.cat3')}
                </h4>
                <p className="text-muted-foreground text-xs">{t('clients.cat3Desc')}</p>
              </a>
              <a 
                href="https://www.youtube.com/@OceanMediaProject"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-accent/20 rounded-lg p-3 text-center hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="text-2xl mb-2">🎶</div>
                <h4 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                  {t('clients.cat4')}
                </h4>
                <p className="text-muted-foreground text-xs">{t('clients.cat4Desc')}</p>
              </a>
              <a 
                href="https://www.youtube.com/@OceanMediaProject"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-accent/20 rounded-lg p-3 text-center hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="text-2xl mb-2">🌌</div>
                <h4 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                  {t('clients.cat5')}
                </h4>
                <p className="text-muted-foreground text-xs">{t('clients.cat5Desc')}</p>
              </a>
              <a 
                href="https://www.youtube.com/@OceanMediaProject"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-accent/20 rounded-lg p-3 text-center hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="text-2xl mb-2">🌍</div>
                <h4 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                  {t('clients.cat6')}
                </h4>
                <p className="text-muted-foreground text-xs">{t('clients.cat6Desc')}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
