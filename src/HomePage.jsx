import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function HomePage() {
    const [x, setX] = useState(40);
    const [y, setY] = useState(65);
    const navigate = useNavigate();

    useEffect(() => {
        const createHeart = () => {
            const heart = document.createElement("i");
            heart.className = "fa-solid fa-heart";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 3 + 2 + "s";
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 5000);
        };

        const heartInterval = setInterval(createHeart, 1000);
        return () => clearInterval(heartInterval);
    }, []);

    const clickedYes = () => {
        navigate('/valentine');
    };

    const moveNoButton = () => {
        setX(Math.random() * 80);
        setY(Math.random() * 80);
    };

    return (
        <div className="container">
            <p className="pre-valentine">Will you be my</p>
            <p className="valentine">Valentine?</p>

            <div className="button-container">
                <button className="yes-button" onClick={clickedYes}>YES!</button>

                <button
                    className="no-button"
                    onClick={moveNoButton} // Moves to a new position when clicked
                    onMouseOver={moveNoButton} // Moves when hovered
                    style={{ left: `${x}%`, top: `${y}%` }}
                >
                    No
                </button>
            </div>
        </div>
    );
}

export default HomePage;
