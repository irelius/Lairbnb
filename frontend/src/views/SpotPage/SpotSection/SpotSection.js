import SpotPageImage from "../../../components/SpotPageImage"
import { calculateHostingTime } from "../../../utils/calculateHostingTime"
import "./SpotSection.css"

function SpotSection({ spot }) {

    const date = calculateHostingTime(spot)
    console.log('booba', date)

    return spot.owner ? (
        <div className="spot-section-container">
            <div className="spot-header font-semi-bold">
                {spot.name}
            </div>

            <section className="m-b-25">
                <SpotPageImage images={spot.Images} />
            </section>


            <section className="spot-section">
                {/* main spot information  */}
                <aside className="spot-section-details-container">
                    <section className="font-18 font-semi-bold">{spot.city}, {spot.state}</section>
                    <section className="spot-section-box-container">
                        <section className="spot-section-box">
                            <aside className="df-c-ac">
                                <section className="font-18 font-light-bold">{spot.averageRating}</section>
                                <section className="spot-section-box-stars">
                                    <i className="fa-solid fa-star fa-2xs" style={spot.averageRating >= 4 ? {} : { display: "none" }}></i>
                                    <i className="fa-solid fa-star fa-2xs" style={spot.averageRating >= 3 ? {} : { display: "none" }}></i>
                                    <i className="fa-solid fa-star fa-2xs" style={spot.averageRating >= 2 ? {} : { display: "none" }}></i>
                                    <i className="fa-solid fa-star fa-2xs" style={spot.averageRating >= 1 ? {} : { display: "none" }}></i>
                                </section>
                            </aside>
                            <aside className="vertical-line"></aside>
                            <aside className="df-c-ac">
                                <section className="font-18 font-light-bold">{spot.reviewCount}</section>
                                <section className="font-12 font-underline font-semi-bold">Reviews</section>
                            </aside>
                        </section>
                    </section>
                    <section className="spot-section-host-container">
                        <aside className="profile-icon-container">{spot.owner.firstName.slice(0, 1)}</aside>
                        <aside className="df-c gap-5">
                            <section className="font-16 font-light-bold">Hosted by {spot.owner.firstName} {spot.owner.lastName}</section>
                            <section className="font-14 font-light">Hosting began {date} {date === "today!" ? "" : "ago"}</section>
                        </aside>
                    </section>
                    <section className="spot-section-line"></section>
                    <section>{spot.description}</section>
                </aside>

                <aside className="spot-section-booking-container">
                    <section className="font-16">
                        <strong className="font-20 font-semi-bold">{`$${spot.price} `}</strong>
                        night
                    </section>
                    <section className="spot-section-booking">
                        <aside>checkin</aside>
                        <aside>checkout</aside>
                    </section>
                    <section>
                        Reserve
                    </section>
                    <section>
                        You won't be charged yet
                    </section>
                    <section>
                        <aside># nights</aside>
                        <aside>Total cost</aside>
                    </section>
                </aside>
            </section>

            {/* <section className="df-c gap-5 test"> */}
            {/* TO DO: Add section to detail the rooms available and for how many guests available for. Example: <section>2 guests · 1 bedroom · 1 bed · 1 bath </section> */}

            {/* section about spot information */}
            {/* <section className="df-r gap-5">
                    <i className="spot-star-icon fa-solid fa-star"></i>{spot.averageRating}
                    <aside>
                        ·
                    </aside>
                    <aside>
                        {spot.reviewCount} reviews
                    </aside>
                </section> */}

            {/* <section></section> */}
            {/* </section> */}
        </div >
    ) : (
        <></>
    )
}

export default SpotSection
