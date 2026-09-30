// certificates
import ainShams from "../../assets/certificates/Ain Shams University.png"
import canadianCollege from "../../assets/certificates/The Canadian College In Cairo.png"
import frontendDiploma from "../../assets/certificates/Front.png"
import frontGDG from "../../assets/certificates/frontGDG.png"
import backendDiploma from "../../assets/certificates/Back.png"
import fullStackDiploma from "../../assets/certificates/Full Stack.png"
import practicalTrainingCert from "../../assets/certificates/frontTraining.png"

// projects
import masonLeblancImg from "../../assets/projects/Mason Leblanc.png"
import kasperImg from "../../assets/projects/Kasper.png"
import restaurantImg from "../../assets/projects/restaurant.png"
import leonImg from "../../assets/projects/leon.png"
import nexoraImg from "../../assets/projects/nexora.jpg"
import nexoraVid from "../../assets/projects/nexora vid.mp4"

export const en = {
  header: {
    logo: "Youssef Taha",
    navLinks: [
      { name: "Home", href: "#hero" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "My Journey", href: "#journey" },
      { name: "Education", href: "#education" },
      { name: "Contact", href: "#contact" },
    ],
    langBtn: "عربي",
  },


  hero: {
    isAvailable: true,
    availableText: "Available For Work",
    notAvailableText: "Currently Busy",
    greeting: "Hi, I'm",
    name: "Youssef Taha",
    title: "MERN Stack / Full-Stack Web Developer",
    description: "Crafting fast, dynamic, and modern web applications with React.js and Node.js, focused on seamless user experiences and scalable architecture.",
    contactBtnText: "Get in Touch",
    downloadCV: "Download CV",
    githubBtnText: "GitHub",
    linkedinBtnText: "LinkedIn",
  },

  about: {
    title: "About Me",
    subtitle: "Get to know me",
    bio: "Full-Stack Web Developer specializing in the MERN stack. Dedicated to transforming ideas into dynamic, scalable, and high-performance web applications with clean architecture, state management, and interactive user experiences.",
    highlights: [
      {
        icon: "HiOutlineRocketLaunch",
        title: "MERN Stack Development",
        desc: "Building end-to-end web apps using React, Redux Toolkit, Node.js, Express, and MongoDB.",
      },
      {
        icon: "HiOutlineCpuChip",
        title: "Clean Code & Performance",
        desc: "Writing scalable, maintainable code with optimized performance and secure authentication.",
      },
      {
        icon: "HiOutlineSparkles",
        title: "Interactive UI/UX",
        desc: "Crafting pixel-perfect, responsive interfaces enriched with smooth GSAP animations.",
      },
    ],
    statsLabels: {
      yearsExperience: "Years Experience",
      projectsCompleted: "Projects Completed",
      technologiesUsed: "Technologies Used",
    },
  },

  skills: {
    title: "Skills & Technologies",
    subtitle: "My technical toolkit",
    categories: [
      {
        name: "Frontend",
        items: [
          "HTML5",
          "CSS3",
          "JavaScript (ES6+)",
          "React.js",
          "Redux Toolkit",
          "Bootstrap 5",
          "Tailwind CSS",
          "GSAP",
        ],
      },
      {
        name: "Backend & Databases",
        items: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "RESTful APIs",
          "Authentication (JWT)",
        ],
      },
      {
        name: "Tools & Libraries",
        items: [
          "VS Code",
          "Git & GitHub",
          "Postman",
          "Vite",
          "Vercel",
          "npm",
          "Bcryptjs",
        ],
      },
    ],
  },

  projects: {
    title: "Featured Projects",
    subtitle: "A showcase of my recent web development projects and applications",
    items: [
      {
        id: 1,
        filter: "web-apps",
        image: masonLeblancImg,
        link: "https://mason-leblanc.vercel.app",
        github: "#",
        title: "Mason Leblanc - Photography Portfolio",
        subDescription: "React.js, Redux Toolkit, Tailwind CSS, Dynamic Themes, Customizer, Multi-page Routing",
        role: "Front-End Developer",
        date: "Sep 2026",
        description: "Built a multi-page photography portfolio web app featuring an interactive customizer for Light/Dark modes, color themes, and dynamic font switching. Utilized Redux Toolkit for global state management and React Router for seamless navigation.",
        tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "React Router"],
      },
      {
        id: 2,
        filter: "web-apps",
        image: nexoraImg,
        video: nexoraVid,
        link: "",
        github: "https://github.com/youssef2006taha/Nexora-Ecommerce",
        title: "Nexora E-Commerce Platform & Dashboard",
        subDescription: "React.js, Redux Toolkit, Tailwind CSS, REST APIs, Team Lead, Auth & Regex Validation",
        role: "Team Lead & UI Developer",
        date: "Jul 2026 - Aug 2026",
        description: "Served as Team Lead for a 13-member team building a full-stack e-commerce platform[cite: 8]. Developed responsive UI components and authentication forms with Regex validation, and coordinated task tracking using Git/GitHub.",
        tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "REST APIs"],
      },
      {
        id: 3,
        filter: "landing",
        image: kasperImg,
        link: "https://youssef2006taha.github.io/kasper",
        github: "#",
        title: "Kasper - Creative Agency Template",
        subDescription: "HTML5, CSS3, JavaScript ES6+, Flexbox & Grid, Category Filtering, Responsive Design",
        role: "Front-End Developer",
        date: "Dec 2025 - Jan 2026",
        description: "Built a multi-section, highly responsive agency template from scratch using HTML5, CSS3 (Flexbox & Grid), and JavaScript ES6+ for dynamic UI interactions such as portfolio filtering and navigation.",
        tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design"],
      },
      {
        id: 4,
        filter: "landing",
        image: leonImg,
        link: "https://youssef2006taha.github.io/Leon",
        github: "#",
        title: "Leon - Agency Landing Page",
        subDescription: "HTML5, CSS3 Pure, Media Queries, Clean Code Structure, Fully Responsive",
        role: "Front-End Developer",
        date: "Nov 2025 - Dec 2025",
        description: "Created a minimalist, fully responsive web template focused on clean HTML structure, custom CSS styling with media queries, and pixel-perfect layouts.",
        tags: ["HTML5", "CSS3", "Responsive Design"],
      },
      {
        id: 5,
        filter: "landing",
        image: restaurantImg,
        link: "https://youssef2006taha.github.io/project-3",
        github: "#",
        title: "Responsive Food & Restaurant Website",
        subDescription: "Bootstrap 5, HTML5, CSS3, Custom Dark Theme, Grid Layouts, Cross-Browser Responsive",
        role: "Front-End Developer",
        date: "Sep 2025 - Oct 2025",
        description: "Designed and developed a modern restaurant landing page featuring a customized dark theme and responsive layout built with Bootstrap 5 grid system.",
        tags: ["Bootstrap 5", "HTML5", "CSS3"],
      },
    ],
  },

  journey: {
    title: "My Journey",
    subtitle: "Milestones in my continuous technical and professional growth",
    items: [
      {
        id: "depi",
        period: "Aug 2026 - Present",
        title: "Digital Egypt Pioneers Initiative (DEPI) - Round 5",
        subtitle: "Frontend Development Training (AST Company) | Benha",
        description: "Intensive training focused on full-stack web application development, code best practices, teamwork, and real-world project scenarios.",
        type: "training",
        badge: "Ongoing",
        certificates: null
      },
      {
        id: "sef-practical-training",
        period: "May 2026 - Aug 2026",
        title: "Frontend Practical Training (React.js)",
        subtitle: "SEF Academy",
        description: "Completed 120 hours of intensive practical training with a score of 99.0%, focusing on hands-on application, building real-world UIs using React.js, API integration, and advanced state management.",
        type: "training",
        badge: "Practical Training",
        certificates: [
          {
            id: "sef-cert-training",
            title: "Frontend Practical Training Certificate (React.js) - Score: 99.0%",
            image: practicalTrainingCert,
            studentId: "284222001308",
            link: "#"
          }
        ]
      },
      {
        id: "sef-fullstack",
        period: "Jun 2025 - May 2026",
        title: "Full-Stack Web Development Diploma (MERN Stack)",
        subtitle: "SEF Academy",
        description: "Completed a comprehensive 180-hour program with an overall score of 97.89%, mastering full-stack MERN development, global state management with Redux Toolkit, and integrating RESTful APIs with MongoDB.",
        type: "diploma",
        badge: "Certified Diploma",
        certificates: [
          {
            id: "sef-cert-fullstack",
            title: "Full Stack Diploma (MERN Stack) - Score: 97.89%",
            image: fullStackDiploma,
            studentId: "284222000554",
            link: "#"
          },
          {
            id: "sef-cert-backend",
            title: "Back-End Diploma (Node JS) - Score: 97.64%",
            image: backendDiploma,
            studentId: "284222000554",
            link: "#"
          },
          {
            id: "sef-cert-frontend",
            title: "Front-End Diploma (React JS) - Score: 98.13%",
            image: frontendDiploma,
            studentId: "284222000554",
            link: "#"
          }
        ]
      },
      {
        id: "gdg-bootcamp",
        period: "Jan 2026",
        title: "Front-End Bootcamp",
        subtitle: "Google Developer Groups (GDG On Campus) - Benha University",
        description: "Intensive 36-hour bootcamp focusing on modern web development fundamentals, participating in technical workshops, and building responsive UIs.",
        type: "bootcamp",
        badge: "Bootcamp",
        certificates: [
          {
            id: "gdg-cert-1",
            title: "Front-End Bootcamp Completion Certificate (36H) - Benha University & GDG",
            image: frontGDG,
            studentId: "",
            link: "#"
          }
        ]
      },
      {
        id: "english-course",
        period: "Feb 2025 - Sep 2025",
        title: "General English Program (12 Levels)",
        subtitle: "Ain Shams University & Canadian College in Cairo (CIC)",
        description: "Completed an intensive program of 160 certified training hours to enhance English communication skills and technical vocabulary with Excellent grade.",
        type: "language",
        badge: "Self Improvement",
        certificates: [
          {
            id: "eng-cert-canadian",
            title: "Canadian College in Cairo (CIC) Certificate - 12 Levels (Grade Excellent)",
            image: canadianCollege,
            studentId: "",
            link: "#"
          },
          {
            id: "eng-cert-ain-shams",
            title: "Ain Shams University & Glory Academy Certificate - 12 Levels",
            image: ainShams,
            studentId: "30605301300631",
            link: "#"
          }
        ]
      }
    ]
  },

  education: {
    title: "Education & Training",
    subtitle: "My Academic Background and Professional Certifications",
    degrees: [
      {
        title: "Bachelor's Degree in Computer Science",
        institution: "Faculty of Computers and Artificial Intelligence, Benha University",
        date: "Sep 2024 - Expected Jun 2028",
        location: "Benha, Al Qalyubia",
        description: "Student in Computer Science specializing in Full-Stack Web Development.",
      },
    ],
    courses: [
      {
        name: "Digital Egypt Pioneers Initiative (DEPI) - Round 5",
        provider: "AST Company",
        date: "Aug 2026 - Present",
        location: "Banha, Qalyubia",
      },
      {
        name: "React.js Frontend Development Training",
        provider: "SEF Academy",
        date: "Jul 2026 - Aug 2026",
        location: "Online / Cairo",
      },
      {
        name: "Backend Development (Node.js & MongoDB)",
        provider: "SEF Academy",
        date: "Feb 2026 - May 2026",
        location: "Cairo, Egypt",
      },
      {
        name: "Frontend Web Foundation Bootcamp",
        provider: "GDG Benha (Google Developer Groups)",
        date: "Feb 2026",
        location: "Benha, Al Qalyubia",
      },
      {
        name: "Front-End Web Development (React & Bootstrap 5)",
        provider: "SEF Academy",
        date: "May 2025 - Dec 2025",
        location: "Cairo, Egypt",
      },
    ],
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "English", level: "Intermediate" },
    ],
  },

  contact: {
    title: "Contact Me",
    subtitle: "Open for Junior & Internship opportunities",
    email: "youssef.taha.6278@gmail.com",
    phone: "+201118086832",
    location: "Al Sharqia, Egypt",
    form: {
      namePlaceholder: "Full Name",
      emailPlaceholder: "Email Address",
      phonePlaceholder: "Phone No.",
      messagePlaceholder: "Your Message...",
      submitBtn: "Send Message",
    },
  },

  footer: {
    rights: "All rights reserved © Youssef Taha",
    backToTop: "Back to top",
  },
};