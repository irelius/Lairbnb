// frontend/src/components/Modals/LoginModal/LoginForm.js
import "./LoginForm.css"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from "../../../store/user";

function LoginForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        const user = {
            email: email,
            password: password
        }

        return dispatch(loginThunk(user)).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                    setErrors(data.errors.error)
                }
                if(data.errors.error === "Invalid email") {
                    setEmail("")
                }
                if(data.errors.error === "Invalid password") {
                    setPassword("")
                }
            }
        );
    };

    return (
        <div>
            <form onSubmit={handleSubmit} id="login-form">
                <input
                    id="login-form-email-input"
                    className="border-176"
                    type="text"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        if (errors === "Invalid email") {
                            setErrors("")
                        }
                    }}
                    required
                    placeholder="Email"
                />
                <input
                    id="login-form-password-input"
                    className="border-176"
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                        if (errors === "Invalid password") {
                            setErrors("")
                        }
                    }}
                    required
                    placeholder="Password"
                />
                {errors ? (
                    <div className="font-12 red">
                        <i class="fa-solid fa-circle-exclamation"/> {errors}
                    </div>
                ) : (
                    <div className="font-12">
                        Enter your account information to log in.
                    </div>
                )}
                <button type="submit" id="login-button" className="font-16 semi-bold white pointer">Continue</button>
            </form>
        </div>
    );
}

export default LoginForm
