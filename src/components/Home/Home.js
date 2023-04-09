import React from 'react';
import './Home.css';
import Avatar from '../../assets/images/me1.png';

const Home = () => {
  return (
    <section id="home">
      <div className="home-text" data-aos="fade-down">
        <strong>Hello, it's me</strong>
        <h1>Saif Farooqui</h1>
        <p>I'm a self taught developer, currently pursuing Bachelor's in Computer Engineering.</p>
        <a href="#summery" className='btn-link'>Scroll For Me</a>
      </div>

      <div className="home-img" data-aos="fade-up">
        <div className="img-box">
          <img src={Avatar} alt="Avatar" />

          <h2>Saif Farooqui <br /><span>Full-Stack Developer</span></h2>

          <div className="social">
            <a href="https://linkedin.com/in/saif-farooqui" target='_blank' rel="noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="https://github.com/saiffarooqui" target='_blank' rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          <a href="mailto:saifmsf9@gmail.com" target='_blank' rel="noreferrer" className='hire-me'>Hire me</a>
        </div>
      </div>
    </section>
  )
}

export default Home