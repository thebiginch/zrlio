import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handleReset() {
    for (let prop in this.state) {
      this.setState({ [prop]: "" });
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    let form = JSON.stringify(this.state);
    let myHeaders = new Headers({
      "Content-Type": "application/json"
    });

    fetch("/mail", {
      method: "POST",
      body: form,
      headers: myHeaders
    })
      .then(res => {
        this.handleReset();
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    let linktoresume = "/resume.pdf";

    return (
      <section className="contact">
        <div className="container">
          <h2>Get in touch!</h2>
          <hr />
          <div className="row">

            <div className="col-xs-12 col-sm-6">

              <p>
                Would love to chat about how I can help on your next project.  Feel free to drop me a message or download my
                {" "}
                <span className="resume-link">
                  <a href={linktoresume}>RESUME</a>
                </span>
                {" "}
              </p>
              <p>Thanks for visiting. 🍕</p>

            </div>

            <div className="col-xs-12  col-sm-6">
              <form id="contactForm" className="form-horizontal">
                <div className="control-group contactName">
                  <label className="control-label" for="contactName">
                    Name
                  </label>
                  <input
                    id="contactName"
                    type="text"
                    name="contactName"
                    required="required"
                    value={this.state.contactName}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="control-group contactEmail">
                  <label className="control-label" for="contactEmail">
                    Email
                  </label>
                  <input
                    id="contactEmail"
                    type="text"
                    name="contactEmail"
                    required="required"
                    value={this.state.contactEmail}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="control-group contactSubject">
                  <label className="control-label" for="contactSubject">
                    Subject
                  </label>
                  <input
                    id="contactSubject"
                    type="text"
                    name="contactSubject"
                    required="required"
                    value={this.state.contactSubject}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="control-group contactMessage">
                  <label className="control-label" for="contactMessage">
                    Message
                  </label>
                  <textarea
                    id="contactMessage"
                    className="span4"
                    name="contactMessage"
                    defaultValue=""
                    value={this.state.contactMessage}
                    onChange={this.handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="button submit"
                  onClick={this.handleSubmit}
                >
                  <span className="icon fa fa-check-circle fa-lg fa-fw" />
                  Send
                </button>

                <button
                  type="reset"
                  className="button reset"
                  onClick={this.handleReset}
                >
                  <span className="icon fa fa-times-circle fa-lg fa-fw" />
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
