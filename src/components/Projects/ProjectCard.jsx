import React, { useEffect, useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

const ProjectCard = ({ title, ghLink, demoLink, readmeUrl }) => {
  const [readmeSnippet, setReadmeSnippet] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(readmeUrl)
      .then((res) => res.text())
      .then((data) => {
        // Take only the first 200 characters
        const snippet = data.substring(0, 200) + " ...";
        setReadmeSnippet(snippet);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching README:", err);
        setReadmeSnippet("⚠️ Unable to load README preview.");
        setLoading(false);
      });
  }, [readmeUrl]);

  return (
    <Card className="project-card-view shadow-lg border-0 rounded-3 mb-4">
      <Card.Body>
        <Card.Title className="fw-bold text-center mb-3">{title}</Card.Title>

        {loading ? (
          <div className="text-center my-3">
            <Spinner animation="border" size="sm" /> Loading README...
          </div>
        ) : (
          <Card.Text style={{ whiteSpace: "pre-wrap", color: "white" }}>
            <ReactMarkdown>{readmeSnippet}</ReactMarkdown>
          </Card.Text>
        )}

        <div className="d-flex justify-content-center mt-3">
          <Button variant="outline-light" href={ghLink} target="_blank">
            GitHub
          </Button>
          {demoLink && (
            <Button
              variant="outline-warning"
              href={demoLink}
              target="_blank"
              className="ms-2"
            >
              Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
