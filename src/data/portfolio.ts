import { Project, Experience, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, payment processing, and admin dashboard.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/ecommerce",
    category: "Full-Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application built with React and C# backend. Features real-time updates, team collaboration, and advanced filtering.",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "C#", "SignalR", "SQL Server", "Tailwind"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/taskmanager",
    category: "Full-Stack"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React and TypeScript. Features dark mode, smooth animations, and interactive components.",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/portfolio",
    category: "Frontend"
  },
  {
    id: 4,
    title: "Java Spring Boot API",
    description: "RESTful API service built with Java Spring Boot. Features JWT authentication, data validation, and comprehensive error handling.",
    image: "https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Maven"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/spring-api",
    category: "Backend"
  },
  {
    id: 5,
    title: "Mobile-First Dashboard",
    description: "Responsive dashboard application with data visualization and real-time updates. Built with modern React patterns and TypeScript.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind", "WebSocket"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/dashboard",
    category: "Frontend"
  },
  {
    id: 6,
    title: "Microservices Architecture",
    description: "Scalable microservices system built with Node.js and Docker. Features service discovery, load balancing, and monitoring.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Node.js", "Docker", "Kubernetes", "Redis", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/microservices",
    category: "Backend"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Lead development of enterprise web applications using React, Node.js, and cloud technologies. Mentor junior developers and architect scalable solutions.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Agency Co.",
    period: "2020 - 2022",
    description: "Developed responsive web applications and improved user experience across multiple client projects. Collaborated with design teams to implement pixel-perfect UIs.",
    technologies: ["React", "JavaScript", "HTML/CSS", "Tailwind", "Figma"]
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "StartupXYZ",
    period: "2019 - 2020",
    description: "Built and maintained RESTful APIs using Java Spring Boot and C# .NET. Implemented database optimization and security best practices.",
    technologies: ["Java", "C#", "Spring Boot", "PostgreSQL", "Redis"]
  },
  {
    id: 4,
    title: "Junior Developer",
    company: "CodeCraft Solutions",
    period: "2018 - 2019",
    description: "Started career developing web applications and learning modern development practices. Contributed to various projects and gained experience in multiple technologies.",
    technologies: ["JavaScript", "HTML/CSS", "PHP", "MySQL", "Git"]
  }
];

export const skills: Skill[] = [
  { name: "React", level: 95, icon: "react" },
  { name: "TypeScript", level: 90, icon: "typescript" },
  { name: "JavaScript", level: 95, icon: "javascript" },
  { name: "Node.js", level: 85, icon: "nodejs" },
  { name: "Java", level: 80, icon: "java" },
  { name: "C#", level: 75, icon: "csharp" },
  { name: "HTML/CSS", level: 95, icon: "html" },
  { name: "Tailwind CSS", level: 90, icon: "tailwind" },
  { name: "Git", level: 85, icon: "git" },
  { name: "Docker", level: 70, icon: "docker" },
  { name: "AWS", level: 65, icon: "aws" },
  { name: "PostgreSQL", level: 80, icon: "database" }
];