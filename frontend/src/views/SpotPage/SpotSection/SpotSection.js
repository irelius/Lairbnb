import "./SpotSection.css"

function SpotSection({ spot, reviews }) {
    const totalReviewsCount = reviews.allReviewsId.length + reviews.userReviewsId.length

    return spot.owner ? (
        <div id="spot-section">
            <div id="spot-header" className="semi-bold">
                {spot.name}
            </div>
            <div id="spot-subheader">
                <aside>
                    <i id="spot-star-icon" className="fa-solid fa-star fa"></i>
                    <p className="semi-bold">
                        {spot.avgStarRating}
                    </p>
                </aside>
                <aside>-</aside>
                <aside className="bold underline">
                    {totalReviewsCount} reviews
                </aside>
                <aside>-</aside>
                <aside>
                    {spot.owner.firstName} {spot.owner.lastName}
                </aside>
                <aside>-</aside>
                <aside className="semi-bold underline">
                    {spot.city}, {spot.state}, {spot.country}
                </aside>
            </div>
            {/* Spot image. TO DO: set up airbnb's multiple photo set up */}
            {spot.previewImg ? (
                <img id="spot-header-image" src={`${spot.previewImg}`} alt={`${spot.name}`} />
            ) : (
                <div></div>
            )}
        </div>
    ) : (
        <></>
    )
}

export default SpotSection
