import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addImageThunk, loadImageThunk } from "../store/image";
// import { deleteSpotThunk, loadAllSpotsThunk, loadSpotThunk, loadUserSpotsThunk } from "../store/spot";

function Test() {
    const dispatch = useDispatch()

    const [type, setType] = useState("spot")
    const [typeId, setTypeId] = useState(1)
    const [userId, setUserId] = useState(1)
    const [images, setImages] = useState([])


    const updateFiles = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            setImages(files)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addImageThunk({ images, type, typeId, userId }))

    }


    return (
        <div>
            <section>AWS Test</section>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                    <input
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                    <input
                        type="number"
                        value={typeId}
                        onChange={(e) => setTypeId(e.target.value)}
                    />
                    <input
                        type="number"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </label>
                <label>
                    Multiple Upload
                    <input
                        type="file"
                        multiple
                        onChange={updateFiles} />
                </label>
                <button type="submit">upload image(s)</button>
            </form>
        </div>
    );
}

export default Test
