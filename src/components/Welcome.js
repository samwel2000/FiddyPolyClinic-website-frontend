import React from 'react';
import './Welcome.css';
import Photo  from '../assets/images/background2.jpg'
// import CatchyImage  from '../assets/images/catchy-background.svg'

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
                                Esteem spirit temper too say adieus who direct esteem. 
                                It esteems luckily or picture placing drawing. 
                                Apartments frequently or motionless on reasonable 
                                projecting expression.
                                </p>
                                <ul className="services">
                                    <li>Apartments frequently or motionless.</li>
                                    <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
                                    <li>Voluptatem quia voluptas sit aspernatur.</li>
                                </ul>
                            </div>
                            <button className="more-button">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome
