import React from "react";
import { motion } from "framer-motion"

let easeing = [0.6, -0.05,0.01,0.99];

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


export default function Card(prop){
    return(
        <motion.div className="card" variants={items1} initial="hidden" exit="exit" whileInView="show"
                    viewport={{once: false}}>
            <img alt="bottle" className = "card--img" src = {prop.item.img}/>
            <div className="card--description">
                <h2 className = "pro-name">{prop.item.stats.productName}</h2>
            </div>
        </motion.div>
    )
}