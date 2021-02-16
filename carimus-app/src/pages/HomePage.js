import "./../App.css";
import Footer from "../components/Footer/Footer";
import PicCarousel from "../components/PicCarousel";

const firstSection = {
  width: "100vw",
  height: "90vh",
};

const blurbWrapper = {
  padding: "5vw",
  width: "49vw",
  height: "100%",
  zIndex: 11,
};

const carouselWrapper = {
  width: "49vw",
  height: "100%",
  zIndex: 3,
};

const headerText = {
  fontSize: "2em",
  fontWeight: "bolder",
  color: "white",
  zIndex: 10,
};

const fillerText = {
  color: "white",
  zIndex: 10,
};

function HomePage() {
  return (
    <div className="HomePage">
      <div style={firstSection}>
        <div style={blurbWrapper}>
          <div style={headerText}>
            A <span style={{ color: "#78e690" }}>world-class team</span> to
            build your brand, strategy, and technology, taking your business to
            the next level.
          </div>
          <div style={fillerText}>
            We are a diverse team of strategists, creatives and engineers
            building the best brands, software and technology solutions
            available. Together, we do important work with people and companies
            we admire.
          </div>
        </div>

        <div style={carouselWrapper}>
          <PicCarousel />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
