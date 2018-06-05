import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { injectGlobal } from "styled-components";
import "webrtc-adapter";
import { stores } from "./stores/";
import App from "Components/App";

const appLocation = document.querySelector(".app");

ReactDOM.render(
	<Provider {...stores}>
		<App />
	</Provider>,
	appLocation
);

// global styles
injectGlobal`
	html, body {
		margin: 0;
	}
`;
