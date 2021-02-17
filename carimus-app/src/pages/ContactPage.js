import "./../App.css";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";

const firstSection = {
  width: "100vw",
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  paddingLeft: "4vw",
  paddingTop: "10vh",
};

const upperStyle = {
  width: "100vw",
  height: "10vh",
  fontWeight: "bolder",
  letterSpacing: "3.3px",
};

const lowerStyle = { display: "flex", flexDirection: "row" };

const innerLeft = { display: "flex", flexDirection: "column", width: "49vw" };
const innerRight = { display: "flex", flexDirection: "row", width: "49vw" };

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

function ContactPage() {
  return (
    <div className="ContactPage">
      <div style={firstSection}>
        <div style={upperStyle}>CONTACT</div>
        <div style={lowerStyle}>
          <div style={innerLeft}>
            <motion.div
              style={{
                fontSize: "3.67rem",
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
              Ready for liftoff? Let's
              <br />
              <span style={{ color: "#78e690" }}> launch.</span>
            </motion.div>
            <span style={{ fontWeight: "bolder" }}>
              Interested in starting a new project?
            </span>
            <span style={{ fontWeight: "bolder" }}>
              We’d love to help you get it off the ground.
            </span>
            <a href="./contact">
              <motion.button
                style={buttonStyle}
                animate={{
                  opacity: [0, 1],
                  y: ["200px", "0px"],
                }}
                transition={{
                  y: { duration: 1, delay: 0.85 },
                  opacity: { duration: 1, delay: 0.9 },
                }}
              >
                GET IN TOUCH
              </motion.button>
            </a>
          </div>
          <motion.div
            style={innerRight}
            animate={{
              opacity: [0, 1],
              y: ["400px", "0px"],
            }}
            transition={{
              y: { duration: 1, delay: 0.35 },
              opacity: { duration: 1, delay: 0.4 },
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <span
                style={{
                  fontWeight: "bolder",
                  letterSpacing: "3.3px",
                  paddingBottom: "2vh",
                }}
              >
                LOCATION
              </span>
              <span
                style={{
                  fontWeight: "bolder",
                  letterSpacing: "3.3px",
                  color: "#78e690",
                  fontSize: "2em",
                }}
              >
                Raleigh, NC
              </span>
              <span
                style={{
                  fontWeight: "bolder",
                  letterSpacing: "3.3px",
                }}
              >
                120 Saint Albans Drive, Apt 237
              </span>
              <span
                style={{
                  fontWeight: "bolder",
                  letterSpacing: "3.3px",
                }}
              >
                Raleigh, NC 27609
              </span>
              <div
                onClick={() =>
                  (window.location.href =
                    "https://goo.gl/maps/ZGXCci5V4z4pUXvg9")
                }
              >
                <img
                  style={{ height: "1.5vw", paddingRight: "1vw" }}
                  src="/images/rocketInverse.png"
                  alt="rocket"
                />
                <a
                  stlye={{ fontWeight: "bolder", letterSpacing: "3.3px" }}
                  href="https://goo.gl/maps/ZGXCci5V4z4pUXvg9"
                >
                  DIRECTIONS
                </a>
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <span
                style={{
                  fontWeight: "bolder",
                  letterSpacing: "3.3px",
                  paddingBottom: "2vh",
                }}
              >
                INFO
              </span>
              <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Phone <span style={{ fontWeight: "normal" }}>919 710 5002</span>
              </span>
              <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Email{" "}
                <span style={{ fontWeight: "normal" }}>
                  leo.ascenzi@gmail.com
                </span>
              </span>
              <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                Email{" "}
                <span style={{ fontWeight: "normal" }}>
                  lascenzi@prometheusgroup.com
                </span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
