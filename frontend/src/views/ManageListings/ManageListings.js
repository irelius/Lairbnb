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
        <div className="user-spots-main">
            <div>
                <h1 className="h1">
                    Your Listings
                </h1>
            </div>
            <div className="listings">
                {userSpotIds.length === 0 ? (
                    <div>
                        <p>You don't have any locations to host.</p>
                    </div>
                ) : (
                    <div className="all-spots">
                        {userSpotIds.map((el, i) => {
                            return (
                                <div className="listing" key={i}>
                                    <div className="listing-details">
                                        {/* <img src={`${userSpots[el].previewImg}`} alt={`${userSpots[el].name}`} className="listing-image" /> */}
                                        <div className="listing-name">
                                            {userSpots[el].name}
                                        </div>
                                        <div className="listing-address">
                                            {userSpots[el].city}, {userSpots[el].state}, {userSpots[el].country}
                                        </div>
                                    </div>
                                    <div className="edit">
                                        <button className="edit-button font-semi-bold mouse-pointer" onClick={() => history.push(`/edit-spot/${el}`)}>
                                            Edit Listing
                                        </button>
                                    </div>
                                    <div className="delete">
                                        <button onClick={(e) => deleteSpot(e, userSpots[el])} className="delete-button font-bold mouse-pointer">
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
