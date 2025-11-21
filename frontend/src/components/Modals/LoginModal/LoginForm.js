// frontend/src/components/Modals/LoginModal/LoginForm.js
import "./LoginForm.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../../store/user";
import SubmitButton from "../SubmitButton/SubmitButton";

function LoginForm({ setShowLoginForm }) {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});
	const [inputFocus, setInputFocus] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		const user = {
			email: email,
			password: password,
		};

		return dispatch(loginThunk(user)).catch(async (res) => {
			const data = await res.json();
			if (data && data.errors) {
				setErrors(data.errors);
			}
		});
	};

	const signInDemo = (e) => {
		e.preventDefault();
		const demoUser = {
			email: "demo@user.io",
			password: "password",
		};
		dispatch(loginThunk(demoUser));
		setShowLoginForm(false);
	};

	const changeFocus = (e) => {
		const inputField = e.target.placeholder.toLowerCase();
		if (inputField === "email") {
			setInputFocus("password");
		} else {
			setInputFocus("email");
		}
	};

	return (
		<div className="modal-form-container" onClick={(e) => e.stopPropagation()}>
			<section
				className="modal-exit-button mouse-pointer bg-off-white-hover"
				onClick={() => setShowLoginForm(false)}>
				<i className="fa-solid fa-xmark" />
			</section>
			<section className="modal-form-header">
				<section className="font-bold font-14">Log in</section>
			</section>
			<div>
				<form onSubmit={(e) => handleSubmit(e)} className="login-form">
					<input
						className={`login-form-email-input email-${inputFocus}`}
						type="text"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
							if (errors.error === "Invalid email" || errors.error === "Invalid credentials") {
								const newErrors = { ...errors };
								delete newErrors.error;
								setErrors({ ...newErrors });
							}
						}}
						onFocus={(e) => changeFocus(e)}
						placeholder="Email"
					/>
					<input
						className={`login-form-password-input password-${inputFocus}`}
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
							if (errors.error === "Invalid credentials") {
								const newErrors = { ...errors };
								delete newErrors.error;
								setErrors({ ...newErrors });
							}
						}}
						onFocus={(e) => changeFocus(e)}
						placeholder="Password"
					/>

					{/* Error handling */}
					<div className="login-error-section font-12 color-red">
						<section className={`${"error" in errors ? "error-open" : "error-close"}`}>
							<section className="overflow-hidden">
								<i className="exclamation-mark fa-solid fa-circle-exclamation" />
								{errors.error}
							</section>
						</section>
						<section className={`${"email" in errors ? "error-open" : "error-close"}`}>
							<section className="overflow-hidden">
								<i className="exclamation-mark fa-solid fa-circle-exclamation" />
								{errors.email}
							</section>
						</section>
						<section className={`${"password" in errors ? "error-open" : "error-close"}`}>
							<section className="overflow-hidden">
								<i className="exclamation-mark fa-solid fa-circle-exclamation" />
								{errors.password}
							</section>
						</section>
					</div>

					<div className="login-submit-button-container">
						<SubmitButton buttonText="Continue" />
					</div>
				</form>
			</div>
			<div className="demo-login-container">
				<button
					className="button font-12 mouse-pointer border-none demo-login-button"
					onClick={(e) => signInDemo(e)}>
					Demo Login
				</button>
			</div>
			{/* <section className="google-login">
                    Google login functionality to be added
                </section> */}
		</div>
	);
}

export default LoginForm;
