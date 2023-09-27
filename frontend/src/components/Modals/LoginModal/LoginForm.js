// frontend/src/components/Modals/LoginModal/LoginForm.js
import "./LoginForm.css"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from "../../../store/user";

function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        return dispatch(loginThunk(credential, password)).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                    setErrors(data.errors);
                }
                if (data.statusCode === 401) {
                    setErrors([data.message])
                };
            }
        );
    };

    return (
        <div>
            <form onSubmit={handleSubmit} id="login-form">
                <div>
                    <ul>
                        {errors.map((error, idx) => <div key={idx}>{error}</div>)}
                    </ul>
                </div>
                <label>
                    Email
                    <input
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit" id="login-button">Log In</button>
            </form>
        </div>
    );
}

export default LoginForm
