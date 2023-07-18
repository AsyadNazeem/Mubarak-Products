import React from "react";
import Footer from "../../components/Footer/Footer";
import img2 from "../../images/group2.png";
import shop from "../../images/shop.png";
import home from "../../images/home.png";
import footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Contact() {
    return (
        <div className="contact--us">
            <div>
                <Navbar/>
            </div>
            <div className="card2">
                <div className="contact--usHeading">
                    <h1 className="contact--heading"> GET IN TOUCH </h1>
                    <h3 className="contact--sub">
                        Want to get in touch? We'd love to hear from you. <br/> Here's how
                        you can reach us...{" "}
                    </h3>
                </div>
                <div className="about--card">
                    <div className="contact--card">
                        <img className="contactCard--img" src="/images/Location.png"/>
                        <div className="contactCard--details">
                            <h1 className="contactCard--Heading">Address</h1>
                            <h3 className="contactCard--address">
                                109 Circular Road Galle 80000 <br/> Sri Lanka
                            </h3>
                        </div>
                    </div>
                    <div className="contact--card">
                        <img className="contactCard--img" src="/images/phone.png"/>
                        <div className="contactCard--details">
                            <h1 className="contactCard--Heading">Phone</h1>
                            <div className="details">
                                <h3>+94-77-4989979</h3>
                                <h3>+94-91-2234351</h3>
                            </div>
                        </div>
                    </div>
                    <div className="contact--card">
                        <img className="contactCard--img" src="/images/email.png"/>
                        <div className="contactCard--details">
                            <h1 className="contactCard--Heading">Email</h1>
                            <h3 className="contactCard--address">
                                info.mubarakproducts@gmail.com
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            {/*<img className='back' src='../../images/back.png'/>*/}
            {/*<img className='back1' src='../../images/back.png'/>*/}
            {/*<img className='back2' src='../../images/back.png'/>*/}

            <div className="contact--form">
                <div className="contact-wrap">
                    <div>
                        <h1 className="contact--formHeading">Have Any Questions?</h1>
                        <h3 className="contact--subHeading">Send us a message</h3>
                    </div>
                    <form action="" className="contact-form">
                        {/* <div>
              <img className="contact--details-img" src={img2} />
            </div> */}
                        <div>
                            <div className="col-sm-6">
                                <div className="input-block">
                                    <input
                                        type="text"
                                        className="form-control-line-1"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="col">
                                    <div className="input-block">
                                        <input
                                            type="text"
                                            className="form-control-line-1"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="input-block">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="input-block">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Subject"
                                    />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="input-block textarea">
                  <textarea
                      rows="3"
                      type="text"
                      className="form-control-area"
                      placeholder="Message"
                  ></textarea>
                                </div>
                            </div>
                            <div className="button">
                                <button type="button" className="btn btn-outline-secondary">
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="contact--available--outlets">
                <div>
                    <h1 className="available--location-header">
                        Where to buy our Products
                    </h1>
                    <h3 className="available--location-sub">Hero S</h3>
                </div>
                <div className="product--Map">
                    <div className="map">
                        <iframe
                            className="google--map"
                            src="https://www.google.com/maps/d/embed?mid=1Ac1m7yPtbgmxXk1LQhsvp-6OMwUICvQ&ehbc=2E312F"
                        ></iframe>
                    </div>
                    <div className="product--availablePlaces">
                        <div className="superMarket--names">
                            <div>
                                <img className="logos" src={home}/>
                            </div>
                            <div className="names">
                                <h1>WareHouse</h1>
                                <h3>109 Circular Road Galle 80000</h3>
                                <h4>+94-91-2234351 / +94-77-4989979</h4>
                                <a href="https://goo.gl/maps/eAyrRwopDXMfbgcX8">Google Maps</a>
                            </div>
                        </div>
                        <div className="superMarket--names">
                            <div>
                                <img className="logos" src={shop}/>
                            </div>
                            <div className="names">
                                <h1>Ceylon City Mart </h1>
                                <h2> (Hidayath Hyper Market)</h2>
                                <h3>83 Morris Rd, Galle 80000</h3>
                                <h4>+94-91-2234931 / +94-91-2234931</h4>
                                <a href="https://goo.gl/maps/zaKwTFKmeP35F8gP8">Google Maps</a>
                            </div>
                        </div>
                        <div className="superMarket--names">
                            <div>
                                <img className="logos" src={shop}/>
                            </div>
                            <div className="names">
                                <h1>Sea Fair Food City</h1>
                                <h3>16 A2, Galle 80000</h3>
                                <h4>+94-91-2227300 / +94-91-2227300</h4>
                                <a href="https://goo.gl/maps/YXnX5nKKvAtgUdJD6">Google Maps</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="web-footer">{footer()}</div>
        </div>
    );
}

export default Contact;
