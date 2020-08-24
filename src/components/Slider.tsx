import React from "react";
import { Carousel } from 'react-responsive-carousel';

import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {}

const Slider: React.FC<Props> = () => {
    const images = [
		"https://www.fermimn.edu.it/img/showlogo.php?slidecode=26",
		"https://www.fermimn.edu.it/img/showlogo.php?slidecode=27",
		"https://www.fermimn.edu.it/img/showlogo.php?slidecode=28",
		"https://www.fermimn.edu.it/img/showlogo.php?slidecode=29",
		"https://www.fermimn.edu.it/img/showlogo.php?slidecode=30",
    ];

    return (
        <div className="slider-container">
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
                {images.map((value, index) => {
                    return <div key={"slider-image" + index}><img src={value} alt="Impossibile caricare l'immagine"/></div>
                })}
            </Carousel>
        </div>
    );
};

export default Slider;
