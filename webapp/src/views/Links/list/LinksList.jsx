import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.scss";

class LinksList extends Component {
  render() {
    return <div className="Links-list">LinksList</div>;
  }
}

export default connect(
  null,
  {  }
)(LinksList);
