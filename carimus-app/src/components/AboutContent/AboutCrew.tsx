import "../../App.css";

import React, { CSSProperties } from "react";
import { useEffect, useState } from "react";
import Profile from "./Profile";

const firstSection: CSSProperties = {
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  paddingTop: "10vh",
  background:
    "linear-gradient(60deg, rgba(36,44,106,1) 0%, rgba(22,10,67,1) 100%)",
};

const upperStyle: CSSProperties = {
  width: "100vw",
  height: "8vh",
  fontWeight: "bolder",
  letterSpacing: "3.3px",
  textAlign: "center",
  marginBottom: "4vh",
};

const lowerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  paddingLeft: "13vw",
};

type items = {
  name: String;
  position: String;
  description: String;
  image_link: String;
};
const AboutCrew: React.FunctionComponent = () => {
  const fetchItems = async () => {
    // Production
    // const data = await fetch("http://leoascenzi.com:5000/test");
    //Dev
    const data = await fetch("http://localhost:5000/test");
    const items = await data.json();
    console.log(items);
    setProfileData(items);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  const [profileData, setProfileData] = useState<items[]>([]);

  return (
    <>
      <div style={firstSection}>
        <div style={upperStyle}>CREW</div>
        <div style={lowerStyle}>
          <div
            style={{
              width: "80vw",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {profileData.map((item, i) => {
              return (
                <Profile
                  key={i}
                  name={item.name}
                  position={item.position}
                  description={item.description}
                  image_link={item.image_link}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCrew;
