import hrManagementSystem from '../assets/hr_management.png';
import visitorRegistrationPreview from '../assets/visitor_registration.png';
import expenseTracker from '../assets/expense_tracker.png';
import shareSplitRent from '../assets/sharesplit_rent.png';

/**
 * Projects matching the user's resume and portfolio showcase
 */
const projects = [
  {
    id: 1,
    title: 'Expense Tracker Dashboard',
    category: 'Web Application',
    description:
      'A responsive dashboard application for recording, managing, and monitoring personal expenses with interactive data visualizations and financial summaries.',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Recharts'],
    liveDemoUrl: 'https://expense-tracker-umber-one.vercel.app/',
    githubUrl: 'https://github.com/jmoanes1/expense-tracker-dashboard',
    image: expenseTracker,
    imageAlt: 'Dashboard preview of the Expense Tracker showing summary cards and income vs expenses charts',
  },
  {
    id: 2,
    title: 'HR Management System',
    category: 'Web Application',
    description:
      'A web application for managing and organizing HR records efficiently with robust backend data models and database operations in Django.',
    technologies: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'PostgreSQL'],
    liveDemoUrl: 'https://hrms-portal-qe9g.onrender.com',
    githubUrl: 'https://github.com/jmoanes1/hr_management_system',
    image: hrManagementSystem,
    imageAlt: 'High-resolution screenshot of the HR Management System dashboard',
  },
  {
    id: 3,
    title: 'Visitor Registration Management System',
    category: 'Web Application',
    description:
      'A responsive web application for managing visitor registration records, log flows, real-time check-in/check-out tracking, and live registration status monitoring.',
    technologies: ['React.js', 'Node.js', 'JavaScript', 'Tailwind CSS'],
    liveDemoUrl: 'https://vrms-fih9.onrender.com',
    githubUrl: 'https://github.com/jmoanes1/visitor_registration_management_system',
    image: visitorRegistrationPreview,
    imageAlt: 'Dashboard preview of the Visitor Registration Management System showing check-in metrics and visitor log',
  },
  {
    id: 4,
    title: 'ShareSplit Rent',
    category: 'Rental Marketplace',
    description:
      'A rental marketplace and room-sharing platform featuring an admin dashboard for user verification queues, room listings, and system monitoring.',
    technologies: ['Python', 'Django', 'Tailwind CSS', 'JavaScript', 'PostgreSQL'],
    liveDemoUrl: 'https://splitshare-rent.onrender.com/',
    githubUrl: 'https://github.com/jmoanes1/splitshare-rent',
    image: shareSplitRent,
    imageAlt: 'Platform overview dashboard of ShareSplit Rent',
  },
];

export default projects;
