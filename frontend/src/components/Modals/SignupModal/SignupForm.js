import "./SignupForm.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { signupThunk } from "../../../store/user";
import SubmitButton from "../SubmitButton/SubmitButton";

function SignupForm({ setShowSignupForm }) {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.user);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({});

	if (user) {
		return <Redirect to="/" />;
	}

	const handleErrorFix = (errorKey) => {
		if (errorKey in errors) {
			const newErrors = { ...errors };
			delete newErrors[errorKey];
			setErrors({ ...newErrors });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newUser = {
			firstName,
			lastName,
			email,
			password,
		};

		if (password !== confirmPassword) {
			return setErrors((prev) => ({ ...prev, confirmPassword: "Passwords do not match" }));
		}
		return dispatch(signupThunk(newUser)).catch(async (res) => {
			const data = await res.json();
			if (data && data.errors) {
				setErrors((prev) => ({ ...prev, ...data.errors }));
			}
		});
	};

	return (
		<div className="modal-form-container" onClick={(e) => e.stopPropagation()}>
			<section
				className="modal-exit-button mouse-pointer bg-off-white-hover"
				onClick={() => setShowSignupForm(false)}>
				<i className="fa-solid fa-xmark" />
			</section>
			<section className="modal-form-header border-bot-235">
				<section className="font-bold font-14">Sign up</section>
			</section>
			<section className="modal-form-body">
				<form onSubmit={handleSubmit} className="signup-form">
					<section className="signup-input-section">
						<input
							className="signup-first-name-input"
							type="text"
							placeholder="First Name"
							value={firstName}
							onChange={(e) => {
								setFirstName(e.target.value);
								handleErrorFix("firstName");
							}}
						/>
						<input
							className="signup-last-name-input"
							type="text"
							placeholder="Last Name"
							value={lastName}
							onChange={(e) => {
								setLastName(e.target.value);
								handleErrorFix("lastName");
							}}
						/>
						<input
							className="signup-email-input"
							type="text"
							placeholder="Email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								handleErrorFix("email");
							}}
						/>
						<input
							className="signup-password-input"
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
								handleErrorFix("password");
							}}
						/>
						<input
							className="signup-confirm-input"
							type="password"
							placeholder="Confirm Password"
							value={confirmPassword}
							onChange={(e) => {
								setConfirmPassword(e.target.value);
								handleErrorFix("confirmPassword");
							}}
						/>
					</section>
					{/* Error Handling */}
					<div className="signup-error-section font-12 color-red">
						<section className={`${"firstName" in errors ? "error-open" : "error-close"}`}>
							<section className="overflow-hidden">
								<i className="exclamation-mark fa-solid fa-circle-exclamation" />
								{errors.firstName}
							</section>
						</section>
						<section className={`${"lastName" in errors ? "error-open" : "error-close"}`}>
							<section className="overflow-hidden">
								<i className="exclamation-mark fa-solid fa-circle-exclamation" />
								{errors.lastName}
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
						<section className={`${"confirmPassword" in errors ? "error-open" : "error-close"}`}>
							<section className="overflow-hidden">
								<i className="exclamation-mark fa-solid fa-circle-exclamation" />
								{errors.confirmPassword}
							</section>
						</section>
					</div>
					<div className="signup-submit-button-container">
						<SubmitButton buttonText="Continue" />
					</div>
				</form>
			</section>
			{/* <section className="google-login">
                            Google login functionality to be added
                        </section> */}
		</div>
	);
}

export default SignupForm;
