import SpotPageImage from "../../../components/SpotPageImage"
import "./SpotSection.css"

function SpotSection({ spot, reviews }) {
    const totalReviewsCount = reviews.allReviewsId.length + reviews.userReviewsId.length

    return spot.owner ? (
        <div className="spot-section">
            <div className="spot-header font-semi-bold">
                {spot.name}
            </div>

            <section className="m-b-25">
                <SpotPageImage images={spot.Images} />
            </section>

            <section className="spot-sub-section gap-5">
                <section className="font-18 font-semi-bold">{spot.city}, {spot.state}</section>
                {/* TO DO: Add section to detail the rooms available and for how many guests available for */}
                {/* Example: <section>2 guests · 1 bedroom · 1 bed · 1 bath </section> */}
                <section className="df-r gap-5">
                    <aside>
                        <i className="spot-star-icon fa-solid fa-star"></i>{spot.avgStarRating}
                    </aside>
                    <aside>
                        ·
                    </aside>
                    <aside>
                        {totalReviewsCount} reviews
                    </aside>
                </section>
                {/* <aside>
                    <i className="spot-star-icon fa-solid fa-star"></i>
                    <p className="font-semi-bold">
                        {spot.avgStarRating}
                    </p>
                </aside>
                <aside>·</aside>
                <aside className="font-semi-bold font-underline">
                    {totalReviewsCount} reviews
                </aside>
                <aside>·</aside>
                <aside>
                    {spot.owner.firstName} {spot.owner.lastName}
                </aside>
                <aside>·</aside>
                <aside className="font-semi-bold font-underline">
                    {spot.city}, {spot.state}, {spot.country}
                </aside> */}
            </section>
        </div >
    ) : (
        <></>
    )
}

export default SpotSection
