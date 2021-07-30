import React from 'react';
import './OurServices.css';
import {ServiceContent} from '../Data';

function OurServices() {
    return (
        <section>
            <div className="services-section  py-2 pb-4">
                <div className="container">
                    <div className="services">
                        <h1 className="big-heading text-center">Our services</h1>
                        <div className="row py-2 px-2">
                            <div className="service-content">
                                {ServiceContent.map(item => (
                                    <div className="pb-4" key={item.id}>
                                        <div className="service-wrapper"
                                        data-aos="zoom-in"
                                        data-aos-duration="800"
                                        data-aos-delay={item.id > 1 ? `${item.id}`:`${item.id}00`}>
                                            <img src={item.icon} alt="service logo" />
                                            <h1>{item.heading}</h1>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* <div className="row px-2">
                            {ServiceContent2.map(item => (
                                <div className="col-md-4 pb-4" key={item.id}>
                                    <div className="service-wrapper"
                                    data-aos="zoom-in"
                                    data-aos-duration="800"
                                    data-aos-delay={item.id > 1 ? `${item.id}`:`${item.id}00`}>
                                        <img src={item.icon} alt="service logo" />
                                        <h1>{item.heading}</h1>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices
