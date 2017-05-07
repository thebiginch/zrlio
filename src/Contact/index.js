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
    console.log("ran!");
    this.state = {};
    this.forceUpdate();
  }

  handleSubmit(event) {
    event.preventDefault();

    self = this;
    let form = JSON.stringify(this.state);

    let myHeaders = new Headers({
      "Content-Type": "application/json"
    });

    fetch("/mail", {
      method: "POST",
      body: form,
      headers: myHeaders
    }).then(res => {
      this.handleReset();
      this.forceUpdate();

      console.log(res);
    });
  }

  render() {
    return (
      <section className="contact">
        <div className="container">

          <div className="row">
            <div className="column column-100">
              <form id="contactForm" className="form-horizontal">
                <h2>Contact form</h2>

                <div className="control-group contactName">
                  <label className="control-label" for="contactName">
                    Name
                    <span className="required">*</span>
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
                    <span className="required">*</span>
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
                    <span className="required">*</span>
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
                    <span className="required">*</span>
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
