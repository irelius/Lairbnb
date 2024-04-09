import "./Spot.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import { useSelector } from "react-redux"
import loadImage from "../../utils/loadImage"

function Spot({ id }) {
    const spot = useSelector(state => state.spot.spots[id])

    return (
        <NavLink exact to={`/spot-details/${id}`} id="spot-container">
            {/* TO DO: implement how to do images */}
            <section id="spot-image-container">{loadImage(spot)}</section>
            <div id="spot-description">
                <section id="spot-name" className="semi-bold">
                    {`${spot.name}`}, {`${spot.state}`}
                </section>
                <section id="spot-city">{`${spot.city}`}</section>
                <section id="spot-price-container">
                    <section id="spot-price" className="semi-bold">${(`${spot.price}`)} </section> night
                </section>
            </div>
        </NavLink>
    )
}

export default Spot
