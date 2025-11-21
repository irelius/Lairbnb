// frontend/src/index.js
import React from "react";
import ReactDOM from "react-dom";

import "./reset.css";
import "./index.css";

import configureStore from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { restoreCSRF, csrfFetch } from "./store/csrf";
import { ModalProvider } from "./context/Modal/Modal";
import * as userActions from "./store/user";

import App from "./App";
import { ModeProvider } from "./context/Mode/Mode";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
	restoreCSRF();

	window.csrfFetch = csrfFetch;
	window.store = store;
	window.userActions = userActions;
}

function Root() {
	return (
		<Provider store={store}>
			<ModeProvider>
				<ModalProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</ModalProvider>
			</ModeProvider>
		</Provider>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>,
	document.getElementById("root")
);
