import "./SpotPageImage.css"

const SpotPageImage = ({ images }) => {
    console.log('booba', images)

    const testLength = [1, 2]

    return testLength.length === 1 ? (
        <div className="spot-page-image-primary">
            <img src={`${images[0].url}`} alt='test' />
        </div>
    ) : testLength.length === 2 ? (
        <div>
            <aside className="spot-page-image-primary">
                <img src={`${images[0].url}`} alt='test' />
            </aside>
            <aside className="spot-page-image-primary">
                <img src={`${images[0].url}`} alt='test' />
            </aside>
        </div>
    ) : testLength.length === 3 ? (
        <div>
            <section className="spot-page-image-primary">
                <img src={`${images[0].url}`} alt='test' />
            </section>
            <section>
                <aside><img src={`${images[0].url}`} alt='test' /></aside>
                <aside><img src={`${images[0].url}`} alt='test' /></aside>
            </section>
        </div>
    ) : testLength.length === 4 ? (
        <div>
            <section className="spot-page-image-primary"><img src={`${images[0].url}`} alt='test' /></section>
            <section>
                <section><img src={`${images[0].url}`} alt='test' /></section>
                <section>
                    <aside><img src={`${images[0].url}`} alt='test' /></aside>
                    <aside><img src={`${images[0].url}`} alt='test' /></aside>
                </section>
            </section>
        </div>
    ) : (
        <div>
            <section className="spot-page-image-primary">
                <img src={`${images[0].url}`} alt='test' />
            </section>
            <section>
                <section>
                    <aside><img src={`${images[0].url}`} alt='test' /></aside>
                    <aside><img src={`${images[0].url}`} alt='test' /></aside>
                </section>
                <section>
                    <aside><img src={`${images[0].url}`} alt='test' /></aside>
                    <aside><img src={`${images[0].url}`} alt='test' /></aside>
                </section>
            </section>
        </div>
    )
}

export default SpotPageImage
