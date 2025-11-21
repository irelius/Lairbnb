import "./CreateSpot.css"
import { NavLink, useHistory } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addSpotThunk } from "../../store/spot";

function CreateSpot() {
    const dispatch = useDispatch();

    const history = useHistory();
    const currentUser = useSelector(state => state.user.user)

    if (!currentUser) {
        history.push('/')
    }

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSpot = {
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price,
            image
        }
        dispatch(addSpotThunk(newSpot))
        history.push("/")
    }

    return (
        <div className="create-spot-main">

            {/* <aside className="left">
                <h1 className="left-header">
                    What kind of place will you host?
                </h1>
            </aside> */}

            {/* <aside className="right bg-white">
                <div className="back-button-container">
                    <NavLink exact to="/">
                        <div className="back-button border-none">
                            Exit
                        </div>
                    </NavLink>
                </div>
                <div className="right-section">
                    <form onSubmit={handleSubmit} className="create-spot-form">
                        <input
                            type="text"
                            placeholder="Address"
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="City"
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="State"
                            required
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Country"
                            required
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Latitude"
                            required
                            min="-90"
                            max="90"
                            value={lat}
                            onChange={(e) => setLat(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Longitude"
                            required
                            min="-180"
                            max="180"
                            value={lng}
                            onChange={(e) => setLng(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Location Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Description"
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Spot Image URL"
                            required
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <div className="submit-button-div">
                            <button type="submit" className="submit-button font-bold border-none">
                                Host Your Spot
                            </button>
                        </div>
                        
                    </form>
                </div>
            </aside> */}
        </div>
    )
}

export default CreateSpot
