import React, { Component } from "react";

export default class OurCourses extends Component {
  render() {
    return <header id="header" className="section-header scroll">
    <a href="./">
      <img className="icon" alt="learn to code icon" src="https://learntocodetogether.nl/assets/icon.svg" />
    </a>
    <a href="https://www.meetup.com/Learning-to-Code-Amsterdam/">
      <img className="meetup-icon" alt="meetup icon" src="https://learntocodetogether.nl/assets/meetup-icon.svg" />
    </a>
    <nav>
      <a href="/courses.html">Our Courses</a>
    </nav>
  </header>
  }
}

