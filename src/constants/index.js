import {
  swift,
  xcode,
  creator,
  ios,
  swiftDev,
  xcodeIde,
  iosDev,
  git,
  uikit,
  freelancer,
  project1,
  project2,
  project3,
  project4,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'iOS Developer',
    icon: ios,
  },
  {
    title: 'Swift Developer',
    icon: swift,
  },
  {
    title: 'Xcode IDE',
    icon: xcode,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'iOS Dev',
    icon: iosDev,
  },
  {
    name: 'swift',
    icon: swiftDev,
  },
  {
    name: 'uikit',
    icon: uikit,
  },
  {
    name: 'xCode',
    icon: xcodeIde,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'iOS Developer',
    company_name: 'Freelancer',
    icon: freelancer,
    iconBg: '#383E56',
    date: '2022 - Present',
    points: [
      'Actively seeking new opportunities to advance in the Mobile Development career as an iOS Developer.',
      'Known for infusing passion, enthusiasm, and a strong thirst for experiential learning into every project.',
      'Bringing a positive, driven, and detail-oriented approach to collaboration within cross-functional teams.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'MasMedi - Healthcare App',
    description:
      'MasMedi is India’s one-of-a-kind tech-driven Healthcare app which provides local and hyperlocal Diagnostic Labs (Pathology & Radiology) services as a marketplace at your fingertips.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project1,
    view: 'https://apps.apple.com/us/app/masmedi-healthcare-app/id1608793042',
    source_code_link: 'https://apps.apple.com/us/app/masmedi-healthcare-app/id1608793042',
  },
  {
    name: 'Office Hours - Fitness at Work',
    description:
      'This app has what you need to stay on track with a healthy lifestyle. Get a customizable routine exercise Plan, personalized 4 reminders and tips to make you feel relaxed, stress-free and fit.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project2,
    view: 'https://apps.apple.com/us/app/office-hours-fitness-at-work/id1508343599',
    source_code_link: 'https://apps.apple.com/us/app/office-hours-fitness-at-work/id1508343599',
  },
  {
    name: 'Contact App Manager',
    description:
      'Welcome to Contact App Manager - A One Step EASY & SAFE Solution for sharing your contact. Forget about dictating your number in the ears anymore. Share all the info you want from your profile with just one click by just scanning the customized QR code and save it directly in the phone book.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project3,
    view: 'https://apps.apple.com/us/app/contact-app-manager/id1554821249',
    source_code_link: 'https://apps.apple.com/us/app/contact-app-manager/id1554821249',
  },
  {
    name: 'Dallal App',
    description:
      'Dallal App allows you to browse properties offered for sale or rent and crosses all geographical barriers in delivering information about the property. The application is a link between the seller and the buyer without the need for intermediaries.',
    tags: [
      {
        name: 'iOS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Swift',
        color: 'green-text-gradient',
      },
      {
        name: 'Xcode',
        color: 'pink-text-gradient',
      },
    ],
    image: project4,
    view: 'https://apps.apple.com/us/app/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%AF-%D9%84%D8%A7%D9%84-%D9%84%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D8%A7%D8%AA/id1451716834',
    source_code_link: 'https://apps.apple.com/us/app/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%AF-%D9%84%D8%A7%D9%84-%D9%84%D9%84%D8%B9%D9%82%D8%A7%D8%B1%D8%A7%D8%AA/id1451716834',
  },
];

export { services, technologies, experiences, testimonials, projects };
