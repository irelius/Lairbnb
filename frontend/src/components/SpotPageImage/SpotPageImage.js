import { useEffect, useState } from "react"
import "./SpotPageImage.css"

const SpotPageImage = ({ images }) => {
    // will also need to incorporate the previewImg functionality
    const placeholder = {
        url: "https://raw.githubusercontent.com/irelius/Lairbnb/kb/thunk/frontend/assets/previewimage_placeholder.png"
    }
    const [previewImages, setPreviewImages] = useState([placeholder, placeholder, placeholder, placeholder, placeholder])

    useEffect(() => {
        setPreviewImages((prev) => [...images.slice(0, 5), ...prev])
        if (previewImages.length > 0) {
            setPreviewImages(prev => prev.slice(0, 5))
        }
    }, [images, previewImages.length])

    return previewImages.length > 0 ? (
        <div className="spot-image-container">
            <section className="spot-image-left-container mouse-pointer">
                <img className="primary-spot-image" src={`${previewImages[0].url}`} alt='spot-previewImage-1' />
            </section>
            <section className="spot-image-right-container mouse-pointer">
                <section className="spot-image-right-top-container">
                    <img src={`${previewImages[1].url}`} alt='spot-previewImage-2' />
                    <img src={`${previewImages[2].url}`} alt='spot-previewImage-3' />
                </section>
                <section className="spot-image-right-bottom-container">
                    <img src={`${previewImages[3].url}`} alt='spot-previewImage-4' />
                    <img src={`${previewImages[4].url}`} alt='spot-previewImage-5' />
                </section>
            </section>
        </div>
    ) : (
        <></>
    )
}

export default SpotPageImage
