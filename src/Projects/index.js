import React, { Component } from "react";
import Tech from "../Tech";

import "./Projects.css";

export default class Projects extends Component {
  render() {
    return (
      <section className="projects">
        <div className="container">
          <div className="row">
            <div className="column column-40">
              <h2>
                Favorite Tools
                <span className="icon fa fa-cog" />
              </h2>
              <Tech />
            </div>
            <div className="column column-10" />
            <div className="column column-50">
              <h3>Latest projects</h3>
              <ul className="last" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
