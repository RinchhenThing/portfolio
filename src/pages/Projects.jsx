import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center mb-3">
          My <strong className="yellow">GitHub Projects</strong>
        </h1>
        <p style={{ color: "white" }} className="text-center mb-5">
          These projects automatically fetch a short preview from their README files.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="mangoMan"
              ghLink="https://github.com/RinchhenThing/mangoMan"
              readmeUrl="https://raw.githubusercontent.com/RinchhenThing/mangoMan/main/README.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="CI Pipeline Practice"
              ghLink="https://github.com/RinchhenThing/ci-pipeline-practice"
              readmeUrl="https://raw.githubusercontent.com/RinchhenThing/ci-pipeline-practice/main/README.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Obstacle Avoiding Car"
              ghLink="https://github.com/RinchhenThing/Obstacle-Avoiding-Car"
              readmeUrl="https://raw.githubusercontent.com/RinchhenThing/Obstacle-Avoiding-Car/main/README.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Mini CI"
              ghLink="https://github.com/RinchhenThing/mini_ci"
              readmeUrl="https://raw.githubusercontent.com/RinchhenThing/mini_ci/main/README.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Docker To-Do"
              ghLink="https://github.com/RinchhenThing/Docker_todo"
              readmeUrl="https://raw.githubusercontent.com/RinchhenThing/Docker_todo/main/README.md"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Flask Prediction"
              ghLink="https://github.com/RinchhenThing/flask-prediction"
              readmeUrl="https://raw.githubusercontent.com/RinchhenThing/flask-prediction/main/README.md"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
