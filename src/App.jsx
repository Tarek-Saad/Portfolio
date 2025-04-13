// App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificate/Certificates";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact"; // Import Contact component
import Resume from "./components/Resume/ResumeNew";
import ProjectDetail from "./components/Projects/ProjectDetail";
import Preloader from "./components/Pre";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import chatMainImage from "./Assets/Projects/chat.png";
import chat1 from "./Assets/projectsImages/chat/1.PNG";
import chat2 from "./Assets/projectsImages/chat/2.PNG";
import chat3 from "./Assets/projectsImages/chat/3.PNG";
import chat4 from "./Assets/projectsImages/chat/4.PNG";
import chat5 from "./Assets/projectsImages/chat/5.PNG";
import chat6 from "./Assets/projectsImages/chat/6.PNG";
import chat7 from "./Assets/projectsImages/chat/7.PNG";
import chat8 from "./Assets/projectsImages/chat/8.PNG";


import doctorMainImage from "./Assets/projectsImages/doctor/1.PNG";
import doctor1 from "./Assets/projectsImages/doctor/1.PNG";
import doctor2 from "./Assets/projectsImages/doctor/2.PNG";
import doctor3 from "./Assets/projectsImages/doctor/3.PNG";
import doctor4 from "./Assets/projectsImages/doctor/4.PNG";
import doctor5 from "./Assets/projectsImages/doctor/5.PNG";
import doctor6 from "./Assets/projectsImages/doctor/6.PNG";
import doctor7 from "./Assets/projectsImages/doctor/7.PNG";
import doctor8 from "./Assets/projectsImages/doctor/8.PNG";
import doctor9 from "./Assets/projectsImages/doctor/9.PNG";
import doctor10 from "./Assets/projectsImages/doctor/10.PNG";
import doctor11 from "./Assets/projectsImages/doctor/11.PNG";
import doctor12 from "./Assets/projectsImages/doctor/12.PNG";
import doctor13 from "./Assets/projectsImages/doctor/13.PNG";


import lmsMainImage from "./Assets/Projects/courses.png";
import lms1 from "./Assets/projectsImages/lms/1.PNG";
import lms2 from "./Assets/projectsImages/lms/2.PNG";
import lms3 from "./Assets/projectsImages/lms/3.PNG";
import lms4 from "./Assets/projectsImages/lms/4.PNG";
import lms5 from "./Assets/projectsImages/lms/5.PNG";
import lms6 from "./Assets/projectsImages/lms/6.PNG";
import lms7 from "./Assets/projectsImages/lms/7.PNG";
import lms8 from "./Assets/projectsImages/lms/8.PNG";
import lms9 from "./Assets/projectsImages/lms/9.PNG";
import lms10 from "./Assets/projectsImages/lms/10.PNG";
import lms11 from "./Assets/projectsImages/lms/11.PNG";
import lms12 from "./Assets/projectsImages/lms/12.PNG";

import ngrokMainImage from "./Assets/Projects/courses.png";

import codengoMainImage from "./Assets/Projects/codengo.png";

import codengo1 from "./Assets/projectsImages/codengo/1.PNG";
import codengo2 from "./Assets/projectsImages/codengo/2.PNG";
import codengo3 from "./Assets/projectsImages/codengo/3.PNG";
import codengo4 from "./Assets/projectsImages/codengo/4.PNG";
import codengo5 from "./Assets/projectsImages/codengo/5.PNG";
import codengo6 from "./Assets/projectsImages/codengo/6.PNG";
import codengo7 from "./Assets/projectsImages/codengo/7.PNG";
import codengo8 from "./Assets/projectsImages/codengo/8.PNG";
import codengo9 from "./Assets/projectsImages/codengo/9.PNG";
import codengo10 from "./Assets/projectsImages/codengo/10.PNG";
import codengo11 from "./Assets/projectsImages/codengo/11.PNG";
import codengo12 from "./Assets/projectsImages/codengo/12.PNG";
import codengo13 from "./Assets/projectsImages/codengo/13.PNG";




function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Updated projects array with tools
  const projects = [
    {
      id: 1,
      imgPath: codengoMainImage, // صورة الغلاف الرئيسية للمشروع
      imagePaths: [codengo1, codengo2, codengo3, codengo4, codengo5 , codengo6 , codengo7 , codengo8 , codengo9 , codengo10 , codengo11 , codengo12 , codengo13], // صور إضافية للمشروع
      title: "Codengo - learn programming in fun way",
      description:
        "A platform for learning programming in a fun and interactive way. Users can practice coding and receive instant feedback. ",
      ghLink: "https://github.com/Tarek-Saad/codengo",
      demoLink: "https://codengo.vercel.app/",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Clerk",
        "drizzle",
        "Vercel",
        "GitHub Actions",
        "React Hooks",
        "Dynamic Imports",
        "State Management",
        "Gamification",
        "Audio Feedback",
        "Project-Based Learning",
        "API Integration",
        "Real-Time Data",
        "Responsive Design",
        "Local Storage"
      ],
      technologies: ["WebSockets", "Clerk", "drizzle", "Vercel", "GitHub Actions"],
      tools: ["VS Code", "GitHub", "Vercel"],
      keyFeatures: [
        "🔹 **Diverse Learning Challenges**: Supports various challenge types including coding exercises, multiple choice, text, image, video, and more.",
        "🔹 **Project-Based Learning**: Offers project creation, completion, and management, allowing users to work on real-world coding tasks.",
        "🔹 **Gamification**: Includes a heart system for limited attempts, rewards points and XP for completing challenges, and provides visual and auditory feedback for correct/incorrect answers.",
        "🔹 **Interactive Coding Environment**: Features built-in code editors with syntax highlighting, real-time code execution for languages like JavaScript and Python, and project-based file management.",
        "🔹 **Curriculum Organization**: Organizes courses in a hierarchical structure (Courses → Units → Lessons → Challenges), with visual progress tracking and a practice mode for revisiting completed lessons.",
        "🔹 **Responsive Design**: Adapts to both mobile and desktop devices with clean, educational-focused interfaces.",
        "🔹 **Subscription and User Management**: Offers free and premium subscription models with additional features for premium users, and persistent user progress that allows users to pick up where they left off.",
        "🔹 **Technical Features**: Built using **Next.js** and **React**, supporting server-side actions, dynamic content, efficient client-side state management, and integration with services like **Vercel** for deployment."
      ],
      date: "April 13, 2024",
      views: 37,
    },
    {
      id: 2,
      imgPath: chatMainImage, // صورة الغلاف الرئيسية للمشروع
      imagePaths: [chat1, chat2, chat3, chat4, chat5 , chat6 , chat7 , chat8], // صور إضافية للمشروع
      title: "ChatApp - Real-Time Chat Application",
      description:
        "A real-time chat application built with the MERN stack and WebSockets, providing instant messaging, authentication, and group chat features.",
      ghLink: "https://github.com/Tarek-Saad/Snappy-Chat",
      demoLink: "https://chat-app.vercel.app/",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
      technologies: ["WebSockets", "JWT Authentication", "Redux", "Cloudinary"],
      tools: ["VS Code", "Postman", "GitHub", "Render", "Vercel", "MongoDB Atlas"],
      keyFeatures: [
        "🔹 Real-Time Messaging: Users can send and receive messages instantly using WebSockets.",
        "🔹 User Authentication: Secure login and signup with JWT authentication.",
        "🔹 Group Chat Support: Users can create, join, and chat in group conversations.",
        "🔹 Online/Offline Status: Displays user status in real-time.",
        "🔹 Image & File Sharing: Users can share images and files in chat.",
        "🔹 Message Seen Status: Shows read receipts when messages are viewed.",
        "🔹 Dark & Light Mode: UI adapts to user preferences.",
        "🔹 Notifications: Real-time notifications for new messages.",
        "🔹 Profile Customization: Users can set avatars and update profile details.",
        "🔹 Responsive UI: Works on both mobile and desktop devices.",
      ],
      date: "March 27, 2024",
    },
    {
      id: 3,
      imgPath: doctorMainImage, // صورة الغلاف الرئيسية للمشروع
      imagePaths: [
        doctor1, doctor2, doctor3, doctor4, doctor5, doctor6, doctor7, doctor8, 
        doctor9, doctor10, doctor11, doctor12, doctor13
      ],
      title: "Doctor Appointment - Online Consultation System",
      description:
        "Doctor Appointment is a full-stack medical consultation platform where patients can book appointments with doctors, and doctors can apply to be part of the system. Admins manage approvals and track doctors' progress.",
      ghLink: "https://github.com/Tarek-Saad/Doctor-Appointment",
      demoLink: "https://doctor-appointment.vercel.app/", // تأكد من وجود رابط فعلي
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
      technologies: ["JWT Authentication", "WebSockets", "Redux", "Bootstrap", "Cloudinary"],
      tools: ["VS Code", "Postman", "GitHub", "Render", "Vercel", "MongoDB Atlas"],
      keyFeatures: [
        "🔹 Doctor Registration & Verification: Doctors can apply to join the platform and get verified by admins.",
        "🔹 Patient Appointment Booking: Patients can browse verified doctors and book consultation appointments.",
        "🔹 Real-Time Notifications: Doctors receive notifications when an appointment is scheduled via WebSockets.",
        "🔹 Admin Dashboard: Admins can approve doctors, track their progress, and manage the system.",
        "🔹 Doctor Task Management: Doctors receive assigned tasks and update their progress in real-time.",
        "🔹 Secure Authentication: JWT-based authentication for doctors, patients, and admins.",
        "🔹 Appointment Scheduling: Patients can select specific time slots for their consultation.",
        "🔹 Responsive UI: Optimized for both desktop and mobile devices.",
      ],
      date: "March 27, 2024",
    },
    {
      id: 4,
      imgPath: lmsMainImage, // صورة الغلاف الرئيسية للمشروع
      imagePaths: [
        lms1, lms2, lms3, lms4, lms5, lms6, lms7, lms8, 
        lms9, lms10, lms11, lms12
      ], // صور إضافية (13 صورة)
      title: "LMS - Learning Management System",
      description:
        "LMS is a full-featured learning management system that enables students and teachers to interact through an online educational platform. It supports course creation, progress tracking, and real-time communication.",
      ghLink: "https://github.com/Tarek-Saad/LMS",
      demoLink: "https://lms-platform.vercel.app/", // تأكد من وجود رابط فعلي
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
      technologies: [
        "JWT Authentication", "WebSockets", "Redux", "Material UI", 
        "Cloudinary", "GraphQL", "Firebase Notifications"
      ],
      tools: ["VS Code", "Postman", "GitHub", "Render", "Vercel", "MongoDB Atlas"],
      keyFeatures: [
        "📚 Course Management: Teachers can create, update, and manage courses with interactive content.",
        "👨‍🏫 Student Enrollment: Students can enroll in courses and track their progress.",
        "💬 Real-Time Messaging: Chat system between students and teachers using WebSockets.",
        "📝 Assignments & Exams: Students can submit assignments and take online quizzes.",
        "📊 Progress Tracking: Students can monitor their learning progress with analytics dashboards.",
        "🔐 Secure Authentication: JWT-based authentication for students, teachers, and admins.",
        "🔔 Push Notifications: Real-time alerts for assignments, new courses, and system updates.",
        "📱 Mobile-Friendly: Responsive design for seamless usage on all devices.",
      ],
      date: "March 27, 2024",
    },
    {
      id: 5,
      imgPath: ngrokMainImage, // صورة الغلاف الرئيسية للمشروع
      imagePaths: [ngrokMainImage], // صور إضافية للمشروع
      title: "ngrok in Action - API Tunneling for Developers",
      description:
        "A GitHub repository demonstrating how to use ngrok for exposing local servers to the internet. This project simplifies API testing and integration for developers.",
      ghLink: "https://github.com/Tarek-Saad/ngrok-api-tunnel",
      demoLink: "", // مفيش رابط ديمو لأنه مشروع توثيقي
      skills: ["ngrok", "Networking", "REST APIs", "Backend Integration"],
      technologies: ["Tunneling", "API Testing", "Remote Access"],
      tools: ["ngrok", "Postman", "GitHub", "VS Code"],
      keyFeatures: [
        "🔹 Secure API Tunneling: Expose local servers to the internet with ease.",
        "🔹 Simplified API Testing: Frontend developers can test APIs without running backend locally.",
        "🔹 Improved Collaboration: Enables seamless API access for mobile and web developers.",
        "🔹 No Heavy Setup: Reduces hardware dependency for development.",
        "🔹 Step-by-Step Guide: Includes detailed usage instructions.",
      ],
      date: "March 29, 2025",
    },
  ];

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route
            path="/project/:projectId"
            element={<ProjectDetail projects={projects} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />{" "}
          {/* Add Contact Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
