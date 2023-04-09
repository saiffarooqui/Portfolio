import React from 'react';
import './Summery.css';
import CV from '../../assets/cv/resume.pdf';

const Summery = () => {
  return (
    <section id="summery">
      <div className="summery-heading" data-aos="fade-right">
        <strong>My Skillset</strong>

        <h2>Have a look at my CV.</h2>

        <a href={CV} download className='btn-link'>
          Get CV <i className="fa-solid fa-download"></i>
        </a>
      </div>

      <div className="summery-details" data-aos="fade-left">
        <p>
          I'm a product-focused fullstack developer based in Goa, India. 
          I am currently pursuing Bachelor's degree majoring in Computer Engineering from Goa Engineering College. 
          In addition to my love for technology and design, I am also interested in Data Analytics and Sports.
          I'm a self-motivated student seeking an opportunity in a progressive organization where my potentials will be fully discovered while working for the company dedicatedly.
        </p>
      </div>
    </section>
  )
}

export default Summery