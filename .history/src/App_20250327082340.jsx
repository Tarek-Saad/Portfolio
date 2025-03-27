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
      id: 2,
      imgPath: doctorMainImage, // صورة الغلاف الرئيسية للمشروع
      imagePaths: [doctor1, doctor2, doctor3, doctor4, doctor5], // صور إضافية
      title: "Doctor Appointment - Online Consultation System",
      description:
        "Doctor Appointment is a full-stack medical consultation platform where patients can book appointments with doctors, and doctors can apply to be part of the system. Admins manage approvals and track doctors' progress.",
      ghLink: "https://github.com/Tarek-Saad/Doctor-Appointment",
      demoLink: "https://doctor-appointment.vercel.app/", // تأكد من وجود رابط فعلي
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
      technologies: ["JWT Authentication", "WebSockets", "Redux", "Bootstrap", "Cloudinary"],
      tools: ["VS Code", "Postman", "GitHub", "Render", "Vercel", "MongoDB Atlas"],
      keyFeatures: [
        "🔹 **Doctor Registration & Verification:** Doctors can apply to join the platform and get verified by admins.",
        "🔹 **Patient Appointment Booking:** Patients can browse verified doctors and book consultation appointments.",
        "🔹 **Real-Time Notifications:** Doctors receive notifications when an appointment is scheduled via WebSockets.",
        "🔹 **Admin Dashboard:** Admins can approve doctors, track their progress, and manage the system.",
        "🔹 **Doctor Task Management:** Doctors receive assigned tasks and update their progress in real-time.",
        "🔹 **Secure Authentication:** JWT-based authentication for doctors, patients, and admins.",
        "🔹 **Appointment Scheduling:** Patients can select specific time slots for their consultation.",
        "🔹 **Responsive UI:** Optimized for both desktop and mobile devices.",
      ],
      date: "March 27, 2024",
    }
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
