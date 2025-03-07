import React, { useEffect, useState } from "react";
import "./CardSlider2.css";

import psIcon from './assets/ps.png';
import vegasIcon from './assets/vegas.png';
import premiereIcon from './assets/premiere.png';
import blenderIcon from './assets/blender.png';
import c4dIcon from './assets/c4d.png';
import unityIcon from './assets/unity.png';
import ue4Icon from './assets/ue4.png';
import arduinoIcon from './assets/arduino.png';
import linuxIcon from './assets/linux.png';
import idaIcon from './assets/ida.png';
import a64Icon from './assets/x64dbg.png';
import ceIcon from './assets/ce.png';


const CardSlider2 = () => {
    const cards = [
        { name: "Photoshop", icon: psIcon },
        { name: "Sony Vegas", icon: vegasIcon },
        { name: "Adobe Premiere", icon: premiereIcon },
        { name: "Blender", icon: blenderIcon },
        { name: "C4D", icon: c4dIcon },
        { name: "Unity", icon: unityIcon },
        { name: "UE4", icon: ue4Icon },
        { name: "Arduino", icon: arduinoIcon },
        { name: "Linux", icon: linuxIcon },
        { name: "IDA", icon: idaIcon },
        { name: "x64dbg", icon: a64Icon },
        { name: "Cheat EG", icon: ceIcon },
    ];

    const [offset, setOffset] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const cardWidth = 130; 
    const totalCards = cards.length; 
    const totalWidth = cardWidth * totalCards; 

    const duplicatedCards = [...cards, ...cards];

    useEffect(() => {
        let interval;

        if (!isPaused) {
            interval = setInterval(() => {
                setOffset((prevOffset) => {
                    const nextOffset = prevOffset + cardWidth; 
                    return nextOffset >= totalWidth ? 0 : nextOffset;
                });
            }, 100); // Atualiza a cada 100ms
        }

        return () => clearInterval(interval); 
    }, [isPaused, totalWidth, cardWidth]);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <div 
            className="slider-container"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
        >
            <div className="fade-right"></div>
            <div
                className={`slider ${isPaused ? 'paused' : ''}`}
                style={{
                    transform: `translateX(-${offset}px)`,
                    width: `${cardWidth * duplicatedCards.length}px`,
                }}
            >
                {duplicatedCards.map((card, index) => (
                    <div 
                        className="slide" 
                        key={index}
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave} 
                    >
                        <img src={card.icon} alt={card.name} className="white-icon" />
                        <h3>{card.name}</h3>
                    </div>
                ))}
            </div>
            <div className="fade-left"></div>
        </div>
    );
};

export default CardSlider2;