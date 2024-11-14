import React from "react";
import {
  FaEnvelope,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper app-width">
        <div className="cont_heading">
          <h1 className="cont_heading_name">Contact Us</h1>
          <p>Get In Touch</p>
        </div>
        <div className="cont_container">
          <div className="cont_wave">
            <div className="cont_icon_text">
              <FaPhoneAlt className="cont_phone" />
              <div className="cont_icon_call">
                <h1>Call Me</h1>
                <p>+999999999</p>
              </div>
            </div>

            <div className="cont_icon_text">
              <FaEnvelope className="cont_phone" />
              <div className="cont_icon_call">
                <h1>Email</h1>
                <p>alihassan@423gmail.com</p>
              </div>
            </div>

            <div className="cont_icon_text">
              <FaMapMarkerAlt className="cont_phone" />
              <div className="cont_icon_call">
                <h1>Location</h1>
                <p>Multan </p>
              </div>
            </div>
          </div>
          <div className="cont_input_box">
            <div className="cont_input_wave">
              <div className="cont_input_username">
                <input typeof="text" placeholder="Name"></input>
              </div>
              <div className="cont_input_email">
                <input type="text" placeholder="Email"></input>
              </div>
            </div>
            <div className="cont_input_project">
              <input type="text" placeholder="Project"></input>
            </div>
            <div className="cont_input_message">
              <textarea className="cont_input_mes" placeholder="Message" />
            </div>
            <div className="cont-send">
              <button type="text" className="cont-send_btn">
                Send Message
                <FaLocationArrow className="cont-send_Location_arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
