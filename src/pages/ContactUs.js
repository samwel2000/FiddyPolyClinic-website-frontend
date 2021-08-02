import React, { useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import TopHeader from '../components/TopHeader'
import HeaderBackground from '../assets/images/background2.jpg';
import './ContactUs.css';
import { message } from 'antd';
import axios, { SendMessage } from '../APIconstant';

function ContactUs() {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [messageInfo, setMessageInfo] = useState("")

    const PostData = async () => {

        let messageData = {
            "full_name": `${fullname}`,
            "email": `${email}`,
            "phone_number": `${phonenumber}`,
            "message": `${messageInfo}`
        }
        // messageData = JSON.stringify(messageData);
        let response = await axios.post(SendMessage, messageData)

        if (response.status > 201) {
            console.log(response);
            throw new Error(`Request failed with code: ${response.status}`);
        }
    }

    const successMessages = () => {
        message
            .loading('Your Message is being sent..', 2.5)
            .then(() => message.success('Message sent', 1.5))
            .then(() => message.info('Thank you for contacting us', 3.5));
        setFullname("")
        setMessageInfo("")
        setPhonenumber("")
        setEmail("")
    };
    const errorMessages = () => {
        message
            .loading('Your Message is being sent..', 2.5)
            .then(() => message.error('Error sending message', 1.5))
            .then(() => message.info('Try sending again. if the error proceeds kindly contact us', 3.5));
    };

    const HandleSubmit = async (event) => {
        event.preventDefault();
        try {
            await PostData();
            successMessages();
        } catch {
            errorMessages();
        }
    }
    return (
        <>
            <TopHeader content="Contact us" image={HeaderBackground} moreContent="Want to get in touch? We'd love to hear from you. 
                                    Here's how you can reach us" />

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="form card" onSubmit={HandleSubmit} data-aos="zoom-in" data-aos-duration="800">
                                <p className="form-heading">MESSAGE US DIRECTLY</p>
                                <div className="input-info">
                                    <label className="label">Full Name:</label>
                                    <input className="input" type="text" required placeholder="Enter your full name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                                </div>
                                <div className="input-info">
                                    <label className="label">Email:</label>
                                    <input className="input" type="email" placeholder="Enter your Email"value={email}  onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="input-info">
                                    <label className="label">Phone number:</label>
                                    <input className="input" type="text" required placeholder="Enter your phone number" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
                                </div>
                                <div className="input-info">
                                    <label className="label text-area" name="message">Message:</label>
                                    <textarea row="8" required placeholder="Enter your message" value={messageInfo} onChange={(e) => setMessageInfo(e.target.value)} />
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
                                    data-aos-delay="200"><strong>Fiddy polyclinic</strong> is located at Kunduchi Ward,
                                    Kinondoni Municipal Council, Mtongani (Mtaa),
                                    opposite to the Tanzania Fisheries Research Institute (TAFIRI)
                                    offices and neighboring to the Kunduchi Beach Hotel (Wet and Wild).
                                    here is how to find us
                                    <br />
                                    <br />
                                    <strong>Driving:</strong> Refer to directions provided by google maps
                                    <br />
                                    <br />
                                    <strong>Public Transportation:</strong> The nearest Health facilities to
                                    the Clinic are the government owned Kunduchi Dispensary and a
                                    Private owned Rabinsia Lema Hospital which are located about 5
                                    and 10 Kilometers away, respectively
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
