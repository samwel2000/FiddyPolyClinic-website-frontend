import React from 'react';
import './OurServices.css';
import {ServiceContent1, ServiceContent2} from '../Data';

function OurServices() {
    return (
        <section>
            <div className="services-section py-2">
                <div className="container">
                    <div className="services">
                        <h1 className="big-heading text-center">Our services</h1>
                        <div className="row py-2">
                            {ServiceContent1.map(item => (
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
                        </div>
                        <div className="row">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices
