import { useEffect, useState } from "react"
import "./SpotPageImage.css"

const SpotPageImage = ({ images }) => {
    const testLength = [1]

    // will need refactoring in order to implement new images for the additional spots
    // will also need to incorporate the previewImg functionality
    const [frontImage, setFrontImage] = useState()
    const placeholder = (<img src=""/>)

    useEffect(() => {
        if (images.length > 0) {
            setFrontImage(images[0].url)
        } else {
            setFrontImage("https://kblairbnb.s3.us-west-1.amazonaws.com/1.jpg")
        }
    }, [images])

    return testLength.length === 1 ? (
        <div className="spot-page-image primary mouse-pointer">
            <img src={`${frontImage}`} alt='test' />
        </div>
    ) : testLength.length === 2 ? (
        <div>
            <aside className="spot-page-image primary mouse-pointer">
                <img src={`${frontImage}`} alt='test' />
            </aside>
            <aside className="spot-page-image primary mouse-pointer">
                <img src={`${frontImage}`} alt='test' />
            </aside>
        </div>
    ) : testLength.length === 3 ? (
        <div>
            <section className="spot-page-image primary mouse-pointer">
                <img src={`${frontImage}`} alt='test' />
            </section>
            <section>
                <aside><img src={`${frontImage}`} alt='test' /></aside>
                <aside><img src={`${frontImage}`} alt='test' /></aside>
            </section>
        </div>
    ) : testLength.length === 4 ? (
        <div>
            <section className="spot-page-image primary mouse-pointer"><img src={`${frontImage}`} alt='test' /></section>
            <section>
                <section><img src={`${frontImage}`} alt='test' /></section>
                <section>
                    <aside><img src={`${frontImage}`} alt='test' /></aside>
                    <aside><img src={`${frontImage}`} alt='test' /></aside>
                </section>
            </section>
        </div>
    ) : (
        <div>
            <section className="spot-page-image primary mouse-pointer">
                <img src={`${frontImage}`} alt='test' />
            </section>
            <section>
                <section>
                    <aside><img src={`${frontImage}`} alt='test' /></aside>
                    <aside><img src={`${frontImage}`} alt='test' /></aside>
                </section>
                <section>
                    <aside><img src={`${frontImage}`} alt='test' /></aside>
                    <aside><img src={`${frontImage}`} alt='test' /></aside>
                </section>
            </section>
        </div>
    )
}

export default SpotPageImage
