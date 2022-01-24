import React from "react";
import { Link } from 'react-router-dom';

import './footer.css';

function Footer () {

    return (
        <div>
            <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">

                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            </div>
                            <div className="col-lg-6">
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><Link to='/'><i className="bx bx-chevron-right"></i>Home</Link></li>
                                    <li><Link to='/about'><i className="bx bx-chevron-right"></i>About</Link></li>
                                    <li><Link to='/job-page'><i className="bx bx-chevron-right"></i>Jobs</Link></li>   
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i>Web Design</li>
                                    <li><i className="bx bx-chevron-right"></i>Web Development</li>
                                    <li><i className="bx bx-chevron-right"></i>Product Management</li>
                                    <li><i className="bx bx-chevron-right"></i>Marketing</li>
                                    <li><i className="bx bx-chevron-right"></i>Graphic Design</li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h4>Contact Us</h4>
                                <p>
                                    A108 Adam Street <br/>
                                    New York, NY 535022<br/>
                                    United States <br/><br/>
                                    <strong>Phone:</strong> +1 5589 55488 55<br/>
                                    <strong>Email:</strong> info@example.com<br/>
                                 </p>

                            </div>

                            <div className="col-lg-3 col-md-6 footer-info">
                                <h3>About Job Cafe</h3>
                                 <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                                <div className="social-links mt-3">
                                    <a href="google.com" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="google.com" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="google.com" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="google.com" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Job Cafe</span></strong>. All Rights Reserved
                    </div> 
                </div>
            </footer>

            <a href="google.com" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
    )
}
export default Footer;