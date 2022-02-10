import Dynamic from "@/components/blocks/dynamic/dynamic";
import React, { Component } from "react";

export default class InicioII extends Component {
	render() {
		return (
			<Dynamic variant="primary" animate="showup">
				<span style={{marginBottom: "2rem"}} className="h4 w-full">
					Una startup enfocada en ayudar a startups en la etapa donde más
					iniciativas fracasan.
				</span>
				<span className="h4 w-full">
					La etapa desde antes de su lanzamiento.
				</span>
			</Dynamic>
		);
	}
}
