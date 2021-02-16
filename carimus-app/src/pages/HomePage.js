import "./../App.css";
import Footer from "../components/Footer/Footer";
import PicCarousel from "../components/PicCarousel";
import { motion } from "framer-motion";

const firstSection = {
  width: "100vw",
  height: "90vh",
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
              A <span style={{ color: "#78e690" }}>world-class team</span> to
              build your brand, strategy, and technology, taking your business
              to the next level.
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
              We are a diverse team of strategists, creatives and engineers
              building the best brands, software and technology solutions
              available. Together, we do important work with people and
              companies we admire.
            </motion.div>
          </div>

          <div style={carouselWrapper}>
            <PicCarousel />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
