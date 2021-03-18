import React from "react"

import { Link } from "gatsby"

import orion from "../images/orion.webp"
import "./AboutMe.css"
import "./layout.css"

export default function AboutMe() {
  return (
    <div className="main-section">
      <h1 class="main-header">Meet Orion Poptean - Technology Specialist</h1>
      <img className="orion-img" src={orion} alt="orion poptean"></img>
      <br></br>
      <h1 class="front-headers">Background</h1>
      <p class="main-body-text">
        I have 15 years of experience working with and using
        technology/computers. I love helping people solve their tech related
        issues. I'm currently studying Computer Science at Portland State
        University and I look forward to assisting you with your computer needs.
        <br></br>
        <br></br>I provide solutions to your technology problems. If you need a
        professional, high quality website, I've got you covered. If you're
        having trouble setting up a printer or a new piece of hardware, I can do
        that too.
      </p>
      <h1 class="front-headers">What Can I Do For You?</h1>
      <ul class="service-list">
        <li class="main-body-text">Website Design</li>
        <li class="main-body-text">Computer cleanup and speedup</li>
        <li class="main-body-text">Virus removal</li>
        <li class="main-body-text">Hardware & Software Installation/Setup</li>
        <li class="main-body-text">Account Recovery</li>
        <li class="main-body-text">
          Troubleshooting any tech related problems
        </li>
      </ul>

      <div className="ui button primary services-button">
        <Link to="/services/">See All Services</Link>
      </div>
    </div>
  )
}
