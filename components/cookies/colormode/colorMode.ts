// TOGGLER

// IF no setter
// -- Check if cookie exists and return value
// -- else return LIGHT
// IF setter
// -- Check Cookie value and toggle the opposite mode

import React, { Dispatch, SetStateAction } from "react";
import Cookies from "js-cookie";

type modeType = "light" | "dark";

function colorMode(): modeType;
function colorMode(setter?: Dispatch<SetStateAction<modeType>>): void;
function colorMode(setter?: Dispatch<SetStateAction<modeType>>): any {
	let res = Cookies.get("colorMode");
	let cookie: modeType;

	if (res && (res == "light" || res == "dark")) cookie = res;
	else cookie = "light";
	if (setter) {
		cookie = cookie == "light" ? "dark" : "light";
		setter(cookie);
		Cookies.set("colorMode", cookie);
	} else {
		Cookies.set("colorMode", cookie);
		return cookie;
	}
}

export default colorMode;

export function classer(mode: modeType) {
	const div = document.documentElement.classList;
	div.contains("light") ? div.remove("light") : div.remove("dark");
	div.add(mode);
}