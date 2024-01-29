import React from "react";
import testoimg from "../assets/discord-logo-png-7635.png"

const Testimonial = () => {
  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-lg-6 mt-5 mb-2">
          <h6 className="testocolr">Testimonial</h6>
          <h1>What They are Saying</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            assumenda provident corporis
          </p>
        </div>
      </div>
      <div className="row justify-content-center text-center">
        <div className="col-lg-6">
          <div className="test-card my-5">

          <img src={testoimg}  className="testo-img"/>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              nihil vitae accusantium quae illo dicta? Laboriosam natus illo
              suscipit itaque
            </p>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <h6>Sourabh Lodhi</h6>
          </div>
        </div>
      </div>
      <div className="row justify-content-center text-center">
        <div className=" col-lg-10">
          <h1>Have Question In Mind?</h1>
          <h1> Let us help You</h1>
          <input
            type="text"
            className="inputsearch "
            placeholder="Enter Your Email Addres"
          />
          <button className="Search-Click">Click</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
