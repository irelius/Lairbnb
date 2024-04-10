import "./ManageListings.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { loadUserSpotsThunk, deleteSpotThunk, resetSpot } from "../../store/spot";

function ManageListings() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [load, setLoad] = useState(false)

    useEffect(() => {
        dispatch(loadUserSpotsThunk());
        setLoad(true);
    }, [dispatch]);

    const userSpots = useSelector(state => state.spot.spots);
    const userSpotIds = useSelector(state => state.spot.spotIds)

    const deleteSpot = (e, spot) => {
        e.preventDefault()
        dispatch(deleteSpotThunk(spot));
    }

    return load ? (
        <div id="user-spots-main">
            <div>
                <h1 id="h1">
                    Your Listings
                </h1>
            </div>
            <div id="listings">
                {userSpotIds.length === 0 ? (
                    <div>
                        <p>You don't have any locations to host.</p>
                    </div>
                ) : (
                    <div id="all-spots">
                        {userSpotIds.map((el, i) => {
                            return (
                                <div id="listing" key={i}>
                                    <div id="listing-details">
                                        {/* <img src={`${userSpots[el].previewImg}`} alt={`${userSpots[el].name}`} id="listing-image" /> */}
                                        <div id="listing-name">
                                            {userSpots[el].name}
                                        </div>
                                        <div id="listing-address">
                                            {userSpots[el].city}, {userSpots[el].state}, {userSpots[el].country}
                                        </div>
                                    </div>
                                    <div id="edit">
                                        <button id="edit-button" className="semi-bold pointer" onClick={() => history.push(`/edit-spot/${el}`)}>
                                            Edit Listing
                                        </button>
                                    </div>
                                    <div id="delete">
                                        <button onClick={(e) => deleteSpot(e, userSpots[el])} id="delete-button" className="bold pointer">
                                            Delete Listing
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div >
    ) : (
        <div></div>
    )
}

export default ManageListings
