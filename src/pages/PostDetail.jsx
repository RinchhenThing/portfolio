import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Container, Row, Col } from "react-bootstrap";
import "./PostDetail.css";

function PostDetail() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    import(`../content/posts/${slug}.md`)
      .then(res => fetch(res.default))
      .then(res => res.text())
      .then(text => {
        // Simple regex to pull the title between the --- markers
        const titleMatch = text.match(/title:\s*(.*)/);
        const cleanTitle = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ');
        
        // Remove the metadata block (--- ... ---) from the display content
        const cleanContent = text.replace(/---[\s\S]*?---/, '');
        
        setTitle(cleanTitle);
        setContent(cleanContent);
      })
      .catch(() => {
        setTitle("Error");
        setContent("Post not found.");
      });
  }, [slug]);

  return (
    <section className="post-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="post-header">
              <h1 className="post-main-title">{title}</h1>
              <hr className="post-divider" />
            </div>
            <div className="markdown-body">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PostDetail;
