import "./EditSpot.css"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { editSpotThunk, loadSpotThunk } from "../../store/spot";
import { useEffect } from "react";

import NotAuthorized from "../../components/NotAuthorized"

function EditSpot() {
    const dispatch = useDispatch();
    const history = useHistory();
    const spotId = useParams().spotId;

    useEffect(() => {
        dispatch(loadSpotThunk(spotId))
    }, [dispatch, spotId])

    const user = useSelector(state => state.user.user)
    const spotSelector = useSelector(state => state.spot)
    const currentSpot = spotSelector.spots[spotId]

    const [load, setLoad] = useState(false)
    const [location, setLocation] = useState()

    useEffect(() => {
        setLocation({ ...spotSelector.spots[spotId] })
        if (spotSelector.spotIds.length > 0) setLoad(true)

    }, [dispatch, spotSelector, spotId])

    const handleChange = (e, key) => {
        setLocation(prev => ({
            ...prev,
            [key]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editSpotThunk(spotId, location))
        history.push("/manage-listings")
    }

    return currentSpot && (user === undefined || user.id !== currentSpot.ownerId) ? (
        <div>
            <NotAuthorized />
        </div>
    ) : load ? (
        <div className="edit-spot-main">
            <form onSubmit={(e) => handleSubmit(e)} className="edit-spot-form">
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
                <button type="submit" className="save-button">
                    Save Edits
                </button>
            </form>
        </div>
    ) : (
        <></>
    )
}

export default EditSpot
