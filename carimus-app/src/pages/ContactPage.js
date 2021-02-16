import "./../App.css";
import Footer from "../components/Footer/Footer";
import BlankComponent from "./../components/BlankComponent";

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

function ContactPage() {
  return (
    <div className="ContactPage">
      <div style={firstSection}>
        <div style={upperStyle}>CONTACT</div>
        <div style={lowerStyle}>
          <div style={innerLeft}>Ready for liftoff? Let's launch.</div>
          <div style={innerRight}>
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
                  letterSpacing: "3.3px",
                }}
              >
                Phone 919 710 5002
              </span>
              <span
                style={{
                  fontWeight: "bolder",
                  letterSpacing: "3.3px",
                }}
              >
                Personal Email leo.ascenzi@gmail.com
              </span>
              <span
                style={{
                  fontWeight: "bolder",
                  letterSpacing: "3.3px",
                }}
              >
                Work Email lascenzi@prometheusgroup.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
