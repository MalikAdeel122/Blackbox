import React from "react";
import {
  FaArrowRight,
  FaCarAlt,
  FaCaretRight,
  FaLocationArrow,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="wrapper app-width">
        <div className="por_heading">
          <h1 className="por_heading_name">Portfolio</h1>
          <p className="por_heading_par">Most React Work</p>
        </div>
        <div className="por_container">
          <div className="por_ls">
            <div className="por_img">
              <img src="./img1/gallery-img-8.jpg" />
            </div>
          </div>
          <div className="por_rs">
            <div className="por_rs_text">
              <h1 className="por_rs_text_header">Modern Website</h1>
              <p className="por_rs_text_par">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                <br />
                eligendi cupiditate est maiores accusantium sit.
              </p>

              <Link to="" className="por_btn">
                Demo <FaArrowRight className="por_right_icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="por_wave">
          <div className="por_wave_ls">
            <h1 className="por_wave_ls_header">You Have A New Project</h1>
            <p className="por_wave_ls_par">
              Lorem, ipsum dolor sit amet consectetur <br />
              adipisicing elit. Fugiat, labore!
            </p>
            <div className="pro_wave_ls_button">
              <Link to="/contact" className="pro_wave_ls_btn">
                Contact Us
                <FaLocationArrow className="pro_wave_ls_right" />
              </Link>
            </div>
          </div>
          <div className="por_wave_rs">
            <div className="por_wave_rs_img">
              <img src="./img1/user.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
