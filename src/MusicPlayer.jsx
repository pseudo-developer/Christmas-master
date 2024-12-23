import React, { useRef, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const MusicPlayer = () => {
    const history = useHistory();
    const location = useLocation(); // Get the current route
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false); // Track audio playing state

    useEffect(() => {
        const audio = audioRef.current;

        if (location.pathname === '/christmas') {
            // Play "jingle-bells.mp3" on the christmas page
            if (audio.src !== `${window.location.origin}/jingle-bells.mp3`) {
                audio.src = '/jingle-bells.mp3'; // Set source to jingle-bells
                audio.load(); // Reload audio to apply the new source
            }
            if (audio.paused) {
                audio.volume = 0.5;
                audio.loop = true;
                audio.play();
                setIsPlaying(true); // Set state to reflect audio is playing
            }
        } else if (location.pathname === '/secondpage') {
            // Play "myvoice_sample.mp3" on the secondpage
            if (audio.src !== `${window.location.origin}/myvoice_sample.mp3`) {
                audio.src = '/myvoice_sample.mp3'; // Set source to myvoice_sample
                audio.load(); // Reload audio to apply the new source
            }
            if (audio.paused) {
                audio.volume = 0.5;
                audio.loop = true;
                audio.play();
            }
        } else {
            // Stop audio on other pages
            if (audio) {
                audio.pause();
                audio.currentTime = 0; // Reset to start
                setIsPlaying(false); // Update state to reflect audio is stopped
            }
        }

        // Clean up audio when the component unmounts
        return () => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        };
    }, [location.pathname]); // Runs whenever the route changes

    return (
        <div>
            {location.pathname === '/' && (
                <>
                    <h1 className="message">"Oye sun na, ik chhota surprise hai tere layi!"</h1>
                    <button
                        onClick={() => history.push('/christmas')}
                        className="surprise-btn"
                    >
                        Select * from Reveal-Secret
                    </button>
                </>
            )}

            {/* No "Go Back" button will appear anywhere */}

            {/* Audio element */}
            <audio ref={audioRef} preload="auto" />
        </div>
    );
};

export default MusicPlayer;
