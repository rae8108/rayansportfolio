import React from 'react';
import "./Projects.css";
import chaibubs from "../images/chaibubssc.jpeg";

export default function Projects() {
  return (
    <div>
      <h4>Projects</h4>
      <div className='project-grid'>
        <img src={chaibubs} alt="chaibubs site" className='chaibubs'/>
        <div>
        <h6>Project title</h6>
        <p>Processed transactions. Worked efficiently and maintained a positive attitude within a fast-paced environment with strict attention to detail. Supervising a team of staff when a manager was unavailable.</p>
        </div>
      

      </div>
    </div>
  );
}
