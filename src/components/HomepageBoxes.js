import React from 'react';
import { phoneNumber } from '../Data';
import { Email } from '../Data';
import './HomepageBoxes.css';
import phoneIcon from '../assets/images/phone.webp';

function HomepageBoxes() {
    return (
        <section>
            <div className="homepage-boxes py-2">
                <div className="container my-3">
                    <div className="row py-5 px-2">
                        <div className="col-12 col-md-4">
                            <div className="opening-hours"
                            data-aos="zoom-in"
                            data-aos-duration="800"
                            >
                                <h2 className="d-flex align-items-center">Opening Hours</h2>
                                <ul className="p-0 m-0">
                                    <li>Monday - Thursday <span>8.00 - 10.00</span></li>
                                    <li>Friday <span>8.00 - 10.30</span></li>
                                    <li>Saturday <span>8.00 - 14.00</span></li>
                                    <li>Sunday <span>8.00 - 14.00</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-5 mt-md-0">
                            <div className="emergency-box"
                            data-aos="zoom-in"
                            data-aos-duration="800"
                            data-aos-delay="100">
                                <h2 className="d-flex align-items-center">Emergency care</h2>
                                <div className="call-btn">
                                    <a className="d-flex justify-content-center align-items-center" href={`tel:${phoneNumber}`}>
                                        <img src={phoneIcon} alt="phone icon"/> 
                                         {phoneNumber}
                                    </a>
                            </div>
                                <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem maximus mauris sceler isque, at rutrum nulla.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-5 mt-lg-0">
                        <div className="appointment-box"
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        data-aos-delay="200">
                            <h2 className="d-flex align-items-center">Make an appointment</h2>
                            <div className="call-btn">
                                <a className="d-flex justify-content-center align-items-center second" href={`mailto:${Email}`}>
                                    {Email}
                                </a>
                            </div>
                                <p>Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem maximus mauris sceler isque, at rutrum nulla.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomepageBoxes
