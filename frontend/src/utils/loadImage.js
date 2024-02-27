const loadImage = (el) => {
    console.log('booba', el)
    if (el.previewImg) {
        return (
            <img id="spot-image" src={`${el.previewImg}`} alt={`${el.name}`} />
        )
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }
}

export default loadImage
