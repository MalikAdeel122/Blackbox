import React from "react";
import { FaFile, FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="wrapper app-width">
        
        <div className="about_heading">
          <div className="about_heading_name">About Me</div>
          <div className="about_heading_intro">My Introduction</div>
        </div>

        <div className="about_container">
          <div className="about_ls">
            <div className="about_img">
              <img src="./img1/team_1.jpg"></img>
            </div>
          </div>
          <div className="about_rs">
            <div className="par_about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Illo recusandae dolore animi modi consequatur sunt eius
              <br />
              possimus, sapiente inventore dicta!
            </div>
            <div className="about_wave">
              <div className="about_num">
                <div className="cout_about">10+</div>
                <div className="about_year">Years Experience</div>
              </div>

              <div className="about_num">
                <div className="cout_about">50+</div>
                <div className="about_year">Years Experience</div>
              </div>

              <div className="about_num">
                <div className="cout_about">100+</div>
                <div className="about_year">Years Experience</div>
              </div>
            </div>

            <div className="about_button">
              <Link to="" className="about_btn_cv">
                Download CV <FaFileDownload className="about_btn_icons" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
