import React, { useState } from "react";
import { FaArrowRight, FaRegHeart, FaSearch, FaUser } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import {
  MdAnalytics,
  MdManageSearch,
  MdOutlineFeaturedPlayList,
} from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { GrAnalytics } from "react-icons/gr";
import { RiSettingsLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
const Sidebar = () => {
  const { params } = useParams();
  const [naveBar, setNavBar] = useState();
  const sidebar = [
    {
      name: "",
      img: "",
    },
  ];
  return (
    <>
      <div className="sidebar">
        <div className="wrapper app-width">
          <div className="circle"></div>
          <div className="sidebar-container">
            <div className="ls">
              <div className="sidebar-list">
                <span className="sidebar-icons">
                  <GoHome />
                </span>
                <div className="name">For you</div>
              </div>
              <div className="sidebar-list">
                <span className="sidebar-icons">
                  <FaUser />
                </span>
                <div className="name">Following</div>
              </div>
              <div className="sidebar-list">
                <span className="sidebar-icons">
                  <CiSearch />
                </span>
                <div className="name">Discover</div>
              </div>
              <div className="sidebar-list">
                <span className="sidebar-icons">
                  <MdOutlineFeaturedPlayList />
                </span>
                <div className="name">Features</div>
              </div>
              <div className="sidebar-list">
                <span className="sidebar-icons">
                  <FaRegHeart />
                  <div className="notes">9</div>
                </span>
                <div className="name">Notification</div>
              </div>
              <div className="sidebar-list">
                <span className="sidebar-icons">
                  <BiMessageRounded />
                  <div className="notes">9</div>
                </span>
                <div className="name">Messages</div>
              </div>
              <div className="sidebar-list">
                <span className="sidebar-icons">
                  <MdAnalytics />
                </span>
                <div className="name">Analytics</div>
              </div>
              <div className="sidebar-list">
                <span className="sidebar-icons">
                  <RiSettingsLine />
                </span>
                <div className="name">Settings</div>
              </div>
            </div>
            <div className="create-btn">
              Create post<span className="addBtn"></span>
            </div>
          </div>
          <div className="rs">
            <div className="tyla-btn">
              <img src="/images/Logo4.png" className="end-logo"></img>
              <div className="text">
                <h1 className="title">Tyla Realli</h1>
                <span className="about">Visual artist</span>
              </div>
            </div>
            <div className="logout-section">
              <div className="logOut_btn">Log out</div>
              <div className="logOut_icon" onClick={() => setNavBar()}>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // mobile-responsive */}
      {/* <div className="sidebar">
        <div className="wrapper app-width">
          <div className="circle"></div>
          <div className="sidebar-container">
            <div className="ls">
              <div className="sidebar-list">
                <span className="sidebar-icons">
                  <GoHome />
                </span>
                <div className="name">For you</div>
              </div>
              <div className="sidebar-list">
                <span className="sidebar-icons">
                  <FaUser />
                </span>
                <div className="name">Following</div>
              </div>
              <div className="sidebar-list">
                <span className="sidebar-icons">
                  <CiSearch />
                </span>
                <div className="name">Discover</div>
              </div>
              <div className="sidebar-list">
                <span className="sidebar-icons">
                  <MdOutlineFeaturedPlayList />
                </span>
                <div className="name">Features</div>
              </div>
              <div className="sidebar-list">
                <span className="sidebar-icons">
                  <FaRegHeart />
                  <div className="notes">9</div>
                </span>
                <div className="name">Notification</div>
              </div>
              <div className="sidebar-list">
                <span className="sidebar-icons">
                  <BiMessageRounded />
                  <div className="notes">9</div>
                </span>
                <div className="name">Messages</div>
              </div>
              <div className="sidebar-list">
                <span className="sidebar-icons">
                  <MdAnalytics />
                </span>
                <div className="name">Analytics</div>
              </div>
              <div className="sidebar-list">
                <span className="sidebar-icons">
                  <RiSettingsLine />
                </span>
                <div className="name">Settings</div>
              </div>
            </div>
            <div className="create-btn">
              Create post<span className="addBtn"></span>
            </div>
          </div>
          <div className="rs">
            <div className="tyla-btn">
              <img src="/images/Logo4.png" className="end-logo"></img>
              <div className="text">
                <h1 className="title">Tyla Realli</h1>
                <span className="about">Visual artist</span>
              </div>
            </div>
            <div className="logout-section">
              <div className="logOut_btn">Log out</div>
              <div className="logOut_icon" onClick={() => setNavBar()}>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Sidebar;
