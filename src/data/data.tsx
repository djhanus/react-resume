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
import heroImage from '../images/2xcmtixxa34c1.jpg';
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
    {label: 'Favorite Food', text: 'Tonkotsu Ramen', Icon: StarIcon},
    {label: 'Interests', text: 'Videogames, hiking, banjo', Icon: SparklesIcon},
    {label: 'Favorite Music', text: 'Surf Rock', Icon: MusicalNoteIcon},
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
        level: 7.5,
      },
      {
        name: 'Node.js',
        level: 5,
      },
      {
        name: 'React.js',
        level: 3.25,
      },
      {
        name: 'Vue.js',
        level: 2.5,
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
    title: 'JS Application for Certification Purchases (2025)',
    description: 'A JavaScript application for managing certification purchases and tracking progress, integrated with a REST API for data handling.',
    tags: ['JavaScript', 'REST API', 'Frontend Development', 'Certification Tracking'],
    details: [
      'Developed a JavaScript application for managing certification purchases and tracking progress',
      'Integrated with a REST API for data handling and retrieval',
      'Implemented user-friendly interfaces for tracking certification status and progress',
      'Ensured data integrity and security through proper API authentication and validation',
      'Optimized application performance and responsiveness for a seamless user experience',
    ],
  },
  {
    title: 'Gutenberg Full-Site Editing (FSE) Custom Blocks (2024)',
    description: 'A series of custom Gutenberg blocks developed for Full-Site Editing in WordPress, enhancing the editing experience and functionality of themes.',
    tags: ['Gutenberg', 'Full-Site Editing', 'WordPress Plugin Development', 'REST API', 'Component-Based Design'],
    details: [
      'Developed custom Gutenberg blocks for Full-Site Editing (FSE) in WordPress',
      'Enhanced the editing experience with user-friendly interfaces and advanced functionality',
      'Collaborated with designers to ensure seamless integration of custom blocks into themes',
      'Utilized the latest WordPress APIs and best practices for plugin development',
      'Optimized blocks for performance and accessibility, adhering to WCAG standards',
    ],
  },
  {
    title: 'API Endpoint Validation for WordPress Shortcodes (2025)',
    description: 'A project focused on validating JSON response data within WordPress shortcodes.',
    tags: ['API Authentication', 'JSON Decode', 'Auth Keys', 'Validating Shortcode Parameters'],
    details: [
      'Implemented secure API authentication mechanisms',
      'Developed JSON decoding and validation logic',
      'Managed authentication keys for secure data handling',
      'Validated shortcode parameters to ensure data integrity',
    ],
  },
  {
    title: 'Retail Store Locator (2024)',
    description: 'A WordPress-based store locator using OpenMap API.',
    tags: ['OpenMap API', 'MySQL', 'Client Database', 'Search Meta Keys'],
    details: [
      'Integrated OpenMap API for geolocation and mapping',
      'Designed and optimized MySQL database for store data',
      'Built a client database with advanced search capabilities',
      'Implemented meta key search for efficient data retrieval',
    ],
  },
  {
    title: 'WP One-Time Passcode Authentication (2025)',
    description: 'A WordPress plugin for secure OTP-based authentication.',
    tags: ['REST API', 'Gutenberg', 'Wordpress Plugin', 'Ajax', 'OTP Auth'],
    details: [
      'Developed a REST API for OTP generation and validation',
      'Built Gutenberg blocks for seamless user interaction',
      'Created a custom WordPress plugin for OTP authentication',
      'Utilized Ajax for real-time OTP validation',
      'Implemented secure OTP authentication mechanisms',
    ],
  },
];

export const education: TimelineItem[] = [
  {
    date: '2008',
    location: 'Indiana University (Bloomington, IN)',
    title: 'Bachelor of Fine Arts',
    content: <p>Graphic Design, Photography, Digital Media, Japanese</p>,
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
  // {
  //   date: '',
  //   location: 'To see more work history and skills/experience please see my full resume.',
  //   title: '',
  //   content: (
  //     <div></div>
  //   ),
  // },
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
