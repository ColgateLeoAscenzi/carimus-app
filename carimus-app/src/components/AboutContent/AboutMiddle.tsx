import "../../App.css";

import React, { CSSProperties } from "react";
import { motion } from "framer-motion";
import AboutStats from "./AboutStats";

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
  height: "8vh",
  fontWeight: "bolder",
  letterSpacing: "3.3px",
};

const lowerStyle: CSSProperties = { display: "flex", flexDirection: "row" };

const innerLeft: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "45vw",
  paddingRight: "13vw",
};
const innerRight: CSSProperties = {
  marginTop: "1.5vh",
  display: "flex",
  flexDirection: "row",
  width: "49vw",
};

const AboutMiddle: React.FunctionComponent = () => {
  return (
    <>
      <div style={firstSection}>
        <div style={upperStyle}>MY MISSION</div>
        <div style={lowerStyle}>
          <div style={innerLeft}>
            <motion.div
              style={{
                paddingBottom: "2vh",
                fontSize: "2.2rem",
                fontWeight: "bolder",
              }}
              animate={{
                opacity: [0, 1],
                y: ["200px", "0px"],
              }}
              transition={{
                y: { duration: 1, delay: 0.3 },
                opacity: { duration: 1, delay: 0.2 },
              }}
            >
              I studied Computer Science to make a{" "}
              <span style={{ color: "#78e690" }}>change</span> in the world
              while working <span style={{ color: "#78e690" }}>hard</span> and
              having <span style={{ color: "#78e690" }}>fun</span>.
            </motion.div>
            <motion.div
              style={{
                fontSize: "1rem",
                fontWeight: "normal",
              }}
              animate={{
                opacity: [0, 1],
                y: ["200px", "0px"],
              }}
              transition={{
                y: { duration: 1, delay: 0.5 },
                opacity: { duration: 1, delay: 0.6 },
              }}
            >
              Beginning in 2016, I set off on my path through university intent
              on studying Math and Physics. When I didn't get into the math
              course I wanted, I instead took a computer science course for the
              fun of it. From that point forward I programmed both for school
              and my own personal enjoyment.{" "}
            </motion.div>
            <motion.div
              style={{
                paddingTop: "1vh",
                fontSize: "1rem",
                fontWeight: "normal",
              }}
              animate={{
                opacity: [0, 1],
                y: ["200px", "0px"],
              }}
              transition={{
                y: { duration: 1, delay: 0.5 },
                opacity: { duration: 1, delay: 0.6 },
              }}
            >
              I dove deep into my courses and asked for extra assignments when
              possible just to get some extra challenges and learn more. One of
              my favourite projects was a web based Super Smash Brothers
              (fighting videogame) clone I built with a few friends in that
              class. Seeing the joy on the faces of everyone who tried it that
              day reinforced my drive to create tools that people would enjoy
              using.{" "}
            </motion.div>
            <motion.div
              style={{
                paddingTop: "1vh",
                fontSize: "1rem",
                fontWeight: "normal",
              }}
              animate={{
                opacity: [0, 1],
                y: ["200px", "0px"],
              }}
              transition={{
                y: { duration: 1, delay: 0.5 },
                opacity: { duration: 1, delay: 0.6 },
              }}
            >
              At Carimus I hope to be a help to both existing projects, and in
              the future perhaps lead/design my own that can allow customers to
              realize their projects which in turn can inspire a large audience
              and make the world a better place overall.{" "}
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
            <AboutStats />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutMiddle;
