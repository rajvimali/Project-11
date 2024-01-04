import React, { useEffect, useState } from "react";
import "./style.css";
const Product = () => {
    const [user, setUsers] = useState([]);
    // const { authenticate } = useContext(AuthContext)
    const apiFetch = () => {
        fetch("http://localhost:4000/products")
            .then((res) => res.json())
            .then((json) => setUsers(json));
    };
    useEffect(() => {
        apiFetch();
    }, []);
    const addCart = (item) => {
        fetch('http://localhost:4000/cart', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

    }
    return (
        <div className="container mx-auto  row row-cols-4 d-flex py-2 px-4">
            {user &&
                user.map((item, idex) => {
                    return (
                        <>
                            <div className="product-card container mx-auto col-lg-3">
                                <div className="product-tumb">
                                    <img src={item.images[0]} alt="" />
                                </div>
                                <div className="product-details">
                                    <span className="product-catagory"></span>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <div className="product-bottom-details">
                                        <div className="product-price">₹{item.price}</div>
                                        <div className="product-links">
                                            <button
                                                className="border-0 p-1 rounded"
                                                onClick={() => addCart(item)}
                                            >
                                                Add to cart +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
        </div>
    );
};
export default Product;

