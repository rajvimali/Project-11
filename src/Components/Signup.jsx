import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Signup = () => {
    // const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        console.log(input);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/user", {
            method: "POST",
            body: JSON.stringify(input),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        // navigate('/Login')
    };
    return (
        <>
            <form action="" onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={handleChange}
                />
                <br />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </>
    );
};

export default Signup;