export const portfolioData = {
  personal: {
    name: "NANDINI KAMSALI",
    firstName: "Nandini",
    lastName: "Kamsali",
    eyebrow: "PORTFOLIO / 2026",
    headlinePrimary: "JAVA FULL STACK",
    headlineSecondary: "DEVELOPER",
    subHeadline: "SERVICENOW DEVELOPER",
    badgeLabel: "CSA + CAD CERTIFIED",
    summary: "Computer Science Engineering student building practical applications with Java, Spring Boot, React, MySQL and ServiceNow.",
    aboutBio: "Computer Science Engineering student and ServiceNow Certified System Administrator (CSA) and Certified Application Developer (CAD) with hands-on experience in ServiceNow administration, Service Portal development, Flow Designer, workflow automation, Java full-stack development, and data-driven applications.",
    location: "Nandyal, Andhra Pradesh",
    email: "kamsalinandini42@gmail.com",
    phone: "9133811828",
    github: "https://github.com/Nandini0567",
    linkedin: "https://www.linkedin.com/in/nandini-kamsali-90b070345",
    servicenowBadge: {
      platform: "SERVICENOW",
      title: "ServiceNow Developer",
      certifications: ["CSA ✓", "CAD ✓"]
    }
  },

  whatIBuild: [
    {
      num: "01",
      title: "JAVA APPLICATIONS",
      technologies: ["Java", "Spring Boot", "Maven"],
      icon: "Code"
    },
    {
      num: "02",
      title: "WEB APPLICATIONS",
      technologies: ["React.js", "JavaScript", "HTML", "CSS"],
      icon: "Globe"
    },
    {
      num: "03",
      title: "SERVICENOW",
      technologies: ["ServiceNow", "Service Portal", "Flow Designer", "CSA", "CAD"],
      icon: "Cpu"
    },
    {
      num: "04",
      title: "DATA TOOLS",
      technologies: ["Python", "Pandas", "NumPy", "Streamlit"],
      icon: "BarChart3"
    }
  ],

  skills: {
    programming: {
      category: "Programming",
      items: ["Java", "Python", "C"]
    },
    frontend: {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React.js"]
    },
    backend: {
      category: "Backend / Frameworks",
      items: ["Spring Boot", "Maven"]
    },
    database: {
      category: "Database",
      items: ["MySQL"]
    },
    platform: {
      category: "Platform",
      items: ["ServiceNow", "CSA", "CAD"]
    },
    dataViz: {
      category: "Data & Visualization",
      items: ["Pandas", "NumPy", "Streamlit", "Plotly"]
    },
    tools: {
      category: "Tools",
      items: ["VS Code", "GitHub", "Eclipse", "IntelliJ IDEA"]
    },
    concepts: {
      category: "Concepts",
      items: ["DSA"]
    }
  },

  projects: [
    {
      number: "01",
      title: "Sports Hall Booking System",
      type: "ServiceNow Enterprise Platform",
      technologies: ["ServiceNow", "Service Portal", "Flow Designer", "Angular", "Bootstrap"],
      description: "A ServiceNow-based sports hall booking platform designed to manage hall availability, booking requests, approvals, and automated notifications.",
      keyFeatures: [
        "Angular + Bootstrap for Service Portal widgets",
        "Relational data model for Sports Hall, Booking Slot, and Booking Request",
        "Real-time slot browsing",
        "Booking submission",
        "Booking status tracking",
        "Flow Designer approval workflows",
        "Automated email notifications",
        "Scheduled jobs to auto-release unconfirmed slots",
        "Dynamic cancellation charge calculation"
      ],
      github: "https://github.com/Nandini0567/SportsHallBookingSystem.git",
      mockupType: "servicenow"
    },
    {
      number: "02",
      title: "Smart Budget and Expense Management System",
      type: "Full Stack Java Application",
      technologies: ["Java", "Spring Boot", "React.js", "MySQL", "Maven", "IntelliJ IDEA"],
      description: "An individual expense management application for tracking monthly income, expenses, spending patterns, and remaining balance.",
      keyFeatures: [
        "Monthly income and expense management",
        "Expense categories such as food, shopping, and transportation",
        "Total amount spent calculation",
        "Remaining balance calculation",
        "Monthly expense tracking",
        "Secure login/logout",
        "Individual user expense management",
        "Month-to-month expense comparison",
        "Spending pattern analysis",
        "Budget planning"
      ],
      github: "https://github.com/Nandini0567/Smartbudget.git",
      liveDemo: "https://smartbudget-aal64dcyj-portfolio-dbc3.vercel.app",
      mockupType: "finance"
    },
    {
      number: "03",
      title: "Automated Data Cleaning & Preprocessing Tool",
      type: "Python & Streamlit Data Pipeline",
      technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly"],
      description: "An interactive data preprocessing application that helps users clean datasets, identify data quality issues, visualize information, and download processed data.",
      keyFeatures: [
        "CSV file upload",
        "Missing value detection and handling",
        "Duplicate detection",
        "Data type mismatch handling",
        "Interactive Plotly visualizations",
        "Real-time data preview",
        "Cleaned dataset generation",
        "Downloadable cleaned output"
      ],
      github: "https://github.com/Nandini0567/Data_Cleaner.git",
      mockupType: "data"
    }
  ],

  experience: [
    {
      id: "exp-1",
      role: "ServiceNow System Administrator Virtual Internship",
      company: "APSCHE & SmartBridge",
      location: "Virtual",
      duration: "2026 | 2 Months",
      details: [
        "120-hour virtual internship",
        "ServiceNow administration",
        "User and role management",
        "Platform configuration",
        "Workflow development and automation"
      ]
    },
    {
      id: "exp-2",
      role: "Web Development Intern",
      company: "CodSoft",
      location: "Virtual",
      duration: "2025 | 4 Weeks",
      details: [
        "Responsive web development",
        "HTML, CSS, JavaScript",
        "Interactive UI components",
        "Frontend workflows",
        "GitHub/version control"
      ]
    }
  ],

  certifications: [
    {
      id: "csa",
      title: "ServiceNow Certified System Administrator (CSA)",
      issuer: "ServiceNow",
      year: "2026",
      featured: true,
      description: "Cleared ServiceNow CSA certification demonstrating expertise in platform administration, user management, and IT service management workflows."
    },
    {
      id: "cad",
      title: "ServiceNow Certified Application Developer (CAD)",
      issuer: "ServiceNow",
      year: "2026",
      featured: true,
      description: "Cleared ServiceNow CAD certification demonstrating skills in building and customizing ServiceNow applications using scripting and platform tools."
    },
    {
      id: "nvidia",
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA Certificate of Competency",
      year: "2026",
      featured: false,
      topics: ["Neural Networks", "CNNs", "Backpropagation", "Model Training using Python"]
    },
    {
      id: "genai",
      title: "Generative AI Mastermind",
      issuer: "Outskill",
      year: "2026",
      featured: false,
      topics: ["Applied Generative AI tools", "AI workflows", "Prompt Engineering"]
    },
    {
      id: "tcs",
      title: "TCS iON Career Edge – Young Professional",
      issuer: "TCS iON",
      year: "2025",
      featured: false,
      topics: ["Communication", "IT Fundamentals", "Resume Writing", "Interview Skills", "Overview of AI"]
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "G. Pullaiah College of Engineering and Technology",
      period: "2023 – 2027",
      metric: "Current CGPA: 8.78",
      highlight: true
    },
    {
      degree: "Intermediate (MPC)",
      institution: "AP Model Junior College, Jupadu Bungalow",
      period: "2021 – 2023",
      metric: "Percentage: 96.6%",
      highlight: false
    },
    {
      degree: "High School",
      institution: "Parameswara E.M High School, Kadapa",
      period: "2020 – 2021",
      metric: "Percentage: 100%",
      highlight: false
    }
  ],

  languages: ["English", "Telugu", "Hindi"]
};
