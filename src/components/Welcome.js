import React from 'react';
import './Welcome.css';
import Photo from '../assets/images/background2.jpg'
import { Link } from 'react-router-dom'

function Welcome() {
    return (
        <section>
            <div className="my-container">
                <div className="row reverse">
                    <div className="col-md-6">
                        <div className="welcome-image">
                            <figure data-aos="zoom-in" data-aos-duration="1000">
                                <img id="welcome-img" src={Photo} alt="fidypolyclinic doctor with a patient" />
                                {/* <img id="back-img" src={CatchyImage} alt="A smooth background image" /> */}
                            </figure>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="content">
                            <h3 className="heading"
                                data-aos="flip-up"
                                data-aos-duration="1000">
                                <span>Welco</span>me to fiddy poly clinic
                            </h3>
                            <h1 className="sub-heading"
                                data-aos="flip-up"
                                data-aos-duration="1000"
                                data-aos-delay="100">
                                Best care for your health
                            </h1>
                            <div data-aos="zoom-in" data-aos-duration="800">
                                <p>
                                    Our clinic has qualiﬁed Doctors, Trained Nurses, Specialists,
                                    Technical staff and Administrative staff. fiddy polyclinic provides sustainable quality
                                    health services guided by <strong>Service excellence</strong>, <strong>Responsibility</strong>,
                                    <strong> Quality</strong>, <strong>Communication</strong> and <strong>Innovation</strong>
                                </p>
                                <ul className="services">
                                    <li><span className="icon"></span><span>We consistently strive to provide the highest quality, safe patient care</span></li>
                                    <li><span className="icon"></span><span>We respect each person as a member of the Clinic community</span></li>
                                    <li><span className="icon"></span><span>We accept personal accountability for the work we do</span></li>
                                </ul>
                            </div>
                            <div className="pt-3">
                                <Link to="about-us" className="more-button">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome
