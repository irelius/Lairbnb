import "./Spot.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import SpotImage from "./SpotImage.js/SpotImage"

function Spot({ spot }) {
    // console.log('booba', spot)

    return (
        <NavLink exact to={`/spot-details/${spot.id}`} className="spot-container">
            {/* TO DO: implement how to do images carosel */}
            <section className="spot-image-container">
                <SpotImage images={spot.Images} spot={spot} />
            </section>
            <div className="spot-description">
                <section className="spot-name font-bold">
                    {`${spot.name}`}, {`${spot.state}`}
                </section>
                <section className="spot-city">{`${spot.city}`}</section>
                <section className="spot-price-container">
                    <aside className="spot-price font-bold">${(`${spot.price}`)} </aside>
                    <aside>night</aside>
                </section>
            </div>
        </NavLink>
    )
}

export default Spot
