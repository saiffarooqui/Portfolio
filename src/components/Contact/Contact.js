import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-down">
      <strong>What's Next</strong>
      <h3>Let's Work Together!</h3>
      <p>I'm open to work as an intern or join as a full time employee. I'm also open to work on freelance projects.</p>
      <a href="mailto:saifmsf9@gmail.com" className='btn-link contact-btn'>
        Write Me An Email <i className="fa-solid fa-envelope"></i>
      </a>
    </section>
  )
}

export default Contact