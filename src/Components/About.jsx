import React from "react";
import aboutimg from "../assets/about-img-6df2a2d3.png";

const About = () => {
  return (
    <div className="container-fluid About">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <img src={aboutimg} className="img-fluid" />
        </div>
        <div className="col-sm-12 col-md-6">
          <div>
            <h6 className="testocolr">About</h6>
            <h1>Food Is An Important Part Of A Balanced Diet</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              assumenda provident corporis temporibus inventore sed at
              consequatur reiciendis ipsa molestias.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur laudantium aliquid fuga officiis quasi vel id
              accusamus corporis soluta. Amet.
            </p>
            <button class="btn2" type="button">Learn More </button>
            <button class="btn3 mx-2" type="button"><i class="fa-solid fa-play"></i>Watch Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
