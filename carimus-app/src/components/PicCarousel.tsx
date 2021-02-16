import "../App.css";

import { AnimatePresence, motion } from "framer-motion";
import React, { CSSProperties, useEffect, useState } from "react";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const imagePath = "/images/";
const images = [
    imagePath + "backgroundImage1.png",
    imagePath + "backgroundImage2.png",
    imagePath + "backgroundImage3.png",
    imagePath + "backgroundImage4.png",
];

const redirects = [
    "/../projects/quanta-services",
    "/../projects/sepi-inc",
    "/../projects/swing-racquet",
    "/../projects/ncsu-clean-energy",
];

const header1Style = {
    fontSize: "1.4em",
};
const fillerStyle = {
    fontSize: "0.9em",
};
const floatingText = [
    <div>
        <span style={header1Style}>Quanta Services</span>
        <br />
        <span style={fillerStyle}>Quanta Services is a leading specialty contractor with the largest and highly trained skilled workforce in North America.</span>
    </div>,
    <div>
        <span style={header1Style}>SEPI, inc</span>
        <br />
        <span style={fillerStyle}>
        Sepi is an award-winning women-owned firm offering concept to completion services, technical solutions, and inspired design for the built environment.
        </span>
    </div>,
    <div>
        <span style={header1Style}>Swing Racquet + Paddle</span>
        <br />
        <span style={fillerStyle}>
        Located in the heart of the Triangle, Swing’s 45-acre campus features Tennis, Pickleball, Padel, Beach Tennis, and Table Tennis bringing the community together around their passion for racquet + paddle sports.
        </span>
    </div>,
    <div>
        <span style={header1Style}>NC Clean Energy Technology Center + NC State University</span>
        <br />
        <span style={fillerStyle}>
        The NC Clean Energy Technology Center is a state agency respected for its assistance to the burgeoning “clean tech” sector in North Carolina and is one of the premier clean energy centers of knowledge in the United States. 
        </span>
    </div>,
];

const foregroundVariants = {
    enter: (direction: number) => {
        return {
            zIndex: 3,
            opacity: 0,
            maxWidth: direction > 0 ? "50vw" : "45vw",
            left: direction > 0 ? "120vw" : "2vw",
        };
    },
    center: {
        zIndex: 4,
        opacity: 1,
        maxWidth: "50vw",
        left: "48vw",
    },
    exit: (direction: number) => {
        return {
            zIndex: 3,
            opacity: 0,
            maxWidth: direction < 0 ? "50vw" : "45vw",
            left: direction < 0 ? "120vw" : "2vw",
        };
    },
};

const backgroundVariants = {
    enter: (direction: number) => {
        return {
            zIndex: 1,
            opacity: direction > 0 ? 0.5 : 0.2,
            maxWidth: direction > 0 ? "45vw" : "42vw",
            left: direction > 0 ? "48vw" : "-20vw",
            filter: "blur(4px) saturate(50%)",
        };
    },
    center: {
        zIndex: 2,
        opacity: 0.5,
        maxWidth: "45vw",
        left: "2vw",
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            opacity: direction < 0 ? 1 : 0,
            maxWidth: direction < 0 ? "50vw" : "42vw",
            left: direction < 0 ? "48vw" : "-20vw",
        };
    },
};

const floatingTextVariant = {
    enter: (direction: number) => {
        return {
            zIndex: 10,
            opacity: 0,
            left: "60vw",
        };
    },
    center: {
        zIndex: 10,
        opacity: 1,
        left: "65vw",
    },
    exit: (direction: number) => {
        return {
            zIndex: 10,
            opacity: 0,
            left: direction < 0 ? "120vw" : "48vw",
        };
    },
};

const imageContainer: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50vw",
};

const foregroundImageStyle: CSSProperties = {
    position: "absolute",
    maxWidth: "50vw",
    top: "10vh",
    cursor: "pointer",
};
const backgroundImageStyle: CSSProperties = {
    position: "absolute",
    maxWidth: "45vw",
    top: "10vh",
    left: "2vw",
    opacity: "0.5",
};

const floatingTextStyle: CSSProperties = {
    position: "absolute",
    top: "60vh",
    zIndex: 10,
    color: "white",
    width: "30vw",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: "rgba(0,0,0,0.65)",
    boxShadow: "0px 0px 100px #000000"
};

const PicCarousel: React.FunctionComponent = () => {
    const [[selectedPage, direction], setSelectedPage] = useState([0, 1]);

    const updatePage = (direction: number) => {
        setSelectedPage(
            //if it goes negative, set it back to 3, if not then add 1 and mod 4
            [
                selectedPage + direction < 0
                    ? 3
                    : (selectedPage + direction) % 4,
                direction,
            ]
        );
    };

    useEffect(() => {
        const updater = setTimeout(() => {
            setSelectedPage([(selectedPage + 1) % 4, 1]);
            console.log(selectedPage);
        }, 5500);

        return () => clearTimeout(updater);
    });

    return (
        <>
            <div style={imageContainer}>
                <AnimatePresence initial={true} custom={direction}>
                    <motion.img
                        style={foregroundImageStyle}
                        key={selectedPage}
                        custom={direction}
                        variants={foregroundVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { duration: 1 },
                            opacity: { duration: direction > 0 ? 0.5 : 1 },
                        }}
                        src={images[selectedPage]}
                        onClick={() =>
                            (window.location.href = redirects[selectedPage])
                        }
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                    />
                </AnimatePresence>
                <AnimatePresence initial={true} custom={direction}>
                    <motion.img
                        style={backgroundImageStyle}
                        key={selectedPage}
                        custom={direction}
                        variants={backgroundVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { duration: 1 },
                            opacity: { duration: direction > 0 ? 0.5 : 1 },
                        }}
                        src={images[(selectedPage + 3) % 4]}
                    />
                </AnimatePresence>
                <AnimatePresence initial={true} custom={direction}>
                    <motion.div
                        key={selectedPage}
                        style={floatingTextStyle}
                        custom={direction}
                        variants={floatingTextVariant}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { duration: 1 },
                            opacity: { duration: 0.5 },
                        }}
                        onClick={() =>
                            (window.location.href = redirects[selectedPage])
                        }
                    >
                        {floatingText[selectedPage]}
                    </motion.div>
                </AnimatePresence>
                <span style={{
                        position: "absolute",
                        top: "calc(35vw + 13vh)",
                        right: "7.7vw",
                        zIndex: 3,
                        cursor: "pointer",
                        color: "#ffffff",
                        fontSize: "0.9em",
                    }} onClick={() => updatePage(-1)}>LAST</span>
                <FontAwesomeIcon
                    icon={faArrowRight}
                    style={{
                        position: "absolute",
                        top: "calc(35vw + 13vh)",
                        right: "2vw",
                        zIndex: 3,
                        cursor: "pointer",
                        color: "#78e690",
                    }}
                    onClick={() => updatePage(-1)}
                />
                <span style={{
                        position: "absolute",
                        top: "calc(35vw + 13vh)",
                        right: "3.7vw",
                        zIndex: 3,
                        cursor: "pointer",
                        color: "#ffffff",
                        fontSize: "0.9em",
                    }} onClick={() => updatePage(1)}>NEXT</span>
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    style={{
                        position: "absolute",
                        top: "calc(35vw + 13vh)",
                        right: "10vw",
                        zIndex: 3,
                        cursor: "pointer",
                        color: "#78e690",
                    }}
                    onClick={() => updatePage(1)}
                />
            </div>
        </>
    );
};

export default PicCarousel;
