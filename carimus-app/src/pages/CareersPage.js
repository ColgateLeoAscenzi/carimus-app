import "./../App.css";
import Footer from "../components/Footer/Footer";

import React, { CSSProperties } from "react";
import { motion } from "framer-motion";

const firstSection = {
  width: "100vw",
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  paddingLeft: "4vw",
  paddingTop: "10vh",
  background:
    "linear-gradient(60deg, rgba(36,44,106,1) 0%, rgba(22,10,67,1) 100%)",
};

const upperStyle = {
  width: "100vw",
  height: "10vh",
  fontWeight: "bolder",
  letterSpacing: "3.3px",
};

const lowerStyle = { display: "flex", flexDirection: "row" };

const innerLeft = {
  display: "flex",
  flexDirection: "column",
  width: "40vw",
  paddingRight: "13vw",
};
const innerRight = {
  display: "flex",
  flexDirection: "row",
  width: "49vw",
};

const buttonStyle = {
  marginTop: "4vh",
  backgroundImage: "linear-gradient(to right, #d25528, #da1d67)",
  border: "none",
  outline: "none",
  color: "white",
  paddingTop: "0.5vw",
  paddingBottom: "0.5vw",
  paddingLeft: "3vw",
  paddingRight: "8vw",
  fontFamily: "Montserrat",
  fontWeight: "bolder",
  letterSpacing: "3.3px",
  fontSize: "0.8em",
};

function CareersPage() {
  return (
    <div className="CareersPage">
      <div style={firstSection}>
        <div style={upperStyle}>CAREERS</div>
        <div style={lowerStyle}>
          <div style={innerLeft}>
            <motion.div
              style={{
                fontSize: "3.0rem",
                fontWeight: "bolder",
                lineHeight: "3.5rem",
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
              I want to join this{" "}
              <span style={{ color: "#78e690" }}>world-class team</span> and
              create innovative brands and applications.
            </motion.div>
            <a href="/resume.docx">
              <button style={buttonStyle}>MY RESUME</button>
            </a>
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
            src="/images/back-facing.png"
          ></motion.img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CareersPage;
