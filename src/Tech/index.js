import React, { Component } from "react";
import "./Tech.css";
export default class Tech extends Component {
  render() {
    return (
      <section className="tech">

        <TechImage image="logos/js.jpg" />
        <TechImage image="logos/html5.png" />
        <TechImage image="logos/node.png" />
        <TechImage image="logos/Python.png" />

      </section>
    );
  }
}

class TechImage extends Component {
  render() {
    var pathToImage = this.props.image;
    var styles = { width: "100px", height: "100px" };
    return (
      <img
        src={`${pathToImage}`}
        style={styles}
        title="Javascript"
        alt="Javascript"
      />
    );
  }
}
