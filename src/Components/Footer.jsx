import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logodownload (1).png";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <img src={logo} alt="Logo" />

          <div className="Footer_icons py-1">
            {/* Add your social media icons here */}
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <h6>Home</h6>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-4">
          <h6>Packages</h6>
          <ul>
            <li><Link to="/quality">Quality</Link></li>
            <li><Link to="/share">Share</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-4 offset-md-4 offset-lg-0">
          <h6>Contact Us</h6>
          <ul>
            {/* Replace the "#" with the actual path */}
            <li><Link to="/">Home</Link></li>
            <li>+91 9755589940</li>
            <li><a href="mailto:Sourabhlodhi3@gmail.com">Sourabhlodhi3@gmail.com</a></li>
            <li><a href="mailto:Sourabhlodhi3@gmail.com">Sourabhlodhi3@gmail.com</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-4">
          <h6>Contact Us</h6>
          <ul>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;





// import React from "react";
// import logo from "../assets/logodownload (1).png";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div className="container footer">
//       <div className="row">
//         <div className="col-lg-3 col-md-4 ">
//           <img src={logo} />

//           <div className="Footer_icons py-1">
//             <i className="fa-brands fa-facebook-f" />
//             <i className="fa-brands fa-youtube" />
//             <i className="fa-brands fa-vimeo-v" />
//             <i className="fa-brands fa-twitter" />
//           </div>
//         </div>
//         <div className="col-lg-2 col-md-4">
//           <h6>Home</h6>
//           <ul>
//             <li>Home</li>
//             <li>Packages</li>
//             <li>About Us</li>
//             <li>Contact Us</li>
//           </ul>
//         </div>
//         <div className="col-lg-2 col-md-4">
//           <h6>Packages</h6>
//           <ul>
//             <li>Quality</li>
//             <li>Share</li>
//             <li>Help</li>
//             <li>Carees</li>
//           </ul>
//         </div>
//         <div className="col-lg-3 col-md-4 offset-md-4 offset-lg-0">
//           <h6>Contact Us</h6>
//           <ul>
//             <li> {/* <Link to="/"> Home </Link> */}</li>
//             <li>+91 9755589940</li>
//             <li>Sourabhlodhi3@gmail.com</li>
//             <li>Sourabhlodhi3@gmail.com</li>
//           </ul>
//         </div>
//         <div className="col-lg-2 col-md-4 ">
//           <h6>Contact Us</h6>
//           <ul>
//             <li>Terms & Conditions</li>
//             <li>Privacy Policy</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
