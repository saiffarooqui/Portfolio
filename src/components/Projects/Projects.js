import React from 'react';
import './Projects.css';

import Product from '../../assets/images/productlisting.jpg';
import Soulmate from '../../assets/images/soulmate.jpg';
import Twitter from '../../assets/images/twitter.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

const Projects = () => {
  const data = [
    {
      src: Product,
      url: "https://github.com/saiffarooqui/Product-Listing"
    },
    {
      src: Soulmate,
      url: "https://github.com/saiffarooqui/SoulMate-Online-Dating-Platform"
    },
    {
      src: Twitter,
      url: "https://github.com/saiffarooqui"
    }
  ]


  return (
    <section id="projects">
      <div className="project-heading">
        <h3>Recent Projects</h3>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          }
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {
          data.map(project => (
            <SwiperSlide key={project.src}>
              <div className="project-box">
                <a href={project.url} target='_blank' rel='noreferrer'>
                  <img src={project.src} alt="project" />
                  <div className="p-overlayer">
                    <strong>Development</strong>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>


      <div className="github-btn">
        <a href="https://github.com/saiffarooqui" target='_blank' rel="noreferrer" className="btn-link">
          My Github <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </section>
  )
}

export default Projects