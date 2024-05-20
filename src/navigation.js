import { getHomePermalink, getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links:[
        { text: 'Home', href: getPermalink() },
        { text: 'About', href: getPermalink('#about') },
        { text: 'People', href: getPermalink('people') },
        { text: 'Publications', href: getPermalink('#publications') },
        { text: 'Projects', href: getPermalink('#projects') },
        {
          text: 'Blog',
          links: [
            {
              text: 'Blog List',
              href: getBlogPermalink(),
            },
            {
              text: 'About our team',
              href: getPermalink('amalur', 'post'),
            },
            {
              text: 'Model Lake',
              href: getPermalink('model-lake', 'category'),
            },
            {
              text: 'Privacy',
              href: getPermalink('federated-learning', 'category'),
            },
            {
              text: 'Quantum',
              href: '/topics/quantum',
            },
          ],
        },
        {text: 'Vacancy', href: getPermalink('quantum-phd-position','post')}
  ],
};
