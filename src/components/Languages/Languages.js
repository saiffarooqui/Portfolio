import React from 'react';
import './Languages.css';

const Languages = () => {
  const data = [
    {
      title: "Languages",
      contents: ["Python", "C++", "JavaScript", "PHP"]
    },
    {
      title: "Software",
      contents: ["VScode", "Git", "Jupyter Notebook"]
    },
    {
      title: "Frameworks and Libraries",
      contents: ["React", "NodeJS", "ExpressJS", "Flask"]
    },
    {
        title: "Database",
        contents: ["MySQL", "MongoDB"]
    }
  ]

  return (
    <section id="languages" data-aos="fade">
      {
        data.map(item => (
          <div className="languages-box" key={item.title}>
            <h3>{item.title}</h3>
            <ul>
              {
                item.contents.map(content => (
                  <li key={content}>{content}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </section>
  )
}

export default Languages