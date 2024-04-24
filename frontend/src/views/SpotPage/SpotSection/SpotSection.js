import SpotPageImage from "../../../components/SpotPageImage"
import "./SpotSection.css"

function SpotSection({ spot, reviews }) {
    const totalReviewsCount = reviews.allReviewsId.length + reviews.userReviewsId.length

    return spot.owner ? (
        <div className="spot-section">
            <div className="spot-header font-semi-bold">
                {spot.name}
            </div>
            <div className="spot-subheader">
                <aside>
                    <i className="spot-star-icon fa-solid fa-star fa"></i>
                    <p className="font-semi-bold">
                        {spot.avgStarRating}
                    </p>
                </aside>
                <aside>-</aside>
                <aside className="font-semi-bold font-underline">
                    {totalReviewsCount} reviews
                </aside>
                <aside>-</aside>
                <aside>
                    {spot.owner.firstName} {spot.owner.lastName}
                </aside>
                <aside>-</aside>
                <aside className="font-semi-bold font-underline">
                    {spot.city}, {spot.state}, {spot.country}
                </aside>
            </div>
            {/* Spot image. TO DO: set up airbnb's multiple photo set up */}
            <SpotPageImage images={spot.Images} />
            {/* {spot.previewImg ? (
                <img className="spot-header-image" src={`${spot.previewImg}`} alt={`${spot.name}`} />
            ) : (
                <div></div>
            )} */}
        </div>
    ) : (
        <></>
    )
}

export default SpotSection
