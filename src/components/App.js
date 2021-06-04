import React from "react";
import PageHeader from "./PageHeader";
import InterviewLocations from "./InterviewLocations";
import Volunteer from "./Volunteer";
import Virtual from "./Virtual";
import Days from "./Days";
import Information from "./Information";
import Footer from "./Footer";

function App() {
  return (
    <div className="body-content">
      <nav>
        <img className="navlogo" src="./images/illinois.png"></img>
        <a href="https://github.com/VAkarsh20">
          <img className="sociallink" src="./images/github.svg"></img>
        </a>
        <a href="https://www.linkedin.com/in/akarsh-v/">
          <img className="sociallink" src="./images/linkedin.svg"></img>
        </a>
      </nav>
      <PageHeader />
      <Information />
      <Days />
      <Volunteer />
      <Footer />
    </div>
  );
}

export default App;


// Original Order
// <PageHeader />
// <Information />
// <InterviewLocations />
// <Volunteer />
// <Footer />
//
// New Order
// <PageHeader />
// <Information />
// <Days />
// <Virtual />
// <Footer />
