import "./ProfileDropDownMenu.css";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { loginThunk, logoutThunk } from "../../../store/user"
import LoginFormModal from "../LoginModal";
import SignupFormModal from "../SignupModal";

const ProfileDropDownMenu = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [showMenu, setShowMenu] = useState(false);
    const [load, setLoad] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    const logout = (e) => {
        e.preventDefault();
        dispatch(logoutThunk());
        history.push('/')
    };

    const signInDemo = () => {
        const demoUser = {
            email: "demo@aa.io",
            password: "password"
        }
        dispatch(loginThunk(demoUser));
    }

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowMenu(false);
    };

    useEffect(() => {
        setLoad(true)
    }, [])

    const user = useSelector(state => state.user.user)

    return load ? (
        user ? (
            <div id="profile-main-container">
                <button id={`profile-button-container${showMenu ? '-shadow' : ''}`} className="border-235 ffffff-bg pointer" onClick={openMenu}>
                    <i id="profile-bars" className="fa-solid fa-bars" />
                    <div id='profile-icon-container'>
                        {user.firstName.slice(0, 1)}
                    </div>
                </button>
                <div id="profile-dropdown-main-container">
                    {showMenu && (
                        <div id="profile-dropdown-container" className="shadow ffffff-bg">
                            <section className="semi-bold">
                                {user.firstName} {user.lastName}
                            </section>
                            <section className="semi-bold">
                                {user.email}
                            </section>
                            <section className="f7f7f7-bg-hover pointer" onClick={() => history.push("/manage-listings")}>
                                Manage Your Listings
                            </section>
                            <section className="f7f7f7-bg-hover pointer" onClick={() => handleOptionClick("Logout")}>
                                Log Out
                            </section>
                        </div>
                    )}
                </div>
            </div>
        ) : (
            <div id="profile-main-container">
                <button id={`profile-button-container${showMenu ? '-shadow' : ''}`} className="border-235 ffffff-bg pointer" onClick={openMenu}>
                    <i id="profile-bars" className="fa-solid fa-bars" />
                    <div id='profile-icon-container'>
                        <i id="profile-icon" className="fa-solid fa-user fa-lg" />
                    </div>
                </button>
                <div id="profile-dropdown-main-container">
                    {showMenu && (
                        <div id="profile-dropdown-container" className="shadow ffffff-bg">
                            <section className="f7f7f7-bg-hover pointer bold" onClick={signInDemo}>
                                Sign in as Demo User
                            </section>
                            <section className="f7f7f7-bg-hover pointer" onClick={() => handleOptionClick("Sign Up")}>
                                Sign Up
                            </section>
                            <section className="f7f7f7-bg-hover pointer" onClick={() => handleOptionClick("Log In")}>
                                Log In
                            </section>
                        </div>
                    )}
                </div>
                {/* Render the modal conditionally */}
                {selectedOption === "Sign Up" && (
                    <SignupFormModal displayText="Sign Up" />
                )}
                {selectedOption === "Log In" && (
                    <LoginFormModal displayText="Log In" />
                )}
            </div>
        )
    ) : (
        <></>
    )
}

export default ProfileDropDownMenu;
