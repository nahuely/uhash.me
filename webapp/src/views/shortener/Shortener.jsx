import React, { Component } from "react";
import Input from "../../components/input";
import Button from "../../components/button";

class Shortener extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      link: ""
    };
  }

  handleShortening = () => {
    const urlProps = {
      originalURL: this.state.link
    };

    fetch("http://localhost:3333/urls", {
      method: "POST",
      body: JSON.stringify(urlProps),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(error => console.error("Error:", error));
  };

  handleInputUpdate = event => {
    this.setState({ link: event.target.value });
  };

  render() {
    const { loading, error, link } = this.state;
    if (loading) return <p>...loading</p>;
    if (error) return <p>{error}</p>;

    return (
      <div>
        <Input value={link} onChange={this.handleInputUpdate} />
        <Button onClick={this.handleShortening}>make it short</Button>
      </div>
    );
  }
}

export default Shortener;
