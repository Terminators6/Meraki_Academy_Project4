import React, { useState } from "react";
import emailjs from "emailjs-com";
import Button from "react-bootstrap/Button";

import "./footer.css";
import "./nicepage.css";

export const Footer = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [theMessage, setTheMessage] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);

  const service_id = "service_hagjeis";
  const template_id = "template_3vpb3q2";
  const user_id = "user_EEJqUUgmDQTKCfowbJZ1T";
  const contactDetails = {
    to_name: name,
    from_name: email,
    subject: subject,
    message: theMessage,
  };

  const emailSend = async (e) => {
    e.preventDefault();
    await emailjs.send(service_id, template_id, contactDetails, user_id);
    setMessage(true);
  };
  return (
    <div>
      <section class="u-clearfix u-palette-1-base u-section-11" id="sec-65f5">
        <div class="u-clearfix u-layout-wrap u-layout-wrap-1">
          <div class="u-layout">
            <div class="u-layout-row">
              <div class="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                <div class="u-container-layout u-container-layout-1">
                  <h3 class="u-text u-text-default u-text-1">Get in touch</h3>
                  <h6 class="u-custom-font u-text u-text-font u-text-2">
                    We can ensure reliability, low cost fares and most important, with safety and comfort in mind.
                  </h6>
                  <p class="u-text u-text-3">
                    Etiam sit amet convallis erat – class aptent taciti sociosqu ad litora torquent per conubia!
                    Maecenas gravida lacus. Lorem etiam sit amet convallis erat.
                  </p>
                  <div class="u-social-icons u-spacing-20 u-social-icons-1">
                    <a class="u-social-url" target="_blank" href="">
                      <span class="u-icon u-icon-circle u-social-facebook u-social-icon u-icon-1"></span>
                    </a>
                    <a class="u-social-url" target="_blank" href="">
                      <span class="u-icon u-icon-circle u-social-icon u-social-twitter u-icon-2"></span>
                    </a>
                    <a class="u-social-url" target="_blank" href="">
                      <span class="u-icon u-icon-circle u-social-icon u-social-instagram u-icon-3"></span>
                    </a>
                    <a class="u-social-url" target="_blank" href="#">
                      <span class="u-icon u-icon-circle u-social-icon u-social-linkedin u-icon-4"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div class="u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                <div class="u-container-layout u-valign-top u-container-layout-2">
                  <div class="u-form u-form-1">
                    <form>
                      <input type="hidden" id="siteId" name="siteId" value="515333" />
                      <input type="hidden" id="pageId" name="pageId" value="515334" />
                      <div class="u-form-email u-form-group u-form-partition-factor-2 u-form-group-1">
                        <label for="email-319a" class="u-label u-text-body-alt-color u-label-1">
                          Email
                        </label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          placeholder="Enter a valid email address"
                          id="email-319a"
                          name="email"
                          class="
                          u-border-2
                          u-border-no-left
                          u-border-no-right
                          u-border-no-top
                          u-border-white
                          u-input
                          u-input-rectangle
                        "
                          required=""
                        />
                      </div>
                      <div class="u-form-group u-form-name u-form-partition-factor-2 u-form-group-2">
                        <label for="name-319a" class="u-label u-text-body-alt-color u-label-2">
                          Name
                        </label>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          placeholder="Enter your Name"
                          id="name-319a"
                          name="name"
                          class="
                          u-border-2
                          u-border-no-left
                          u-border-no-right
                          u-border-no-top
                          u-border-white
                          u-input
                          u-input-rectangle
                        "
                          required=""
                        />
                      </div>
                      <div class="u-form-group u-form-message u-form-group-3">
                        <label for="message-319a" class="u-label u-text-body-alt-color u-label-3">
                          Message
                        </label>
                        <textarea
                          onChange={(e) => setTheMessage(e.target.value)}
                          placeholder="Enter your message"
                          rows="4"
                          cols="50"
                          id="message-319a"
                          name="message"
                          class="
                          u-border-2
                          u-border-no-left
                          u-border-no-right
                          u-border-no-top
                          u-border-white
                          u-input
                          u-input-rectangle
                        "
                          required=""
                        ></textarea>
                      </div>
                      <div onClick={emailSend} class="u-align-left u-form-group u-form-submit u-form-group-4">
                        <button class="styleButton">Submit</button>

                        <input type="submit" value="submit" class="u-form-control-hidden" />
                        {message ? <p>Message Successfully send </p> : ""}
                      </div>
                      <div class="u-form-send-message u-form-send-success">Thank you! Your message has been sent.</div>
                      <div class="u-form-send-error u-form-send-message">
                        Unable to send your message. Please fix errors then try again.
                      </div>
                      <input type="hidden" value="" name="recaptchaResponse" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="borderCopyRight">
        <span className="copyRight">&copy; 2021 Terminators All rights reserved</span>
      </footer>
    </div>
  );
};
