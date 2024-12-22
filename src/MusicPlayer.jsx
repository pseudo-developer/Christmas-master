import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom'; // Import useNavigate instead of useHistory

const MusicPlayer = () => {
    const history = useHistory(); // Initialize useNavigate
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const startMusic = () => {
        const audio = audioRef.current;
        audio.volume=0.5
        audio.play(); // Start the audio
        audio.loop = true; // Make it loop
        setIsPlaying(true); // Update state to reflect that music is playing
        history.push('/christmas'); // Navigate to the /christmas route
    };

    return (
        <div>
            {!isPlaying&&<h1 className="message">"Oye sun na, ik vadda surprise hai tere layi!</h1>}
            {/* Button to reveal the secret and start music */}
            {!isPlaying && (
                <button onClick={startMusic} className='surprise-btn'>Reveal Secret</button>
            )}

            {/* Audio element that will play in the background */}
            <audio ref={audioRef} src="/jingle-bells.mp3" preload="auto" />
        </div>
    );
};

export default MusicPlayer;
