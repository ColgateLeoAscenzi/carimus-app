import "../../App.css";

import React, { CSSProperties } from "react";
import { useEffect, useState } from "react";

type items = {
  name: String;
  position: String;
  description: String;
  image_url: String;
};

const profileWrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "20vw",
  height: "20vw",
  fontSize: "1rem",
};
const Profile: React.FunctionComponent<items> = ({
  name,
  position,
  description,
  image_url,
}: items) => {
  return (
    <>
      <div style={profileWrapper}>{name}</div>
    </>
  );
};

export default Profile;
