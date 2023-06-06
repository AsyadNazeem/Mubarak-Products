import img1 from "../../images/group22.png";
import React, {useState, useEffect} from "react"
import CardData from "../../components/Card/CardData";
import Card from "../../components/Card/Card";
import {Link} from "react-router-dom";
import {motion} from "framer-motion"
import footer from "../../components/Footer/Footer";
import ReviewData from "../../components/Review/ReviewData";
import Review from "../../components/Review/Review";
import Qr_Popup from "../../components/PopUp/Qr_Popup";
import Navbar from "../../components/Navbar/Navbar";

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
}

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

const items1 = {
    hidden: {opacity: 0, x: -80},
    show: {
        opacity: 1,
        x: 0,
        transition: {
            ease: 'easeInOut',
            duration: 1,
            scroll: 2
        }
    }
}

const transition = {duration: 1.4, ease: [0.6, -0.05, 0.01, 0.99]};

const firstName = {
    initial: {
        y: -20,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.04,
            staggerDirection: -1
        }
    }
};

const lastName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.04,
            staggerDirection: 1
        }
    }
};

const letter = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: {duration: 1, ...transition}
    }
};

const fadeInUp = {
    initial: {
        y: -60,
        opacity: 0,
        transition: {
            duration: 0.6, ease: easeing
        }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: 0.5,
            ease: easeing
        }
    }
}

const cards = CardData.map(item => {
    return (
        <Card
            key={item.id}
            item={item}
        />
    )
})

const reviews = ReviewData.map(items2 => {
    return (
        <Review
            key={items2.id}
            item2={items2}
        />
    )
})

function Home() {
    return (
        <div className="Home--details">
            <div>
                <Navbar/>
            </div>
            <motion.div className="header" initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}}
                        transition={{duration: 1, ease: easeing}}>
                <motion.h2>
                    {/*    <motion.span variants={firstName} initial='initial' animate="animate" className='navbar--sub'>*/}
                    {/*        <motion.span variants={letter}>M</motion.span>*/}
                    {/*        <motion.span variants={letter}>U</motion.span>*/}
                    {/*        <motion.span variants={letter}>B</motion.span>*/}
                    {/*        <motion.span variants={letter}>A</motion.span>*/}
                    {/*        <motion.span variants={letter}>R</motion.span>*/}
                    {/*        <motion.span variants={letter}>A</motion.span>*/}
                    {/*        <motion.span variants={letter}>K</motion.span>*/}
                    {/*    </motion.span>*/}
                    {/*    <br/>*/}
                    {/*    <motion.span variants={lastName} inlitial='initial' animate='animate' className='navbar--sub'>*/}
                    {/*        <motion.span variants={letter} className='second'>E</motion.span>*/}
                    {/*        <motion.span variants={letter}>N</motion.span>*/}
                    {/*        <motion.span variants={letter}>T</motion.span>*/}
                    {/*        <motion.span variants={letter}>E</motion.span>*/}
                    {/*        <motion.span variants={letter}>R</motion.span>*/}
                    {/*        <motion.span variants={letter}>P</motion.span>*/}
                    {/*        <motion.span variants={letter}>R</motion.span>*/}
                    {/*        <motion.span variants={letter}>I</motion.span>*/}
                    {/*        <motion.span variants={letter}>S</motion.span>*/}
                    {/*        <motion.span variants={letter}>E</motion.span>*/}
                    {/*        <motion.span variants={letter}>S</motion.span>*/}
                    {/*    </motion.span>*/}
                    <motion.h1 className="navbar--sub">MUBARAK <br/> ENTERPRISES</motion.h1>
                    <motion.p variants={fadeInUp} className="sub-title">
                        A taste you will always Remember!
                    </motion.p>
                </motion.h2>
                <motion.div className="img1">
                    <motion.img className="cover--img" src={img1} initial={{x: 200, opacity: 0}}
                                animate={{x: 0, opacity: 1}} transition={{duration: .5, delay: 0.5}}/>
                </motion.div>
            </motion.div>
            <motion.div className="view--product" variants={stagger}>
                <Link to='/products'>
                    <motion.button className="btn--view--products gradient-btn" variants={items}
                                   whileHover={{scale: 1.2}}
                                   whileTap={{scale: 1.3}}> View Products <i className='arrow right'></i>
                    </motion.button>
                </Link>
            </motion.div>
            <motion.div className="description">
                <div className="des">
                    <motion.h1 className="des--header" variants={items} initial="hidden" exit="exit" whileInView="show"
                               viewport={{once: false}}>
                        Mubarak Products
                    </motion.h1>
                    <motion.h3 className="des--sub" variants={items} initial="hidden" exit="exit" whileInView="show"
                               viewport={{once: false}}> What are we about?
                    </motion.h3>
                    <motion.div className='flex1' variants={items} initial="hidden" exit="exit" whileInView="show"
                                viewport={{once: false}}>
                        <img alt="cover" src={img1} className="description--img"/>
                        <div>
                            <p className="des--para">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                <br/>
                                <br/>
                                electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum
                            </p>
                            <Link to='/about'>
                                <motion.button className="Read--more" variants={items}
                                               whileHover={{scale: 1.2}}
                                               whileTap={{scale: 1.3}}> Read More <i className='arrow right'></i>
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div className='Card--Heading'>
                <motion.h1 className="Card--heading" variants={items1} initial="hidden" exit="exit" whileInView="show"
                           viewport={{once: false}}>Our Products
                </motion.h1>
                <motion.h3 className="card-sub" variants={items1} initial="hidden" exit="exit" whileInView="show"
                           viewport={{once: false}}> Hero Sub-title
                </motion.h3>
                <motion.section className="cards-list">
                    {cards}
                </motion.section>
            </motion.div>
            <motion.div className="customer-review">
                {/*<div className='circle'></div>*/}
                <motion.h1 className='review-header' variants={items} initial="hidden" exit="exit" whileInView="show"
                           viewport={{once: false}}>Testimonials
                </motion.h1>
                <motion.h3 className='review-sub' variants={items} initial="hidden" exit="exit" whileInView="show"
                           viewport={{once: false}}>What does our customers says about our products?
                </motion.h3>
                <motion.div className='review-list sec' variants={items} initial="hidden" exit="exit" whileInView="show"
                            viewport={{once: false}}>
                    {reviews}
                </motion.div>
            </motion.div>
            <motion.div className="rev-btn">
                {Qr_Popup()}
            </motion.div>
            <div className="web-footer">
                {footer()}
            </div>
        </div>
    );
}

export default Home;