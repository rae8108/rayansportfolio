import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


import "./HPIcons.css"

export default function HPIcons() {
    return (
        <div className="socialmediaicons">
        <a href="https://github.com/rae8108" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://app.netlify.com/teams/rae8108/sites" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faDisplay} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} />
        </a>
    </div>
    );
}
