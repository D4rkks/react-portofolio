import React, { useEffect, useState } from "react";
import "./CardSlider.css";
import reactIcon from './assets/reactjs.png';
import javascriptIcon from './assets/javascript.png';
import htmlIcon from './assets/html.png';
import cssIcon from './assets/css.svg';
import gitIcon from './assets/git2.png';
import nodejsIcon from './assets/node.png';
import cppicon from './assets/c++.png';
import csicon from './assets/cs.png';
import javaicon from './assets/java.png';
import openglicon from './assets/opengl.png';
import opencvicon from './assets/opencv.png';
import mongoicon from './assets/mongodb.png';
import neticon from './assets/net.svg';

const CardSlider = () => {
    const cards = [
        { name: "React", icon: reactIcon },
        { name: "JavaScript", icon: javascriptIcon },
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
        { name: "Git", icon: gitIcon },
        { name: "Node.js", icon: nodejsIcon },
        { name: "C++", icon: cppicon },
        { name: "C#", icon: csicon },
        { name: "Java", icon: javaicon },
        { name: "OpenGL", icon: openglicon },
        { name: "OpenCV", icon: opencvicon },
        { name: "Mongo", icon: mongoicon },
        { name: ".Net FR", icon: neticon },
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

export default CardSlider;
