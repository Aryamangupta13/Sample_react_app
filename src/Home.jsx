import React from "react";
import getstartedimg from "./images/getstartedimg.svg"
import Common from "./Common";
const Home = () => {
    return (
        <>
            <Common name="Grow Your Bussiness with " imgsrc={getstartedimg} visit="/services" btnname="Get Started" />
        </>
    )
}

export default Home;