import React from "react";
import menu1 from "../assets/menu1-07e5369d.png";

const Menu = () => {
  return (
    <div className="container">
      <div className="row my-3 text-center justify-content-center">
        <h6>Menu</h6>
        <h3>Explore Our Best Menu</h3>
        <div className="col-sm-12 col-lg-6 ">
          <h5>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            assumenda provident corporis
          </h5>
        </div>
      </div>

      <div className="row ">
        <div className="col-md-4">
          <div className="menu_col mt-5">
            <img src={menu1} alt="" className="img-fluid" />
            <div className="menu_col_mid mx-2">
              <div className="row">
                <div className="col-md-8 col-8">
                  <h2>Dosa </h2>
                </div>
                <div className="col-md-4 col-4">
                  <h2>12 $</h2>
                </div>
              </div>
              <h6>served with french fries + drik</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
                earum. Ipsam possimus voluptatem culpa...
              </p>
              <div className="row align-items-center">
                <div className="col-md-7 menu_col_icon1 col-6">
                  <i className="fa-regular fa-star" />
                  <i className="fa-regular fa-star" />
                  <i className="fa-regular fa-star" />
                </div>
                <div className="col-md-5 text-center menu_col_icon2 col-6">
                  <i className="fa-solid fa-plus" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="menu_col mt-5">
            <img src={menu1} alt="" className="img-fluid" />
            <div className="menu_col_mid mx-2">
              <div className="row">
                <div className="col-md-8 col-8">
                  <h2>Dosa </h2>
                </div>
                <div className="col-md-4 col-4">
                  <h2>12 $</h2>
                </div>
              </div>
              <h6>served with french fries + drik</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
                earum. Ipsam possimus voluptatem culpa...
              </p>
              <div className="row align-items-center">
                <div className="col-md-7 menu_col_icon1 col-6">
                  <i className="fa-regular fa-star" />
                  <i className="fa-regular fa-star" />
                  <i className="fa-regular fa-star" />
                </div>
                <div className="col-md-5 text-center menu_col_icon2 col-6">
                  <i className="fa-solid fa-plus" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="menu_col mt-5">
            <img src={menu1} alt="" className="img-fluid" />
            <div className="menu_col_mid mx-2">
              <div className="row">
                <div className="col-md-8 col-8">
                  <h2>Dosa </h2>
                </div>
                <div className="col-md-4 col-4">
                  <h2>12 $</h2>
                </div>
              </div>
              <h6>served with french fries + drik</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit,
                earum. Ipsam possimus voluptatem culpa...
              </p>
              <div className="row align-items-center">
                <div className="col-md-7 menu_col_icon1 col-6">
                  <i className="fa-regular fa-star" />
                  <i className="fa-regular fa-star" />
                  <i className="fa-regular fa-star" />
                </div>
                <div className="col-md-5 text-center menu_col_icon2 col-6">
                  <i className="fa-solid fa-plus" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button className="mt-5 Load-More">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
