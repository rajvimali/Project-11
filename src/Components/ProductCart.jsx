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
            <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
            <div className="mb-4">
                {products.length < 1 ? (
                    <h1 className='text-xl text-center'>No items in cart!</h1>
                ) : (
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-start">Products</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-4 py-2 flex items-center">
                                        <div className='mr-2'></div>
                                        {item.title}
                                    </td>
                                    <td className="px-4 py-2 text-center">${item.price}</td>
                                    <td className="px-4 py-2 text-center">
                                        <button onClick={() => handleDelete(item)} className="">❌</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            {products.length > 0 && (
                <div className="mb-6">
                    <button className="w-full p-2 bg-pink-500 text-white font-bold rounded hover:bg-pink-600 focus:outline-none">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
}
export default ProductCart