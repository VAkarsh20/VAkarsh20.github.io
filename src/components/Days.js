import React from "react";

class Days extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="days">
        <h2 id="content_header">Projects</h2>
        <div className="info">
        Below are links to some of the personal projects Akarsh has implemented/been a part of:
        </div>

        <a href="https://github.com/VAkarsh20/FoodKeep"> Food Keep <br/> Java (Android Application)</a>
        <a href="https://vakarsh20.github.io/Movie_Narrative_Visualization/"> Movie Narrative Visualization <br/> Javascript (D3.js)</a>
        <a href="https://github.com/VAkarsh20/CS411_ShArea"> ShArea <br/> Python and SQL (Flask)</a>
      </div>
    );
  }
}

export default Days;