import Dynamic from "@/components/blocks/dynamic/dynamic";
import React, { Component } from "react";

export default class InicioIV extends Component {
	render() {
		return (
			<Dynamic classes="w80" variant="primary" animate="showup">
				<span className="h3">
					Comunidad Startup comenzo a desarrollar una metodología de
					crecimiento, que es la misma con la que se ha impulsado y se seguirá
					impulsando.
				</span>
			</Dynamic>
		);
	}
}
