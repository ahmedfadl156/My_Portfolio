import { FaGraduationCap, FaCode, FaLaptopCode } from 'react-icons/fa';

// Projects Data
const projectsData = [
  {
    "title": "Todo App 📋",
    "description": "A sleek and intuitive to-do list application built with React, allowing users to manage tasks, set priorities, and track progress with a clean, modern interface.",
    "image": "/Todo-app.png",
    "techStack": ["HTML", "CSS", "JavaScript", "LocalStorage"],
    "preview": "https://ahmedfadl156.github.io/final_TodoApp/",
    "features": [
      "Task Creation and Management",
      "Priority and Deadline Settings",
      "LocalStorage for Persistent Data",
      "Responsive Design"
    ],
    "github": "https://github.com/ahmedfadl156/final_TodoApp"
  },
  {
    "title": "Hospital System 🏥",
    "description": "A comprehensive hospital management system designed to streamline patient records, appointments, and administrative tasks with a user-friendly interface.",
    "image": "/hospital-system.jpg",
    "techStack": ["Angular", "SCSS", "TypeScript", "PHP", "SQL"],
    "preview": "",
    "features": [
      "Patient Record Management",
      "Appointment Scheduling",
      "Admin Dashboard",
      "Responsive and Secure Design"
    ],
    "github": "https://github.com/ahmedfadl156/Hospital_System"
  },
  {
    title: "Cinema Scoop 🎬",
    description:
      "A modern movie discovery web application built with React that helps users explore, rate, and track their favorite films with a beautiful glassmorphism UI design.",
    image: "/Cinema-scoop-image.png",
    techStack: ["React", "CSS", "OMDB API", "LocalStorage"],
    preview: "https://cinema-scoop-ten.vercel.app/",
    features: [
      "Advanced Search with OMDB API",
      "Personal Statistics & Rating System",
      "Glassmorphism UI Design",
      "Fully Responsive Design",
    ],
    github: "https://github.com/ahmedfadl156/Cinema-Scoop"
  },
  {
    "title": "👨‍🍳 Chef's Pal",
    "description": "A modern and interactive web application designed to help you discover new recipes, view detailed cooking instructions, and manage your favorite dishes. Perfect for cooking enthusiasts exploring culinary delights!",
    "image": "/chef-pal.png",
    "techStack": ["HTML", "Tailwind CSS", "JavaScript", "TheMealDB API"],
    "preview": "https://ahmedfadl156.github.io/Chefpal_website/",
    "features": [
      "Recipe Search with TheMealDB API",
      "Random Recipe Discovery",
      "Detailed Recipe View with Instructions",
      "Favorites Management with LocalStorage",
      "Responsive Design Across All Devices",
      "Intuitive User Experience"
    ],
    "github": "https://github.com/ahmedfadl156/Chefpal_website"
  },
  {
    "title": "Fashion E-Commerce",
    "description": "A stylish e-commerce platform for fashion enthusiasts, featuring a seamless shopping experience with product filtering, cart management, and a modern UI.",
    "image": "/fashion-ecommerce.png",
    "techStack": ["Angular", "Bootstrap", "TypeScript", "Node.js" , "Express.js", "SQL"],
    "preview": "",
    "features": [
      "Product Search and Filtering",
      "Shopping Cart and Checkout",
      "Payment Integration with Stripe",
      "Fully Responsive Design"
    ],
    "github": "https://github.com/ahmedfadl156/Fashion_E-Commerce"
  },
  {
    "title": "Finance Tracker App 💸",
    "description": "A personal finance tracker that helps users manage budgets, track expenses, and visualize financial data with an intuitive and modern interface.",
    "image": "/finance-tracker.png",
    "techStack": ["HTML", "CSS", "JavaScript", "Chart.js", "LocalStorage"],
    "preview": "https://ahmedfadl156.github.io/Finance_Tracker_App/",
    "features": [
      "Expense and Income Tracking",
      "Budget Planning",
      "Data Visualization with Charts",
      "Responsive Design"
    ],
    "github": "https://github.com/ahmedfadl156/Finance_Tracker_App"
  },
];

// TimeLine Data
const timelineData = [
  {
    id: 1,
    year: 'Expected 2027',
    title: 'Bachelor of Science in Computer Science',
    subtitle: 'New Mansoura University, Egypt',
    description: 'Pursuing CS degree with Very Good grade, focusing on algorithms, web development, and software engineering principles.',
    icon: FaGraduationCap,
    type: 'education',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 2,
    year: '2022 - Present',
    title: 'Self-Taught Frontend Developer',
    subtitle: 'Independent Learning Journey',
    description: 'Mastered HTML, CSS, JavaScript, React, Angular, and Node.js through hands-on projects and continuous learning.',
    icon: FaCode,
    type: 'experience',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 3,
    year: '2024 - 2025',
    title: 'DEPI Initiative Training',
    subtitle: 'Intensive Frontend Development Program',
    description: 'Completed comprehensive training in Angular, Node.js, and modern web development. Built full-stack e-commerce project.',
    icon: FaLaptopCode,
    type: 'training',
    color: 'from-purple-500 to-pink-500'
  }
];


// Testimonials Data
  const testimonials = [
    {
      id: 1,
      name: "Mohamed Ahmed",
      position: "Technical Manager",
      company: "Advanced Technology Company",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      text: "Working with Ahmed was an absolute pleasure. His attention to detail and ability to translate our vision into a beautiful, functional website exceeded our expectations. The project was delivered on time and significantly improved our online presence.",
    },
    {
      id: 2,
      name: "Fatima Mahmoud",
      position: "Project Manager",
      company: "Digital Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      text: "Ahmed's expertise in React and modern web development was invaluable to our project. He delivered innovative solutions and provided excellent insights that improved our user experience. His communication throughout was exceptional.",
    },
    {
      id: 3,
      name: "Omar Hassan",
      position: "Company Owner",
      company: "E-Commerce Innovation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      text: "Ahmed has excellent expertise in React and Angular. He built us a comprehensive web application with modern design and fast performance. His work is professional and communication is smooth and comfortable.",
    },
    {
      id: 4,
      name: "Nora Salem",
      position: "Marketing Manager",
      company: "Future Development Company",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      text: "Ahmed is a talented and creative developer who transformed our ideas into a professional website with beautiful and user-friendly design. The results exceeded expectations and our clients are extremely satisfied.",
    },
  ];

  // Skills Data
  const ForntEndData = [
    {
      title: "HTML",
      progress: 100,
    },
    {
      title: "CSS",
      progress: 90,
    },
    {
      title: "JavaScript",
      progress: 80,
    },
    {
      title: "React",
      progress: 70,
    },
    {
      title: "Angular",
      progress: 40,
    },
    {
      title: "Bootstrap",
      progress: 90,
    },
    {
      title: "Tailwind Css",
      progress: 90,
    },
  ];
  
  const BackEndData = [
    {
      title: "Node.js",
      progress: 80,
    },
    {
      title: "Express.js",
      progress: 70,
    },
    {
      title: "MongoDB",
      progress: 80,
    },
    {
      title: "SQL",
      progress: 90,
    },
    {
      title: "Firebase",
      progress: 80,
    },
    {
      title: "Rest Api",
      progress: 90,
    },
  ];
  
  const otherSkills = [
    {
      title: "Git",
      progress: 100,
    },
    {
      title: "GitHub",
      progress: 90,
    },
    {
      title: "Figma",
      progress: 80,
    },
    {
      title: "Docker",
      progress: 70,
    },
    {
      title: "Responsive Design",
      progress: 100,
    },
    {
      title: "API",
      progress: 90,
    },
    {
      title: "Clean Code",
      progress: 80,
    },
  ];

export {projectsData , timelineData , testimonials , ForntEndData , BackEndData , otherSkills};