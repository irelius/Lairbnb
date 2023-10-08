import "./SignUp.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signupThunk } from "../../store/user";
import { Redirect } from "react-router-dom"

function SignUp() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.user.user)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) {
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
                    console.log('booba', data)
                    if (data.errors) {
                        setErrors([Object.values(data.errors)]);
                    }
                });
        } else {
            return setErrors(['Confirm Password field must be the same as the Password field']);
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
            <div id="signup-error">
                booba
                {errors.map((error, idx) => <p key={idx}>{error}</p>)}
            </div>
        </div>
    )
}

export default SignUp
