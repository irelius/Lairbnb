const loadImage = (images) => {
    const frontImage = images[0]

    return images ? (
        <div>
            <img id="spot-image" src={`${frontImage.url}`} alt={'test'} />
        </div>
    ) : (
        <div>
            Loading Image...
        </div>
    )
}

export default loadImage
