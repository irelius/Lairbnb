import "./ImageCarousel.css"

import { useEffect, useState } from "react"

const ImageCarousel = ({ images, spot }) => {
    const [currImageIndex, setCurrImageIndex] = useState(0)
    const [currImage, setCurrImage] = useState(images[currImageIndex].url)

    const [visible, setVisible] = useState("invisible")


    useEffect(() => {
        setCurrImage(images[currImageIndex].url)
    }, [images, currImageIndex])

    const handleLeftClick = async (e) => {
        e.preventDefault()
        e.stopPropagation()

        if (currImageIndex === 0) {
            setCurrImageIndex(images.length - 1)
        } else {
            setCurrImageIndex(prev => prev - 1)
        }
    }

    const handleRightClick = async (e) => {
        e.preventDefault()
        e.stopPropagation()

        if (currImageIndex === images.length - 1) {
            setCurrImageIndex(0)
        } else {
            setCurrImageIndex(prev => prev + 1)
        }
    }

    return (
        <div className="temp" onMouseOver={() => setVisible("visible")} onMouseLeave={() => setVisible("invisible")}>
            <section className={`carousel-left-button ${visible}`} onClick={(e) => handleLeftClick(e)}>
                <i className="fa-solid fa-angle-left"></i>
            </section>
            <section className="test-image">
                <img className="spot-image temp" src={currImage} alt={`${spot.name}`} />
            </section>
            <section className={`carousel-right-button ${visible}`} onClick={(e) => handleRightClick(e)}>
                <i className="fa-solid fa-angle-right"></i>
            </section>
        </div >
    )
}

export default ImageCarousel
