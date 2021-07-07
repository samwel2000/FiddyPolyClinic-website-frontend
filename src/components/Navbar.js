import React, {useState} from 'react';
import './Navbar.css';
import {FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Navbar() {
    const [isOpen, setisOpen] = useState(false)

    const HandleMenuClick = () => {
        setisOpen(!isOpen)
    }
    return (
        <>
        <nav style={{background:'inherit'}}>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className={isOpen ? "menu-icon menu-2":"menu-icon"} onClick={HandleMenuClick}>
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
            </div>
        </nav> 
        <aside style={
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
        } onClick={HandleMenuClick}>
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
        </aside>
        </>
    )
}

export default Navbar
