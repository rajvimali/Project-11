import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const [User, setUser] = useState(null);
    const navigate = useNavigate();
    const apiFetch = () => {
        fetch("http://localhost:4000/user")
            .then((res) => res.json())
            .then((json) => {
                if (Object.keys(json).length > 0) {
                    setUser(json);
                } else {
                    setUser(null);
                }
            });
    };
    console.log(User);
    useEffect(() => {
        apiFetch();
    }, []);

    const handleLogout = () => {
        console.log("Logout");
        setUser(null); // Simulate logout by clearing the User state
        navigate("/Home");
    };

    return (
        <header className="bg-white shadow mb-4">
            <div className="container">
                <nav className="navbar p-3">
                    <Link to="/" className="text-decoration-none btn btn-primary text-white me-2">Home</Link>
                    <Link to="/Product" className="text-decoration-none btn btn-warning text-white me-2">Products</Link>
                    {!User ? <> <Link to="/login" className="text-decoration-none btn btn-secondary me-2">Login</Link>
                        <Link to="/signup" className="text-decoration-none btn btn-success me-2">SignUp</Link></> :
                        <a href="/" className="text-decoration-none btn btn-danger me-2" onClick={handleLogout} to="/logout">Logout</a>
                    }
                    <Link to="/cart" className="relative text-decoration-none btn btn-info text-white me-2">
                        Cart    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;