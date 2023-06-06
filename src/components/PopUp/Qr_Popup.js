import React, {useEffect} from "react"
import {useState} from 'react'
import {motion} from "framer-motion"

let easeing = [0.6, -0.05, 0.01, 0.99];
const transition = {duration: 1.4, ease: [0.6, -0.05, 0.01, 0.99]};

const items = {
    hidden: {opacity: 0, y: 80},
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeInOut',
            duration: 1,
            scroll: 2
        }
    }
}

export default function Qr_Popup() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    useEffect(() => {
        if (isPopupOpen) {
            document.body.classList.add('disable-scroll');
        } else {
            document.body.classList.remove('disable-scroll');
        }

        return () => {
            document.body.classList.remove('disable-scroll');
        }
    }, [isPopupOpen]);

    const closePopup = () => {
        setIsPopupOpen(false);
    }

    return (
        <motion.div className='google-review' variants={items} initial="hidden" exit="exit" whileInView="show"
                    viewport={{once: false}}>
            <motion.button className='Review-btn' onClick={togglePopup} variants={items}
                           whileHover={{scale: 1.2}}
                           whileTap={{scale: 1.3}}>Review Us !
            </motion.button>
            {isPopupOpen && (
                <div className='popup'>
                    <div className='popup-inner'>
                        <h1 className='review-popHeading'>SCAN ME !</h1>
                        <img className='qr-img' src='/images/Google Review QR.png'/>
                        <h1> OR </h1>
                        <a className="review-link" href="https://g.page/r/CVLdKCN7C2_gEB0/review"> Click on me</a>
                        <br/>
                        <button className="close-btn" onClick={closePopup}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </motion.div>
    );

}
