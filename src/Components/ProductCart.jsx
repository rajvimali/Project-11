import React, { useEffect, useState } from "react";
import axios from 'axios'


const ProductCart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/cart')
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error));
    }, []);
    const handleDelete = (item) => {
        fetch(`http://localhost:4000/cart/${item.id}`, {
            method: 'DELETE',

        })

            .then(() => {

                const updatedProducts = products.filter((product) => product.id !== item.id);
                setProducts(updatedProducts);
            })
            .catch((error) => console.error(error));

    };

    return (
        <div className="container mx-auto py-16 px-4">
            <h2 className="text-center  mb-6">Shopping Cart</h2>
            <div className="mb-4">
                {products.length < 1 ? (
                    <h3 className='text-center text-danger mt-5'>No items selected!</h3>
                ) : (
                    <table className="table table-hover mt-3">
                        <thead>
                            <tr>
                                <th className="col-3 fs-5">Products</th>
                                <th className="col-3 fs-5 text-center">Price</th>
                                <th className="col-3 fs-5 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item) => (
                                <tr key={item.id}>
                                    <td className=" col-3 ">
                                        <div className=' text-center'></div>
                                        {item.title}
                                    </td>
                                    <td className="text-center col-3">${item.price}</td>
                                    <td className=" text-center col-3">
                                        <button onClick={() => handleDelete(item)} className="btn btn-danger "><i class="fa-solid fa-xmark"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            {products.length > 0 && (
                <div className="mb-6 text-center">
                    <button className=" col-4 btn btn-info fw-bold text-white">
                        Check it!!
                    </button>
                </div>
            )}
        </div>
    );
}
export default ProductCart