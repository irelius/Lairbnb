import "./Spot.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import loadImage from "../../utils/loadImage"
import SpotImage from "./SpotImage.js/SpotImage"

function Spot({ spot }) {
    return (
        <NavLink exact to={`/spot-details/${spot.id}`} id="spot-container">
            {/* TO DO: implement how to do images carosel */}
            <section id="spot-image-container">
                <SpotImage images={spot.Images} spot={spot}/>
                {/* {loadImage(spot.Images)} */}
            </section>
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
