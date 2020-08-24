import React, { useState } from "react";
import "./Slider.css";

interface Props {}

const Slider: React.FC<Props> = () => {
    const [index, setIndex] = useState(0);
    const images = [
		"https://www.fermimn.edu.it/img/showlogo.php?slidecode=26",
		"https://www.fermimn.edu.it/img/showlogo.php?slidecode=27",
		"https://www.fermimn.edu.it/img/showlogo.php?slidecode=28",
		"https://www.fermimn.edu.it/img/showlogo.php?slidecode=29",
		"https://www.fermimn.edu.it/img/showlogo.php?slidecode=30",
    ];

    return (
        <div className="slider-container">
            <img
                className="slider-image"
                src={images[index]}
                alt="Impossibile caricare l'immagine"
            />

            <button className="slider-prev" onClick={() => setIndex((index + images.length - 1) % images.length)}>&#10094;</button>
            <button className="slider-next" onClick={() => setIndex((index + 1) % images.length)}>&#10095;</button>

            <div className="slider-dot-container">
                {images.map((value, i) => {
                    if (index === i) {
                        return <span className="slider-dot slider-dot-active" key={"slider-" + i}></span>
                    }

                    return <span className="slider-dot" onClick={() => setIndex(i)} key={"slider-" + i}></span>
                })}
            </div>
        </div>
    );
};

export default Slider;
