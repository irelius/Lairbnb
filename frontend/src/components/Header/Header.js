// components/Header/Header.js
import './Header.css';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { restoreUserThunk } from '../../store/user';


import ProfileDropdownMenu from '../Modals/ProfileMenuModal';

function Header({ isLoaded }) {
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        dispatch(restoreUserThunk());
    }, [dispatch]);

    const sessionUser = useSelector(state => state.user.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div id="header-right-container">
                <aside id="header-host-button-container">
                    <button id="header-host-button" className="ffffff-bg f7f7f7-bg-hover bold pointer no-border" onClick={() => history.push("/become-a-host/property-form")}>
                        Become a host
                    </button>
                </aside>
                <ProfileDropdownMenu user={sessionUser} />
            </div>
        );
    } else {
        sessionLinks = (
            <div id="header-right-container">
                <ProfileDropdownMenu user={sessionUser} />
            </div>
        );
    }

    return (
        <div id="header-main-container">
            <aside>
                <section id="header-lairbnb-icon-container" className="pointer" onClick={() => history.push("/")}>
                    <img id="lairbnb-icon" src="https://raw.githubusercontent.com/irelius/Airbnb/main/frontend/public/assets/favicon-32x32.png"
                        alt="lairbnb-icon"
                    />
                    <p id="lairbnb-header-text" className='bold'>
                        Lairbnb
                    </p>
                </section>
            </aside>
            {isLoaded && sessionLinks}
        </div>
    )
}

export default Header;
