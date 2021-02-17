import "../../App.css"

import React, {CSSProperties} from "react";
import {motion} from "framer-motion";

const firstSection:CSSProperties = {
    width: "100vw",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "4vw",
    paddingTop: "10vh",
    background: "linear-gradient(60deg, rgba(36,44,106,1) 0%, rgba(22,10,67,1) 100%)",
  };
  
  const upperStyle:CSSProperties = {
    width: "100vw",
    height: "10vh",
    fontWeight: "bolder",
    letterSpacing: "3.3px",
  };
  
  const lowerStyle:CSSProperties = { display: "flex", flexDirection: "row" };
  
  const innerLeft:CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "40vw",
    paddingRight: "13vw",
  };
  const innerRight:CSSProperties = {
    display: "flex",
    flexDirection: "row",
    width: "49vw",
  };

const AboutTop:React.FunctionComponent = () => {
    return(
        <>
         <div style={firstSection}>
          <div style={upperStyle}>ABOUT</div>
          <div style={lowerStyle}>
            <div style={innerLeft}>
              <motion.div
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "bolder",
                }}
                animate={{
                  opacity: [0, 1],
                  y: ["200px", "0px"],
                }}
                transition={{
                  y: { duration: 1, delay: 0.2 },
                  opacity: { duration: 1, delay: 0.2 },
                }}
              >
                I hope to work on{" "}
                <span style={{ color: "#78e690" }}>impactful</span> projects
                with the people and companies{" "}
                <span style={{ color: "#78e690" }}>I admire.</span>
              </motion.div>
            </div>
            <motion.img
              style={innerRight}
              animate={{
                opacity: [0, 1],
                y: ["400px", "-100px"],
              }}
              transition={{
                y: { duration: 1, delay: 0.35 },
                opacity: { duration: 1, delay: 0.4 },
              }}
              src="/images/standing_presentation_leo_2x.png"
            ></motion.img>
          </div>
        </div>
        </>
    );
}

export default AboutTop;