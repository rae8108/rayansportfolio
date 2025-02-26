import React from 'react';
import "./Projects.css";
import chaibubs from "../images/chaibubscard.jpeg";
import dictionaryapp from "../images/dictionaryappcard.jpeg"
import weatherapp from "../images/weatherappcard.jpeg"
import stephensanchez from "../images/stephensanchezcard.jpeg"
import positivequotes from "../images/positivequotescard.jpeg"

export default function Projects() {
  return (
    <div>
      <h4>Projects</h4>
      <div className='project-grid'>
        <img src={chaibubs} alt="chaibubs site" className='projectimage'/>
        <div>
        <h6 className='projecttitle'>Chaibubs</h6>
        <p className='projectp'>Multi-page bubble tea website showcasing options to browse home, menu, products and site locations. Used carousel for images, grids and embedded google maps for each location. </p>
        </div>
      </div>

      <div className='project-grid'>
        <img src={dictionaryapp} alt="dictionaryapp" className='projectimage'/>
        <div>
        <h6 className='projecttitle'>Dictionary App </h6>
        <p className='projectp'>Multi-page bubble tea website showcasing options to browse home, menu, products and site locations. Used carousel for images, grids and embedded google maps for each location. </p>
        </div>
      </div>

      <div className='project-grid'>
        <img src={weatherapp} alt="weatherapp" className='projectimage'/>
        <div>
        <h6 className='projecttitle'>Weather App </h6>
        <p className='projectp'>Multi-page bubble tea website showcasing options to browse home, menu, products and site locations. Used carousel for images, grids and embedded google maps for each location. </p>
        </div>
      </div>

      <div className='project-grid'>
        <img src={stephensanchez} alt="stephensanchez" className='projectimage'/>
        <div>
        <h6 className='projecttitle'>Stephen Sanchez </h6>
        <p className='projectp'>Multi-page bubble tea website showcasing options to browse home, menu, products and site locations. Used carousel for images, grids and embedded google maps for each location. </p>
        </div>
      </div>

      <div className='project-grid'>
        <img src={positivequotes} alt="positive quotes" className='projectimage'/>
        <div>
        <h6 className='projecttitle'>Positive Quotes Generator </h6>
        <p className='projectp'>Multi-page bubble tea website showcasing options to browse home, menu, products and site locations. Used carousel for images, grids and embedded google maps for each location. </p>
        </div>
      </div>
    </div>
  );
}
