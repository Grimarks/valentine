import React from "react";
import { useNavigate } from "react-router-dom";
import "./ValentinePage.css";

// Manually import images
import A1 from "./Foto/A1.jpg";
import A2 from "./Foto/A2.jpg";
import A3 from "./Foto/A3.jpg";
import A4 from "./Foto/A4.jpg";
import A5 from "./Foto/A5.jpg";
import A6 from "./Foto/A6.jpg";
import A7 from "./Foto/A7.jpg";
import A8 from "./Foto/A8.jpg";
import A9 from "./Foto/A9.jpg";
import A10 from "./Foto/A10.jpg";
import A11 from "./Foto/A11.jpg";
import A12 from "./Foto/A12.jpg";
import A13 from "./Foto/A13.jpg";
import A14 from "./Foto/A14.jpg";
import A15 from "./Foto/A15.jpg";
import A16 from "./Foto/A16.jpg";
import A17 from "./Foto/A17.jpg";
import A18 from "./Foto/A18.jpg";
import A19 from "./Foto/A19.jpg";
import A20 from "./Foto/A20.jpg";
import A21 from "./Foto/A21.jpg";
import A22 from "./Foto/A22.jpg";
import A23 from "./Foto/A23.jpg";
import A24 from "./Foto/A24.jpg";
import A25 from "./Foto/A25.jpg";

// Store images in an array
const images = [A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12, A13, A14, A15, A16, A17, A18, A19, A20, A21, A22, A23, A24, A25];

function ValentinePage() {
    const navigate = useNavigate();

    return (
        <div className="valentine-container">
            <h1>💖 Happy Valentine's Day, My Love! 💖</h1>
            <p className="intro-text">
                My love, from the moment you walked into my life,
                everything changed in the most beautiful way.
                You are my happiness, my comfort, and my greatest blessing.
                Every second with you feels like a dream I never want to wake up from.
            </p>

            <div className="love-message">
                <p>🌹 You are the reason my heart beats faster and my smile shines brighter. ☀️</p>
                <p>💖 Every laugh, every hug, every little moment with you is a treasure I hold close. 💖</p>
                <p>✨ I promise to always cherish you, love you, and stand by your side, forever. ✨</p>
            </div>

            <div className="poem">
                <h2>For You, My Love</h2>
                <p>
                    You are the sun that lights my way, <br />
                    The gentle breeze on a summer day. <br />
                    The sweetest melody my heart can sing, <br />
                    My forever love, my everything. ❤️<br />
                </p>
                <p>
                    Your laughter is my favorite sound, <br />
                    A warmth that lifts me when I'm down. <br />
                    I thank the stars, I thank the skies, <br />
                    For bringing you into my life. ✨<br />
                </p>
            </div>

            <div className="image-container">
                <p>🌸 Here are some of our special moments, my love! 🌸</p>
                <div className="image-gallery">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Memory ${index + 1}`} className="love-image" />
                    ))}
                </div>
            </div>

            <button className="back-button" onClick={() => navigate("/")}>
                Back to Home
            </button>
        </div>
    );
}

export default ValentinePage;
