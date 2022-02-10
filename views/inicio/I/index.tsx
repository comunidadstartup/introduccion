import Dynamic from "@/components/blocks/dynamic/dynamic";
import Normal from "@/components/blocks/normal/normal";
import React, { Component } from "react";

export default class InicioI extends Component {
	render() {
		return (
			<Dynamic variant="primary" animate="showup">
				<span style={{ marginBottom: "3rem" }} className="h5 w-full">
					Comunidad Startup es una startup para startups.
				</span>
				<span style={{ marginBottom: "1rem" }} className="h3 w-full">
					Una que corre con vos.
				</span>
				<span style={{ marginBottom: "1rem" }} className="h3 w-full">
					Una que fracasa si vos fracasás
				</span>
				<span style={{ marginBottom: "3rem" }} className="h3 w-full">
					Y gana si vos ganás
				</span>
				<span className="h5 w-full">
					Pero sobre todo, una startup que quiere ganar.
				</span>
			</Dynamic>
		);
	}
}
