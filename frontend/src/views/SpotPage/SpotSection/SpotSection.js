import "./SpotSection.css"

function SpotSection({spot, rating, allReviews, spotOwner}) {
    return (
        <div id="spot-section">
            <div id="spot-header" className="semi-bold">
                {spot.name}
            </div>
            <div id="spot-subheader">
                <aside>
                    <i id="spot-star-icon" className="fa-solid fa-star fa"></i>
                    <p className="semi-bold">
                        {rating}
                    </p>
                </aside>
                <aside>-</aside>
                <aside className="bold underline">
                    {Object.values(allReviews).length} reviews
                </aside>
                <aside>-</aside>
                <aside>
                    {spotOwner}
                </aside>
                <aside>-</aside>
                <aside className="semi-bold underline">
                    {spot.city}, {spot.state}, {spot.country}
                </aside>
            </div>
            {spot.previewImg ? (
                <img id="spot-header-image" src={`${spot.previewImg}`} alt={`${spot.name}`} />
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default SpotSection
