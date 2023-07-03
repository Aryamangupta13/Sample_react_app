import React from "react";
import imgabout from "./images/aboutusimg.svg"
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common name="Welcome to about page of " imgsrc={imgabout} visit="/contact" btnname="Contact Now" />
        </>
    )
}

export default About;