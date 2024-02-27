import { useDispatch, useSelector } from "react-redux";
import TestChild from "./TestChild"
import { useEffect, useState } from "react"
import * as imageActions from "../store/image"

function Test() {
    const dispatch = useDispatch()

    let test = {
        "type": "spot",
        "typeId": 1,
        "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/280px-PNG_transparency_demonstration_1.png"
    }

    useEffect(() => {
        dispatch(imageActions.loadAllImagesThunk())
    }, [dispatch])

    const handleSubmit = () => {
        dispatch(imageActions.deleteImageThunk(1))
    }

    const images = useSelector(state => state.image)

    return (
        <div>
            {/* <div>
                {images.allIds.map((el) => {
                    return (
                        <div>
                            <img src={images.byId[el].url} alt='test' />
                        </div>
                    )
                })}
            </div> */}
            <div onClick={handleSubmit}>
                button
            </div>
        </div>
    );
}

export default Test
