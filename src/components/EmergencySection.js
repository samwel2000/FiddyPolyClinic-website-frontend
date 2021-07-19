import React from 'react';
import { Email, phoneNumber } from '../Data';
import './EmergencySection.css';

function EmergencySection() {
    return (
        <section>
            <div className="emergency-row">
                <div className="emergency1">
                    <div className="emergency"
                    data-aos="zoom-in"
                    data-aos-duration="800">
                        <div className="info">
                            <h3>For Any Emergency Contact</h3>
                            <p>Esteem spirit temper too say adieus.</p>
                        </div>
                        <div className="info-button">
                            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                        </div>
                    </div>
                </div>
                <div className="emergency1 emergency2">
                    <div className="emergency"
                    data-aos="zoom-in"
                    data-aos-duration="800">
                        <div className="info">
                            <h3>Schedule an appointment</h3>
                            <p>Esteem spirit temper too say adieus.</p>
                        </div>
                        <div className="info-button">
                            <a href={`mailto:${Email}`}>Make an appointment</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EmergencySection
