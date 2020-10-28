import React from "react";

export default function Contact(props) {
  const { page } = props;
  return (
      <section className="contact-area ptb-60">
        <div className="container">
              <div className="section-title">
            <h2>
                      <span className="dot" />
                      {' '}
                      Contact Us
</h2>
        </div>

              <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="contact-info">
                <h3>Here to Help</h3>
                <p>
                      Have a question? You may find an answer in our FAQs. But you can
                      also contact us.
              </p>

              <ul className="contact-list">
                      <li>
                      <i className="fas fa-map-marker-alt" />
                      {' '}
                      Location: 2750
                      Quadra Street Victoria, Canada
</li>
                      <li>
                      <i className="fas fa-phone" />
                      {' '}
                      Call Us:
{" "}
                      <a href="#">(+123) 456-7898</a>
                  </li>
                      <li>
                    <i className="far fa-envelope" />
                    {' '}
                    Email Us:
{" "}
                    <a href="#">support@comero.com</a>
                </li>
                      <li>
                    <i className="fas fa-fax" />
                    {' '}
                    Fax: 
{' '}
                    <a href="#">+123456</a>
                </li>
                  </ul>

                <h3>Opening Hours:</h3>
                <ul className="opening-hours">
                  <li>
                            <span>Monday:</span>
                            {' '}
                            8AM - 6AM
</li>
                <li>
                            <span>Tuesday:</span>
                            {' '}
                            8AM - 6AM
</li>
                  <li>
                            <span>Wednesday:</span>
                            {' '}
                            8AM - 6AM
</li>
                  <li>
                            <span>Thursday - Friday:</span>
                            {' '}
                            8AM - 6AM
</li>
                <li>
                            <span>Sunday:</span>
                            {' '}
                            Closed
</li>
              </ul>

              <h3>Follow Us:</h3>
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                    </a>
                        </li>
                <li>
                            <a href="#">
                      <i className="fab fa-twitter" />
                  </a>
                        </li>
                      <li>
                  <a href="#">
                          <i className="fab fa-instagram" />
                      </a>
                </li>
                <li>
                            <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                        </li>
                <li>
                            <a href="#">
                      <i className="fab fa-skype" />
                  </a>
                        </li>
                <li>
                            <a href="#">
                    <i className="fab fa-pinterest-p" />
                  </a>
                        </li>
                <li>
                            <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                        </li>
                  </ul>
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
                      <div className="contact-form">
              <h3>Drop Us A Line</h3>
                  <p>
                  We’re happy to answer any questions you have or provide you with
                  an estimate. Just send us a message in the form below with any
                  questions you may have.
              </p>

                  <form id="contactForm">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>
                          Name 
{' '}
                          <span>(required)*</span>
                      </label>
                      <input
                                    type="text"
                        name="name"
                                    id="name"
                                    className="form-control"
                        required
                                    data-error="Please enter your name"
                        placeholder="Enter your name"
                                />
                          <div className="help-block with-errors" />
                    </div>
                    </div>

                          <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                      <label>
                            Email 
{' '}
                            <span>(required)*</span>
                      </label>
                              <input
                          type="email"
                        name="email"
                        id="email"
                          className="form-control"
                          required
                        data-error="Please enter your email"
                        placeholder="Enter your Email Address"
                      />
                      <div className="help-block with-errors" />
                          </div>
                  </div>

                          <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                              <label>
                          Phone Number 
{' '}
                          <span>(required)*</span>
                      </label>
                              <input
                              type="text"
                        name="phone_number"
                              id="phone_number"
                        className="form-control"
                        required
                              data-error="Please enter your phone number"
                        placeholder="Enter your Phone Number"
                          />
                              <div className="help-block with-errors" />
                          </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                          <label>
                          Your Message 
{' '}
                          <span>(required)*</span>
                      </label>
                      <textarea
                        name="message"
                        id="message"
                                    cols="30"
                                    rows="8"
                        required
                                    data-error="Please enter your message"
                                    className="form-control"
                                    placeholder="Enter your Message"
                                />
                          <div className="help-block with-errors" />
                    </div>
                    </div>

                          <div className="col-lg-12 col-md-12">
                    <button type="submit" className="btn btn-primary">
                          Send Message
                    </button>
                        <div id="msgSubmit" className="h3 text-center hidden" />
                        <div className="clearfix" />
                    </div>
                      </div>
              </form>
              </div>
                  </div>
        </div>
          </div>
    </section>
  );
}
