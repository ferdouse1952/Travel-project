import React, { useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import img1 from "../../Assets/Images/image01.jpg";
import img2 from "../../Assets/Images/image02.jpg";
import img3 from "../../Assets/Images/image03.jpg";
import img4 from "../../Assets/Images/image04.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Popular.css";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Machu Pichu",
    location: "Peru",
    grade: "CULTURAL RELAX",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Pichu",
    location: "NewYork",
    grade: "CULTURAL RELAX",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Machu Pichu",
    location: "Combodia",
    grade: "CULTURAL RELAX",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Machu Pichu",
    location: "Japan",
    grade: "CULTURAL RELAX",
  },
];

const Popular = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From historical cities to natural specteculturs, come see the best
              of the world!
            </p>
          </div>
          <div data-aos="fade-left" data-aos-duration="2500" className="iconsDiv flex">
            <BsArrowLeftShort className="icon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>
        <div className="mainContent grid">
          {Data.map(({ id, imgSrc, destTitle, location, grade }) => {
            return (
              <div data-aos="fade-up" className="singleDestination">
                <div className="destImage">
                  <img src={imgSrc} alt="" />
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>
                    <BsArrowRightShort className="icon" />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className="icon" />
                      </span>
                      Dot
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
