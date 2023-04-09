import React from 'react';
import './About.css';

const About = () => {
    const carrers = [
        {
          title: "Artificial Intelligence Search Methods For Problem Solving",
          name: "IIT Madras - NPTEL"
        },
        {
          title: "The Joy of Computing using Python",
          name: "IIT Ropar - NPTEL"
        },
        {
            title: "Online Privacy",
            name: "IIIT Hyderabad - NPTEL"
        }
    ]  
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-heading" data-aos="flip-left">
          <strong>Let's Talk</strong>
          <h3>Get in touch to know me better</h3>
          <a href="tel:9657563675" className='btn-link'>
            965-756-5675 <i className="fa-solid fa-phone-flip"></i>
          </a>
        </div>

        {/* <div className="about-details" data-aos="flip-right">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda culpa obcaecati laborum omnis possimus animi. Doloribus sint quas animi dolor culpa voluptates aperiam recusandae, assumenda libero fugiat soluta eum voluptas.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda culpa obcaecati laborum omnis possimus animi. Doloribus sint quas animi dolor culpa voluptates aperiam recusandae, assumenda libero fugiat soluta eum voluptas.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda culpa obcaecati laborum omnis possimus animi. Doloribus sint quas animi dolor culpa voluptates aperiam recusandae, assumenda libero fugiat soluta eum voluptas.</p>
        </div> */}
        <div className="carrer edu about-details" data-aos="fade-right">
          <h3>Certifications</h3>

          <div className="c-b-container">
            {
              carrers.map((carrer, index) => (
                <div className="c-box" key={index}>
                  <h4>{carrer.title}</h4>
                  <strong>{carrer.name}</strong>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default About