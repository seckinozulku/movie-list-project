import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export const breakpoints = {
	tablet: "678px",
	web: "960px",
	wide: "1140px",
};

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

