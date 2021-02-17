import "../../App.css";

import React, { CSSProperties, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
type items = {
  name: String;
  position: String;
  description: String;
  image_link: String;
};

const profileWrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "20vw",
  height: "20vw",
  fontSize: "1rem",
  borderRadius: "50%",
};

const formatText = (textToFormat: String) => {
  let stringParts = textToFormat.split("\\n");
  //   for (var i = 0; i < textToFormat.length - 2; i++) {
  //     if (textToFormat.substring(i, i + 2) === "\\n") {
  //       stringParts.push("");
  //     }
  //   }
  return stringParts;
};

const Profile: React.FunctionComponent<items> = ({
  name,
  position,
  description,
  image_link,
}: items) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div style={profileWrapper} onClick={handleShow}>
        <div
          style={{
            background: `url(${image_link}) 50% 0% / 100% no-repeat`,
            borderRadius: "50%",
            height: "13vw",
            width: "13vw",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "90%",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.5em",
                backgroundColor: "rgba(0,0,0,0.5)",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.7)",
              }}
            >
              {name}
            </span>
            <br />
            <span
              style={{
                fontWeight: "bold",
                letterSpacing: "3.3px",
                textAlign: "center",
              }}
            >
              {position}
            </span>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} style={{ minWidth: "90%" }}>
        <Modal.Body style={{ minWidth: "90%", padding: "0px" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "50%", height: "100%" }}>
              <div
                style={{
                  background: `url(${image_link}) 50% 0% / 150% no-repeat`,
                  height: "90vh",
                }}
              ></div>
            </div>
            <div
              style={{
                width: "50%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                padding: "2vh",
              }}
            >
              <span style={{ fontSize: "2.2em", fontWeight: "bolder" }}>
                {name}
              </span>
              <span
                style={{
                  fontSize: "1em",
                  fontWeight: "bolder",
                  letterSpacing: "3.3px",
                  paddingBottom: "3vh",
                }}
              >
                {position}
              </span>
              {formatText(description).map((desc, i) => {
                return (
                  <span
                    style={{
                      fontWeight: "bolder",
                      paddingBottom: "2vh",
                      lineHeight: "3vh",
                    }}
                  >
                    {desc}
                  </span>
                );
              })}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Profile;
