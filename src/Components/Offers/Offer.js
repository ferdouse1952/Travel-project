import React, { useEffect } from "react";
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import img01 from "../../Assets/Images/hotel01.jpg";
import img02 from "../../Assets/Images/hotel02.jpg";
import img03 from "../../Assets/Images/hotel03.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css';
// import img04 from "../../Assets/Images/hotel04.jpg";
import "./Offer.css";

const Offer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  const Offers = [
    {
      id: 1,
      img: img01,
      destTitle: "Machu Pichu",
      location: "Peru",
      price: "$6,400",
    },
    {
      id: 2,
      img: img02,
      destTitle: "Machu Pichu",
      location: "NewYork",
      price: "$10,400",
    },
    {
      id: 3,
      img: img03,
      destTitle: "Machu Pichu",
      location: "Combodia",
      price: "$3,400",
    }
    // {
    //   id: 4,
    //   img: img04,
    //   destTitle: "Machu Pichu",
    //   location: "Japan",
    //   price: "$4,400",
    // },
  ];
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            From historical cities to natural specteculturs, come see the best
            of the world!
          </p>
        </div>
        <div className="mainContent grid">
          {Offers.map(({ id, img, destTitle, location, price }) => {
            return (
              <div data-aos="fade-up"  className="singleOffer">
                <div className="destImage">
                  <img src={img} alt="" />
                  <span className="discount">30% off</span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <h4>{price}</h4>
                    <span className="status">For Rent</span>
                  </div>
                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <MdKingBed className="icon" />
                      <small>2 Beds</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdBathtub className="icon" />
                      <small>1 Bath</small>
                    </div>
                    <div className="singleAmenity flex">
                      <FaWifi className="icon" />
                      <small>Wi-fi</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdAirportShuttle className="icon" />
                      <small>Shuttle</small>
                    </div>
                  </div>
                  <div className="location flex">
                    <MdLocationPin className="icon" />
                    <small>450 Vine #310, {location}</small>
                  </div>
                  <button className="btn flex">
                    View Details
                    <BsArrowRightShort className="icon vicon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offer;
