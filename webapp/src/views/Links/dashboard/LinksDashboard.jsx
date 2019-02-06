import React, { Component } from "react";
import LinksList from "../list/LinksList";
import LinksDetail from "../detail/LinksDetail";
import LinksCreate from "../create/LinksCreate";
import LinksType from "../type/LinksType";
import "./styles.scss";

class LinksDashboard extends Component {
  render() {
    return (
      <div className="Links-Dashboard">
        <div className="Links-Dashboard__type">
          <LinksType />
        </div>
        <div className="Links-Dashboard__form">
          <LinksCreate />
        </div>
        <div className="Links-Dashboard__list">
          <LinksList />
        </div>
        <div className="Links-Dashboard__detail">
          <LinksDetail />
        </div>
      </div>
    );
  }
}

export default LinksDashboard;
