import "../../App.css";

import React, { CSSProperties } from "react";
import { motion } from "framer-motion";
import Footer from "./../Footer/Footer";

const firstSection: CSSProperties = {
  width: "100vw",
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  paddingLeft: "4vw",
  paddingTop: "10vh",
  background:
    "linear-gradient(60deg, rgba(36,44,106,1) 0%, rgba(22,10,67,1) 100%)",
};

const upperStyle: CSSProperties = {
  width: "100vw",
  height: "10vh",
  fontWeight: "bolder",
  letterSpacing: "3.3px",
};

const lowerStyle: CSSProperties = { display: "flex", flexDirection: "row" };

const innerLeft: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "60vw",
  paddingRight: "13vw",
};
const innerRight: CSSProperties = {
  paddingTop: "10vh",
  display: "flex",
  flexDirection: "row",
  width: "30vw",
};

const NSCUProj: React.FunctionComponent = () => {
  return (
    <>
      <div style={firstSection}>
        <div style={upperStyle}>
          <a href="./../work">BACK TO WORK</a>
        </div>
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
              Partnering with NCSU to create an online presence for NC Clean
              Energy Tech Center is the embodiment of Care-I-Must.
            </motion.div>
          </div>
          <motion.div
            style={innerRight}
            animate={{
              opacity: [0, 1],
              y: ["400px", "-100px"],
            }}
            transition={{
              y: { duration: 1, delay: 0.35 },
              opacity: { duration: 1, delay: 0.4 },
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>INFO</span>
              <span style={{ paddingTop: "3vh" }}>
                <span style={{ fontWeight: "bolder" }}>Client</span> NC Clean
                Energy Technology Center + NC State University
              </span>
              <span style={{ paddingTop: "2vh" }}>
                <span style={{ fontWeight: "bolder" }}>Industry</span> Energy,
                Education
              </span>
              <span style={{ paddingTop: "2vh" }}>
                <span style={{ fontWeight: "bolder" }}>Services</span> Web
                Design, Web Development, Digital Design, & SEO
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NSCUProj;
