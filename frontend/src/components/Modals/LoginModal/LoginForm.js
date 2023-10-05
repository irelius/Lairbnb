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

    console.log('booba', errors)

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
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email"
                />
                <input
                    id="login-form-password-input"
                    className="border-176"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                />
                <div>
                    {errors}
                </div>
                <button type="submit" id="login-button" className="semi-bold">Continue</button>
            </form>
        </div>
    );
}

export default LoginForm
