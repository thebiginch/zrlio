import React, { Component } from "react";
import "./Projects.css";
export default class Header extends Component {
  render() {
    return (
      <section className="projects">
        <div className="container">
          <div className="row">
            <div className="column column-40">
              <h2>
                I like to code.
                <span className="icon fa fa-desktop" />
              </h2>
              <a className="button column column-100" href="">
                <p>
                  <span className="icon fa fa-github fa-lg fa-fw" />
                  My GitHub
                </p>
              </a>
              <a className="button column column-100" href="">
                <p>
                  <span className="icon fa fa-flask fa-lg fa-fw" />
                  My projects
                </p>
              </a>
            </div>
            <div className="column column-10" />
            <div className="column column-50">
              <h3>Last projects</h3>
              <ul className="last" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
