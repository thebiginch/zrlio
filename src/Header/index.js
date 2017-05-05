import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <section className="header centered">
        <h1 class="name">Zachary Levine</h1>
        <h2 className=""><span>Coding stuff</span></h2>
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
        link: "link to github",
        faicons: " fa-github fa-fw fa-3"
      },
      {
        title: "facebook",
        link: "link to facebook",
        faicons: " fa-facebook fa-fw fa-3"
      },
      {
        title: "email",
        link: "mailto:zrlevine@gmail.com",
        faicons: " fa-envelope fa-fw fa-3"
      },
      {
        title: "twitter",
        link: "link to twitter",
        faicons: " fa-twitter fa-fw fa-3"
      }
    ];

    var socialList = myInfo.map(function(social, i) {
      console.log(i);
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
    faicons = "icon fa" + faicons;
    return (
      <li title={title} className="await-opacity-5">
        <a href={link} target="_blank">
          <span className={faicons} />
        </a>
      </li>
    );
  }
}
