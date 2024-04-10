import "./EditSpot.css"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { editSpotThunk, loadSpotThunk } from "../../store/spot";
import { useEffect } from "react";

function EditSpot() {
    const dispatch = useDispatch();
    const history = useHistory();
    const spotId = useParams().spotId;

    useEffect(() => {
        dispatch(loadSpotThunk(spotId))
    }, [dispatch, spotId])

    const currentSpot = useSelector(state => state.spot)
    const currentSpotId = useSelector(state => state.spot.spotIds[0])

    const [load, setLoad] = useState(false)
    const [location, setLocation] = useState()

    useEffect(() => {
        setLocation({ ...currentSpot.spots[currentSpotId] })
        if (currentSpot.spotIds.length > 0) setLoad(true)

    }, [dispatch, currentSpot, currentSpotId])

    const handleChange = (e, key) => {
        setLocation(prev => ({
            ...prev,
            [key]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const edits = location

        dispatch(editSpotThunk(spotId, edits))
        history.push("/manage-listings")
    }

    if (load) console.log('booba', location.address)

    return load ? (
        <div id="edit-spot-main">
            <form onSubmit={() => handleSubmit()} id="edit-spot-form">
                Address
                <input
                    type="text"
                    required
                    value={location.address}
                    onChange={(e) => handleChange(e, "address")}
                />
                City
                <input
                    type="text"
                    required
                    value={location.city}
                    onChange={(e) => handleChange(e, "city")}
                />
                State
                <input
                    type="text"
                    required
                    value={location.state}
                    onChange={(e) => handleChange(e, "state")}
                />
                Country
                <input
                    type="text"
                    required
                    value={location.country}
                    onChange={(e) => handleChange(e, "country")}
                />
                Latitude
                <input
                    type="number"
                    required
                    value={location.lat}
                    onChange={(e) => handleChange(e, "lat")}
                />
                Longitude
                <input
                    type="number"
                    required
                    value={location.lng}
                    onChange={(e) => handleChange(e, "lng")}
                />
                Name
                <input
                    type="text"
                    required
                    value={location.name}
                    onChange={(e) => handleChange(e, "name")}
                />
                Description
                <input
                    type="text"
                    required
                    value={location.description}
                    onChange={(e) => handleChange(e, "description")}
                />
                Price
                <input
                    type="number"
                    required
                    value={location.price}
                    onChange={(e) => handleChange(e, "price")}
                />
                <button type="submit" id="save-button">
                    Save Edits
                </button>
            </form>
        </div>
    ) : (
        <></>
    )
}

export default EditSpot
