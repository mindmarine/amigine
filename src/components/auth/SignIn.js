import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { signIn } from "../../api/auth";
import { signInSuccess, signInFailure } from "../AutoDismissAlert/messages";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = (e) => {
    e.preventDefault();
    const { msgAlert, history, setUser } = props;
    const data = {
      email,
      password,
    };
    signIn(data)
      .then((res) => {
        setUser(res.data.user);
      })
      .then(() => {
        msgAlert({
          heading: "Sign In Success",
          message: signInSuccess,
          variant: "success",
        });
      })
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        msgAlert({
          heading: "Sign In Failed with error: " + error.message,
          message: signInFailure,
          variant: "danger",
        });
      });
  };

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Sign In</h3>
        <Form onSubmit={onSignIn}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default withRouter(SignIn);
