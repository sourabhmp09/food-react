import React from "react";
import heroimg from "../assets/home-img1-29b43d74.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container ">
        <div className="row  hero-data">
          <div className="col-md-6 mt-5">
            <h1>Your Favourite Food Delivered Hote & Fresh</h1>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              dicta sed odio corporis commodi obcaecati repudiandae asperiores
              id velit dolor.
            </p>
            <button className="btn2">Order Now</button>
          </div>
          <div className="col-md-6">
            <div className="">
              <img src={heroimg} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
