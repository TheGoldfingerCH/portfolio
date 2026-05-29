export const profile = {
  name: 'Nicolas Geng',
  location: 'La Tour-de-Peilz, Suisse',
  email: 'contact@allrun.ch',
  links: {
    linkedin: 'https://www.linkedin.com/in/nicolas-geng/',
    github: 'https://github.com/TheGoldfingerCH',
    cv: {
      fr: '/cv/CV_Nicolas_Geng_FR.pdf',
      en: '/cv/CV_Nicolas_Geng_EN.pdf',
      de: '/cv/CV_Nicolas_Geng_DE.pdf',
    },
  },
  avatar: '/images/nicolas.jpg',
} as const;

export type Profile = typeof profile;
