import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
    });
    const apiFetch = () => {
        fetch("http://localhost:4000/user")
            .then((res) => res.json())
            .then((json) => setUsers(json));
    };
    useEffect(() => {
        apiFetch();
    }, []);
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const currentUser = users.filter(
            (item) => item.email === input.email && item.password === input.password
        );
        if (currentUser) {
            fetch("http://localhost:4000/currentUser", {
                method: "POST",
                body: JSON.stringify(currentUser[0]),
                headers: {
                    "Content-type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));
            navigate("/Home");
        }
    };

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </>
    );
};

export default Login;