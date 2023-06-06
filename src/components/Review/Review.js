import React from "react";

export default function Review(prop){
    return(
        <div className='Review-card'>
            <img className="Review-img" src ={prop.item2.img}/>
            <div>
                <img className='star' src={prop.item2.stats.star}/>
                <h1 className='cux-name'>{prop.item2.stats.cux_name}</h1>
                <p className='cux-review'>{prop.item2.stats.cux_Review}</p>
            </div>
        </div>
    )
}
