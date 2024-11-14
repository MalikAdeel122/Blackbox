import React from "react";
import { icons } from "react-icons";
import { FaEye, FaHeart, FaStreetView, FaUser } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { MdAnalytics } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
const Center = () => {
  const past = [
    {
      name: "past 7 days",
    },
    {
      name: "past 14 days",
    },
    {
      name: "past month",
    },
    {
      name: "past year",
    },
  ];
  const card = [
    {
      icon: <FaHeart />,
      id: 1,
      name: "Like",
      num: 3123,
    },
    {
      icon: <MdAnalytics />,
      id: 2,
      name: "Engogement",
      num: 25325,
    },
    {
      icon: <MdAnalytics />,
      id: 3,
      name: "Followers",
      num: 2345,
    },
    {
      icon: <FaEye />,
      id: 4,
      name: "Views",
      num: 8765,
    },
  ];
  const peet = [
    {
      id: 1,
      name: "The Canter",
      image: "/images/blog1.jpg",
      date: "Sept 26th,2024",
      likeIcon: <SlLike />,
      likeNum: 4,
      userIcon: <FaUser />,
      userNum: 20,
      heartIcon: <CiHeart />,
      heartNum: 50,
    },
    {
      id: 2,
      name: "The Canter",
      image: "/images/blog2.jpg",
      date: "Sept 26th,2024",
      likeIcon: <SlLike />,
      likeNum: 4,
      userIcon: <FaUser />,
      userNum: 20,
      heartIcon: <CiHeart />,
      heartNum: 50,
    },
    {
      id: 3,
      name: "The Canter",
      image: "/images/blog3.jpg",
      date: "Sept 26th,2024",
      likeIcon: <SlLike />,
      likeNum: 4,
      userIcon: <FaUser />,
      userNum: 20,
      heartIcon: <CiHeart />,
      heartNum: 50,
    },
    {
      id: 4,
      name: "The Canter",
      image: "/images/blog3.jpg",
      date: "Sept 26th,2024",
      likeIcon: <SlLike />,
      likeNum: 4,
      userIcon: <FaUser />,
      userNum: 20,
      heartIcon: <CiHeart />,
      heartNum: 50,
    },
    {
      id: 5,
      name: "The Canter",
      image: "/images/blog5.jpg",
      date: "Sept 26th,2024",
      likeIcon: <SlLike />,
      likeNum: 4,
      userIcon: <FaUser />,
      userNum: 20,
      heartIcon: <CiHeart />,
      heartNum: 50,
    },
    {
      id: 6,
      name: "The Canter",
      image: "/images/blog1.jpg",
      date: "Sept 26th,2024",
      likeIcon: <SlLike />,
      likeNum: 4,
      userIcon: <FaUser />,
      userNum: 20,
      heartIcon: <CiHeart />,
      heartNum: 50,
    },
  ];
  return (
    <div className="mid-section">
      <div className="wrapper app-width">
        <div className="heading-name">Analytics</div>
        <div className="past-section">
          {past.map((item, index) => (
            <div className="past-list" key={index}>
              {item.name}
            </div>
          ))}
        </div>
        <div className="text">
          <div className="mid-text">
            Static Analytic of your Profile in the last 7 days
          </div>
        </div>
        {/* Analytic_card */}
        <div className="analytic-container">
          {card.map((item, index) => (
            <div className="card" key={index}>
              <div className="icon-list">
                <span className="icon">{item.icon}</span>
                {item.name}
              </div>
              <div className="number">{item.num}</div>
            </div>
          ))}
        </div>
        {/* top peets */}
        <div className="peet-heading">Top Performing Posts</div>
        <div className="peet-container">
          {peet.map((item, index) => (
            <div className="peet-items">
              <div className="images-sec">
                <img src={item.image} className="full-img" />
                <div className="text-head">
                  <div className="text-name">{item.name}</div>
                  <div className="date">{item.date}</div>
                </div>
                <div className="follow-sec">
                  <div className="follow-list">
                    <div className="follow-icon">{item.likeIcon}</div>
                    <div className="follow-text">{item.likeNum}</div>
                  </div>
                  <div className="follow-list">
                    <div className="follow-icon">{item.heartIcon}</div>
                    <div className="follow-text">{item.heartNum}</div>
                  </div>
                  <div className="follow-list">
                    <div className="follow-icon">{item.userIcon}</div>
                    <div className="follow-text">{item.userNum}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Center;
