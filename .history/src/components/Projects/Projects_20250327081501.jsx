import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "aos/dist/aos.css";
import AOS from "aos";

// Import your project images here
import blog1 from "../../Assets/Projects/blog.png";

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
      title: "ChatApp - Real-Time Chat Application",
      description:
        "A real-time chat application built with the MERN stack and WebSockets, enabling instant messaging, authentication, and group chat features.",
      ghLink: "https://github.com/YourUsername/chat-app",
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
