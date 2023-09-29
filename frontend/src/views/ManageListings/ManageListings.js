import "./ManageListings.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { restoreUserThunk } from "../../store/user";
import { loadUserSpotsThunk, resetSpot } from "../../store/spot";
import { deleteSpotThunk } from "../../store/spot";

function ManageListings() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [load, setLoad] = useState(false)
    const [noSpots, setNoSpots] = useState(false)

    useEffect(() => {
        dispatch(restoreUserThunk());
        dispatch(loadUserSpotsThunk());
        setLoad(true);

        return (() => {
            resetSpot()
        })
    }, [dispatch]);
    const userSpots = useSelector(state => Object.values(state.spot));


    const deleteSpot = (spot) => {
        if (userSpots.length === 1) {
            setNoSpots(true)
        }
        dispatch(deleteSpotThunk(spot));
        dispatch(loadUserSpotsThunk());
    }

    const showHandleHosting = () => {
        if (userSpots.length === 0) {
            return (
                <div>
                    <p>You don't have any locations to host.</p>
                </div>
            )
        } else {
            return (
                <div id="all-spots">
                    {userSpots.map((el, i) => {
                        return (
                            <div id="listing">
                                <div id="listing-details">
                                    <img src={`${el.previewImg}`} alt={`${el.name}`} id="listing-image" />
                                    <div id="listing-name">
                                        {el.name}
                                    </div>
                                    <div id="listing-address">
                                        {el.city}, {el.state}, {el.country}
                                    </div>
                                </div>
                                <div id="edit">
                                    <button id="edit-button" className="semi-bold" onClick={() => history.push(`/edit-spot/${el.id}`)}>
                                        Edit Listing
                                    </button>
                                </div>
                                <div id="delete">
                                    <button onClick={() => { deleteSpot(el) }} id="delete-button" className="bold">
                                        Delete Listing
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    return load ? (
        <div id="user-spots-main">
            <div>
                <h1 id="h1">
                    Your Listings
                </h1>
            </div>
            <div id="listings">
                {noSpots ? (
                    <div>
                        <p>You don't have any locations to host.</p>
                    </div>
                ) : (
                    showHandleHosting()
                )}
            </div>
        </div>
    ) : (
        <div></div>
    )
}

export default ManageListings
