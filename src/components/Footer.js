import React, { useState } from 'react';
import { RiArrowRightCircleFill } from 'react-icons/ri';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Email, phoneNumber } from '../Data';
import { message } from 'antd';
import axios, {Subscribe} from '../APIconstant';

function Footer() {
    const [email, setEmail] = useState("");

    const SendData = async () => {
        const response = await axios.post(Subscribe, { "email": `${ email }` })
        console.log(response)

        if (response.status > 201) {
            console.log(response);
            throw new Error(`Request failed with code: ${response.status}`);
        }
    }

    const successMessages = () => {
        message
            .loading('Your being subscribed..', 2.5)
            .then(() => message.success('Subscription complete', 1.5))
            .then(() => message.info('Thank you for subscribing into our newsletter', 3.5));
        setEmail("")
    };
    const errorMessages = () => {
        message
            .loading('Your being subscribed..', 2.5)
            .then(() => message.error('Error subscribing', 1.5))
            .then(() => message.info('Try subscribig again. if the error proceeds kindly contact us via our phonenumber', 3.5));
    };

    async function HandleSubmit(e) {
        e.preventDefault();
        try {
            await SendData();
            successMessages();
        } catch {
            errorMessages();
        }
    }
    return (
        <>
            <div className="footer-wraper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div
                                className="footer-info"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                <address>
                                    <h5><strong>Fiddy Specialized Polyclinic</strong></h5>

                                    <p>Dar es salaam, Tanzania<br />
                                        Kunduchi<br />
                                        P.O.Box 21440 <br /></p>

                                    <p><strong>Phone:</strong> {phoneNumber} <br />
                                        <strong>Email:</strong> {Email} </p>
                                </address>
                                <div className="social-links">
                                    <a href="https://www.instagram.com/fiddypolyclinic/" className="social-link"><FaTwitter /></a>
                                    <a href="https://m.facebook.com/Fiddy-Polyclinic-297636847375628/" className="social-link"><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/fiddypolyclinic/" className="social-link"><GrInstagram /></a>
                                    <a href="https://www.instagram.com/fiddypolyclinic/" className="social-link"><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div
                                className="more-info"
                                data-aos="zoom-in"
                                data-aos-duration="800"
                                data-aos-delay="100"
                            >
                                <h5><strong>Useful Links</strong></h5>
                                <div style={{
                                    marginTop: "0.25rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem"
                                }}>
                                    <Link to="about-us" className="useful-link"><RiArrowRightCircleFill size="1.3rem" style={{ marginRight: 5 }} />About us</Link>
                                    <Link to="news" className="useful-link"><RiArrowRightCircleFill size="1.3rem" style={{ marginRight: 5 }} />News and events</Link>
                                    <Link to="noticeboard" className="useful-link"><RiArrowRightCircleFill size="1.3rem" style={{ marginRight: 5 }} />Jobs and vacancy</Link>
                                    <Link to="contact-us" className="useful-link"><RiArrowRightCircleFill size="1.3rem" style={{ marginRight: 5 }} />Contact us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div
                                className="newsletter"
                                data-aos="zoom-in"
                                data-aos-duration="800"
                                data-aos-delay="200"
                            >
                                <h5><strong>Our Newsletter</strong></h5>
                                <p className="subscribe">Subscribe to our news letter to get updated with our news</p>
                                <form onSubmit={HandleSubmit}>
                                    <input className="email-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <input className="btn" type="submit" value="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>© {(new Date().getFullYear())} Copyright <i>Fiddy Specialized Polyclinic</i>.
                                All Rights Reserved  <br /> Powered by <strong>samwelgfrey@gmail.com</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
