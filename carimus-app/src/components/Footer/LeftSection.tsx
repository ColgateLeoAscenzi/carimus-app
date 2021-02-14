import React, {CSSProperties} from "react";
import "./../../App.css";

// import ReactDOM from 'react-dom';
// import {Link} from 'react-router-dom';

// import {Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

const leftSectionStyle: CSSProperties = {
    width: "33%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2vw",
    textAlign: "center"
}



const LeftSection:React.FunctionComponent = () => {
    return(
        <>
        <div style = {leftSectionStyle}>
            <img id = "CarimusFooterLogo" src={process.env.PUBLIC_URL+"/logo-footer.png"} alt="Logo" onClick = {() => {window.location.href = "./../"}} style = {{cursor: "pointer", width: "45%", textAlign: "center" }}/>
        </div>
        </>
    );
}

export default LeftSection;