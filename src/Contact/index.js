import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
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
                  />
                </div>

                <button type="submit" className="button submit">
                  <span className="icon fa fa-check-circle fa-lg fa-fw" />
                  Send
                </button>

                <button type="reset" className="button reset">
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
