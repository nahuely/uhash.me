import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ""
    };
  }

  handleLogin = () => {};

  handleInputUpdate = () => {};

  render() {
    return <div>login</div>;
  }
}

export default Login;
