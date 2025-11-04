import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../components/Particle";
import pdf from "../assets/Rinchhen.pdf"; // Your local resume

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// PDF.js worker setup
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />

      {/* Top Download Button */}
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download Resume
        </Button>
      </Row>

      {/* Resume Preview */}
      <Row className="resume">
        <Document file={pdf} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </Row>

      {/* Bottom Download Button */}
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download Resume
        </Button>
      </Row>
    </Container>
  );
};

export default Resume;
