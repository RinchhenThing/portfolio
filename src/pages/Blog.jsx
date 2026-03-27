import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Blog.css";

// This file is now automatically updated by your script!
import posts from "../content/posts.json"; 

function Blog() {
  return (
    <section className="blog-section">
      <Container>
        <h1 className="blog-heading">
          Technical <strong className="purple">Notes</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {posts.map((post) => (
            <Col md={4} key={post.slug} className="blog-card-col">
              <Link to={`/blog/${post.slug}`} className="fancy-card">
                <div className="card-content">
                  <span className="post-category">{post.category}</span>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-description">
                    {post.date} — Explore my technical notes.
                  </p>
                  <div className="card-footer">
                    <span>Read More</span>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Blog;
