import React, {useEffect, useRef, useState} from 'react';
import './CollagePage.css';
import {Snowfall} from "react-snowfall";

const imageUrls = [
    '/img1.jpeg',
    '/img2.jpeg',
    '/img3.jpeg',
    '/img4.jpeg',
];



const rotations=['10 deg','-20deg','30deg','-20deg']

const CollagePage = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const startMusic = () => {
        const audio = audioRef.current;
        audio.play(); // Start the audio
        audio.loop = false; // Make it loop
    };
    useEffect(() => {
        startMusic()
    }, []);
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '90vh'}}>
            <Snowfall/>
            <div className="collage-container">
                {imageUrls.map((url, index) => (
                    <div
                        key={index}
                        className="image-container"
                        style={{transform: `rotate(${rotations[index]})`}} // Apply random rotation
                    >
                        <img src={url} alt={`collage-image-${index}`} className="collage-image"/>
                    </div>
                ))}
            </div>
            <h1 style={{textAlign: 'center'}}>Bs hogya bro aajka, isse jyada effort nahi daal skte the

                All the very best for the day!</h1>
            <audio ref={audioRef} src="/myvoice.mp3" preload="auto"/>
        </div>

    );
};

export default CollagePage;