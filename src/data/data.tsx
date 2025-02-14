import {
  ArrowDownTrayIcon,
  EnvelopeIcon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
  SwatchIcon,
  StarIcon,
  MusicalNoteIcon
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/2xcmtixxa34c1.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/selfie-canoe.png';
import testimonialImage from '../images/testimonial.webp';
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
  title: 'ReREAact Resume Template',
  description: "Example site built with Tim Baker's react resume template",
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
        Web Developer, Creative, Problem Solver
      </p>
    </>
  ),
  actions: [
    {
      href: '../images/David-J-Hanus_Resume_Web-Developer_2025.pdf',
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
    {label: 'Favorite Music', text: 'Rock & Roll', Icon: MusicalNoteIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend Development',
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
        name: 'REST API',
        level: 7.8,
      },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'JavaScript',
        level: 7.5,
      },
      {
        name: 'Typescript',
        level: 2.25,
      },
      {
        name: 'React',
        level: 1.5,
      },
      {
        name: 'Tailwind',
        level: 3,
      },
    ],
  },
  {
    name: 'Development & Workflow',
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
        name: 'Git',
        level: 8.25,
      },
    ],
  },
  {
    name: 'Design & Prototyping',
    skills: [
      {
        name: 'Photoshop/Illustrator',
        level: 10,
      },
      {
        name: 'Figma',
        level: 8.25,
      },
      {
        name: 'Adobe XD',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
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
    date: '',
    location: 'To see more work history and skills/experience please see my full resume.',
    title: '',
    content: (
      <div></div>
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
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
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
      type: ContactType.Location,
      text: 'Indiana, USA',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@djhanus',
      href: 'https://davidjhanus.me',
    },
    {
      type: ContactType.Github,
      text: 'djhanus',
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
