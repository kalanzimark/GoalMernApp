import React from "react";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const { name, email, password, confirmPassword } = formData;

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const onSubmit = () => {};
    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser />
                    Register
                </h1>
                <p>Create an account</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={onChange}
                            placeholder="Enter your name"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Enter your email"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={onChange}
                            placeholder="Enter your password"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={onChange}
                            placeholder="confirm your passsword"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">
                            submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Register;
