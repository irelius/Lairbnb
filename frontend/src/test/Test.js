import { useDispatch, useSelector } from "react-redux";
import TestChild from "./TestChild"
import { useEffect, useState } from "react"
import * as imageActions from "../store/image"

function Test() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(imageActions.loadAllImagesThunk())
    }, [dispatch])

    const images = useSelector(state => state.image)
    console.log('asdf', images)

    return (
        <div>
            {images.allIds.map((el) => {
                return (
                    <div>
                        <img src={images.byId[el].url} alt='booba'/>
                    </div>
                )
            })}
        </div>
    );
}

export default Test
