import { Code2, Brain, Database, Layout, Server, Cpu, Search, MessagesSquare, Camera, Image, Activity, ScanFace } from 'lucide-react';

export const portfolioData = {
  personal: {
    name: "Irshad Amin",
    profileImages: [
      "/assets/irhsad.jpg",
      "/assets/image4.jpg",
      "/assets/imge3.jpg"
    ],
    titles: [
      "AI Engineer",
      1000,
      "Computer Vision Specialist",
      1000,
      "Medical AI Researcher",
      1000,
      "MERN Stack Developer",
      1000,
      "NLP Researcher",
      1000,
      "Full Stack Developer",
      1000
    ],
    bio: "I am a high-performance AI Engineer and Full-Stack Developer specializing in the intersection of Neural Architectures and Scalable Systems. With a focus on Deep Learning and Web Scraping, I engineer intelligent data pipelines and RAG-driven applications that transform raw data into strategic insights. My mission is to bridge the gap between complex research and deployable, user-centric technology.",
    contact: {
      email: "irshad.uetmardan@gmail.com",
      phone: "03339359986",
      linkedin: "https://www.linkedin.com/in/irshadamin-aidev?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/irs682",
      location: "Mardan, Pakistan"
    }
  },
  skills: [
    { name: "MongoDB", category: "Backend", level: 90 },
    { name: "Express.js", category: "Backend", level: 88 },
    { name: "React.js", category: "Frontend", level: 95 },
    { name: "Node.js", category: "Backend", level: 90 },
    { name: "Python", category: "AI/ML", level: 98 },
    { name: "Web Scraping", category: "AI/ML", level: 92 },
    { name: "Machine Learning", category: "AI/ML", level: 95 },
    { name: "Deep Learning", category: "AI/ML", level: 94 },
    { name: "NLP", category: "AI/ML", level: 95 },
    { name: "RAG Systems", category: "AI/ML", level: 90 },
    { name: "Computer Vision", category: "AI/ML", level: 88 },
    { name: "LLM Applications", category: "AI/ML", level: 92 },
    { name: "FAISS / Vector DB", category: "AI/ML", level: 85 },
    { name: "Docker", category: "DevOps", level: 75 },
    { name: "Git/GitHub", category: "Tools", level: 95 },
  ],
  projects: [
    {
      id: 1,
      title: "Nexus Platform",
      description: "A comprehensive administrative dashboard and networking platform featuring role-based registries, real-time data synchronization, and advanced communication tools.",
      category: "Web Dev",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      features: ["Role-based access control", "Real-time synchronization", "Advanced search engine"],
      github: "https://github.com/irs682/nexus",
      demo: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A full-featured digital storefront built with modern web technologies, offering secure user authentication, shopping cart functionality, and integrated checkout.",
      category: "Web Dev",
      tech: ["React", "Redux", "Node.js", "MongoDB"],
      features: ["Secure authentication", "Shopping cart state management", "Responsive UI"],
      github: "https://github.com/irs682/ecommerce-project",
      demo: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Food Delivery App",
      description: "A dynamic, user-friendly food delivery application providing seamless browsing, order tracking, and restaurant discovery.",
      category: "Web Dev",
      tech: ["MERN Stack", "TailwindCSS", "Redux"],
      features: ["Real-time tracking", "Dynamic menu rendering", "Secure payments"],
      github: "https://github.com/irs682/Food-Delivery-App",
      demo: "#",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Sales Forecasting Model",
      description: "A predictive machine learning pipeline designed to analyze historical sales data and accurately forecast future revenue trends.",
      category: "AI/ML",
      tech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
      features: ["Data preprocessing", "Trend analysis", "Predictive modeling"],
      github: "https://github.com/irs682/Sales_Forecasting_Week-1",
      demo: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "University Rules & Regulations AI",
      description: "A specialized compliance chatbot designed to navigate complex university policies using RAG and high-precision NLP models.",
      category: "AI / MERN",
      tech: ["MERN Stack", "RAG", "NLP API", "Vector DB"],
      features: ["Context-aware responses", "Administrative automation", "Real-time sync"],
      github: "https://github.com/irs682",
      demo: "#",
      image: "/assets/image4.jpg"
    },
    {
      id: 6,
      title: "Next World Predictor",
      description: "An advanced data science notebook demonstrating techniques for handling mixed variables and conducting deep feature engineering for predictive models.",
      category: "Data Science",
      tech: ["Python", "Jupyter", "Pandas", "Feature Engineering"],
      features: ["Mixed variable handling", "Data imputation", "Exploratory data analysis"],
      github: "https://github.com/irs682/Handling-Mixed-Variables-Feature-Engineering/blob/main/next_world_pridactor_project.ipynb",
      demo: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 7,
      title: "AI-Powered Image Analytics",
      description: "A sophisticated computer vision system for real-time object detection and semantic segmentation, optimized for edge devices.",
      category: "AI/ML",
      tech: ["Python", "PyTorch", "OpenCV", "TensorRT"],
      features: ["Real-time processing", "Multi-object tracking", "Edge optimization"],
      github: "https://github.com/irs682",
      demo: "#",
      image: "/assets/imge3.jpg"
    }
  ],
  experience: [
    {
      id: 1,
      role: "AI & Web Development Intern",
      company: "UET Mardan",
      date: "2023 - Present",
      description: "Worked on integrating AI models into web interfaces. Developed internal tools using the MERN stack and assisted in machine learning research projects."
    },
    {
      id: 2,
      role: "Web Development Intern",
      company: "Hamdan Digital Marketing",
      date: "2022 - 2023",
      description: "Built responsive websites, optimized frontend performance, and collaborated with the design team to implement modern user interfaces."
    }
  ],
  education: [
    {
      id: 1,
      degree: "BS Computer Engineering",
      institution: "UET Mardan",
      date: "2022 - 2026",
      details: "Specializing in AI and Deep Learning with a focus on Neural Architectures. Currently maintaining a high academic standing with multiple semester honors.",
      highlights: [
        "Final Year Project: AI-Powered Chatbot for University Rules",
        "Stack: MERN Stack & RAG Integration with Advanced NLP APIs",
        "Goal: Automated compliance and policy navigation for academic administration",
        "Honors: Multiple Dean's List Awards & Merit Scholarship Recipient",
        "Leadership: AI Research Club and Technical Hackathon Lead"
      ],
      technicalFocus: ["Neural Networks", "RAG Optimization", "Full Stack Engineering", "Cloud AI"]
    }
  ],
  research: [
    { title: "Natural Language Processing", icon: MessagesSquare, description: "Engineering sophisticated transformer-based architectures for advanced semantic understanding and context-aware generation." },
    { title: "Computer Vision", icon: ScanFace, description: "Developing state-of-the-art vision models for real-time spatial intelligence, neural rendering, and biometric identification." },
    { title: "Medical Deep Learning", icon: Activity, description: "Architecting high-precision diagnostic systems using deep neural networks for medical imaging and predictive pathology." },
    { title: "Image Processing", icon: Image, description: "Implementing advanced mathematical frameworks for computational photography, multi-spectral restoration, and feature extraction." },
    { title: "RAG Systems", icon: Database, description: "Optimizing Retrieval-Augmented Generation pipelines with vector databases to bridge the gap between static LLMs and dynamic knowledge bases." },
    { title: "LLM Applications", icon: Brain, description: "Strategizing and deploying industrial-scale LLM solutions through parameter-efficient fine-tuning and robust prompt engineering." },
    { title: "Distributed Neural Systems", icon: Cpu, description: "Optimizing large-scale model inference and training across heterogeneous distributed hardware and edge devices." },
    { title: "AI-Native Architectures", icon: Server, description: "Designing web ecosystems where agentic AI is integrated at the core architecture layer for real-time cognitive responses." },
    { title: "Generative Neural Networks", icon: Code2, description: "Researching high-fidelity synthetic data generation and cross-domain image translation using advanced GAN architectures." }
  ],
  certifications: [
    {
      id: 1,
      title: "AWS Certified Machine Learning – Specialty",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
      link: "#"
    },
    {
      id: 2,
      title: "Deep Learning Specialization",
      issuer: "Coursera (deeplearning.ai)",
      date: "2022",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
      link: "#"
    },
    {
      id: 3,
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta",
      date: "2023",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
      link: "#"
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Dr. Ahmed Khan",
      role: "Professor of Computer Science, UET Mardan",
      content: "Irshad is an exceptional student and developer. His work on the university's AI chatbot significantly improved our student support system.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Project Manager, Hamdan Digital",
      content: "A brilliant MERN stack developer who always delivers ahead of schedule. Irshad's attention to detail and ability to solve complex bugs is unmatched.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 3,
      name: "Ali Raza",
      role: "Lead Data Scientist",
      content: "I had the pleasure of mentoring Irshad. His grasp of NLP and vector databases is incredibly solid for his level of experience.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    }
  ]
};
