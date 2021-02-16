import "./../App.css";
import Footer from "../components/Footer/Footer";
import BlankComponent from "./../components/BlankComponent";
import { useEffect } from "react";

function AboutPage() {
  const fetchItems = async () => {
    // Production
    // const data = await fetch("http://leoascenzi.com:5000/test");
    //Dev
    const data = await fetch("http://localhost:5000/test");
    const items = await data.json();
    console.log(items);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <div className="AboutPage">
        {/* <BlankComponent />
         */}
        <div style={{ width: "100vw", height: "90vh" }}>About Page</div>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
