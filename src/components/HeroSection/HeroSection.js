import React from 'react';
import './HeroSection.css';
import '../../App.css';

const HeroSection = () => {
    return(
        <div className="hero-container">
            <video src="videos/video-1.mp4" autoPlay loop muted />
            <h1>EXPLORE NEW ZEALAND</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                {/* <Button className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--medium">GET STARTED</Button> */}
            </div>
        </div>
    );

}

export default HeroSection;
