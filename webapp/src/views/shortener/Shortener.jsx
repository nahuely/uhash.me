import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../../components/input";
import Button from "../../components/button";
import { shortenerRequest } from "../../actions/shortener";

export class Shortener extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: ""
    };
  }

  handleShortening = () => {
    const { link } = this.state;
    this.props.shortenerRequest(link);
  };

  handleInputUpdate = event => {
    this.setState({ link: event.target.value });
  };

  render() {
    const { link } = this.state;
    // const { loading, error, link } = this.state;
    // if (loading) return <p>...loading</p>;
    // if (error) return <p>{error}</p>;

    return (
      <div>
        <Input value={link} onChange={this.handleInputUpdate} />
        <Button onClick={this.handleShortening}>make it short</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { shortenerRequest }
)(Shortener);
