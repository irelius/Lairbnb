import React, { useState } from 'react';
import { Modal } from "../../../context/Modal";
import LoginForm from "./LoginForm";

function LoginFormModal(props) {
    const {displayText} = props

    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div onClick={() => setShowModal(true)} className="header-login-button">{displayText}</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;
