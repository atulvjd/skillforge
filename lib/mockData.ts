export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorId: string;
  price: number;
  rating: number;
  students: number;
  duration: number;
  level: string;
  image: string;
  category: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: number;
  videoUrl: string;
  description: string;
  resources: string[];
}

export interface Instructor {
  id: string;
  name: string;
  bio: string;
  expertise: string[];
  image: string;
  rating: number;
  students: number;
  courses: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
  progress: Record<string, number>;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  image: string;
  rating: number;
  course: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  description: string;
  skills: string[];
  duration: string;
  price: number;
  image: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  courses: string[];
  duration: number;
  level: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: number;
}

export interface Webinar {
  id: string;
  title: string;
  description: string;
  speaker: string;
  date: string;
  time: string;
  duration: number;
  image: string;
  attendees: number;
  link: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  story: string;
  results: string[];
  coursesTaken: string[];
}

export const instructors: Instructor[] = [
  {
    id: "1",
    name: "Sarah Chen",
    bio: "Full-stack developer with 8+ years of experience in web technologies. Passionate about mentoring and building scalable applications.",
    expertise: ["React", "Node.js", "TypeScript", "Web Design"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 4.9,
    students: 12500,
    courses: 5,
  },
  {
    id: "2",
    name: "Marcus Johnson",
    bio: "Product designer and UX strategist with a focus on user-centered design principles. Led design at multiple startups.",
    expertise: ["UI Design", "UX Research", "Figma", "Design Systems"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 4.8,
    students: 9800,
    courses: 4,
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    bio: "Data scientist and machine learning engineer. Specializes in practical AI applications for real-world problems.",
    expertise: ["Python", "Machine Learning", "Data Analysis", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 4.9,
    students: 15200,
    courses: 6,
  },
  {
    id: "4",
    name: "David Park",
    bio: "Entrepreneur and business strategist. Founded 3 successful startups and invested in 50+ companies.",
    expertise: ["Business Strategy", "Entrepreneurship", "Marketing", "Finance"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    rating: 4.7,
    students: 8900,
    courses: 3,
  },
  {
    id: "5",
    name: "Lisa Wong",
    bio: "Cloud architecture expert and DevOps specialist with 10+ years of experience in enterprise systems.",
    expertise: ["AWS", "Docker", "Kubernetes", "Cloud Architecture"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 4.9,
    students: 11200,
    courses: 5,
  },
  {
    id: "6",
    name: "James Mitchell",
    bio: "Mobile development expert specializing in iOS and cross-platform solutions. Apple Certified Developer.",
    expertise: ["iOS Development", "Swift", "React Native", "Mobile Design"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 4.8,
    students: 10500,
    courses: 4,
  },
  {
    id: "7",
    name: "Priya Kapoor",
    bio: "Digital marketing strategist and growth hacker. Helped 100+ companies scale their business.",
    expertise: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    rating: 4.7,
    students: 7800,
    courses: 4,
  },
  {
    id: "8",
    name: "Tom Anderson",
    bio: "Creative director and branding expert. Has worked with Fortune 500 companies on brand strategy.",
    expertise: ["Branding", "Creative Direction", "Brand Strategy", "Visual Communication"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 4.9,
    students: 9300,
    courses: 3,
  },
];

export const courses: Course[] = [
  {
    id: "1",
    title: "Modern React: From Basics to Advanced",
    description: "Master React with hooks, context, and advanced patterns. Build production-ready applications.",
    instructor: "Sarah Chen",
    instructorId: "1",
    price: 79.99,
    rating: 4.9,
    students: 3200,
    duration: 24,
    level: "Intermediate",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop",
    lessons: [
      {
        id: "1-1",
        title: "React Fundamentals",
        duration: 45,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Learn the core concepts of React including JSX, components, and props.",
        resources: ["React Docs", "Code Examples", "Quiz"],
      },
      {
        id: "1-2",
        title: "Hooks Deep Dive",
        duration: 60,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Understand useState, useEffect, useContext, and custom hooks.",
        resources: ["Hook Patterns", "Common Pitfalls", "Examples"],
      },
      {
        id: "1-3",
        title: "State Management",
        duration: 55,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Learn Context API, Redux, and modern state management solutions.",
        resources: ["Comparison Guide", "Redux Patterns", "Case Studies"],
      },
      {
        id: "1-4",
        title: "Performance Optimization",
        duration: 50,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Optimize your React apps with memoization, code splitting, and lazy loading.",
        resources: ["Performance Tools", "Benchmarks", "Optimization Checklist"],
      },
    ],
  },
  {
    id: "2",
    title: "UI/UX Design Fundamentals",
    description: "Learn design principles, user research, and create beautiful interfaces with Figma.",
    instructor: "Marcus Johnson",
    instructorId: "2",
    price: 69.99,
    rating: 4.8,
    students: 2800,
    duration: 20,
    level: "Beginner",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    lessons: [
      {
        id: "2-1",
        title: "Design Principles",
        duration: 40,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Understand balance, contrast, emphasis, and other core design principles.",
        resources: ["Design Resources", "Examples", "Exercises"],
      },
      {
        id: "2-2",
        title: "User Research",
        duration: 50,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Learn how to conduct user interviews and create personas.",
        resources: ["Research Templates", "Interview Guide", "Tools"],
      },
      {
        id: "2-3",
        title: "Figma Masterclass",
        duration: 60,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Master Figma for prototyping, designing, and collaborating.",
        resources: ["Figma Tips", "Templates", "Components Library"],
      },
    ],
  },
  {
    id: "3",
    title: "Machine Learning for Beginners",
    description: "Introduction to ML concepts, algorithms, and practical applications using Python.",
    instructor: "Elena Rodriguez",
    instructorId: "3",
    price: 89.99,
    rating: 4.9,
    students: 4100,
    duration: 28,
    level: "Beginner",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    lessons: [
      {
        id: "3-1",
        title: "ML Basics",
        duration: 45,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Understand supervised learning, unsupervised learning, and common algorithms.",
        resources: ["Algorithm Guide", "Math Review", "Code Examples"],
      },
      {
        id: "3-2",
        title: "Python for ML",
        duration: 55,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Learn NumPy, Pandas, and scikit-learn for data science.",
        resources: ["Libraries Docs", "Cheat Sheets", "Notebooks"],
      },
      {
        id: "3-3",
        title: "Building Your First Model",
        duration: 50,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Build, train, and evaluate a machine learning model.",
        resources: ["Project Files", "Datasets", "Evaluation Metrics"],
      },
    ],
  },
  {
    id: "4",
    title: "Startup Essentials: Launch Your Business",
    description: "Everything you need to know to launch a successful startup. From idea to execution.",
    instructor: "David Park",
    instructorId: "4",
    price: 99.99,
    rating: 4.7,
    students: 2200,
    duration: 26,
    level: "Intermediate",
    category: "Business",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    lessons: [
      {
        id: "4-1",
        title: "Idea Validation",
        duration: 40,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Validate your startup idea before investing time and money.",
        resources: ["Validation Checklist", "Interview Templates", "Tools"],
      },
      {
        id: "4-2",
        title: "Business Planning",
        duration: 50,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Create a solid business plan and financial projections.",
        resources: ["Business Plan Template", "Examples", "Financial Models"],
      },
      {
        id: "4-3",
        title: "Fundraising",
        duration: 45,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Learn how to pitch to investors and raise capital.",
        resources: ["Pitch Deck Template", "Investor List", "Legal Resources"],
      },
    ],
  },
  {
    id: "5",
    title: "Advanced TypeScript Patterns",
    description: "Master TypeScript with advanced types, generics, and real-world patterns.",
    instructor: "Sarah Chen",
    instructorId: "1",
    price: 74.99,
    rating: 4.9,
    students: 2900,
    duration: 22,
    level: "Advanced",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    lessons: [
      {
        id: "5-1",
        title: "Type System Mastery",
        duration: 55,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Deep dive into TypeScript's type system and advanced types.",
        resources: ["Type Docs", "Examples", "Exercises"],
      },
      {
        id: "5-2",
        title: "Generics & Inference",
        duration: 50,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Learn generics, type inference, and conditional types.",
        resources: ["Generics Guide", "Patterns", "Challenges"],
      },
    ],
  },
  {
    id: "6",
    title: "Design Systems & Component Libraries",
    description: "Build scalable design systems and reusable component libraries.",
    instructor: "Marcus Johnson",
    instructorId: "2",
    price: 84.99,
    rating: 4.8,
    students: 1800,
    duration: 18,
    level: "Advanced",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    lessons: [
      {
        id: "6-1",
        title: "Design System Principles",
        duration: 45,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Understand the foundations of a scalable design system.",
        resources: ["System Audit Template", "Examples", "Tools"],
      },
      {
        id: "6-2",
        title: "Component Architecture",
        duration: 50,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Design components for scalability and maintainability.",
        resources: ["Component Docs", "Patterns", "Library Examples"],
      },
    ],
  },
  {
    id: "7",
    title: "AWS Cloud Architecture Mastery",
    description: "Learn to design and deploy scalable applications on AWS. Perfect for DevOps engineers.",
    instructor: "Lisa Wong",
    instructorId: "5",
    price: 94.99,
    rating: 4.9,
    students: 3500,
    duration: 30,
    level: "Advanced",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    lessons: [
      {
        id: "7-1",
        title: "AWS Fundamentals",
        duration: 50,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Get started with EC2, S3, and RDS on AWS.",
        resources: ["AWS Docs", "Architecture Diagrams", "Best Practices"],
      },
      {
        id: "7-2",
        title: "Containerization with Docker",
        duration: 55,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Master Docker containers and containerization strategies.",
        resources: ["Dockerfile Examples", "Docker Compose", "Registry Guide"],
      },
    ],
  },
  {
    id: "8",
    title: "iOS Development with Swift",
    description: "Build professional iOS applications. From basics to App Store deployment.",
    instructor: "James Mitchell",
    instructorId: "6",
    price: 84.99,
    rating: 4.8,
    students: 2600,
    duration: 25,
    level: "Intermediate",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop",
    lessons: [
      {
        id: "8-1",
        title: "Swift Basics",
        duration: 45,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Learn Swift fundamentals and iOS development basics.",
        resources: ["Swift Playground", "Documentation", "Xcode Guide"],
      },
    ],
  },
  {
    id: "9",
    title: "Digital Marketing Masterclass",
    description: "Complete guide to digital marketing strategies, SEO, and social media growth.",
    instructor: "Priya Kapoor",
    instructorId: "7",
    price: 69.99,
    rating: 4.7,
    students: 2900,
    duration: 20,
    level: "Beginner",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    lessons: [
      {
        id: "9-1",
        title: "Marketing Fundamentals",
        duration: 40,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Understand marketing principles and strategies.",
        resources: ["Strategy Templates", "Tools", "Case Studies"],
      },
    ],
  },
  {
    id: "10",
    title: "Brand Identity & Visual Design",
    description: "Create compelling brand identities and visual communication systems.",
    instructor: "Tom Anderson",
    instructorId: "8",
    price: 79.99,
    rating: 4.9,
    students: 1800,
    duration: 16,
    level: "Intermediate",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    lessons: [
      {
        id: "10-1",
        title: "Brand Strategy",
        duration: 45,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Develop a powerful brand strategy.",
        resources: ["Brand Audit Template", "Strategy Guide", "Examples"],
      },
    ],
  },
  {
    id: "11",
    title: "Node.js & Express API Development",
    description: "Build scalable REST APIs and backend services with Node.js and Express.",
    instructor: "Sarah Chen",
    instructorId: "1",
    price: 79.99,
    rating: 4.9,
    students: 3800,
    duration: 22,
    level: "Intermediate",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    lessons: [
      {
        id: "11-1",
        title: "Node.js Fundamentals",
        duration: 45,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Learn Node.js and its event-driven architecture.",
        resources: ["Node Docs", "Examples", "Best Practices"],
      },
    ],
  },
  {
    id: "12",
    title: "Deep Learning with TensorFlow",
    description: "Advanced deep learning concepts and neural networks implementation.",
    instructor: "Elena Rodriguez",
    instructorId: "3",
    price: 109.99,
    rating: 4.9,
    students: 2200,
    duration: 32,
    level: "Advanced",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    lessons: [
      {
        id: "12-1",
        title: "Neural Networks",
        duration: 60,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-library/sample/big_buck_bunny.mp4",
        description: "Understanding neural networks and deep learning.",
        resources: ["TensorFlow Guide", "Papers", "Code Examples"],
      },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "Jennifer Lopez",
    role: "Senior Developer",
    content: "This React course completely transformed my career. The teaching style is crystal clear, and I landed a dream job within 3 months!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 5,
    course: "Modern React: From Basics to Advanced",
  },
  {
    id: "2",
    author: "Michael Chen",
    role: "Startup Founder",
    content: "David's startup course gave me the confidence and knowledge to launch my own business. Highly recommended for aspiring entrepreneurs!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 5,
    course: "Startup Essentials: Launch Your Business",
  },
  {
    id: "3",
    author: "Sarah Anderson",
    role: "Product Designer",
    content: "The UI/UX course was eye-opening. I've applied these principles to all my projects and the results are amazing.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 5,
    course: "UI/UX Design Fundamentals",
  },
  {
    id: "4",
    author: "Robert Kim",
    role: "Data Scientist",
    content: "Elena's ML course is the best I've taken. The practical approach and real-world examples made learning so effective.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    rating: 5,
    course: "Machine Learning for Beginners",
  },
  {
    id: "5",
    author: "Emma Thompson",
    role: "DevOps Engineer",
    content: "Lisa's AWS course helped me get certified. The depth of knowledge and teaching quality is unmatched.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 5,
    course: "AWS Cloud Architecture Mastery",
  },
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "SkillForge React Developer Certification",
    issuer: "SkillForge Academy",
    description: "Prove your expertise in React development with this recognized certification.",
    skills: ["React", "Hooks", "State Management", "Performance Optimization"],
    duration: "8 weeks",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    name: "AWS Certified Solutions Architect",
    issuer: "SkillForge & AWS",
    description: "Industry-recognized certification for AWS cloud architects.",
    skills: ["AWS", "Cloud Architecture", "Security", "Scalability"],
    duration: "12 weeks",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    name: "UX Design Professional Certification",
    issuer: "SkillForge Academy",
    description: "Master user experience design principles and methodologies.",
    skills: ["UX Research", "Wireframing", "Prototyping", "Figma"],
    duration: "10 weeks",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
  },
];

export const learningPaths: LearningPath[] = [
  {
    id: "1",
    title: "Full Stack Web Developer",
    description: "Master frontend and backend development. Build complete web applications from scratch.",
    courses: ["1", "11", "5"],
    duration: 68,
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    title: "Cloud & DevOps Engineer",
    description: "Learn cloud architecture, containerization, and modern DevOps practices.",
    courses: ["7", "11"],
    duration: 52,
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    title: "AI & Machine Learning Specialist",
    description: "From ML basics to deep learning. Build intelligent applications.",
    courses: ["3", "12"],
    duration: 60,
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    title: "Digital Designer",
    description: "Learn design fundamentals, systems, and branding.",
    courses: ["2", "6", "10"],
    duration: 54,
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development: AI-Powered Code Generation",
    excerpt: "Explore how AI is transforming web development and what it means for developers.",
    content: "AI-powered tools are revolutionizing how we write code. From code generation to debugging, these tools are becoming essential for modern developers...",
    author: "Sarah Chen",
    date: "2024-03-15",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop",
    readTime: 5,
  },
  {
    id: "2",
    title: "Why TypeScript is Essential for Large Projects",
    excerpt: "Understanding the benefits of static typing in JavaScript projects.",
    content: "TypeScript adds a layer of type safety to JavaScript that catches errors before they reach production...",
    author: "Sarah Chen",
    date: "2024-03-12",
    category: "Programming",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    readTime: 7,
  },
  {
    id: "3",
    title: "Design Trends 2024: Minimalism Meets Functionality",
    excerpt: "Analyzing the latest design trends and their impact on user experience.",
    content: "2024 is bringing a refreshing balance between minimalist design principles and rich functionality...",
    author: "Marcus Johnson",
    date: "2024-03-10",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    readTime: 6,
  },
  {
    id: "4",
    title: "Getting Started with Cloud Architecture",
    excerpt: "A beginner's guide to understanding cloud infrastructure.",
    content: "Cloud architecture might seem complex, but understanding the basics is easier than you think...",
    author: "Lisa Wong",
    date: "2024-03-08",
    category: "Cloud Computing",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    readTime: 8,
  },
];

export const webinars: Webinar[] = [
  {
    id: "1",
    title: "React 19: What's New and How to Upgrade",
    description: "Join us as we explore the latest features in React 19 and migration strategies.",
    speaker: "Sarah Chen",
    date: "2024-03-25",
    time: "2:00 PM EST",
    duration: 60,
    image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop",
    attendees: 2841,
    link: "https://webinar.skillforge.com/react19",
  },
  {
    id: "2",
    title: "Scaling Startups: From Idea to Series A",
    description: "Learn how to scale your startup from product-market fit to Series A funding.",
    speaker: "David Park",
    date: "2024-03-28",
    time: "1:00 PM EST",
    duration: 90,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    attendees: 1523,
    link: "https://webinar.skillforge.com/startup-scaling",
  },
  {
    id: "3",
    title: "AI/ML in Production: Challenges and Solutions",
    description: "Discover best practices for deploying machine learning models in production.",
    speaker: "Elena Rodriguez",
    date: "2024-04-02",
    time: "3:00 PM EST",
    duration: 75,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    attendees: 1842,
    link: "https://webinar.skillforge.com/ml-production",
  },
];

export const successStories: SuccessStory[] = [
  {
    id: "1",
    name: "Alex Rivera",
    role: "Frontend Developer → Senior Developer",
    company: "Tech Startup",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
    story: "After completing the React course, I secured a senior developer position within 6 months. The knowledge I gained was directly applicable to real-world projects.",
    results: ["Salary increased by 45%", "Led 3 major projects", "Promoted to Tech Lead"],
    coursesTaken: ["1", "5", "11"],
  },
  {
    id: "2",
    name: "Maria Santos",
    role: "Career Changer → Product Designer",
    company: "Design Agency",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    story: "I came from a non-tech background. The design fundamentals course gave me the confidence to transition careers. Now I lead design projects at a top agency.",
    results: ["Changed careers successfully", "Building design systems", "Mentoring junior designers"],
    coursesTaken: ["2", "6", "10"],
  },
  {
    id: "3",
    name: "James Wong",
    role: "Employee → Founder",
    company: "TechVenture Inc",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    story: "The startup course provided the roadmap I needed. I validated my idea, secured funding, and launched my company. Now we're growing 20% month-over-month.",
    results: ["Raised $500K seed funding", "Team of 5", "20% MoM growth"],
    coursesTaken: ["4"],
  },
  {
    id: "4",
    name: "Priya Desai",
    role: "Python Developer → ML Engineer",
    company: "AI Company",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    story: "Transitioning to ML seemed daunting, but Elena's course made it accessible. Now I'm building ML models that power our product recommendations.",
    results: ["ML model accuracy 94%", "2 patents filed", "Speaking at conferences"],
    coursesTaken: ["3", "12"],
  },
];

export const currentUser: User = {
  id: "user-1",
  name: "Alex Thompson",
  email: "alex@example.com",
  enrolledCourses: ["1", "3"],
  progress: {
    "1": 65,
    "3": 40,
  },
};

export const stats = {
  totalStudents: 125000,
  totalCourses: 12,
  totalInstructors: 8,
  successRate: 92,
  averageRating: 4.8,
};
