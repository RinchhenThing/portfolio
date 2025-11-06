import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiDocker,
  SiAmazonaws,
  SiGithub,
  SiGithubactions,
  SiJenkins,
  SiTerraform,
  SiLinux,
  SiCloudflare,
  SiKubernetes
} from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { DiGit } from "react-icons/di";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Networking */}
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired />
        <p style={{ fontSize: "12px", marginTop: "5px" }}>Networking</p>
      </Col>

      {/* Docker */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p style={{ fontSize: "12px", marginTop: "5px" }}>Docker</p>
      </Col>

      {/* AWS */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p style={{ fontSize: "12px", marginTop: "5px" }}>AWS</p>
      </Col>

      {/* Containers (using Kubernetes icon as representation) */}
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
        <p style={{ fontSize: "12px", marginTop: "5px" }}>Containers</p>
      </Col>

      {/* GitHub */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={{ fontSize: "12px", marginTop: "5px" }}>GitHub</p>
      </Col>

      {/* GitHub Actions */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
        <p style={{ fontSize: "12px", marginTop: "5px" }}>GitHub Actions</p>
      </Col>

      {/* Jenkins */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <p style={{ fontSize: "12px", marginTop: "5px" }}>Jenkins</p>
      </Col>

      {/* Terraform */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
        <p style={{ fontSize: "12px", marginTop: "5px" }}>Terraform</p>
      </Col>

      {/* EC2 (represented by AWS + cloud icon) */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p style={{ fontSize: "12px", marginTop: "5px" }}>EC2</p>
      </Col>

      {/* ECS (represented by Cloudflare or container icon) */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCloudflare />
        <p style={{ fontSize: "12px", marginTop: "5px" }}>ECS</p>
      </Col>
    </Row>
  );
};

export default Techstack;
