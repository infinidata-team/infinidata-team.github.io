import { getHomePermalink, getPermalink, getBlogPermalink, getVacancyPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links:[
        { text: 'Home', href: getPermalink() },
        // { text: "About the group", links: [
        { text: 'People', href: getPermalink('people') },
        //   { text: 'Projects', href: getPermalink('#projects') },``
        // ]},
        { text: 'Publications', href: getPermalink('publications') },
      
        {text:"Blogs", href: getBlogPermalink()},
        // {text: 'Vacancy',
        //   links : [
        //     {
        //       text: "PhD",
        //       href: getPermalink('quantum-phd-position','post')
        //     },
        //     {
        //       text: "PostDoc",
        //       href: getPermalink('postdoc-position','post')
        //     },
        //   ],
        // },
        { text: "Talks and Tutorials", href: getPermalink("tutorials")
        }
        
  ],
};
