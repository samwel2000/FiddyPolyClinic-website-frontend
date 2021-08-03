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

            <section className="more-about py-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="more-contents">
                                <p data-aos="zoom-in" data-aos-duration="1000">
                                This Clinic officially commenced provision of services on the 04th January, 2021, 
                                it provides variety of health services to the surrounding community. 
                                It has been registered by BRELA under the name of FIDDY Company Limited with Reference Numbers 141790617, 
                                Ministry of Health, Community Development, Gender, Elderly and Children (MoHCDGEC) ID: 71660, 
                                and Business license number KNC/23/41, ID: 86702.
                                </p>
                                <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                                    <span>The company</span> currently has a total of 4 Board Directors who 
                                    meets twice a year, whereby among their main roles and responsibilities 
                                    includes to oversee the overall performance of both the Polyclinic and 
                                    Company, as well as reach consensus regarding all newly proposed issues, 
                                    before being incorporated and implemented.
                                    <br />
                                    <br />
                                    According to the level of a Polyclinic Staff requirement we have complied 
                                    with the MoHCDGEC’s guideline by recruitment of qualiﬁed Doctors, Trained 
                                    Nurses, Specialists, Technical and Administrative Staffs in order to ensure 
                                    the Polyclinic provides sustainable quality health services to the surrounding 
                                    community at large. The Clinic currently provides services on daily basis 
                                    from 8.00 am up to 10.00 pm, 
                                    but intends to extend to 24 hours after six months of service provision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="pb-5 why-us m-0">
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
                                                    advice and instruction are provided by health care professional without any charge
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
                                                    We are have numerous specialized and qualified doctors and staff
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
                                                    We are equiped with advanced facilities including observation and dispensing rooms
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
                                                    We provide services to outpatients including emergency care, diagnostics and therapy
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
