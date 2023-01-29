import React, { useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Blog.css";
import img1 from "../../Assets/Images/morocco.jpg";
import img2 from "../../Assets/Images/eiffel.jpg";
import img3 from "../../Assets/Images/tunesia.jpg";
import img4 from "../../Assets/Images/africa.jpg";

const Blog = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
   },[])
  const Posts = [
    {
      id: 1,
      postImage: img1,
      title: "Beautiful Morocco, let us travel!",
      desc: "The kingdom of Morocco is a Muslim country in western North Africa with coastlines on the Atlantic Ocean and Mediterranean Sea.",
    },
    {
      id: 2,
      postImage: img2,
      title: "Romantic moments inder Eiffel Tower",
      desc: "With vast swath of desert in its east and west an the rich Nile River Valley at its heart is site to one of the world earliest and greatest civilizations. ",
    },
    {
      id: 3,
      postImage: img3,
      title: "Let us have adventure outside Tunisia",
      desc: "Tunesia is a small Arab country in north Africa that represents both the aspirantions on freedom and struggles against terrorism that roil the region",
    },
    {
      id: 4,
      postImage: img4,
      title: "Best Country in East Africa",
      desc: "When Kenya claimed its independance from the U.K. in 1963,leaders of the newly fromed re[ublic promoted a sense of national unioty using the motto.",
    },
  ];
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div data-aos="fade-up" className="secIntro">
          <h2 className="secTitle">Our Best Blog?</h2>
          <p>An insight to the incredible experience in the world!</p>
        </div>
        <div className="mainContainer grid">
          {Posts.map(({ id, postImage, title, desc }) => {
            return (
              <div data-aos="fade-right" className="singlePost grid">
                <div className="imgDiv">
                  <img src={postImage} alt="" />
                </div>
                <div className="postDetails">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <a href="#" className="flex">
                  Read More
                  <BsArrowRightShort className="icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
