import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I’m <span className="yellow">Rinchhen Thing</span>, a passionate student at{" "}
              <span className="yellow">Islington College, Nepal</span>, pursuing a degree in{" "}
              <b className="yellow">Computer Networking and IT Security.</b>
              <br />
              <br />
              I am an aspiring <b className="yellow">Network Engineer</b> currently pursuing my{" "}
              <b className="yellow">CCNA certification</b> to strengthen my skills in
              networking technologies and infrastructure.
              <br />
              <br />
              Alongside my studies, I’m working as a{" "}
              <b className="yellow">DevOps Engineer</b> at{" "}
              <b className="yellow">Brahmabytelab Pvt. Ltd.</b>, where I gain hands-on experience
              in automation, cloud deployment, and modern DevOps practices.
              <br />
              <br />
              My goal is to build a strong bridge between{" "}
              <b className="yellow">Network Engineering</b> and{" "}
              <b className="yellow">DevOps</b>, integrating security, scalability, and performance
              into every system I design.
              <br />
              <br />
              Beyond my core focus, I also enjoy exploring{" "}
              <b className="yellow">Web Development</b> and{" "}
              <b className="yellow">Emerging Technologies</b> such as AI and IoT.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="yellow">connect</span> with me or check out my work!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RinchhenThing"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rinchhenthing/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
