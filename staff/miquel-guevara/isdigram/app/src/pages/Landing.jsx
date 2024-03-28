/*
import React from 'react'

//const Component = React.Component
// same as
const { Component } = React
*/
import { logger } from "../utils";

import { Component } from "react";

class Landing extends Component {
  constructor() {
    logger.debug("Landing");

    super();
  }

  handleLoginClick = (event) => {
    event.preventDefault();

    this.props.onLoginClick();
  };

  handleRegisterClick = (event) => {
    event.preventDefault();

    this.props.onRegisterClick();
  };

  render() {
    logger.debug("Landing -> render");

    return (
      <main>
        <h1>Landing</h1>
        <button
          className="Login Register"
          onClick={(event) => {
            event.preventDefault();

            this.props.onLoginClick();
          }}
        >
          Login
        </button>
        <button
          className="Login Register"
          onClick={(event) => {
            event.preventDefault();

            this.props.onRegisterClick();
          }}
        >
          Register
        </button>
      </main>
    );
  }
}

export default Landing;
