import "./ProfileDropDownMenu.css"

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { loginThunk, logoutThunk } from "../../../store/user"
import LoginFormModal from "../LoginModal";

const ProfileDropDownMenu = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [showMenu, setShowMenu] = useState(false);
    const [load, setLoad] = useState(false)

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
        closeMenu(); // Close the menu when any option is clicked
    };

    useEffect(() => {
        setLoad(true)
    }, [])

    useEffect(() => {
        if (!showMenu) return;
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

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
                        <div id="profile-dropdown-container" className="shadow ffffff-bg" onClick={handleOptionClick}>
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
                        <div id="profile-dropdown-container" className="shadow ffffff-bg" onClick={handleOptionClick}>
                            <section className="f7f7f7-bg-hover pointer bold" onClick={signInDemo}>
                                Sign in as Demo User
                            </section>
                            <section className="f7f7f7-bg-hover pointer" onClick={() => history.push('/signup')}>
                                Sign Up
                            </section>
                            <section className="f7f7f7-bg-hover pointer" onClick={(e) => e.stopPropagation()}>
                                <LoginFormModal displayText="Log In" />
                            </section>
                        </div>
                    )}
                </div>
            </div>
        )
    ) : (
        <></>
    )
}

export default ProfileDropDownMenu;
