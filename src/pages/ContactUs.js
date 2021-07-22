import React from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'
import TopHeader from '../components/TopHeader'
import HeaderBackground from '../assets/images/background2.jpg';
import './ContactUs.css'

function ContactUs() {
    return (
        <>
            <TopHeader content="Contact us" image={HeaderBackground} moreContent="Want to get in touch? We'd love to hear from you. 
                                    Here's how you can reach us" />
            
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="form card" onSubmit={e => e.preventDefault() } data-aos="zoom-in" data-aos-duration="800">
                            <p className="form-heading">MESSAGE US DIRECTLY</p>
                                <div className="input-info">
                                    <label className="label">Full Name:</label>
                                    <input className="input" type="text" required placeholder="Enter your full name" />
                                </div>
                                <div className="input-info">
                                    <label className="label">Email:</label>
                                    <input className="input" type="email" placeholder="Enter your Email" />
                                </div>
                                <div className="input-info">
                                    <label className="label">Phone number:</label>
                                    <input className="input" type="text" pattern="(0([0-9]{1,9}))" title="phone number example 0652435436" required placeholder="Enter your phone number" />
                                </div>
                                <div className="input-info">
                                    <label className="label text-area">Message:</label>
                                    <textarea row="8" required placeholder="Enter your message" />
                                </div>
                                <button className="submit-button" type="submit">
                                    submit <FaLongArrowAltRight />
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-12 pt-3">
                            <div className="find-us-contents">
                                <h3
                                data-aos="zoom-in"
                                data-aos-duration="800">How to find us</h3>
                                <p
                                data-aos="zoom-in"
                                data-aos-duration="800"
                                data-aos-delay="200">Fiddypoly clinic is located at kunduchi dar es salaam, Tanzania
                                    near Tanzania Fisheries Research Institute (TAFIRI). here is how to find us
                                    <br />
                                    <br />
                                    <strong>Driving:</strong> Refer to directions provided by google maps
                                    <br />
                                    <br />
                                    <strong>Public Transportation:</strong> Lorem ipsum dolor sit amet, 
                                    consectetur adipisicing elit. Architecto, neque, dolorem.
                                    Lorem ipsum dolor sit amet, 
                                    consectetur adipisicing elit. Architecto, neque, dolorem. 
                                    <br />
                                    <br />
                                    <strong>Parking:</strong> Fiddypoly clinic has a wide space for packing. feel free to reach us
                                    with your transport 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs
