import React, { Component } from "react";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <section className="about">

        <img className="picture" src="zrl.png" />
        <div className="blurb">
          <h2> About me</h2>
          <hr />
          <p>
            Hi. My name is Zachary Levine.  I'm a full stack web developer.  I love programming because it challenges the mind to think and solve problems in a logical way.
            I also like riding my bike, learning new things, and dogs.
          </p>
        </div>

      </section>
    );
  }
}
