import React, { Component } from "react";
import { connect } from "react-redux";
import { createShortener, clearShortener } from "../../redux/actions/shortener";

export class Shortener extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: ""
    };
  }

  componentWillUnmount() {
    this.props.clearShortener();
  }

  handleShortening = () => {
    const { link } = this.state;
    this.props.createShortener(link);
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
        <input value={link} onChange={this.handleInputUpdate} />
        <button onClick={this.handleShortening}>make it short</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { createShortener, clearShortener }
)(Shortener);
