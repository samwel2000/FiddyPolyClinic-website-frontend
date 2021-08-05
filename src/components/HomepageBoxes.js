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
                                    <li>Monday - Friday <span>8.00 - 22.00</span></li>
                                    <li>Saturday <span>8.00 - 14.00</span></li>
                                    <li>Sunday <span>8.00 - 14.00</span></li>
                                    <li>Holidays <span>8.00 - 14.00</span></li>
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
                            <p>
                            Our clinic provide emergency services with acute care of patients who present without prior appointment 
                            </p>
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
                                <p>The clinic provides sustainable quality health care and services on daily basis. Contact us for an appointment </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomepageBoxes
