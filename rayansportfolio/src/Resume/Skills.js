import React from 'react';
import "./Skills.css";

export default function Skills() {
  const skills = [
    { title: "Languages", description: "HTML, CSS, JS" },
    { title: "Web Design", description: "Responsive, CSS Grid, Flexbox" },
    { title: "Frameworks", description: "React.JS, Bootstrap" },
    { title: "API", description: "OpenAPI" },
    { title: "Hosting", description: "Netlify" },
    { title: "Version Control", description: "Git and GitHub" },
  ];

  return (
    <div className='flip-container'>
      {skills.map((skill, index) => (
        <div className="flip-card" key={index}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p>{skill.title}</p>
            </div>
            <div className="flip-card-back">
              <small>{skill.projectname}</small>
              <p>{skill.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
