import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  constructor() {
    super();
    this.state = { name: "Zachary Levine", tagline: "Coding Stuff" };
  }

  changeName() {
    let name = this.state.name === "Zachary Levine"
      ? "Zachary Le🍕ine"
      : "Zachary Levine";
    this.setState({ name });
  }

  render() {
    return (
      <section className="header">
        <h1
          onMouseEnter={this.changeName.bind(this)}
          onMouseLeave={this.changeName.bind(this)}
          className="name"
        >
          {this.state.name}
        </h1>
        <h2 className="tagline"><span>{this.state.tagline}</span></h2>
        <SocialIcons />
      </section>
    );
  }
}

class SocialIcons extends Component {
  render() {
    let myInfo = [
      {
        title: "github",
        link: "",
        faicons: "fa-github"
      },
      {
        title: "facebook",
        link: "",
        faicons: "fa-facebook"
      },
      {
        title: "email",
        link: "mailto:z@zrl.io",
        faicons: "fa-envelope"
      },
      {
        title: "twitter",
        link: "",
        faicons: "fa-twitter"
      }
    ];

    var socialList = myInfo.map(function(social, i) {
      return <SI key={i} info={social} />;
    });

    return (
      <ul id="social" className="social list-inline">
        {socialList}
      </ul>
    );
  }
}

class SI extends Component {
  render() {
    let { title, link, faicons } = this.props.info;
    faicons = "fa fa-2x fa-fw " + faicons;
    return (
      <li title={title} className="">
        <a href={link} target="_blank">
          <span className={faicons} />
        </a>
      </li>
    );
  }
}