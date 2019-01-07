import React, { Component } from "react";
import Form, { Field } from '@atlaskit/form';
import Button from "@atlaskit/button";
import FieldText from "@atlaskit/field-text";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: ""
    };
  }

  handleLogin = () => {};

  handleInputUpdate = () => {};

  render() {
    return (
      <div>
        <form
          onSubmit={data => console.log('form data', data)}
        >
          <FieldText
            label="Required with default value"
            required
            value="A default value"
            name="example-text"
          />

          <p>
            <Button type="submit" appearance="primary">
              Submit
            </Button>
          </p>
        </form>
      </div>
    );
  }
}
