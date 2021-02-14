import React, {CSSProperties} from "react";
import "./../../App.css";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";

// import ReactDOM from 'react-dom';
// import {Link} from 'react-router-dom';

// import {Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';


const footerWrapperStyle: CSSProperties = {
    backgroundColor: "#78E690",
    width: "100vw",
    height: "75vh",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "5vw",
    paddingRight: "5vw",
    paddingTop: "5vw",
    paddingBottom: "5vw",
}

const innerFooterWrapper: CSSProperties = {
    backgroundColor: "#78E690",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    // paddingLeft: "5vw",
    // paddingRight: "5vw",
    // paddingTop: "10vw",
}


const Footer:React.FunctionComponent = () => {
    return(
        <>
        <div style = {footerWrapperStyle}>
            <div style = {innerFooterWrapper}>
                <LeftSection/>
                <MiddleSection/>
                <RightSection/>
            </div>
            <div style = {{width: "99%", textAlign: "center", marginTop: "2vw", padding: "1vw", color: "#160B43", fontWeight: "bolder"}}>
                2021 Leo Ascenzi | Terms & Conditions | Designed by Leo Ascenzi
            </div>
        </div>
        </>
    );
}

export default Footer;