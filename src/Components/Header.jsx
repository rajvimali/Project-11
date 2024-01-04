import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();
    const apiFetch = () => {
        fetch("http://localhost:4000/currentUser")
            .then((res) => res.json())
            .then((json) => {
                if (Object.keys(json).length > 0) {
                    setCurrentUser(json);
                } else {
                    setCurrentUser(null);
                }
            });
    };
    console.log(currentUser);
    useEffect(() => {
        apiFetch();
    }, []);

    const handleLogout = () => {
        console.log("Logout");
        setCurrentUser(null); // Simulate logout by clearing the currentUser state
        navigate("/Home");
    };

    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <nav className="space-x-4 text-gray-600 text-lg">
                        <Link to="/">Home</Link>
                        <Link to="/Product">Products</Link>
                        {!currentUser ? <> <Link to="/login">Login</Link>
                            <Link to="/signup">SignUp</Link></> :
                            <a href="/" onClick={handleLogout} to="/logout">Logout</a>
                        }
                        <Link to="/cart" className="relative">
                            Cart    </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;