import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./SignUpForm.css";

function SignUpForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign-Up form submitted");
  };

  return (
    <div className="signup">
      <Container className="signup__container">
        <h1 className="signup__title">Sign Up</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFullName" className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" required />
          </Form.Group>
          <Button variant="danger" type="submit" className="w-100">
            Sign Up
          </Button>
          <div className="signup__signin mt-4">
            <p>
              Already have an account? <a href="/signin">Sign in now.</a>
            </p>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default SignUpForm;
