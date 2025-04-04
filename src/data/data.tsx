import {
  ArrowDownTrayIcon,
  CalendarIcon,
  EnvelopeIcon,
  MapIcon,
  MusicalNoteIcon,
  SparklesIcon,
  StarIcon,
  SwatchIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/bg-pattern-kb.png';
import testimonialImage from '../images/bg-pattern-kb.png';
import profilepic from '../images/selfie-canoe.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'David J. Hanus - Web Developer (Resume)',
  description: "A one-page resume website for my web development career.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `David J. Hanus`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Web Developer, Full Stack Engineer, and Software Craftsman
      </p>
    </>
  ),
  actions: [
    {
      href: '/RESUME_DavidJHanus_WebDeveloper_2025.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `mailto:davidjhanus@gmail.com`,
      text: 'Email',
      primary: false,
      Icon: EnvelopeIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a web developer with 10+ years of experience designing and building custom web applications in Wordpress, now shifting my focus toward full-stack development and software engineering. I have a passion for creating, building, and collaborating with others. I currently live in a log cabin in Indiana that I get to share with my wife, 2 kids, cats, dog, and rabbits.`,
  aboutItems: [
    {label: 'Location', text: 'Nashville, IN', Icon: MapIcon},
    {label: 'Age', text: '40', Icon: CalendarIcon},
    {label: 'Favorite Color', text: 'Pumpkin Orange', Icon: SwatchIcon},
    {label: 'Favorite Food', text: 'Ramen', Icon: StarIcon},
    {label: 'Interests', text: 'Videogames, hiking, banjo', Icon: SparklesIcon},
    {label: 'Favorite Music', text: 'Yacht Rock', Icon: MusicalNoteIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend Engineering',
    skills: [
      {
        name: 'PHP',
        level: 9.1,
      },
      {
        name: 'MySQL',
        level: 8.1,
      },
      {
        name: 'HTML/CSS',
        level: 10,
      },
      {
        name: 'REST API Development',
        level: 7.8,
      },
    ],
  },
  {
    name: 'Frontend Engineering',
    skills: [
      {
        name: 'JavaScript',
        level: 7.75,
      },
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'React.js',
        level: 3.5,
      },
      {
        name: 'Next.js',
        level: 2.25,
      },
    ],
  },
  {
    name: 'DevOps & Workflow Automation',
    skills: [
      {
        name: 'Bash/Linux/CLI',
        level: 9,
      },
      {
        name: 'Docker/Lando',
        level: 6,
      },
      {
        name: 'Git Version Control',
        level: 8.25,
      },
    ],
  },
  {
    name: 'UI/UX Design & Prototyping',
    skills: [
      {
        name: 'Photoshop/Illustrator',
        level: 9,
      },
      {
        name: 'Figma',
        level: 8.5,
      },
      {
        name: 'Adobe XD',
        level: 6.5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'One-Time Passcode Plugin for WordPress',
    client: 'Technology Advice - TechRepublic.com (2025)',
    description: 'A WordPress plugin for secure OTP-based authentication.',
    tags: ['WordPress Plugin', 'OTP Auth'],
    details: [
      'Developed a solution for secure one-time passcode (OTP) authentication in WordPress',
      'Prevented fradulent access by implementing a secure OTP system',
      'Integrated with existing WordPress user management and login systems',
    ],
  },
  {
    title: 'Website Redesign into Wordpress Gutenberg Blocks',
    client: 'Restaurant HQ - https://www.therestauranthq.com',
    description: 'Redesigned a website using the latest WordPress Gutenberg API, focusing on component-based patterns and atomic design principles.',
    tags: ['Website Redesign', 'Gutenberg API'],
    details: [
      'Translated Figma designs into a fully responsive WordPress website',
      'Implemented component-based patterns on an atomic design scale',
      'Integrated Google ad tracking and analytics tools for performance monitoring',
    ],
  },
  {
    title: 'Modern Redesign for Conservation Organization',
    client: 'Sycamore Land Trust - https://sycamorelandtrust.org',
    description: 'A complete redesign of a website, featuring a modern WordPress CMS, full-width responsive design, and a focus on driving donations.',
    tags: ['Website Redesign', 'Wordpress CMS'],
    details: [
      'Developed a brand-new WordPress CMS with a modern, full-width responsive design',
      'Built a parks and nature trails index with an interactive map and detailed information for each location',
      'Optimized the site to drive visitors to the donations page, aligning with the organization’s mission',
    ],
  },
  {
    title: 'Website Design for Community Non-Profit Organization',
    client: 'Bloomington Health Foundation - https://bloomhf.org',
    description: 'Designed and developed a vibrant WordPress site for a health-focused non-profit, featuring modular components and a seamless donation experience.',
    tags: ['Website Redesign', 'Front-End Development'],
    details: [
      'Created a colorful and engaging design aligned with the organization’s branding and mission',
      'Implemented a secure and user-friendly donation feature to support fundraising efforts',
      'Collaborated closely with stakeholders to ensure the site effectively communicated the organization’s goals and services',
    ],
  },
  {
    title: 'Educational Website for Womens Health Non-Profit',
    client: 'Count the Kicks - https://countthekicks.org',
    description: 'A comprehensive digital solution for a non-profit organization focused on women’s health and early pregnancy education, featuring a custom eCommerce system and vibrant branding.',
    tags: ['Website Design', 'eCommerce'],
    details: [
      'Created a vibrant and engaging user interface with wonderful, bright, and fun graphics',
      'Designed and implemented a custom eCommerce system for promotional items and merchandise',
      'Integrated component-based design principles to align with the organization’s branding and mission',
      'Collaborated with stakeholders to ensure the solution effectively communicated the organization’s goals and values',
    ],
  },
];

export const education: TimelineItem[] = [
  {
    date: '2008',
    location: 'Indiana University (Bloomington, IN)',
    title: 'Bachelor of Fine Arts',
    content: <p>Digital Media, Graphic Design, Photography</p>,
  }
];



export const experience: TimelineItem[] = [
  {
    date: '2023 - 2025',
    location: 'Technology Advice (Nashville, TN)',
    title: 'Senior Web Developer',
    content: (
      <ul>
        <li>- Developed custom block components with the latest Gutenberg API for Full-Site Editing (FSE)</li>
        <li>- Built and enhanced WordPress plugins for ad tech, SEO, and CRM integrations</li>
        <li>- Collaborated on CI/CD pipelines, coordinating devops configurations with sysadmins</li>
        <li>- Worked with React and TypeScript on headless CMS concepts</li>
        <li>- Deployed and managed cloud-based solutions using AWS, Docker, and Kubernetes</li>
      </ul>
    ),
  },
  {
    date: '2022 - 2023',
    location: 'Brandography (Minneapolis, MN)',
    title: 'Senior Web Developer',
    content: (
      <ul>
        <li>- Developed custom WordPress themes from Adobe XD designs for eCommerce and marketing sites</li>
        <li>- Collaborated with marketing and UX teams to optimize SEO performance and WCAG compliance</li>
        <li>- Mentored junior developers, fostering team growth, improving workflows, and promoting best practices</li>
      </ul>
    ),
  },
  {
    date: '2020 - 2022',
    location: 'Happy Medium (Des Moines, IA)',
    title: 'Web Developer',
    content: (
      <ul>
        <li>- Created pixel-perfect custom WordPress themes from Figma designs</li>
        <li>- Built advanced back-end functionality using PHP, AJAX, and REST API</li>
        <li>- Developed eCommerce solutions and integrated CRMs as business and marketing tools</li>
      </ul>
    ),
  },
  {
    date: '2016 - 2020',
    location: 'Blueline Media (Bloomington, IN)',
    title: 'Web Designer',
    content: (
      <ul>
        <li>- Led front-end web development using Bootstrap, Sass, JavaScript, and ACF in Wordpress</li>
        <li>- Created custom boilerplate templates to create responsive, high-performance websites</li>
        <li>- Collaborated on pre-production activities: sitemap architecture, user experience design, page templates</li>
        {/* <li>- Developed reusable components and templates to streamline development and improve team efficiency</li> */}

      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Maren V. (Developer)',
      text: 'David is a talented, patient, and knowledgeable engineer. He approaches projects with a user-centric perspective and is always ready to jump in to assist anyone. Whenever I need a fresh set of eyes on something, I know I can always ask David! He’s never afraid to take on a challenge or learn something new.',
      // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Scott S. (Team Manager)',
      text: 'I wholeheartedly recommend David for any role that demands strong technical expertise, effective teamwork, and a positive, solutions-focused attitude. His commitment to continuous improvement, both in his craft and his collaboration with others, makes him a remarkable addition to any development team.',
      // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Russell L. (Creative Director)',
      text: 'David is a first-class developer. He is s a skillful architect of CSS, PHP, Javascript, and makes integrating outside APIs feel seamless. Best of all, David is a fun guy to work with. He is a team player - earnest, good-natured and happy to teach others.',
      // image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is the best way to contact me.',
  items: [
    {
      type: ContactType.Email,
      text: 'davidjhanus@gmail.com',
      href: 'mailto:davidjhanus@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: '@davidjhanus',
      href: 'https://www.linkedin.com/in/davidjhanus/',
    },
    {
      type: ContactType.Github,
      text: '@djhanus',
      href: 'https://github.com/djhanus',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/djhanus'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/davidjhanus/'},
];
