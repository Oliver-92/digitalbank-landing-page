import React from 'react';
import './Hero.css';
import mockups from '../../assets/images/image-mockups.png';

function Hero() {
    return (
        <section className="hero">
            <div className="hero__info">
                <h1 className="hero__heading">Next generation digital banking</h1>
                <p className="hero__details">Take your financial life online. Your Digitalbank account will be a
                    one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <div className="hero__invite">
                    <a href="#request-invite" className="hero__invite-link">Request Invite</a>
                </div>
            </div>
            <div className="hero__image">
                <img src={mockups} alt="mobile and desktop screens showing the application"
                    className="hero__image-app" />
            </div>
        </section>
    );
}

export default Hero;
