import { useEffect, useState } from "react"
import SpotPageImage from "../../../components/SpotPageImage"
import { calculateHostingTime } from "../../../utils/calculateHostingTime"
import "./SpotSection.css"
import SubmitButton from "../../../components/Modals/SubmitButton/SubmitButton"

function SpotSection({ spot }) {
    // calc how long spot was hosting for
    const date = calculateHostingTime(spot)

    // calc starting date on when page is loaded
    // calc ending date by adding 2 to startind date
    const minDate = new Date()
    let minDatePlus2 = new Date()
    minDatePlus2.setDate(minDatePlus2.getDate() + 2)

    const [startDate, setStartDate] = useState(minDate.toISOString().slice(0, 10))
    const [endDate, setEndDate] = useState(minDatePlus2.toISOString().slice(0, 10))
    const [days, setDays] = useState(2)

    // calc difference in days
    const calculateDays = () => {
        const tempStart = new Date(startDate)
        const tempEnd = new Date(endDate)

        const diffTime = Math.abs(tempEnd - tempStart);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return diffDays
    }

    // change diff in days when startDate and endDate are updated
    useEffect(() => {
        setDays(calculateDays())
        setCost({
            night: (spot.price * days).toFixed(2),
            cleaning: (spot.price * days * 0.095).toFixed(2),
            service: (spot.price * days * 0.142).toFixed(2)
        })
        const total = parseFloat(cost.night) + parseFloat(cost.cleaning) + parseFloat(cost.service)
        setTotalCost(total.toFixed(2))
    }, [minDate, startDate, endDate])


    const [cost, setCost] = useState({
        night: 0,
        cleaning: 0,
        service: 0,
    })
    const [totalCost, setTotalCost] = useState(0)

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
                    <section className="font-16">{spot.description}</section>
                </aside>

                <aside className="spot-section-booking-container">
                    <section className="font-16">
                        <strong className="font-20 font-semi-bold">{`$${spot.price} `}</strong> night
                    </section>
                    <section className="spot-section-booking">
                        <aside className="booking-start-date-container">
                            <section className="font-10 font-semi-bold">CHECK-IN</section>
                            <section>
                                <input
                                    className="booking-date-input"
                                    type="date"
                                    min={minDate}
                                    value={startDate}
                                    onChange={(e) => {
                                        setStartDate(e.target.value)
                                        setEndDate(e.target.value)
                                    }}
                                />
                            </section>
                        </aside>
                        <aside className="booking-end-date-container">
                            <section className="font-10 font-semi-bold">CHECKOUT</section>
                            <section className="font-14">
                                <input
                                    className="booking-date-input mouse-pointer"
                                    type="date"
                                    min={startDate}
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </section>
                        </aside>
                    </section>
                    <section className="booking-reserve-button">
                        <SubmitButton buttonText="Reserve" />
                    </section>
                    <section className="df-r-jc m-t-15">
                        You won't be charged yet
                    </section>
                    <section className="booking-cost-preview">
                        <aside className="font-16 font-underline">{days} nights</aside>
                        <aside className="font-16">${cost.night}</aside>
                    </section>
                    <section className="booking-cost-preview">
                        <aside className="font-16 font-underline">Cleaning fee</aside>
                        <aside className="font-16">${cost.cleaning}</aside>
                    </section>
                    <section className="booking-cost-preview">
                        <aside className="font-16 font-underline">Aribnb service fee</aside>
                        <aside className="font-16">${cost.service}</aside>
                    </section>
                    <section className="booking-cost-preview">
                        <aside className="font-16 font-light-bold">Total before taxes</aside>
                        <aside className="font-16 font-light-bold">${totalCost}</aside>
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
