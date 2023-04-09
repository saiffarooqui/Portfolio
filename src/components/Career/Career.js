import React from 'react';
import './Career.css';
import CV from '../../assets/cv/resume.pdf';

const Carrer = () => {
  const carrers = [
    {
      title: "Software Developer Intern",
      name: "EnigmaSoft Technologies",
      year: "August 2022 - October 2022"
    },
    {
      title: "Web Developer Intern",
      name: "Servitude Technology",
      year: "December 2021 - February 2022"
    }
  ]

  const educations = [
    {
      title: "B.E. Computer Engineering",
      name: "Goa Engineering College",
      year: "2019 - 2023"
    },
    {
      title: "Higher Secondary",
      name: "Dempo Higher Secondary",
      year: "2018 - 2019"
    }
  ]

  return (
    <section id="carrer">
      <div className="carrer-education">
        <div className="carrer" data-aos="fade-right">
          <h3>Career</h3>

          <div className="c-b-container">
            {
              carrers.map((carrer, index) => (
                <div className="c-box" key={index}>
                  <h4>{carrer.title}</h4>
                  <strong>{carrer.name}</strong>
                  <span>{carrer.year}</span>
                </div>
              ))
            }
          </div>
        </div>

        <div className="carrer edu" data-aos="fade-left">
          <h3>Education</h3>

          <div className="c-b-container">
            {
              educations.map((carrer, index) => (
                <div className="c-box" key={index}>
                  <h4>{carrer.title}</h4>
                  <strong>{carrer.name}</strong>
                  <span>{carrer.year}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="btn-c">
        <a href={CV} download className='btn-link'>
          Get CV <i className="fa-solid fa-download"></i>
        </a>
      </div>
    </section>
  )
}

export default Carrer