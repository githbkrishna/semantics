import React from "react";
import "./Style.css";

function Footer() {
  return (
    <footer>
      <div className="foot">
        <h2>Shop</h2>
        <ul>
          <li>Product</li>
          <li>Account</li>
          <li>Franchise Enquiry</li>
          <li>Contact us</li>
          <li>Contact us</li>
          <li>Visit our store</li>
          <li>Terms of Service</li>
        </ul>
      </div>

      <div className="foot">
        <h2>Blogs</h2>
        <ul>
          <li>My account</li>
          <li>Track orders</li>
          <li>Refund policy</li>
          <li>Privacy policy</li>
          <li>Python Reference</li>
          <li>Return/Exchange</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className="foot foontIcon">
        <h2>Contact Us</h2>
        <ul>
          <li>
            <i className="fa-solid fa-location-dot"></i>
            <span>mumbai india</span>
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>
            <span>+91 0000000000</span>
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>
            <span>krishna636471@gmail.com</span>
          </li>
        </ul>
      </div>

      <div className="foot">
        <h2>NewsLetter</h2>
        <ul>
          <input type="text" placeholder="search" />
          <li className="btnli">
            <button>send</button>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
