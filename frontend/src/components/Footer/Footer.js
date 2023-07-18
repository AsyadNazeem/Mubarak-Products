import React from "react";
import {Link} from "react-router-dom";

export default function footer() {
    return (
        <footer className="footer">
            <div className="all">
                <div className="footer-contact-form">
                    <h1>Contact Us</h1>
                    <h3>Send us a message</h3>
                    <div className="form">
                        <input type="text" className="form-control-line1" placeholder="Full Name"/><br/>
                        <input type="text" className="form-control-line2" placeholder="Your Email"/><br/>
                        <textarea rows="3" type="text" className="form_control" placeholder="Your Message"></textarea>
                        <div className="button1">
                            <button type="button" className="btn1">Send</button>
                        </div>
                    </div>
                </div>
                <div className="footer--sitemap">
                    <h2 className="sitemap--header">Site Map</h2>
                    <h3>All our pages</h3>
                    <ul className="sitemap">
                        <Link className='links' to='/'>
                            <li className='footer--link'>Home</li>
                        </Link>
                        <Link className='links' to='/products'>
                            <li className='footer--link'>Products</li>
                        </Link>
                        <Link className='links' to='/contact'>
                            <li className='footer--link'>Contact Us</li>
                        </Link>
                        <Link className='links' to='/about'>
                            <li className='footer--link'>About</li>
                        </Link>
                    </ul>
                </div>
                <div className="footer--contact">
                    <h1 className="footer--Header">Mubarak Enterprises</h1>
                    <div className='f-phone1'>
                        <img className="f-phone" src='/images/icons8-phone-90.png'/>
                        <div className='phone-num'>
                            <h5>+94-77-4989979 /+94-91-2234351</h5>
                        </div>
                    </div>
                    <div className='f-email1'>
                        <img className="f-email" src='/images/icons8-email-100.png'/>
                        <div className="email-add">
                            <h5>info.mubarakproducts@gmail.com</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer--Copyright">
                <h1 className="footer-copyright"> Copyright © 2023 Mubarak Enterprises Pvt. Ltd. </h1>
            </div>
        </footer>
    )
}