import React from "react";

const Skill = () => {
  return (
    <div className="Skill">
      <div className="wrapper app-width">
        <div className="heading">
          <h1 className="heading_name">My Skills</h1>
          <p className="skill_par">Technical Level</p>
        </div>
        <div className="skill_wave">
          <div className="skill_container">
            <div className="skill_ls">
              <div className="skill_header_box">
                <h1 className="skill_ls_heading">Frontend Developer</h1>
                <p className="skill_year">More than 10 year.</p>
              </div>
              <div className="skill_ls_wave">
                <div class="skill_html">
                  <h3 class="skill-title">HTML</h3>
                  <div class="skill-bar">
                    <div class="skill-progress_1" data-progress="100%"></div>
                  </div>
                </div>

                <div class="skill_html">
                  <h3 class="skill-title">CSS</h3>
                  <div class="skill-bar">
                    <div class="skill-progress_2" data-progress="90%"></div>
                  </div>
                </div>
                <div class="skill_html">
                  <h3 class="skill-title">Java</h3>
                  <div class="skill-bar">
                    <div class="skill-progress_3" data-progress="90%"></div>
                  </div>
                </div>

                <div class="skill_html">
                  <h3 class="skill-title">Angular</h3>
                  <div class="skill-bar">
                    <div class="skill-progress_4" data-progress="90%"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill_rs">
              <h1 className="skill_rs_heading">Frontend Developer</h1>
              <p className="skill_year">More than 10 year.</p>
              <div className="skill_rs_wave">
                <div class="skill_html">
                  <h3 class="skill-title">PHP</h3>
                  <div class="skill-bar">
                    <div class="skill-progress_5" data-progress="100%"></div>
                  </div>
                </div>

                <div class="skill_html">
                  <h3 class="skill-title">SQL</h3>
                  <div class="skill-bar">
                    <div class="skill-progress_6" data-progress="90%"></div>
                  </div>
                </div>
                <div class="skill_html">
                  <h3 class="skill-title">Python</h3>
                  <div class="skill-bar">
                    <div class="skill-progress_7" data-progress="90%"></div>
                  </div>
                </div>

                <div class="skill_html">
                  <h3 class="skill-title">MongoDB</h3>
                  <div class="skill-bar">
                    <div class="skill-progress_8" data-progress="90%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
