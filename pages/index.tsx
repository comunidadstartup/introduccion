import React, { useState, useEffect } from "react";

export default function index() {
	const [mode, setMode] = useState<"light" | "dark">("dark");

	useEffect(() => {
		document.querySelector("html")?.classList.add(mode);
	});

	return (
		<div className="flex w-full justify-center items-center h-full">
			<h1>Hello</h1>
		</div>
	);
}
