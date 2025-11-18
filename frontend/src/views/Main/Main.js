import "./Main.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spot from "../../components/Spot/Spot";
import { loadAllSpotsThunk } from "../../store/spot";
import { loadAllImagesThunk } from "../../store/image";

function Main() {
	const dispatch = useDispatch();

	const [load, setLoad] = useState(false);

	useEffect(() => {
		dispatch(loadAllSpotsThunk());
		// dispatch(loadAllImagesThunk())
		setLoad(true);
	}, [dispatch]);

	const spots = useSelector((state) => state.spot);
	// const images = useSelector(state => state.image)

	return load ? (
		<div className="all-spots-container">
			<div className="all-spots">
				{spots.spotIds.map((id, i) => {
					return <Spot spot={spots.spots[id]} key={i} />;
				})}
			</div>
		</div>
	) : (
		<></>
	);
}

export default Main;
