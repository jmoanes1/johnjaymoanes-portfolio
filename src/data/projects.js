import hrManagementSystem from '../assets/hr_management.png';
import visitorRegistrationPreview from '../assets/visitor_registration.png';
import expenseTracker from '../assets/expense_tracker.png';

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
  },
  {
    id: 3,
    title: 'FinTrack – Expense Tracker',
    category: 'Web App',
    description:
      'A modern, responsive expense tracking dashboard with summary cards, income vs expenses charts, category breakdowns, and full transaction management.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Recharts', 'Vite'],
    liveDemoUrl: 'https://expense-tracker-umber-one.vercel.app/',
    githubUrl: 'https://github.com/jmoanes1/expense-tracker-dashboard',
    image: expenseTracker,
    imageAlt: 'Dashboard preview of the FinTrack expense tracker showing summary cards and income vs expenses charts',
  },
];

export default projects;
