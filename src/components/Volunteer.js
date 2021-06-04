import React from "react";

class Volunteer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="volunteer">
        <h2 id="content_header">Resume & Portfolio</h2>
        <div className="info">
          The links provided below are my current resume and profiles on LinkedIn, Handshake, and GitHub. The first three links are great snapshots into my academic and professional career, and the last link is a great look into my personal projects.

        </div>
        <a href="../documents/resume.pdf">Resume</a>
        <a href="https://www.linkedin.com/in/akarsh-v/">LinkedIn</a>
        <a href="https://app.joinhandshake.com/users/13330541">Handshake</a>
        <a href="https://github.com/VAkarsh20">GitHub</a>
        <div className="info orange">
          Contact akarshv2@illinois.edu with any serious inquiries.
        </div>
      </div>
    );
  }
}

export default Volunteer;
