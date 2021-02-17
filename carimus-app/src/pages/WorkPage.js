import "./../App.css";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import PicCarousel from "./../components/PicCarousel";

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

function WorkPage() {
  return (
    <div className="WorkPage">
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
            Experience the World of{" "}
            <span style={{ color: "#78e690" }}>Carimus</span>
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
            Our work sets us and our clients apart. We serve everyone from
            startups to Fortune 500 companies, with our unique combination of
            strategy, creative, and technology. Together, we build brands and
            products that inspire.
          </motion.div>
        </div>

        <div style={carouselWrapper}>
          <PicCarousel />
        </div>
      </div>
      <div style={{ width: "100vw", height: "20vw" }}></div>
      <Footer />
    </div>
  );
}

export default WorkPage;
