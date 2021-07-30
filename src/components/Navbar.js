import React, {useState} from 'react';
import './Navbar.css';
import {FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png';

function Navbar() {
    const [isOpen, setisOpen] = useState(false)

    const HandleMenuClick = () => {
        setisOpen(!isOpen)
    }
    return (
        <>
        <nav style={{background:'inherit'}}>
            <div className="logo">
                <Link to="/"><img src={Logo} alt="Fiddy polyclinic logo" /></Link>
            </div>
            <div className={isOpen ? "menu-icon menu-2":"menu-icon"} onClick={HandleMenuClick}>
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
            </div>
        </nav> 
        <aside style={
            {
                background:"rgba(10, 10, 10, 0.8)",
                position: "fixed",
                top:0,
                zIndex: 8,
                width:"100%",
                height: "100vh",
                left:isOpen ? "0": "-100%",
                transitionDuration: "0.0s"
            }
        } onClick={HandleMenuClick}>
            <div style={
                {
                    background:"var(--orangeColor)",
                    position: "fixed",
                    top:0,
                    zIndex: 10,
                    width:"300px",
                    height: "100vh",
                    right:isOpen ? "0": "-300px",
                    transitionDuration: "0.8s"
                }
            }>
                <div className="sidebar-icon" onClick={HandleMenuClick}>
                    <FaTimes />
                </div>
                <ul className="nav-items">
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="about-us" className="link">About us</Link></li>
                    <li><Link to="news" className="link">News and events</Link></li>
                    <li><Link to="noticeboard" className="link">Noticeboard</Link></li>
                    <li><Link to="contact-us" className="link">contact-us</Link></li>
                </ul>
            </div>
        </aside>
        </>
    )
}

export default Navbar
