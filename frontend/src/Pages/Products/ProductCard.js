import React from "react";

export default function ProductsCards(props) {
    return (

        <div className='productsCard'>
            <div>
                <img alt='pro-img' className="ProductCard--img" src={props.items.img}/>
            </div>
            <div className="ProductCard--description">
                <div>
                    <h2 className="ProductCard--name">{props.items.stats.productName}</h2>
                    <h5 className='ingredients'>{props.items.stats.Ingredients}</h5>
                    <h5 className='weight'>{props.items.stats.Weight}</h5>
                    <h5 className='product--price'>{props.items.stats.ProductPrice} </h5>
                </div>
            </div>
        </div>

    )
}
