import "./ProfileDropDownMenu.css"

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { loginThunk, logoutThunk } from "../../../store/user"
import LoginForm from "../LoginModal/LoginForm";
import SignupForm from "../SignupModal/SignupForm";

const ProfileDropDownMenu = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [showMenu, setShowMenu] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false)
    const [showSignupForm, setShowSignupForm] = useState(false)

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

    const handleOptionClick = (e) => {
        e.stopPropagation();
        setShowMenu(false);
    };

    useEffect(() => {
        if (!showMenu) return;
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const user = useSelector(state => state.user.user)


    return (
        <div id="profile-main-container">
            <button id={`profile-button-container${showMenu ? '-shadow' : ''}`} className="border-235 ffffff-bg pointer" onClick={openMenu}>
                <i id="profile-bars" className="fa-solid fa-bars" />
                <div id="profile-icon-container">
                    {user ? user.firstName.slice(0, 1) : <i id="profile-icon" className="fa-solid fa-user fa-lg" />}
                </div>
            </button>
            <div id="profile-dropdown-main-container">
                {showMenu && (
                    <div id="profile-dropdown-container" className="shadow ffffff-bg" onClick={handleOptionClick}>
                        {user ? (
                            <>
                                <section className="semi-bold">
                                    {user.firstName} {user.lastName}
                                </section>
                                <section className="semi-bold">
                                    {user.email}
                                </section>
                                <section className="f7f7f7-bg-hover pointer" onClick={() => history.push("/manage-listings")}>
                                    Manage Your Listings
                                </section>
                                <section className="f7f7f7-bg-hover pointer" onClick={logout}>
                                    Log Out
                                </section>
                            </>
                        ) : (
                            <>
                                <section className="f7f7f7-bg-hover pointer bold" onClick={signInDemo}>
                                    Sign in as Demo User
                                </section>
                                <section
                                    className="f7f7f7-bg-hover pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowMenu(false);
                                        setShowSignupForm(true);
                                    }}
                                >
                                    Sign Up
                                </section>
                                <section
                                    className="f7f7f7-bg-hover pointer"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowMenu(false);
                                        setShowLoginForm(true);
                                    }}
                                >
                                    Log In
                                </section>
                            </>
                        )}
                    </div>
                )}
            </div>
            {showLoginForm ? (
                <div className="modal" id="login-form-overlay" onClick={() => setShowLoginForm(false)}>
                    <div className="ffffff-bg" id="login-form-container" onClick={(e) => e.stopPropagation()}>
                        <section id="exit-button" className="pointer" onClick={() => setShowLoginForm(false)}>
                            <i className="fa-solid fa-xmark" />
                        </section>
                        <section id="login-form-header" className="bbot-235">
                            <section className="bold font-14">
                                Log in
                            </section>
                        </section>
                        <section id="login-form-body">
                            <section>
                                <LoginForm />
                            </section>
                        </section>
                        <section id="google-login">
                            Google login functionality to be added
                        </section>
                    </div>
                </div>
            ) : (
                <></>)
            }
            {showSignupForm ? (
                <div className="modal" id="signup-form-overlay" onClick={() => setShowSignupForm(false)}>
                    <div className="ffffff-bg" id="signup-form-container" onClick={(e) => e.stopPropagation()}>
                        Sign up
                        <SignupForm />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default ProfileDropDownMenu;
