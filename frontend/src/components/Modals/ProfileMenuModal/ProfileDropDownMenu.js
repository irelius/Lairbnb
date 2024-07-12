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
            email: "demo@user.io",
            password: "password"
        }
        dispatch(loginThunk(demoUser));
    }

    useEffect(() => {
        if (!showMenu) return;
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const loggedIn = useSelector(state => state.user.loggedIn)
    const user = useSelector(state => state.user.user)

    return (
        <div>
            <button className={`border-235 bg-white mouse-pointer profile-button-container${showMenu ? '-shadow' : ''}`} onClick={() => menuSwitch()}>
                <i className="fa-solid fa-bars profile-bars" />
                <div className="profile-icon-container">
                    {loggedIn ? user.firstName.slice(0, 1) : <i className="fa-solid fa-user fa-lg"/>}
                </div>
            </button>
            {showMenu ? (
                <div className="profile-dropdown-container shadow bg-white" onClick={(e) => e.stopPropagation()}>
                    {user ? (
                        <>
                            <section className="font-semi-bold">
                                {user.firstName} {user.lastName}
                            </section>
                            <section className="font-semi-bold">
                                {user.email}
                            </section>
                            <section className="bg-off-white-hover mouse-pointer" onClick={() => {
                                closeMenu()
                                history.push("/manage-listings")
                            }}>
                                Manage Your Listings
                            </section>
                            <section className="bg-off-white-hover mouse-pointer" onClick={(e) => logout(e)}>
                                Log Out
                            </section>
                        </>
                    ) : (
                        <>
                            <section className="bg-off-white-hover mouse-pointer bold" onClick={() => signInDemo()}>
                                Sign in as Demo User
                            </section>
                            <section
                                className="bg-off-white-hover mouse-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowMenu(false);
                                    setShowSignupForm(true);
                                }}
                            >
                                Sign Up
                            </section>
                            <section
                                className="bg-off-white-hover mouse-pointer"
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
                    <LoginForm setShowLoginForm={setShowLoginForm} />
                </div>
            ) : (
                <></>
            )}
            {showSignupForm ? (
                <div className="modal" onClick={() => setShowSignupForm(false)}>
                    <SignupForm setShowSignupForm={setShowSignupForm} />
                </div>
            ) : (
                <></>
            )}
        </div >
    )
}

export default ProfileDropDownMenu;
