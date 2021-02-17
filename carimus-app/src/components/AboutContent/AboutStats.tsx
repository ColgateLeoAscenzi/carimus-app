import "./../../App.css";
import React, { CSSProperties } from "react";

const numberStyle: CSSProperties = {
  fontSize: "5.66rem",
  fontWeight: "bolder",
  borderBottom: "2px solid #78e690",
  marginBottom: "2vh",
  marginRight: "4vh",
};

const textStyle: CSSProperties = {
  fontWeight: "bolder",
  marginBottom: "8vh",
  marginRight: "4vh",
  maxWidth: "10vw",
};
const AboutStats: React.FunctionComponent = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={numberStyle}>1</div>
            <div style={textStyle}>RALEIGH APARTMENT</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={numberStyle}>1</div>
            <div style={textStyle}>AMBITIOUS PROGRAMMER</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={numberStyle}>10+</div>
            <div style={textStyle}>AWARDS FROM SCHOOL</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={numberStyle}>10+</div>
            <div style={textStyle}>PROJECTS COMPLETED</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={numberStyle}>2016</div>
            <div style={textStyle}>STUDYING COMPUTER SCIENCE SINCE 2016</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={numberStyle}>1</div>
            <div style={textStyle}>MISSION</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutStats;
