import "./Main.css"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Spot from "../../components/Spot/Spot";
import { loadAllSpotsThunk } from "../../store/spot";
// import { loadAllImagesThunk } from "../../store/image";

function Main() {
    const dispatch = useDispatch();

    const [load, setLoad] = useState(false)
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1);

    useEffect(() => {
        const getAllSpots = async () => {
            const res = await dispatch(loadAllSpotsThunk(page))
            setMaxPage(res.maxPage)
        }
        if (page <= maxPage) {
            getAllSpots()
        }
        // dispatch(loadAllImagesThunk())
        setLoad(true)
    }, [dispatch, page, maxPage])

    const spots = useSelector(state => state.spot)

    useEffect(() => {
        const onScroll = () => {
            const scrolledTo = window.scrollY + window.innerHeight;
            const threshold = 0;
            const reachedBottom = document.body.scrollHeight - threshold <= scrolledTo;
            if (reachedBottom) {
                setPage(prev => prev + 1)
            }
        }
        window.addEventListener("scroll", onScroll)
    }, [])


    return load ? (
        <div className="all-spots">
            {spots.spotIds.map((id, i) => {
                return (
                    <Spot spot={spots.spots[id]} key={i} />
                )
            })}
        </div>
    ) : (
        <></>
    )
}

export default Main
