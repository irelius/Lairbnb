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
    const [inputFocus, setInputFocus] = useState(null)


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

    const changeFocus = (e) => {
        const inputField = e.target.placeholder.toLowerCase()
        if (inputField === "email") {
            setInputFocus("password")
        } else {
            setInputFocus('email')
        }
    }

    return (
        <div className="modal-form-container" onClick={(e) => e.stopPropagation()}>
            <section className="modal-exit-button mouse-pointer bg-off-white-hover" onClick={() => setShowLoginForm(false)}>
                <i className="fa-solid fa-xmark" />
            </section>
            <section className="modal-form-header">
                <section className="font-bold font-14">
                    Log in
                </section>
            </section>
            <div>
                <form onSubmit={() => handleSubmit()} className="login-form">
                    <input
                        className={`login-form-email-input email-${inputFocus}`}
                        type="text"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            if (errors === "Invalid email") {
                                setErrors("")
                            }
                        }}
                        onFocus={(e) => changeFocus(e)}
                        required
                        placeholder="Email"
                    />
                    <input
                        className={`login-form-password-input password-${inputFocus}`}
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            if (errors === "Invalid password") {
                                setErrors("")
                            }
                        }}
                        onFocus={(e) => changeFocus(e)}
                        required
                        placeholder="Password"
                    />
                    {errors ? (
                        <div className="login-error-section font-12 color-red">
                            <i className="exclamation-mark fa-solid fa-circle-exclamation" /> {errors}
                        </div>
                    ) : (
                        <div className="login-error-section font-12">
                            Enter your account information to log in.
                        </div>
                    )}
                    <SubmitButton buttonText="Continue" />
                </form>
            </div>
            <div className="demo-login-container">
                <button className="button font-12 mouse-pointer border-none demo-login-button" onClick={() => signInDemo()}>Demo Login</button>
            </div>
            {/* <section className="google-login">
                    Google login functionality to be added
                </section> */}
        </div>
    );
}

export default LoginForm
