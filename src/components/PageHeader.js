import React from "react";

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wave-info">
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div
              className="wave waveTop"
              style={{
                backgroundImage: `url(
                  ${"http://front-end-noobs.com/jecko/img/wave-top.png"}
                )`
              }}
            />
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div
              className="wave waveMiddle"
              style={{
                backgroundImage: `url(
                  ${"http://front-end-noobs.com/jecko/img/wave-mid.png"}
                )`
              }}
            />
          </div>
          <div className="waveWrapperInner bgBottom">
            <div
              className="wave waveBottom"
              style={{
                backgroundImage: `url(
                  ${"http://front-end-noobs.com/jecko/img/wave-bot.png"}
                )`
              }}
            />
          </div>
          <div className="info-facts">
            <img src="./images/headshot.png"></img>
            <div className="main-logo">
              Akarsh <span className="orange">Vankayalapati</span>
            </div>
            <div className="date-location">
              <div>Master of Computer Science Student</div>

              <div>University of Illinois at Urbana-Champaign</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHeader;
