// frontend/src/context/Mode/Mode.js
import React from "react";
import "./Mode.css";

export const ModeContext = React.createContext();

export function ModeProvider({ children }) {
	const [mode, setMode] = useState("travel"); // determine if user is trying to host or travel

	return (
		<>
			<ModeContext.Provider value={{mode, setMode}}>
                {children}
            </ModeContext.Provider>
		</>
	);
}
