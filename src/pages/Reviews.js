import React from "react";

const Reviews = () => {
  return (
    <div className="Reviews">
      <div className="wrapper app-width">
        <div className="rev_heading">
          <h1>Testimonial</h1>
          <p>My Client Saying</p>
        </div>
        <div className="rev_wave">
          <div className="rev_box">
            <div className="rev_box-flex">
              <img src="./img1/team_1.jpg"></img>
              <div className="rev_box_name">
                <h1 className="rev_box_name_h">Ali</h1>
                <p className="rev_box_name-p">client</p>
              </div>
            </div>
            <p className="rev_box_P">
              Lorem ipsum dolor sit amet consectetur,
              <br /> adipisicing elit. Dolorem corporis illo <br />
              deserunt consequatur, earum vel.
            </p>
          </div>

          <div className="rev_box">
            <div className="rev_box-flex">
              <img src="./img1/team_1.jpg"></img>
              <div className="rev_box_name">
                <h1 className="rev_box_name_h">Ali</h1>
                <p className="rev_box_name-p">client</p>
              </div>
            </div>
            <p className="rev_box_P">
              Lorem ipsum dolor sit amet consectetur,
              <br /> adipisicing elit. Dolorem corporis illo <br />
              deserunt consequatur, earum vel.
            </p>
          </div>
        </div>
        <div className="rev_container">
          <div className="rev_cont_text">Your Have A New Ideas Design</div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
