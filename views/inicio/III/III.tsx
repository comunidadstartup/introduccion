import Dynamic from "@/components/blocks/dynamic/dynamic";
import React, { Component } from "react";

export default class InicioIII extends Component {
	render() {
		return (
			<Dynamic classes="w80" variant="primary" animate="showup">
				<span style={{ marginBottom: "2rem" }} className="h5 w-full">
					Comunidad Startup apuesta por el emprendedurismo.
				</span>
				<span style={{ marginBottom: "4rem" }} className="h3 w-full">
					Si nuestras startups fracasan, Comunidad Startup fracasa. Si triunfan,
					nosotros también.
				</span>
				<span className="h5 w-full">
					Y queremos triunfar
				</span>
			</Dynamic>
		);
	}
}
