import React from "react";

const Delivery = () => {
  return (
    <div className="container mt-5">
      <div className="row Delivery_col">
        <div className="col-sm-12 col-md-4 text-center  ">
          <div className="card m-4">
            <i class="fa-solid fa-clock"></i>
            <h5>Today 10:00 am - 7:00 pm</h5>
            <p>Working Hours</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 text-center ">
          <div className="card  m-4">
            <i className="fa-solid fa-location-dot"></i>
            <h5>velyka Vasy Lkisvska 100</h5>
            <p>Get Directions</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 text-center">
          <div className="card  m-4">
            <i class="fa-solid  fa-phone"></i>
            <h5>+91 9755589940</h5>
            <p>Call Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
