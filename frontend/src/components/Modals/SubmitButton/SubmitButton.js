import { useState } from "react"
import "./SubmitButton.css"

function SubmitButton(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const gradientColor = `radial-gradient(ellipse 400px 10000px at ${mouseX}px 50%, rgb(253, 52, 90), rgb(189, 30, 89))`
        e.target.style.background = gradientColor;
    };

    const handleMouseLeave = (e) => {
        e.target.style.background = 'rgb(189, 30, 89)';
    };

    return (
        <button
            type="submit"
            className="modal-continue-button font-16 font-semi-bold color-white mouse-pointer"
            style={{
                background: 'rgb(189, 30, 89)'
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={(e) => {
                setIsHovered(false);
                handleMouseLeave(e);
            }}
        >
            {props.buttonText}
        </button>
    );
}

export default SubmitButton
