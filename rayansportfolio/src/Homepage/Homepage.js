import React from "react"
import { NavLink } from 'react-router-dom';
import "./Homepage.css"

export default function Homepage() {
    return (
        <div>
         <h1 className=""><NavLink to="/">Rayan Bana</NavLink></h1>
          <div className="info">
          Aspiring developer with a passion for building accessible web experiences.
          </div>
        </div>
    )
}