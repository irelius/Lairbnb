import "./Main.css"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadAllSpotsThunk } from "../../store/spot";
import Spot from "../../components/Spot/Spot";

function Main() {
    const dispatch = useDispatch();

    const [load, setLoad] = useState(false)

    useEffect(() => {
        dispatch(loadAllSpotsThunk())
        setLoad(true)
    }, [dispatch])

    const spots = useSelector(state => state.spot)

    return load ? (
        <div id="all-spots">
            {spots.spotIds.map((id, i) => {
                return (
                    <Spot id={id} key={i} />
                )
            })}
        </div>
    ) : (
        <></>
    )
}

export default Main
