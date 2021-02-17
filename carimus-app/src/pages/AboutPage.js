import "./../App.css";
import Footer from "../components/Footer/Footer";
import AboutTop from "../components/AboutContent/AboutTop";
import AboutMiddle from "../components/AboutContent/AboutMiddle";
import AboutCrew from "../components/AboutContent/AboutCrew";

function AboutPage() {
  return (
    <>
      <div className="AboutPage">
        <AboutTop />
        <AboutMiddle />
        <AboutCrew />
        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
