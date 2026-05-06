import { Code2, Brain, Database, Layout, Server, Cpu, Search, MessagesSquare } from 'lucide-react';

export const portfolioData = {
  personal: {
    name: "Irshad Amin",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    titles: [
      "AI Engineer",
      1000,
      "MERN Stack Developer",
      1000,
      "NLP Researcher",
      1000,
      "Full Stack Developer",
      1000
    ],
    bio: "Passionate AI Engineer and Full Stack Developer dedicated to building intelligent, scalable web applications and advanced AI systems. With a strong foundation in Machine Learning, Information Retrieval, and the MERN stack, I bridge the gap between complex algorithms and user-centric design.",
    contact: {
      email: "hello@irshadamin.com",
      linkedin: "https://linkedin.com/in/irshadamin",
      github: "https://github.com/irshadamin",
      location: "Mardan, Pakistan"
    }
  },
  skills: [
    { name: "React.js", category: "Frontend", level: 90 },
    { name: "Node.js", category: "Backend", level: 85 },
    { name: "Express.js", category: "Backend", level: 85 },
    { name: "MongoDB", category: "Database", level: 80 },
    { name: "Python", category: "AI/ML", level: 90 },
    { name: "TensorFlow", category: "AI/ML", level: 75 },
    { name: "PyTorch", category: "AI/ML", level: 80 },
    { name: "NLP", category: "AI/ML", level: 85 },
    { name: "FAISS", category: "AI/ML", level: 70 },
    { name: "Docker", category: "DevOps", level: 65 },
    { name: "Git/GitHub", category: "Tools", level: 90 },
  ],
  projects: [
    {
      id: 1,
      title: "Smart AI Chatbot for University Website",
      description: "An intelligent conversational agent integrated into the university portal to assist students with queries regarding admissions, courses, and campus facilities in real-time.",
      category: "AI/ML",
      tech: ["React", "Python", "NLP", "FastAPI", "MongoDB"],
      features: ["Real-time response", "Context-aware conversational AI", "Admin dashboard for analytics"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "University Website Data Scraper",
      description: "Automated data extraction tool built to systematically scrape, clean, and organize complex institutional data into a structured format for analytics.",
      category: "Data",
      tech: ["Python", "BeautifulSoup", "Selenium", "Pandas"],
      features: ["Automated scheduling", "Robust error handling", "Data export (CSV/JSON)"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "AI-based Question Answering System",
      description: "A sophisticated NLP system capable of understanding complex user queries and retrieving precise answers from large document corpus using state-of-the-art embedding models.",
      category: "AI/ML",
      tech: ["PyTorch", "HuggingFace Transformers", "FAISS", "React"],
      features: ["Semantic search", "High accuracy retrieval", "RAG architecture implementation"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
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
      degree: "BS Computer Science",
      institution: "UET Mardan",
      date: "2020 - 2024",
      details: "Focusing on Machine Learning, NLP, and Full Stack Web Development. Active participant in technical societies and hackathons."
    }
  ],
  research: [
    { title: "Natural Language Processing", icon: MessagesSquare, description: "Advanced text analysis, sentiment classification, and language generation models." },
    { title: "RAG Systems", icon: Database, description: "Retrieval-Augmented Generation for fact-based, context-aware AI applications." },
    { title: "Semantic Search", icon: Search, description: "Implementing vector databases to enable deep semantic understanding of queries." },
    { title: "Information Retrieval", icon: Server, description: "Designing scalable architectures for rapid and accurate data extraction." },
    { title: "LLM Applications", icon: Brain, description: "Fine-tuning and deploying Large Language Models for specialized domain tasks." },
  ],
  certifications: [
    {
      id: 1,
      title: "AWS Certified Machine Learning – Specialty",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "https://images.unsplash.com/photo-1523580494112-071d222272e5?auto=format&fit=crop&q=80&w=600",
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
