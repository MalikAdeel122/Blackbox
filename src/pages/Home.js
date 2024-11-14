import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper app-width">
        <div className="ls">
          <div className="home_text">
            <h1 className="home_text_header">Hi, I am a Design.</h1>
            <p className="home_text_par">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Voluptatum ipsum aliquam illum, fugit quae optio.
            </p>
            <div className="home_button">
              <Link to="/contact" className="home_btn">
                Contact me
                <FaLocationArrow className="home_locationarrow" />
              </Link>
            </div>
          </div>
        </div>
        <div className="rs">
          <div className="home_img">
            <img src="./img1/food1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
