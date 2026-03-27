import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaExternalLinkAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <AiFillGithub />,
      link: "https://github.com/RinchhenThing",
      color: "#333",
      desc: "Check out my repos & contributions",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/rinchhen-thing-764814311/",
      color: "#0077b5",
      desc: "Let's connect professionally",
    },
    {
      name: "X / Twitter",
      icon: <AiOutlineTwitter />,
      link: "https://x.com/RinchhenT61256",
      color: "#1DA1F2",
      desc: "Daily tech thoughts & updates",
    },
    {
      name: "Email",
      icon: <AiOutlineMail />,
      link: "mailto:thingrinchhen@gmail.com",
      color: "#D44638",
      desc: "Drop a line for collaborations",
    },
  ];

  return (
    <Container className="contact-container">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1 className="contact-heading">
            Let's Start a <strong className="yellow">Conversation</strong>
          </h1>
          <p className="contact-description">
            I’m currently open to new opportunities and interesting projects.
            Pick your favorite platform below.
          </p>
        </Col>
      </Row>

      <Row className="contact-grid justify-content-center">
        {socialLinks.map((social, index) => (
          <Col lg={3} md={6} sm={12} key={index} className="contact-card-wrapper">
            <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="contact-card-link"
            >
              <div className="contact-card">
                <div className="card-icon" style={{ color: social.color }}>
                  {social.icon}
                </div>
                <div className="card-content">
                  <h3>{social.name}</h3>
                  <p>{social.desc}</p>
                </div>
                <div className="card-arrow">
                  <FaExternalLinkAlt />
                </div>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Contact;
