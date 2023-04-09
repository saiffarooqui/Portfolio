import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <span>Copyright &copy;2022</span>

      <div className="social-links">
        <a href="https://linkedin.com/in/saif-farooqui" target='_blank' rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://github.com/saiffarooqui" target='_blank' rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>

        <a href="https://www.instagram.com/saif_msf" target='_blank' rel="noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>

      <a href="#!" className='footer-logo'>Saif Farooqui</a>
    </footer>
  )
}

export default Footer