import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./AllProducts.css";

const AllProducts = (props) => {
    const [protucts, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setProducts(json));
    }, []);
    return (
        <div>
            <h1>All Products</h1>
            <div className="container">
                <div className="row">
                    {protucts.map((product) => (
                        <SingleProduct
                            product={product}
                            cartCount={props.cartCount}
                            key={product.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
