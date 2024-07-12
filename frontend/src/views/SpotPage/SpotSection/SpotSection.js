import SpotPageImage from "../../../components/SpotPageImage"
import "./SpotSection.css"

function SpotSection({ spot }) {

    return spot.owner ? (
        <div className="spot-section">
            <div className="spot-header font-semi-bold">
                {spot.name}
            </div>

            <section className="m-b-25">
                <SpotPageImage images={spot.Images} />
            </section>

            <section className="df-c gap-5">
                <section className="font-18 font-semi-bold">{spot.city}, {spot.state}</section>
                {/* TO DO: Add section to detail the rooms available and for how many guests available for */}
                {/* Example: <section>2 guests · 1 bedroom · 1 bed · 1 bath </section> */}
                <section className="df-r gap-5">
                    <i className="spot-star-icon fa-solid fa-star"></i>{spot.averageRating}
                    <aside>
                        ·
                    </aside>
                    <aside>
                        {spot.reviewCount} reviews
                    </aside>
                </section>
            </section>
        </div >
    ) : (
        <></>
    )
}

export default SpotSection
