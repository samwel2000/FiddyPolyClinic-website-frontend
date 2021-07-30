import React from 'react';
import TopHeader from '../components/TopHeader';
import HeaderBackground from '../assets/images/AboutBackground.jpg';
import Ourteam from '../components/Ourteam';
import './About.css';
import Pharmacy from '../assets/images/pharmacy.webp';
import Laboratory from '../assets/images/laboratory.webp';
import Consultation from '../assets/images/radiology.webp';
import Medical from '../assets/images/medical.webp';
import CountUp from 'react-countup';

function About() {
    const currentYear = new Date().getFullYear()
    const yearsOfExperience = currentYear - 2020
    return (
        <div>
            <TopHeader content="About us" image={HeaderBackground} />

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="mission-vission pt-2">
                            <div className=""
                            data-aos="zoom-in"
                            data-duration="800">
                                <p className="intro-text text-center">OUR MISSION</p>
                                <div className="contents">
                                <h2 className="">To be a provider of <span>high quality</span> patient-focused health care </h2>
                                <p>
                                that is readily accessible, cost effective and 
                                meets the needs of the communities we serve.
                                </p>
                                </div>
                            </div>
                            <div className="vision"
                            data-aos="zoom-in"
                            data-duration="800">
                                <p className="intro-text text-center">OUR VISION</p>
                                <div className="contents">
                                <h2 className="">To lead the <span>Municipality</span> as a Healthcare Team </h2> 
                                <p>
                                by exceeding patient expectations through the advancement of quality medical services.
                                </p>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </section>

            <section className="py-5 why-us">
                <div className="row">
                    <div className="col-md-6 p-0 m-0">
                        <div className="image-section"></div>
                    </div>
                    <div className="col-md-6 p-0 m-0">
                        <div className="half-section">
                            <div className="choose-contents">
                                <h2 data-aos="zoom-in"
                                data-aos-duration="500">What makes us the best</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="reason"
                                        data-aos="zoom-in"
                                        data-aos-duration="800">
                                            <img src={Consultation} alt="" />
                                            <div>
                                                <h1>Free consultation</h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, 
                                                    consectetur adipisicing elit. Architecto, neque, dolorem.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reason"
                                        data-aos="zoom-in"
                                        data-aos-duration="800"
                                        data-aos-delay="200">
                                            <img src={Medical} alt="" />
                                            <div>
                                                <h1>Qualified doctors</h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, 
                                                    consectetur adipisicing elit. Architecto, neque, dolorem.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="reason"
                                        data-aos="zoom-in"
                                        data-aos-duration="800">
                                            <img src={Pharmacy} alt="" />
                                            <div>
                                                <h1>Modern facilities</h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, 
                                                    consectetur adipisicing elit. Architecto, neque, dolorem.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reason"
                                        data-aos="zoom-in"
                                        data-aos-duration="800"
                                        data-aos-delay="200">
                                            <img src={Laboratory} alt="" />
                                            <div>
                                                <h1>OPD services</h1>
                                                <p>
                                                    Lorem ipsum dolor sit amet, 
                                                    consectetur adipisicing elit. Architecto, neque, dolorem.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Ourteam />

            <section className="py-5 stats-section">
                <div className="container">
                    <div className="row all-stats">
                        <div className="col-md-3">
                            <div className="stat">
                                <div className="info">
                                    <CountUp end={yearsOfExperience} />
                                </div>
                                <p>Years of experience</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="stat">
                                <div className="info">
                                    <span>10</span>
                                </div>
                                <p>Specialists</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="stat">
                                <div className="info">
                                    <span>40</span>
                                </div>
                                <p>Qualified doctors</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="stat last">
                                <div className="info">
                                    <span>1000+</span>
                                </div>
                                <p>Satisfied patients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About
