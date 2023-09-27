import "./LoginForm.css"
import React, { useState } from 'react';
import { Modal } from "../../../context/Modal";
import LoginForm from "./LoginForm";

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div onClick={() => setShowModal(true)} className="header-login-button">Log In</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;
