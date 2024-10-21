import React from 'react';
import './StartScreen.css';

interface StartScreenProps {
    onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
    return (
        <div className="start-screen">
            <div className="order-here">
                <h1>
                    ----------------------------------------------------------
                    <br />
                    ----------------------------------------------------------
                    <br />
                    ---------------ORDER--------------------------------------{' '}
                    <br />
                    -----------------------HERE-------------------------------
                    <br />
                    ----------------------------------------------------------
                    <br />
                    ----------------------------------------------------------
                    <br />
                </h1>
            </div>
            <div onClick={onStart} className="start-btn">
                <h5>Welcome</h5>
                <h1>Tap to Start</h1>
            </div>
        </div>
    );
};

export default StartScreen;
