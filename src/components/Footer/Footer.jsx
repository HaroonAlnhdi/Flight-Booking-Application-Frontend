import  './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="footer">
        <div className="footerContainer">
            <div className="footerRow">
                <div className="footer-col">

                    <img className="footerlogo" src="/pic/flight1.png" alt="Logo" />
               </div>
                <div className="footer-col">
                    <h4> Flight Booking</h4>
                    <ul>
                        <li><a href="/AboutUs">about us</a></li>
                        <li><a href="#">our services</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><Link to='/FAQ'>FAQ</Link></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>
               
                <div className="footer-col">
                    <h4>follow us</h4>
                    <div className="social-links">
        <a href="https://www.facebook.com" >
            <FaFacebookF />
        </a>
        <a href="https://www.twitter.com" >
            <FaTwitter />
        </a>
        <a href="https://www.instagram.com" >
            <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" >
            <FaLinkedinIn />
        </a>
    </div>
                </div>
               
            </div>
        </div>
    </footer>
    )
}

export default Footer;
