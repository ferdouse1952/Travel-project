import React, { useEffect } from "react";
import "./About.css";
import img1 from "../../Assets/Images/customer.png";
import img2 from "../../Assets/Images/mountain.png";
import img3 from "../../Assets/Images//climbing.png";
import vdo from "../../Assets/Video/travel.mp4";
import Aos from "aos";
import "aos/dist/aos.css";
import "./About.css";

const About = () => {
 useEffect(()=>{
  Aos.init({duration:2000})
 },[])
  return (
    <section className="about section  container">
      <div className="secContainer">
        <h2 className="title">Why Hikings?</h2>
        <div className="mainContent grid">
          <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
            <img src={img1} alt="" />
            <h3>100+ Mountains</h3>

            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life reduce stress and improves health and well-being
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
            <img src={img2} alt="" />
            <h3>1000+ Hikings</h3>

            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life reduce stress and improves health and well-being
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
            <img src={img3} alt="" />
            <h3>2000+ Customer</h3>

            <p>
              Research shows that a chance to break away from the normal rhythms
              of daily life reduce stress and improves health and well-being
            </p>
          </div>
        </div>
        <div className="videoCard">
            <div className="cardContent grid">
                <div data-aos="fade-right" data-aos-duration="2500" className="cardText">
                    <h2>Wonderful House experience in there!</h2>
                    <p>The adventure subranking is on an equally weighted average of scores from five country.</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="2500" className="cardVideo">
                    <video src={vdo} autoPlay loop muted type="video/mp4"></video>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
