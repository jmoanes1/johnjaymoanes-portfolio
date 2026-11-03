import hrManagementSystem from '../assets/hr_management.png';
import visitorRegistrationPreview from '../assets/visitor_registration.png';
import gripOnChinaYuShanManagement from '../assets/grip-on-china-yu-shan-management.jpg';

/**
 * Project data array.
 * Replace placeholder URLs ("#") with real links when available.
 */
const projects = [
  {
    id: 1,
    title: 'HR Management System',
    category: 'Web App',
    description:
      'A full-featured web application designed to organize HR-related information, track workforce metrics, and manage employee records efficiently.',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
    liveDemoUrl: 'https://hrms-portal-qe9g.onrender.com',
    githubUrl: 'https://github.com/jmoanes1/hr_management_system',
    image: hrManagementSystem,
    imageAlt: 'High-resolution screenshot of the HR Management System dashboard',
    demoAccount: {
      username: 'demo',
      password: 'yCAPYZ3nwMmK74B',
      role: ' Admin',
    },
  },


  {
    id: 2,
    title: 'Visitor Registration Management System',
    category: 'Web App',
    description:
      'A web application for front-desk operations that digitizes visitor check-in, issues pass codes, tracks host assignments, and produces real-time visitor logs and reports.',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
    liveDemoUrl: 'https://vrms-fih9.onrender.com',
    githubUrl: 'https://github.com/jmoanes1/visitor_registration_management_system',
    image: visitorRegistrationPreview,
    imageAlt: 'Dashboard preview of the Visitor Registration Management System showing check-in metrics and recent visitor registrations',
    demoAccount: {
      username: 'admin',
      password: 'admin123',
      role: 'Administrator',
    },
  },
  {
    id: 3,
    title: 'Grip op China – Yu Shan Management',
    category: 'Web App',
    badge: 'Web App',
    description:
      'A clean, responsive corporate web application for a China consultancy, featuring intuitive navigation and an optimized layout for desktop and mobile.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveDemoUrl: '#',
    githubUrl: '#',
    image: gripOnChinaYuShanManagement,
    imageAlt: 'High-resolution preview of Grip op China – Yu Shan Management corporate web application',
  },
];

export default projects;
