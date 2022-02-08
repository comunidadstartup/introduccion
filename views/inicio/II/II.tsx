import Dynamic from "@/components/blocks/dynamic/dynamic";
import React, { Component } from "react";

export default class InicioII extends Component {
	render() {
		return (
			<Dynamic classes="w80" variant="primary" animate="showup">
				<span style={{ marginBottom: "2rem" }} className="h4 w-full">
					Somos una startup que está comenzando contigo.
				</span>
				<span className="h4 w-full">
					Una startup enfocada en la etapa donde más iniciativas fracasan.
				</span>
			</Dynamic>
		);
	}
}
