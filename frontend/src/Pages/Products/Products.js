import React, {useState, useEffect} from "react"
import ProductsCards from "./ProductCard";
import ProductCardData from "./ProductCardData";
import footer from "../../components/Footer/Footer";
import productCardData from "./ProductCardData";
import Navbar from "../../components/Navbar/Navbar";

const ProductCards = ProductCardData.map(items => {
    return (
        <ProductsCards
            key={items.id}
            items={items}
        />
    )
})

export default function Products() {

    const [category, setCategory] = useState('all');

    const handleCategoryClick = (category) => {
        setCategory(category);
    };

    const filteredProducts = category === 'all' ? productCardData : productCardData.filter(product => product.category === category);

    return (
        <div className='pro'>
            <div>
                <Navbar/>
            </div>
            <div className='pro-head'>
                <h1> Our Products </h1>
                <h3> Sub Heading </h3>
                {/*<img className="fast-moving" src='../../images/maldives.png' />*/}
            </div>
            <div className='products1'>
                <div className='cat-btn'>
                    <div>
                        <button onClick={() => handleCategoryClick('all')} type="button" className="cat-btn1">All
                        </button>
                    </div>
                    <div>
                        <button onClick={() => handleCategoryClick('bottle')} type="button"
                                className="cat-btn1">Bottle
                        </button>
                    </div>
                    <div>
                        <button onClick={() => handleCategoryClick('category1')} type="button"
                                className="cat-btn1">Packets
                        </button>
                    </div>
                </div>

                <div className="ProductCard-list">
                    {ProductCards}
                </div>
                <div className="web-footer">
                    {footer()}
                </div>
            </div>
        </div>
    )

}
