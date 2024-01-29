import React from "react";
import icon1 from "../assets/icon1-28ee71f2.png"
import icon2 from "../assets/icon3-ef171df4.png"
import icon3 from "../assets/icon3-ef171df4.png"

const Work = () => {
  return (
    <div className="Work mt-5">
      <div className="container text-center">
        <span className="main-span testocolr">Work</span>
        <h2 className="main-h2">How it Works</h2>
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <p className="main-p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              assumenda provident corporis
            </p>
          </div>
          <div className="col-md-3" />
        </div>
        <div className="row  align-items-center work-main">
          <div className="col-md-6   col-lg-4 mt-5">
            <div className="work-col1 ">
              <img src={icon1} alt=""  className="my-2"/>
              <h5>Pick Meals</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus explicabo quas error modi ratione! Eaque harum
                voluptatum ea perferendis culpa.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-5">
            <div className="work-col1  ">
              <img src={icon2} alt="" className="my-2" / >
              <h5 >Choose How Often</h5>
              <p className="mx-4 pb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus explicabo quas error modi ratione! Eaque harum
                voluptatum ea perferendis culpa.
              </p>
            </div>
          </div>
          <div className="col-md-8 col-lg-4  mt-5 ">
            <div className="work-col1 " >
              <img src={icon3} alt="" className="my-2" />
              <h5>Fast Deliveries</h5>
              <p className="mx-4 pb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus explicabo quas error modi ratione! Eaque harum
                voluptatum ea perferendis culpa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
