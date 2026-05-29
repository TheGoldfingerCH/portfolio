export const locales = ['fr', 'en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export const localeLabels: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  de: 'Deutsch',
};

export const ui = {
  fr: {
    nav: {
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      experience: 'Parcours',
      contact: 'Contact',
    },
    hero: {
      kicker: 'Data Science · IA · Build in public',
      title: 'Je transforme la donnée en décisions concrètes.',
      lead: "Diplômé Data Science & IA du bootcamp Le Wagon, je construis des projets concrets en public — APIs ML conteneurisées, agents IA, automatisations. Mes 10 ans en marketing digital m'aident à cadrer les bons problèmes et à livrer des résultats mesurables.",
      ctaContact: 'Me contacter',
      ctaProjects: 'Voir les projets',
      ctaCv: 'Télécharger le CV',
      status: 'Ouvert à un poste Data Scientist junior / stage ML-IA',
    },
    sections: {
      about: {
        title: 'À propos',
        body: [
          "Après plus de 10 ans à piloter du marketing digital, je me suis spécialisé en Data Science et IA via le bootcamp Le Wagon. Aujourd'hui je construis des projets concrets — services FastAPI déployés sur GCP Cloud Run, modèles de prédiction, systèmes multi-agents — disponibles en open source sur GitHub.",
          'Ma méthode : partir d’un problème métier clair, comparer une baseline à une approche améliorée, documenter hypothèses et limites, livrer du reproductible. Reproductibilité, mesurabilité, honnêteté sur les limites — pour des projets utiles, pas des démos.',
          "Mon ancrage marketing reste un atout — je lis la donnée avec une lentille métier et je sais ce qu'un KPI veut dire pour une équipe. Objectif : un premier poste Data Scientist junior, stage ML/IA, ou collaboration sur des projets data/IA — Suisse romande, hybride ou distance.",
        ],
      },
      skills: {
        title: 'Compétences',
        techStack: 'Tech Stack',
        languagesTitle: 'Langues',
        groups: {
          data: 'Data & langages',
          ml: 'Machine Learning & IA',
          mlops: 'MLOps & déploiement',
          analytics: 'Analytics & marketing',
        },
        soft: {
          title: 'Soft-skills',
          items: ['Orienté solution', 'Proactif', 'Rigoureux', 'Sens des responsabilités', 'Bien organisé'],
        },
      },
      studies: {
        title: 'Études & certifications',
        lead: 'Une formation marketing solide, complétée par un bootcamp Data Science & IA pour structurer ma reconversion.',
        education: 'Études',
        certifications: 'Certifications',
      },
      projects: {
        title: 'Projets',
        lead: 'Une sélection de projets personnels, mis en ligne ou en cours de développement.',
        moreSoon: 'D’autres projets seront publiés bientôt.',
        view: 'Voir le site',
        code: 'Code',
        status: {
          live: 'En ligne',
          wip: 'En cours',
          archived: 'Archivé',
        },
      },
      experience: {
        title: 'Parcours',
        lead: "10 ans à la croisée du marketing digital, de la donnée et du pilotage opérationnel.",
      },
      contact: {
        title: 'Travaillons ensemble',
        lead: 'Ouvert à un premier poste Data Scientist junior, stage ML/IA, ou collaboration sur un projet data/IA concret. Écrivez-moi.',
        emailLabel: 'E-mail',
        linkedinLabel: 'LinkedIn',
        githubLabel: 'GitHub',
        location: 'La Tour-de-Peilz · Suisse romande',
      },
    },
    chatbot: {
      buttonLabel: 'Discuter avec mon IA',
      title: 'Mon assistant IA',
      subtitle: 'Posez vos questions sur mon profil. Réponses générées par IA.',
      placeholder: 'Votre question…',
      send: 'Envoyer',
      sending: 'Envoi…',
      disclaimer: 'Réponses générées par IA — pour toute info officielle, écrivez-moi directement.',
      initial: 'Bonjour ! Je suis l’assistant IA de Nicolas. Demandez-moi quoi que ce soit sur son parcours, ses compétences ou ses projets.',
      error: 'Désolé, une erreur est survenue. Réessayez dans un instant.',
      close: 'Fermer',
    },
    footer: {
      built: 'Construit avec Astro, Tailwind et Claude.',
      rights: 'Tous droits réservés.',
    },
    meta: {
      title: 'Nicolas Geng — Data Science & IA',
      description: 'Portfolio de Nicolas Geng — Data Science & IA, diplômé Le Wagon. Projets ML déployés (FastAPI, Docker, GCP, multi-agents) et 10 ans de marketing digital. Suisse romande.',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Career',
      contact: 'Contact',
    },
    hero: {
      kicker: 'Data Science · AI · Building in public',
      title: 'Turning data into clear, useful decisions.',
      lead: 'Data Science & AI graduate from Le Wagon, building practical projects in public — containerised ML APIs, AI agents, automations. My 10 years in digital marketing help me frame the right problems and ship measurable results.',
      ctaContact: 'Get in touch',
      ctaProjects: 'See projects',
      ctaCv: 'Download CV',
      status: 'Open to junior Data Scientist or ML/AI internship roles',
    },
    sections: {
      about: {
        title: 'About',
        body: [
          'After 10+ years running digital marketing, I specialised in Data Science and AI through Le Wagon’s intensive bootcamp. Today I build hands-on projects — FastAPI services deployed on GCP Cloud Run, prediction models, multi-agent systems — open-sourced on GitHub.',
          'How I build: start from a clear business problem, compare a baseline to an improved approach, document assumptions and limits, ship reproducibly. Reproducibility, measurability, honest reporting of trade-offs — for projects that matter, not demos.',
          'My marketing background is still an asset — I read data with a business lens and I know what a KPI means to a team. Goal: a first role as a junior Data Scientist, ML/AI internship, or collaboration on a real-world data/AI project — French-speaking Switzerland, hybrid or remote.',
        ],
      },
      skills: {
        title: 'Skills',
        techStack: 'Tech Stack',
        languagesTitle: 'Languages',
        groups: {
          data: 'Data & languages',
          ml: 'Machine Learning & AI',
          mlops: 'MLOps & deployment',
          analytics: 'Analytics & marketing',
        },
        soft: {
          title: 'Soft skills',
          items: ['Solution-oriented', 'Proactive', 'Rigorous', 'Accountable', 'Well-organised'],
        },
      },
      studies: {
        title: 'Education & certifications',
        lead: 'A strong marketing background, rounded off by an intensive Data Science & AI bootcamp.',
        education: 'Education',
        certifications: 'Certifications',
      },
      projects: {
        title: 'Projects',
        lead: 'A selection of personal projects, live or in active development.',
        moreSoon: 'More projects are coming online soon.',
        view: 'Visit site',
        code: 'Code',
        status: {
          live: 'Live',
          wip: 'Work in progress',
          archived: 'Archived',
        },
      },
      experience: {
        title: 'Career',
        lead: 'A decade at the crossroads of digital marketing, data and operational leadership.',
      },
      contact: {
        title: 'Let’s work together',
        lead: 'Open to a first role as junior Data Scientist, ML/AI internship, or collaboration on a real-world data/AI project. Drop me a line.',
        emailLabel: 'Email',
        linkedinLabel: 'LinkedIn',
        githubLabel: 'GitHub',
        location: 'La Tour-de-Peilz · French-speaking Switzerland',
      },
    },
    chatbot: {
      buttonLabel: 'Chat with my AI',
      title: 'My AI assistant',
      subtitle: 'Ask anything about my profile. Replies are AI-generated.',
      placeholder: 'Your question…',
      send: 'Send',
      sending: 'Sending…',
      disclaimer: 'AI-generated answers — for anything official, please contact me directly.',
      initial: 'Hi! I’m Nicolas’ AI assistant. Ask me anything about his background, skills or projects.',
      error: 'Sorry, something went wrong. Please try again in a moment.',
      close: 'Close',
    },
    footer: {
      built: 'Built with Astro, Tailwind and Claude.',
      rights: 'All rights reserved.',
    },
    meta: {
      title: 'Nicolas Geng — Data Science & AI',
      description: 'Portfolio of Nicolas Geng — Data Science & AI, Le Wagon graduate. Deployed ML projects (FastAPI, Docker, GCP, multi-agent) and 10 years of digital marketing. Switzerland.',
    },
  },
  de: {
    nav: {
      about: 'Über mich',
      skills: 'Kompetenzen',
      projects: 'Projekte',
      experience: 'Werdegang',
      contact: 'Kontakt',
    },
    hero: {
      kicker: 'Data Science · KI · Build in public',
      title: 'Aus Daten klare, nutzbare Entscheidungen machen.',
      lead: 'Data-Science- und KI-Absolvent vom Le-Wagon-Bootcamp. Ich baue praktische Projekte öffentlich auf — containerisierte ML-APIs, KI-Agenten, Automatisierungen. Meine zehn Jahre im Digital Marketing helfen mir, die richtigen Probleme zu definieren und messbare Ergebnisse zu liefern.',
      ctaContact: 'Kontakt aufnehmen',
      ctaProjects: 'Projekte ansehen',
      ctaCv: 'Lebenslauf herunterladen',
      status: 'Offen für Junior Data Scientist / ML-KI-Praktikum',
    },
    sections: {
      about: {
        title: 'Über mich',
        body: [
          'Nach über zehn Jahren im Digital Marketing habe ich mich über das Le-Wagon-Bootcamp auf Data Science und KI spezialisiert. Heute baue ich konkrete Projekte – FastAPI-Services auf GCP Cloud Run, Vorhersagemodelle, Multi-Agenten-Systeme – die ich offen auf GitHub teile.',
          'Meine Methode: Ausgehen von einem klaren Business-Problem, Baseline gegen einen verbesserten Ansatz vergleichen, Annahmen und Grenzen dokumentieren, reproduzierbar liefern. Reproduzierbarkeit, Messbarkeit, ehrliche Kommunikation der Trade-offs – für Projekte, die etwas bewegen, nicht für Demos.',
          'Mein Marketing-Hintergrund bleibt ein Plus – ich lese Daten mit Business-Brille und kenne die Bedeutung eines KPI für ein Team. Ziel: eine erste Position als Junior Data Scientist, ML-KI-Praktikum oder Mitarbeit an einem echten Data-/KI-Projekt – Westschweiz, hybrid oder remote.',
        ],
      },
      skills: {
        title: 'Kompetenzen',
        techStack: 'Tech-Stack',
        languagesTitle: 'Sprachen',
        groups: {
          data: 'Daten & Sprachen',
          ml: 'Machine Learning & KI',
          mlops: 'MLOps & Deployment',
          analytics: 'Analytik & Marketing',
        },
        soft: {
          title: 'Soft Skills',
          items: ['Lösungsorientiert', 'Proaktiv', 'Sorgfältig', 'Verantwortungsbewusst', 'Gut organisiert'],
        },
      },
      studies: {
        title: 'Ausbildung & Zertifikate',
        lead: 'Solider Marketing-Background, ergänzt durch ein intensives Data-Science- und KI-Bootcamp.',
        education: 'Ausbildung',
        certifications: 'Zertifikate',
      },
      projects: {
        title: 'Projekte',
        lead: 'Eine Auswahl persönlicher Projekte, live oder in aktiver Entwicklung.',
        moreSoon: 'Weitere Projekte folgen in Kürze.',
        view: 'Website besuchen',
        code: 'Code',
        status: {
          live: 'Live',
          wip: 'In Arbeit',
          archived: 'Archiviert',
        },
      },
      experience: {
        title: 'Werdegang',
        lead: 'Zehn Jahre an der Schnittstelle von Digital Marketing, Daten und operativer Steuerung.',
      },
      contact: {
        title: 'Arbeiten wir zusammen',
        lead: 'Offen für eine erste Position als Junior Data Scientist, ML-KI-Praktikum oder Mitarbeit an einem echten Data-/KI-Projekt. Schreiben Sie mir.',
        emailLabel: 'E-Mail',
        linkedinLabel: 'LinkedIn',
        githubLabel: 'GitHub',
        location: 'La Tour-de-Peilz · Westschweiz',
      },
    },
    chatbot: {
      buttonLabel: 'Mit meiner KI chatten',
      title: 'Mein KI-Assistent',
      subtitle: 'Fragen Sie alles zu meinem Profil. Antworten sind KI-generiert.',
      placeholder: 'Ihre Frage…',
      send: 'Senden',
      sending: 'Sende…',
      disclaimer: 'KI-generierte Antworten – für offizielle Auskünfte kontaktieren Sie mich bitte direkt.',
      initial: 'Hallo! Ich bin der KI-Assistent von Nicolas. Fragen Sie mich alles zu seinem Werdegang, seinen Kompetenzen oder seinen Projekten.',
      error: 'Entschuldigung, ein Fehler ist aufgetreten. Bitte versuchen Sie es gleich noch einmal.',
      close: 'Schliessen',
    },
    footer: {
      built: 'Erstellt mit Astro, Tailwind und Claude.',
      rights: 'Alle Rechte vorbehalten.',
    },
    meta: {
      title: 'Nicolas Geng — Data Science & KI',
      description: 'Portfolio von Nicolas Geng — Data Science & KI, Le-Wagon-Absolvent. Bereitgestellte ML-Projekte (FastAPI, Docker, GCP, Multi-Agenten) und 10 Jahre Digital Marketing. Schweiz.',
    },
  },
} as const;

export type UI = (typeof ui)[Locale];
