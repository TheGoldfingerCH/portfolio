export type Locale = 'fr' | 'en' | 'de';

export type Experience = {
  id: string;
  role: Record<Locale, string>;
  company: string;
  /** Used to build the Google favicon URL for the company logo. */
  domain?: string;
  location: string;
  period: string;
  bullets: Record<Locale, string[]>;
};

export const experiences: Experience[] = [
  {
    id: 'ltg-academy',
    role: {
      fr: 'Marketing Manager',
      en: 'Marketing Manager',
      de: 'Marketing Manager',
    },
    company: 'LTG-Academy',
    domain: 'ltg-academy.ch',
    location: 'La Tour-de-Peilz (VD)',
    period: '2024 – 2025',
    bullets: {
      fr: [
        'Responsable de l’équipe marketing (deux collaborateurs)',
        'Développement de la stratégie marketing et commerciale',
        'Conduite de campagnes publicitaires multicanales',
        'Gestion du site LTG-Academy et reporting de performance',
        'Implémentation d’outils marketing et IA',
      ],
      en: [
        'Led the marketing team (two collaborators)',
        'Defined the marketing and commercial strategy',
        'Ran multi-channel advertising campaigns',
        'Managed the LTG-Academy website and performance reporting',
        'Implemented marketing and AI tooling',
      ],
      de: [
        'Leitung des Marketingteams (zwei Mitarbeitende)',
        'Entwicklung der Marketing- und Vertriebsstrategie',
        'Durchführung von Multichannel-Werbekampagnen',
        'Verwaltung der LTG-Academy-Website und Performance-Reporting',
        'Einführung von Marketing- und KI-Tools',
      ],
    },
  },
  {
    id: 'swibeco',
    role: {
      fr: 'Digital Marketing Spécialiste',
      en: 'Digital Marketing Specialist',
      de: 'Digital Marketing Spezialist',
    },
    company: 'Swibeco SA',
    domain: 'swibeco.ch',
    location: 'Lausanne (VD)',
    period: '2020 – 2023',
    bullets: {
      fr: [
        'Sélection et implémentation d’un outil de communication et d’automatisation',
        'Mise en place d’outils avancés d’analyse de données client',
        'Refonte du site vitrine Swibeco.ch',
        'Conformité cookies LPD / RGPD sur l’ensemble des sites Swibeco',
        'Lancement et pilotage de campagnes digitales dépassant les objectifs',
        'Enquêtes de satisfaction (Survey / NPS)',
        'Gestion des campagnes e-mail et supports visuels',
        'Pilotage des outils Google (Tag Manager, Analytics, Ads) et SEO',
      ],
      en: [
        'Selected and implemented a marketing communication and automation platform',
        'Deployed advanced customer-data analytics tooling',
        'Redesigned the Swibeco.ch corporate website',
        'Brought the Swibeco sites to LPD / GDPR cookie compliance',
        'Launched and ran digital campaigns that exceeded targets',
        'Set up customer satisfaction surveys (NPS)',
        'Owned email campaigns and visual assets',
        'Managed Google Tag Manager, Analytics, Ads and SEO',
      ],
      de: [
        'Auswahl und Einführung einer Marketing-Kommunikations- und Automatisierungsplattform',
        'Einführung fortgeschrittener Customer-Data-Analytics-Tools',
        'Relaunch der Unternehmensseite Swibeco.ch',
        'LPD- / DSGVO-konforme Cookie-Lösung für alle Swibeco-Seiten',
        'Konzeption und Pilotierung digitaler Kampagnen über Zielniveau',
        'Aufbau von Kundenzufriedenheitsbefragungen (NPS)',
        'Verantwortung für E-Mail-Kampagnen und visuelle Assets',
        'Steuerung von Google Tag Manager, Analytics, Ads und SEO',
      ],
    },
  },
  {
    id: 'veepee',
    role: {
      fr: 'Digital Marketing Manager → Online Acquisition & Traffic Manager',
      en: 'Digital Marketing Manager → Online Acquisition & Traffic Manager',
      de: 'Digital Marketing Manager → Online Acquisition & Traffic Manager',
    },
    company: 'Veepee (ex-Eboutic.ch)',
    domain: 'veepee.com',
    location: 'Lausanne (VD)',
    period: '2018 – 2020',
    bullets: {
      fr: [
        'Définition de la stratégie d’acquisition et pilotage des leviers (Google Ads, Apple Search Ads, Facebook, affiliation, partenariats)',
        'Suivi de l’engagement et du cycle nouveau membre → premier achat',
        'Reporting KPI, analyses de campagnes et marketing de l’offre',
        'Coordination de projets transverses (tracking, nouveaux outils)',
        'SEA, Display Advertising et App Store Optimization (ASO)',
        'Veille concurrentielle, benchmarks et développement du marché Suisse alémanique',
      ],
      en: [
        'Set the user acquisition strategy and ran Google Ads, Apple Search Ads, Facebook, affiliation and partnerships',
        'Tracked engagement and the new-member → first-purchase funnel',
        'Owned KPI reporting, campaign analyses and offer marketing',
        'Coordinated cross-team projects (tracking, new tools)',
        'Search, display advertising and App Store Optimization (ASO)',
        'Competitive intelligence, benchmarks and growth of the Swiss-German market',
      ],
      de: [
        'Definition der User-Acquisition-Strategie und Steuerung von Google Ads, Apple Search Ads, Facebook, Affiliate und Partnerschaften',
        'Tracking von Engagement und Neumitglied → Erstkauf-Funnel',
        'Verantwortung für KPI-Reporting, Kampagnenanalysen und Angebotsmarketing',
        'Koordination teamübergreifender Projekte (Tracking, neue Tools)',
        'Search, Display Advertising und App Store Optimization (ASO)',
        'Wettbewerbsbeobachtung, Benchmarks und Ausbau des Deutschschweizer Markts',
      ],
    },
  },
];
