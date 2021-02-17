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

const AboutMiddle:React.FunctionComponent = () => {
    return(
        <>
         <div style={firstSection}>
          <div style={upperStyle}>MY MISSION</div>
          <div style={lowerStyle}>
            <div style={innerLeft}>
              <motion.div
                style={{
                  fontSize: "2.2rem",
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
                We built Carimus to make it <span style={{ color: "#78e690" }}>easier</span> for <span style={{ color: "#78e690" }}>innovators</span> to bring products to market.
              </motion.div>
              <motion.div>Founded in 2013, we began by attempting to build our own application with a series of disjointed partners.   We were frustrated with the inconsistent delivery that came with the segregation of creative vision, strategic thinking, and application development. </motion.div>
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

export default AboutMiddle;