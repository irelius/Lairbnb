/* eslint-disable no-unreachable */
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

    const menuSwitch = () => {
        if (showMenu) setShowMenu(false);
        else setShowMenu(true);
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

    // useEffect(() => {
    //     if (!showMenu) return;
    //     document.addEventListener('click', closeMenu);
    //     return () => document.removeEventListener("click", closeMenu);
    // }, [showMenu]);

    const loggedIn = useSelector(state => state.user.loggedIn)
    const user = useSelector(state => state.user.user)

    return (
        <div>
            <button id={`profile-button-container${showMenu ? '-shadow' : ''}`} className="border-235 ffffff-bg pointer" onClick={() => menuSwitch()}>
                <i id="profile-bars" className="fa-solid fa-bars" />
                <div id="profile-icon-container">
                    {loggedIn ? user.firstName.slice(0, 1) : <i id="profile-icon" className="fa-solid fa-user fa-lg" />}
                </div>
            </button>
            {showMenu ? (
                <div className="profile-dropdown-container shadow ffffff-bg" onClick={(e) => e.stopPropagation()}>
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
                            <section className="f7f7f7-bg-hover pointer" onClick={(e) => logout(e)}>
                                Log Out
                            </section>
                        </>
                    ) : (
                        <>
                            <section className="f7f7f7-bg-hover pointer bold" onClick={() => signInDemo()}>
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

            ) : (
                <></>
            )}
            {showLoginForm ? (
                <div className="modal" onClick={() => setShowLoginForm(false)}>
                    <div className="modal-form-container ffffff-bg" onClick={(e) => e.stopPropagation()}>
                        <section id="modal-exit-button" className="pointer f7f7f7-bg-hover" onClick={() => setShowLoginForm(false)}>
                            <i className="fa-solid fa-xmark" />
                        </section>
                        <section className="modal-form-header bbot-235">
                            <section className="bold font-14">
                                Log in
                            </section>
                        </section>
                        <section className="modal-form-body">
                            <section>
                                <LoginForm />
                            </section>
                        </section>
                        {/* <section id="google-login">
                            Google login functionality to be added
                        </section> */}
                    </div>
                </div>
            ) : (
                <></>
            )}
            {showSignupForm ? (
                <div className="modal" onClick={() => setShowSignupForm(false)}>
                    <div className="modal-form-container ffffff-bg" onClick={(e) => e.stopPropagation()}>
                        <section id="modal-exit-button" className="pointer f7f7f7-bg-hover" onClick={() => setShowSignupForm(false)}>
                            <i className="fa-solid fa-xmark" />
                        </section>
                        <section className="modal-form-header bbot-235">
                            <section className="bold font-14">
                                Sign up
                            </section>
                        </section>
                        <section className="modal-form-body">
                            <section>
                                <SignupForm />
                            </section>
                        </section>
                        {/* <section id="google-login">
                            Google login functionality to be added
                        </section> */}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div >
    )
}

export default ProfileDropDownMenu;
