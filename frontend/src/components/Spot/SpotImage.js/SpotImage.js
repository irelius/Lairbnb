import "./SpotImage.css"

const SpotImage = ({ images, spot }) => {
    const frontImage = images[0]

    console.log('booba', images)

    return images ? (
        <div>
            <img id="spot-image" src={`${frontImage.url}`} alt={`${spot.name}`} />
        </div>
    ) : (
        <div>
            Loading Image...
        </div>
    )
}

export default SpotImage
