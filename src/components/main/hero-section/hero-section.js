import React from "react";

import './hero-section.css';

function HeroSection () {
    return (
        <div>
            <section id="hero" className="d-flex justify-cntent-center align-items-center">
                <div id="heroCarousel" className="container carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

                    <div className="carousel-item active">
                        <div className="carousel-container">
                            <img src="/img/JC_comingSoon.jpg" className="img-fluid" alt="coming soon" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default HeroSection;