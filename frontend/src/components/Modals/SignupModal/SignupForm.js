import "./SignupForm.css"

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { signupThunk } from "../../../store/user";

function SignupForm() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (user) {
        return (
            <Redirect to='/' />
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            email,
            password
        }

        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(signupThunk(newUser))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data.errors) {
                        setErrors([Object.values(data.errors)]);
                    }
                });
        } else {
            return setErrors(['Passwords do not match']);
        }

    }

    return (
        <div id="signup-main">
            <form onSubmit={handleSubmit} id="signup-form">
                <input
                    type="text"
                    placeholder="First Name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit">
                    Sign Up
                </button>
            </form>
            <div>
                {errors.map((error, idx) => <p key={idx}>{error}</p>)}
            </div>
        </div>
    )
}

export default SignupForm
