import React, {useState, useEffect} from 'react'
import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
import './Home.css';
import './slider-animation.css';
import { SliderContent } from '../Data';
import EmergencySection from '../components/EmergencySection';
import Welcome from '../components/Welcome';
import HomepageBoxes from '../components/HomepageBoxes';
import OurServices from '../components/OurServices';
import NHIFLOGO from '../assets/images/NHIF.png';
import BRITAMLOGO from '../assets/images/britam.png';

function Home() {
    const [hasChanged, sethasChanged] = useState(false)

    useEffect(() => {
        let LogoTimer = setTimeout(() => sethasChanged(!hasChanged), 3000);
        return () => {
            clearTimeout(LogoTimer);
        }
    }, [hasChanged])

    return (
        <>
            <Slider className="slider-wrapper" autoplay={3000} touchDisabled="false">
                {SliderContent.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
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
                            <div className="section-content px-2">
                                <a className="image-div" 
                                href="/" 
                                >
                                    <img src={NHIFLOGO} style={{
                                        display: `${hasChanged ? "none" : "flex"}`,
                                        transitionDuration: "2s",
                                    }}  alt="Nhif logo" />
                                    <img src={BRITAMLOGO} style={{
                                        display: `${!hasChanged ? "none" : "flex"}`,
                                        transitionDuration: "2s",
                                        marginTop: "2rem",
                                    }} alt="Nhif logo" />
                                </a>

                                <div data-aos="zoom-in" data-aos-duration="1000">
                                    <h2 className="text-center section-header pb-2">Your health is our priority</h2>
                                    <p className="text-center">
                                        In response to provision of sustainable quality health services to the surrounding community and general public.
                                        Fiddy polyclinic is now accepting National Insurance Fund (NHIF) and Britam cards.
                                    </p>
                                </div>

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
