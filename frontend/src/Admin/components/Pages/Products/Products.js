import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3088/ourProduct")
            .then(response => {
                setProducts(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1 className="ourproduct">Our Products</h1>
            <div className="product-container">
                <table className="product-table">
                    <thead>
                    <tr>
                        <th>PRODUCT NAME</th>
                        <th>PRODUCT CATEGORY</th>
                        <th>PRODUCT PRICE</th>
                        <th>PRODUCT DESCRIPTION</th>
                        <th>PRODUCT IMAGE</th>
                        <th>DELETE PRODUCT</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product.productname}</td>
                            <td>{product.productcategory}</td>
                            <td>{product.productprice}</td>
                            <td>{product.productdescription}</td>
                            <td>{product.productimage}</td>
                            <td>
                                <button className="delete-product">Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
