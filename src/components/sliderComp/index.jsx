// src/components/sliderComp/ImageSlider.jsx
import React, { useEffect } from "react";
import style from './index.module.css';

const ImageSlider = ({ firstText, items = [], halfLogo, lastText, color }) => {
    useEffect(() => {
        // Any side effects can go here if needed
    }, []);

    return (
        <div className={style.container}>
            <p dangerouslySetInnerHTML={{ __html: firstText }} style={{margin: '0'}} />

            {items.map((item, index) => (
                <div key={index} className={style.secondDiv}>
                    <div className={style.dash} style={{backgroundColor: color}}></div>
                    <p style={{margin: '0', marginTop: '-10px', gap: '-20px'}}>{item.text}</p>
                </div>
            ))}

            <div className={style.thirdDiv}>
                <div className={style.halfLogo}>
                    <img src={halfLogo} alt="half-logo" />
                </div>
                <p>{lastText}</p>
            </div>
        </div>
    );
};

export default ImageSlider;
