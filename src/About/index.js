import React, { Component } from "react";
import "./About.css";
import bio from "./bio.js";

export default class About extends Component {
  render() {
    return (
      <section className="about container">
        <div className="row">
          <div className="picture col-xs-12 col-sm-12 col-md-offset-1 col-md-4">
            <img className="center-block" src="zrl.png" />
          </div>
          <div className="blurb col-xs-12 col-sm-12 col-md-offset-1 col-md-6">
            <h2> About me </h2> <hr />
            <p> {bio.line1} </p>
            <p><a href="#tech">{bio.line2}&nbsp;:)</a></p>
          </div>
        </div>
      </section>
    );
  }
}
