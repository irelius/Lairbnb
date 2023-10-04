import "./SignupForm.css"
import React, { useEffect, useState } from 'react';
import { Modal } from "../../../context/Modal";
import SignupForm from "./SignupForm";

function SignupFormModal({ displayText }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div onClick={() => { setShowModal(true) }} className="header-login-button">{displayText}</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal;
