import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./SignInForm.css";

function SignInForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign-In form submitted");
  };

  return (
    <div className="signin">
      <Container className="signin__container">
        <h1 className="signin__title">Sign In</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" required />
          </Form.Group>
          <Button variant="danger" type="submit" className="w-100">
            Sign In
          </Button>
          <div className="signin__options mt-3">
            <Form.Check type="checkbox" label="Remember me" />
            <a href="#forgot" className="signin__link">
              Forgot Password?
            </a>
          </div>
        </Form>
        <div className="signin__signup mt-4">
          <p>
            New to Netflix? <a href="/signup">Sign up now.</a>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default SignInForm;
