import React from "react";
import {
  FaArrowRight,
  FaSketch,
  FaSpinner,
  FaTransgenderAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Servies = () => {
  return (
    <div className="servies">
      <div className="wrapper app-width">
        <div className="ser_heading">
          <h1 className="ser_heading_large">Services</h1>
          <div className="ser_heading_short">What I Offer</div>
        </div>
        <div className="ser_wave">
          <div className="ser_box">
            <FaTransgenderAlt className="ser_transgender" />
            <h3 className="ser_text">
              Graphic <br />
              Design
            </h3>
            <Link to="" className="ser_btn">
              View More
              <FaArrowRight className="ser_right" />
            </Link>
          </div>

          <div className="ser_box">
            <FaSpinner className="ser_transgender" />
            <h3 className="ser_text">
              Frontend <br />
              Layout
            </h3>
            <Link to="" className="ser_btn">
              View More
              <FaArrowRight className="ser_right" />
            </Link>
          </div>
          <div className="ser_box">
            <FaSketch className="ser_transgender" />
            <h3 className="ser_text">
              Backend <br />
              CMS
            </h3>
            <Link to="" className="ser_btn">
              View More
              <FaArrowRight className="ser_right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servies;
