// frontend/src/components/Modals/LoginModal/LoginForm.js
import "./LoginForm.css"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from "../../../store/user";
import SubmitButton from "../SubmitButton/SubmitButton";

function LoginForm({ setShowLoginForm }) {
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
                if (data.errors.error === "Invalid email") {
                    setEmail("")
                }
                if (data.errors.error === "Invalid password") {
                    setPassword("")
                }
            }
        );
    };

    const signInDemo = () => {
        const demoUser = {
            email: "demo@aa.io",
            password: "password"
        }
        dispatch(loginThunk(demoUser));
    }

    return (
        <div className="modal-form-container ffffff-bg" onClick={(e) => e.stopPropagation()}>
            <section className="modal-exit-button pointer f7f7f7-bg-hover" onClick={() => setShowLoginForm(false)}>
                <i className="fa-solid fa-xmark" />
            </section>
            <section className="modal-form-header bbot-235">
                <section className="bold font-14">
                    Log in
                </section>
            </section>
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
                        <div id="login-error-section" className="font-12 red">
                            <i id="exclamation-mark" className="fa-solid fa-circle-exclamation" /> {errors}
                        </div>
                    ) : (
                        <div id="login-error-section" className="font-12">
                            Enter your account information to log in.
                        </div>
                    )}
                    <SubmitButton buttonText="Continue" />
                </form>
                <div id="demo-login-container">
                    <button className="button font-12 pointer no-border" id="demo-login-button" onClick={() => signInDemo()}>Demo Login</button>
                </div>
            </div>
            {/* <section id="google-login">
                    Google login functionality to be added
                </section> */}
        </div>
    );
}

export default LoginForm
