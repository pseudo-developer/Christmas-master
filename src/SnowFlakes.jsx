import React from 'react';
import Particles from 'react-tsparticles';
import './App.css';
import SnowFlakeImg from './assets/snowflake.png'

const SnowfallEffect = () => {
    return (
        <div className="wrapper">
            {/* Particles component for snowflakes falling across the screen */}
            <Particles
                id="tsparticles"
                options={{
                    particles: {
                        number: {
                            value: 200, // Number of particles (snowflakes)
                            density: {
                                enable: true,
                                value_area: 1000, // Density of the snowflakes in the screen
                            },
                        },
                        shape: {
                            type: "image", // Snowflakes will be represented by images
                            image: {
                                src: './assets/snowflake.png', // Snowflake image
                                width: 20,
                                height: 20,
                            },
                        },
                        size: {
                            value: 15, // Snowflake size
                            random: true, // Randomize snowflake size
                        },
                        move: {
                            enable: true,
                            speed: 1, // Snowflakes falling speed
                            direction: "bottom", // Snowflakes fall from top to bottom
                            random: true, // Snowflakes move in random directions
                            straight: false,
                            outModes: {
                                default: "out",
                            },
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse", // Makes the snowflakes repulse when hovered
                            },
                        },
                    },
                }}
            />


        </div>
    );
};

export default SnowfallEffect;
