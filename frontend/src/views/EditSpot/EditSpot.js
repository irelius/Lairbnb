import "./EditSpot.css"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { editSpotThunk } from "../../store/spot";

function EditSpot() {
    const dispatch = useDispatch();
    const history = useHistory();
    const spotId = useParams().spotId;
    const currentSpot = useSelector(state => state.spot[spotId])

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [name, setName] = useState("");
    const [description, setDesription] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const edits = {
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price
        }

        dispatch(editSpotThunk(spotId, edits))
        history.push("/manage-listings")
    }

    return (
        <div id="edit-spot-main">
            <form onSubmit={handleSubmit} id="edit-spot-form">
                Address
                <input
                    type="text"
                    placeholder={currentSpot.address}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                City
                <input
                    type="text"
                    placeholder={currentSpot.city}
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                State
                <input
                    type="text"
                    placeholder={currentSpot.state}
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                Country
                <input
                    type="text"
                    placeholder={currentSpot.country}
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                Latitude
                <input
                    type="number"
                    placeholder={currentSpot.lat}
                    required
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                />
                Longitude
                <input
                    type="number"
                    placeholder={currentSpot.lng}
                    required
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                />
                Name
                <input
                    type="text"
                    placeholder={currentSpot.name}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                Description
                <input
                    type="text"
                    placeholder={currentSpot.description}
                    required
                    value={description}
                    onChange={(e) => setDesription(e.target.value)}
                />
                Price
                <input
                    type="number"
                    placeholder={currentSpot.price}
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button type="submit" id="save-button">
                    Save Edits
                </button>
            </form>
        </div>
    )
}

export default EditSpot
