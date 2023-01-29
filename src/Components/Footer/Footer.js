import React from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import "./Footer.css";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h1 className="flex">
                <SiYourtraveldottv className="icon" />
                Dot
              </h1>
            </a>
          </div>
          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Helpfull links</span>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Travel & Condition</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">explore</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Contact Us</span>
          <span className="phone">+880 0123456789</span>
          <span className="email">abcde@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
