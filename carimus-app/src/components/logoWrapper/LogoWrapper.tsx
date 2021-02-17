import "./../../App.css";
import React from "react";

const LogoWrapper: React.FunctionComponent = () => {
   

    return (
        <>
        <div
            style={{
              width: "100vw",
              height: "32%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "60%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <img
                  style={{ width: "8vw" }}
                  src="/images/logo-bank-audi-white.svg"
                  alt="audi-logo"
                />
                <img
                  style={{ width: "8vw" }}
                  src="/images/logo-chive-white.svg"
                  alt="chive-logo"
                />
                <img
                  style={{ width: "8vw" }}
                  src="/images/logo-gogo-white.svg"
                  alt="gogo-logo"
                />
                <img
                  style={{ width: "8vw" }}
                  src="/images/logo-ikea-white.svg"
                  alt="ikea-logo"
                />
                <img
                  style={{ width: "8vw" }}
                  src="/images/logo-mears-white.svg"
                  alt="mears-logo"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <img
                  style={{ width: "8vw" }}
                  src="/images/logo-nc-state-white.svg"
                  alt="nc-state-logo"
                />
                <img
                  style={{ width: "8vw" }}
                  src="/images/logo-ncv0-white.svg"
                  alt="ncv0-logo"
                />
                <img
                  style={{ width: "8vw" }}
                  src="/images/logo-quanta-white.svg"
                  alt="quanta-logo"
                />
                <img
                  style={{ width: "8vw" }}
                  src="/images/logo-raytheon-white.svg"
                  alt="raytheon-logo"
                />
                <img
                  style={{ width: "8vw" }}
                  src="/images/logo-grifols-white.svg"
                  alt="grifols-logo"
                />
              </div>
            </div>
          </div>
        </>
    );
};

export default LogoWrapper;
