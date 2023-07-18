import React, { useState } from "react";
import axios from "axios";

export default function AddNewProducts() {
    const [productname, setProductname] = useState("");
    const [productcategory, setProductcategory] = useState("");
    const [productprice, setProductprice] = useState("");
    const [productweight, setProductweight] = useState("");
    const [productdescription, setProductdescription] = useState("");
    const [productimage, setProductimage] = useState("");
    const [image, setImage] = useState("");

    function convertToBase64(e) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.onerror = (error) => {
            console.log("Error: ", error);
        };
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3088/product", {
                productname,
                productcategory,
                productprice,
                productweight,
                productdescription,
                productimage,
            })
            .then((result) => {
                console.log(result);
                alert("Product added successfully");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1 className="addProduct-Heading">Add New Product</h1>
            <div className="form-container">
                <div>
                    <span className="Required1">* Required</span>
                </div>
                <form action="" className="add-product-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-column">
                            <label htmlFor="textbox1">Enter Product Name <span className="Required">*</span></label>
                            <input
                                type="text"
                                placeholder="Product Name"
                                name="ProductName"
                                className="addProduct-textbox"
                                onChange={(e) => setProductname(e.target.value)}
                            />
                        </div>
                        <div className="form-column">
                            <label htmlFor="dropdown">Select Product Category<span className="Required">*</span></label>
                            <select
                                id="dropdown"
                                className="addProduct-dropdown"
                                placeholder="Product Category"
                                name="ProductCategory"
                                onChange={(e) => setProductcategory(e.target.value)}
                            >
                                <option value="Bottle">Bottle</option>
                                <option value="Packets">Packets</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <label htmlFor="textbox2">Enter Product Price<span className="Required">*</span></label>
                            <input
                                type="text"
                                className="addProduct-textbox"
                                placeholder="Product Price"
                                name="ProductPrice"
                                onChange={(e) => setProductprice(e.target.value)}
                            />
                        </div>
                        <div className="form-column">
                            <label htmlFor="textbox3">Enter Product Weight<span className="Required">*</span></label>
                            <input
                                placeholder="Product Weight"
                                className="addProduct-textbox"
                                type="text"
                                name="ProductWeight"
                                onChange={(e) => setProductweight(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-column full-width">
                            <label htmlFor="textbox3">Enter Product Description<span className="Required">*</span></label>
                            <textarea
                                className="addProduct-textarea"
                                placeholder="Product Description"
                                name="ProductDescription"
                                onChange={(e) => setProductdescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-column">
                            <label className="addProduct-image-label" htmlFor="image">Select Image<span className="Required">*</span></label>
                            <input
                                accept="image/*"
                                type="file"
                                name="ProductImage"
                                className="addProduct-image"
                                onChange={convertToBase64}
                                onChange={(e) => setProductimage(e.target.value)}
                            />
                        </div>
                        <div className="form-column">
                            {image === "" || image == null ? (
                                ""
                            ) : (
                                <img alt="img" className="image" width={100} height={100} src={image} />
                            )}
                        </div>
                    </div>
                    <div className="form-row">
                        <button className="add-product">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
