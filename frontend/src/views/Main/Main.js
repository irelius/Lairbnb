import "./Main.css"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadAllSpotsThunk, resetSpot } from "../../store/spot";
import Spot from "../../components/Spot/Spot";
import { resetReview } from "../../store/review";

function Main() {
    const dispatch = useDispatch();

    const [load, setLoad] = useState(false)

    useEffect(() => {
        dispatch(loadAllSpotsThunk())
        setLoad(true)
    }, [dispatch])

    const spots = useSelector(state => Object.values(state.spot))

    return load ? (
        <div id="all-spots">
            {spots.map((el, i) => {
                return (
                    <Spot key={i} el={el} />
                )
            })}
        </div>
    ) : (
        <div></div>
    )
}

export default Main
