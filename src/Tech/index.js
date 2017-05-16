import React, { Component } from "react";
import "./Tech.css";

export default class Tech extends Component {
  render() {
    let imagesInfo = [
      {
        title: "HTML",
        blurb: "I like turtles",
        src: "/logos/HTML5.png"
      },
      {
        title: "CSS",
        blurb: "I like turtles",
        src: "/logos/css3.png"
      },
      {
        title: "Javascript",
        blurb: "I like turtles",
        src: "/logos/js.jpg"
      },
      {
        title: "Python",
        blurb: "I like turtles",
        src: "/logos/Python.png"
      },
      {
        title: "Node",
        blurb: "I like turtles",
        src: "/logos/Node.png"
      },
      {
        title: "Linux",
        blurb: "I like turtles",
        src: "/logos/Linux.png"
      }
    ];

    return (
      <section id="tech" className="tech">
        <div className="container">
          <h1>Tech <span className="fa fa-cog" /></h1>
          <hr />
          <p>
            I'm currently focused on creating full stack data-driven web applications.
            Here are some of my favorite tools that I work with every day.
          </p>

          <div className="row">

            <TechImage
              title={imagesInfo[0].title}
              blurb={imagesInfo[0].blurb}
              image={imagesInfo[0].src}
            />
            <TechImage
              title={imagesInfo[1].title}
              blurb={imagesInfo[1].blurb}
              image={imagesInfo[1].src}
            />
            <TechImage
              title={imagesInfo[2].title}
              blurb={imagesInfo[2].blurb}
              image={imagesInfo[2].src}
            />
          </div>
          <div className="row">
            <TechImage
              title={imagesInfo[3].title}
              blurb={imagesInfo[3].blurb}
              image={imagesInfo[3].src}
            />
            <TechImage
              title={imagesInfo[4].title}
              blurb={imagesInfo[4].blurb}
              image={imagesInfo[4].src}
            />
            <TechImage
              title={imagesInfo[5].title}
              blurb={imagesInfo[5].blurb}
              image={imagesInfo[5].src}
            />

          </div>
        </div>
      </section>
    );
  }
}

class TechImage extends Component {
  render() {
    let pathToImage = this.props.image;
    let title = this.props.title;
    let blurb = this.props.blurb;

    return (
      <span className="col-xs-12 col-md-4 techImage">
        <img src={`${pathToImage}`} className="center-block" />
      </span>
    );
  }
}
