import "./../App.css";
import Footer from "../components/Footer/Footer";
import PicCarousel from "../components/PicCarousel";
import { motion } from "framer-motion";

const firstSection = {
  width: "100vw",
  height: "68vh",
};

const blurbWrapper = {
  padding: "5vw",
  width: "45vw",
  zIndex: 11,
  position: "relative",
};

const carouselWrapper = {
  width: "30vw",
  zIndex: 3,
};

const headerText = {
  fontSize: "3em",
  fontWeight: "bolder",
  color: "white",
};

const fillerText = {
  color: "white",
  fontSize: "1.2em",
  fontWeigh: "bolder",
};

const secondSection = {
  height: "85vh",
  width: "100vw",
  backgroundColor: "#1b1650",
  display: "flex",
  flexDirection: "column",
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

function HomePage() {
  return (
    <>
      <div className="HomePage">
        <div style={firstSection}>
          <div style={blurbWrapper}>
            <motion.div
              style={headerText}
              animate={{
                opacity: [0, 1],
                y: ["400px", "0px"],
              }}
              transition={{ y: { duration: 1 } }}
            >
              A <span style={{ color: "#78e690" }}>world-class developer</span>{" "}
              to build your brand, strategy, and technology, taking Carimus to
              the next level.
            </motion.div>
            <motion.div
              style={fillerText}
              animate={{
                opacity: [0, 1],
                y: ["200px", "0px"],
              }}
              transition={{
                y: { duration: 1, delay: 0.75 },
                opacity: { duration: 1, delay: 0.8 },
              }}
            >
              I am a motivated, hardworking software engineer who would love to
              work alongside, creatives and engineers to build the best brands,
              software and technology solutions available. Together, I want to
              do important work with people and companies we both admire.
            </motion.div>
          </div>

          <div style={carouselWrapper}>
            <PicCarousel />
          </div>
        </div>
        <div style={secondSection}>
          <div style={{ width: "100vw", height: "36%", padding: "2vw" }}>
            <a href="./about">
              <button style={buttonStyle}>ABOUT US</button>
            </a>
            <br />
            <div
              style={{ paddingTop: "6vh", cursor: "pointer" }}
              onClick={() => (window.location.href = "./contact")}
            >
              <motion.img
                src="/images/rocket.png"
                whileHover={{ y: -10 }}
              ></motion.img>
              <span
                style={{
                  paddingLeft: "4px",
                  fontWeight: "bolder",
                  letterSpacing: "3.6px",
                }}
              >
                LET'S LAUNCH
              </span>
            </div>
          </div>
          <div
            style={{
              width: "100vw",
              height: "32%",
              justifyContent: "center",
              display: "flex",
              textAlign: "center",
            }}
          >
            <div style={{ width: "33vw" }}>
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "1.3em",
                }}
              >
                Delivering strategy, creative and technical services for the
                world's leading brands.
              </span>
            </div>
          </div>
          <div style={{ width: "100vw", height: "32%" }}> like these</div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
