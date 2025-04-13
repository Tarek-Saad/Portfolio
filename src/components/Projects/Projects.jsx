import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "aos/dist/aos.css";
import AOS from "aos";

// Import your project images here
import chatMainImage from "../../Assets/Projects/chat.png";
import doctorMainImage from "../../Assets/projectsImages/doctor/1.PNG";
import lmsMainImage from "../../Assets/projectsImages/lms/1.PNG";
import ngrokMainImage from "../../Assets/projectsImages/lms/1.PNG";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const projects = [

    {
      id: 1,
      imgPath: chatMainImage,
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
      imgPath: chatMainImage,
      title: "ChatApp - Real-Time Chat Application",
      description:
        "A real-time chat application built with the MERN stack and WebSockets, enabling instant messaging, authentication, and group chat features.",
      ghLink: "https://github.com/Tarek-Saad/Snappy-Chat",
      demoLink: "https://chat-app.vercel.app/",
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
      technologies: ["WebSockets", "JWT Authentication", "Redux", "Cloudinary"],
      tools: ["VS Code", "Postman", "GitHub", "Render", "Vercel", "MongoDB Atlas"],
      keyFeatures: [
        "Real-Time Messaging: Users can send and receive messages instantly using WebSockets.",
        "User Authentication: Secure login and signup with JWT authentication.",
        "Group Chat Support: Users can create, join, and chat in group conversations.",
        "Online/Offline Status: Displays user status in real-time.",
        "Image & File Sharing: Users can share images and files in chat.",
        "Message Seen Status: Shows read receipts when messages are viewed.",
        "Dark & Light Mode: UI adapts to user preferences.",
        "Notifications: Real-time notifications for new messages.",
        "Profile Customization: Users can set avatars and update profile details.",
        "Responsive UI: Works on both mobile and desktop devices.",
      ],
      date: "March 27, 2024",
      views: 0,
    },
    {
      id: 3,
      imgPath: doctorMainImage,
      title: "Doctor Appointment - Online Consultation System",
      description:
        "A full-stack platform for online doctor consultation, allowing doctors to register, patients to book appointments, and admins to manage the system.",
      ghLink: "https://github.com/Tarek-Saad/Doctor-Appointment",
      demoLink: "https://doctor-appointment.vercel.app/", // تحقق من الرابط
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
      technologies: ["JWT Authentication", "WebSockets", "Redux", "Bootstrap", "Cloudinary"],
      tools: ["VS Code", "Postman", "GitHub", "Render", "Vercel", "MongoDB Atlas"],
      keyFeatures: [
        "Doctor Registration & Verification by Admins.",
        "Patient Appointment Booking System.",
        "Real-Time Notifications for Doctors.",
        "Admin Dashboard for Doctor & Appointment Management.",
        "Doctor Task Tracking & Progress Monitoring.",
        "JWT Authentication for Security.",
        "Time-Slot Based Appointment Scheduling.",
        "Fully Responsive UI for Desktop & Mobile.",
      ],
      date: "March 27, 2024",
      views: 0,
    },
    {
      id: 4,
      imgPath: lmsMainImage,
      title: "LMS - Learning Management System",
      description:
        "A comprehensive LMS that facilitates online learning with course management, student progress tracking, and real-time interaction.",
      ghLink: "https://github.com/Tarek-Saad/LMS",
      demoLink: "https://lms-platform.vercel.app/", // تحقق من الرابط الفعلي
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
      technologies: [
        "JWT Authentication", "WebSockets", "Redux", "Material UI", 
        "Cloudinary", "GraphQL", "Firebase Notifications"
      ],
      tools: ["VS Code", "Postman", "GitHub", "Render", "Vercel", "MongoDB Atlas"],
      keyFeatures: [
        "Course Management & Creation.",
        "Student Enrollment & Progress Tracking.",
        "Real-Time Chat between Students & Teachers.",
        "Assignments & Exams System.",
        "Secure Authentication using JWT.",
        "Push Notifications for Important Updates.",
        "Mobile-Friendly & Responsive UI.",
      ],
      date: "March 27, 2024",
      views: 0,
    },
    {
      id: 5,
      imgPath: ngrokMainImage, // صورة الغلاف الرئيسية للمشروع
      title: "ngrok in Action - API Tunneling for Developers",
      description:
        "A GitHub repository demonstrating how to use ngrok for exposing local servers to the internet. This project simplifies API testing and integration for developers.",
      ghLink: "https://github.com/Tarek-Saad/ngrok-api-tunnel",
      demoLink: "", // لا يوجد رابط ديمو لأنه مشروع توثيقي
      skills: ["ngrok", "Networking", "REST APIs", "Backend Integration"],
      technologies: ["Tunneling", "API Testing", "Remote Access"],
      tools: ["ngrok", "Postman", "GitHub", "VS Code"],
      keyFeatures: [
        "Secure API Tunneling: Expose local servers to the internet with ease.",
        "Simplified API Testing: Frontend developers can test APIs without running backend locally.",
        "Improved Collaboration: Enables seamless API access for mobile and web developers.",
        "No Heavy Setup: Reduces hardware dependency for development.",
        "Step-by-Step Guide: Includes detailed usage instructions.",
      ],
      date: "March 29, 2025",
      views: 0,
    }
    
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col
              md={4}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              key={project.id}
            >
              <ProjectCard
                id={project.id}
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
