import React from "react";
import "./ProfileSlider.css";
import ProfileCard from "../ProfileCard/profileCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const profiles = [
  {
    id: "1",
    name: "Mazen Jamshed",
    profiletype: "Contractor",
    bio: "I am a fully proficient property contractor and able to develop any kind of property no matter if it is Burj Khalifa.",
    Image: require("./../../assets/img/garlic.jpg"),
    rating: 3.5,
  },
  {
    id: "2",
    name: "Sadam Hussain",
    profiletype: "Dealer",
    bio: "I am a fully proficient property contractor and able to develop any kind of property no matter if it is Burj Khalifa.",
    Image: require("./../../assets/img/hero_bg.jpg"),
    rating: 3.5,
  },
  {
    id: "3",
    name: "Ali Hassan",
    profiletype: "Agency",
    bio: "I am a fully proficient property contractor and able to develop any kind of property no matter if it is Burj Khalifa.",
    Image: require("./../../assets/img/Jamshed_Thug.jpg"),
    rating: 3.5,
  },
  {
    id: "4",
    name: "Zaheer Khan",
    profiletype: "Dealer",
    bio: "I am a fully proficient property contractor and able to develop any kind of property no matter if it is Burj Khalifa.",
    Image: require("./../../assets/img/bedroom1.jpg"),
    rating: 3.5,
  },
  {
    id: "5",
    name: "Imran Khan",
    profiletype: "Agency",
    bio: "I am a fully proficient property contractor and able to develop any kind of property no matter if it is Burj Khalifa.",
    Image: require("./../../assets/img/bedroom-2.jpg"),
    rating: 3.5,
  },
  {
    id: "6",
    name: "Imran Khan",
    profiletype: "Agency",
    bio: "I am a fully proficient property contractor and able to develop any kind of property no matter if it is Burj Khalifa.",
    Image: require("./../../assets/img/bedroom-2.jpg"),
    rating: 3.5,
  },
];
const ReactCardSlider = (props) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  return (
    <div id="main-slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
      />
      <div id="slider">
        {profiles.map((profile) => {
          return (
            <ProfileCard
              key={profile.id}
              Image={profile.Image}
              bio={profile.bio}
              name={profile.name}
              profiletype={profile.profiletype}
              rating={profile.rating}
            />
          );
        })}
      </div>
      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
  );
};
export default ReactCardSlider;
