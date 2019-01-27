import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRequest } from "../../actions/login";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleLogin = event => {
    event.preventDefault();
    const { username, password } = this.state;
    const { loginRequest, history } = this.props;
    loginRequest(username, password, history);
  };

  handleInputUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <section>
        <header>
          <h1>login</h1>
        </header>
        <div>
          <form onSubmit={this.handleLogin}>
            <div>
              <label htmlFor="username">userman</label>
              <input
                name="username"
                type="text"
                onChange={this.handleInputUpdate}
              />
            </div>
            <div>
              <label htmlFor="password">password</label>
              <input
                name="password"
                type="password"
                onChange={this.handleInputUpdate}
              />
            </div>
            <div>
              <button type="submit">login</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default connect(
  null,
  { loginRequest }
)(Login);
