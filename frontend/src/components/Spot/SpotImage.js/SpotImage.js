import { useEffect, useState } from "react"
import "./SpotImage.css"

const SpotImage = ({ images, spot }) => {
    // will need refactoring in order to implement new images for the additional spots
    // will also need to incorporate the previewImg functionality
    const [frontImage, setFrontImage] = useState()

    const [load, setLoad] = useState(false)

    useEffect(() => {
        if (images.length > 0) {
            setFrontImage(images[0].url)
        } else {
            setFrontImage("https://kblairbnb.s3.us-west-1.amazonaws.com/1.jpg")
        }
        setLoad(true)
    }, [images])

    return load ? (
        <div>
            <img className="spot-image" src={`${frontImage}`} alt={`${spot.name}`} />
        </div>
    ) : (
        <div>
            Loading Image...
        </div>
    )
}

export default SpotImage
