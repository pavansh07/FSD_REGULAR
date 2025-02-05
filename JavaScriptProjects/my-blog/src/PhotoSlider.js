import React from "react";
import "./index.css";

const PhotoSlider = () => {
    const images = [
        require("./images/cri.jpg"),
        require("./images/cric.jpg"),
        require("./images/cricke.jpg"),
        require("./images/crick.jpg"),
    ];

    return (
        <div className="slider-background">
            <div className="slider">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} />
                ))}
            </div>
        </div>
    );
};

export default PhotoSlider;
