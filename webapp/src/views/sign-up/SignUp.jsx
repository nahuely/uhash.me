import React, { Component } from "react";
import { connect } from "react-redux";
// import { loginRequest } from "../../actions/login";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleSignUp = event => {
    event.preventDefault();
    const { username, password } = this.state;
    const { loginRequest, history } = this.props;
    // loginRequest(username, password, history);
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
          <h1>sign up</h1>
        </header>
        <div>
          <form onSubmit={this.handleSignUp}>
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
              <button type="submit">signup</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default connect(
  null,
  null
)(SignUp);
