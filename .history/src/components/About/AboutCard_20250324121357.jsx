import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "start" }}>
            Hi Everyone, I am <span className="purple">Tarek Saad</span>
             <span style={{padding:"0 6px"}}s>from</span> <span className="purple"> Alexandria, Egypt.</span>
            <br /> <hr/>
            I am currently a Full Stack Developer || software developer.
            <br />
            I study in Computer Science and Artificial Intelligence
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
  <ul>
    <li className="about-activity">
      <ImPointRight /> Learning new technologies and exploring different tools
    </li>
    <li className="about-activity">
      <ImPointRight /> Extremely passionate about Automation and Artificial Intelligence
    </li>
    <li className="about-activity">
      <ImPointRight /> Enjoy explaining what I learn in a simple and engaging way
    </li>
    <li className="about-activity">
      <ImPointRight /> Leading teams, designing full design systems and architecture, and task distribution
    </li>
    <li className="about-activity">
      <ImPointRight /> Actively researching published papers on building better Learning Management Systems (LMS)
    </li>
    <li className="about-activity">
      <ImPointRight /> Creating high-quality content, video editing, and using graphic design to enhance ideas
    </li>
    <li className="about-activity">
      <ImPointRight /> Playing games, watching football for fun, and traveling to recharge and clear my mind
    </li>
  </ul>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Tarek Saad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
