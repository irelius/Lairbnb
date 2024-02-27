import { NavLink } from "react-router-dom/cjs/react-router-dom.min"
import "./Spot.css"
import loadImage from "../../utils/loadImage"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

function Spot({ el }) {

    // const dispatch = useDispatch()
    // useEffect(() =>  {
    // }, [dispatch])

    return (
        <NavLink exact to={`/spot-details/${el.id}`} id="spot-container">
            <section id="spot-image-container">{loadImage(el)}</section>
            <div id="spot-description">
                <section id="spot-name" className="semi-bold">
                    {`${el.name}`}, {`${el.state}`}
                </section>
                <section id="spot-city">{`${el.city}`}</section>
                <section id="spot-price-container">
                    <section id="spot-price" className="semi-bold">${(`${el.price}`)} </section> night
                </section>
            </div>
        </NavLink>
    )
}

export default Spot
