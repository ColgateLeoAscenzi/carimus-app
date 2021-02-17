import "./../App.css";
import Footer from "../components/Footer/Footer";
import AboutTop from "../components/AboutContent/AboutTop";
import AboutMiddle from "../components/AboutContent/AboutMiddle";
import { useEffect } from "react";
import { motion } from "framer-motion";

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
        <AboutTop />
        <AboutMiddle />
        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
