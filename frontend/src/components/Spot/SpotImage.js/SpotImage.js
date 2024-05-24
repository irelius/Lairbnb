import "./SpotImage.css"

const SpotImage = ({ images, spot }) => {
    return images.length > 0 ? (
        <div>
            <img className="spot-image" src={`${images[0].url}`} alt={`${spot.name}`} />
        </div>
    ) : (
        <div>
            Loading Image...
        </div>
    )
}

export default SpotImage
