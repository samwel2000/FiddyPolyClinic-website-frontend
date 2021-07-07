import React from 'react'
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import './Home.css';
import './slider-animation.css';
import { SliderContent } from '../Data';
import EmergencySection from '../components/EmergencySection';
import Welcome from '../components/Welcome';
import HomepageBoxes from '../components/HomepageBoxes';
import OurServices from '../components/OurServices';

function Home() {
    return (
        <>
            <Slider className="slider-wrapper" autoplay={1500} touchDisabled="false">
            {SliderContent.map((item, index) => (
                <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <div className="inner">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        {/* <a href="#" traget="_blank">Our services</a> */}
                    </div>
                </div>
            ))}
            </Slider>
            
            <HomepageBoxes />
            
            <Welcome />

            <OurServices />

            <section>
                <div className="container py-3">
                    <div className="row py-5">
                        <div className="col-md-12 py-5">
                            <div className="section-content"
                            data-aos="zoom-in"
                            data-aos-duration="800">
                                <h2 className="text-center">
                                Your Health is Our Priority
                                </h2>
                                <p className="text-center">
                                Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec males uada lorem maximus mauris sceler isque, at rutrum nulla.
                                </p>
                                <a className="" href="tel:22352346235">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <EmergencySection />

        </>
    )
}

export default Home
