import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiLinux,
  SiDocker,
  SiAmazonaws,
  SiJenkins,
  SiGithub,
  SiTerraform,
  SiGithubactions,
  SiWireshark,
  SiCloudflare
} from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* VS Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: "12px", marginTop: "5px" }}>VS Code</p>
      </Col>

      {/* Linux */}
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p style={{ fontSize: "12px", marginTop: "5px" }}>Linux</p>
      </Col>

      {/* Networking */}
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired />
        <p style={{ fontSize: "12px", marginTop: "5px" }}>Networking</p>
      </Col>

      {/* Wireshark */}
      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark />
        <p style={{ fontSize: "12px", marginTop: "5px" }}>Wireshark</p>
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

      {/* Jenkins */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <p style={{ fontSize: "12px", marginTop: "5px" }}>Jenkins</p>
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

      {/* Terraform */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
        <p style={{ fontSize: "12px", marginTop: "5px" }}>Terraform</p>
      </Col>

      {/* Cloudflare */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCloudflare />
        <p style={{ fontSize: "12px", marginTop: "5px" }}>Cloudflare</p>
      </Col>
    </Row>
  );
};

export default Toolstack;
