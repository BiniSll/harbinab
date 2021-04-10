import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: ' ', // e.g: 'Name | Developer'
  lang: ' ', // e.g: en, es, fr, jp
  description: ' ', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'My name is',
  name: 'Harbin Avduramani',
  subtitle: 'Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne:
    'Effective web Developer with 3 years in web software development arena. Poised professional offering expertise leading well-developed teams',
  paragraphTwo:
    'Committed to meeting project milestones on deadline by guiding and motivating staff.',
  paragraphThree: 'Education: Bachelor of Science: Software Engineer',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'softwareEnginer.png',
    title: 'Software Developer at Vizah Gmbh',
    info:
      'Wrote software applications in Java architecture for Web industry, Designet .Net based admin desktop app,',
    info2:
      'Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs and enhancements.',
    url: 'https://covalo.com/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'reactDev.png',
    title: 'React Developer',
    info:
      'Enforced Agile and Scrum development methodologies on interface projects to shorten development times, Drafted detailed technical design documents for use by collaborating personnel and future developers.',
    info2: 'ntegrated new interfaces with backend systems using micro services.',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'netDev.png',
    title: 'Web Developer with .Net',
    info:
      'Enforced Agile and Scrum development methodologies on interface projects to shorten development times.',
    info2: 'Integrated new interfaces with backend systems using micro services.',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'reactjs.png',
    title: 'Software Developer React, React-Native',
    info:
      'Worked with customers to understand needs and provide programming service, Managed quality assurance program, including on-site evaluations, internal audits and customer surveys',
    info2: 'Increased customer satisfaction by resolving product issues.',
    url: '',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'data-mining.png',
    title: 'Software Developer at FirmaGraphix LLc',
    info:
      'Tested websites and performed troubleshooting prior to deployment, reviewed code to validate structures, assess security and verify browser, device and operating system compatibility',
    info2:
      'Researched new technologies, software packages and hardware products for use in website projects, Collaborated with vendor representatives and company customers to set up optimal delivery schedules',
    url: 'https://firmagraphix-ks.com/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'not-yolo.png',
    title: 'Not Yolo',
    info:
      'Developed 3d game in unity where created prototypes based upon design ideas using programming language C#',
    info2: 'Idea of the game works by avoiding obstacles and breaking record',
    url: 'https://play.google.com/store/apps/details?id=com.AB.Yolo',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'contact',
  email: 'harbinab@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/harbinab_/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/harbin.ab',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/HAvduramani',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/harbin-avduramani/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
