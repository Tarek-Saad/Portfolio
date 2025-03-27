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
             from <span className="purple"> Alexandria, Egypt.</span>
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
              <ImPointRight /> Learning Germany
            </li>
            <li className="about-activity">
              <ImPointRight /> Browse all news in technology field
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving ICPC
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Fady Adel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
