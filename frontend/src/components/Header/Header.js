// components/Header/Header.js
import "./Header.css";

import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { ModeContext } from "../../context/Mode/Mode";
import ProfileDropdownMenu from "../Modals/ProfileMenuModal";

function Header({ isLoaded }) {
	const history = useHistory();

	const { mode, setMode } = useContext(ModeContext);
	const user = useSelector((state) => state.user);

	return (
		<div className="header-wrapper">
			<div className="header-main-container border-bot-235">
				{/* Header left side (logo and name) */}
				<aside>
					<section className="header-lairbnb-icon-container mouse-pointer" onClick={() => history.push("/")}>
						{/* <img
							className="lairbnb-icon"
							src="https://raw.githubusercontent.com/irelius/Airbnb/main/frontend/public/assets/favicon-32x32.png"
							alt="lairbnb-icon"
						/> */}
                        <img
							className="lairbnb-icon"
							src="lairbnb_logo.png"
							alt="lairbnb-icon"
						/>
						{mode === "travel" ? <p className="lairbnb-header-text font-bold">Lairbnb</p> : <></>}
					</section>
				</aside>

				{/* If user is logged in */}
				{isLoaded && user.loggedIn === true ? (
					<div className="header-right-container">
						<aside className="header-host-button-container">
							{/* if user is in "travel" mode (making bookings) */}
							{mode === "travel" ? (
								<button
									className="header-host-button bg-off-white-hover bold mouse-pointer"
									onClick={() => {
										setMode("host");
										history.push("/hosting");
									}}>
									Become a host
								</button>
							) : (
								// user is on "host" mode (managing listings)
								<button
									className="header-host-button bg-off-white-hover bold mouse-pointer border-gray"
									onClick={() => {
										setMode("travel");
										history.push("/");
									}}>
									Exit
								</button>
							)}
						</aside>
						{mode === "travel" ? <ProfileDropdownMenu /> : <></>}
					</div>
				) : // {/* If user is not logged in */}
				isLoaded && user.loggedIn === false ? (
					<div className="header-right-container">
						<ProfileDropdownMenu />
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}

export default Header;
