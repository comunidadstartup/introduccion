import Dynamic from "@/components/blocks/dynamic/dynamic";
import BotonRectangular from "@/components/button/rectangular/rectangular";
import React, { Component } from "react";

export default class InicioHeader extends Component {
	render() {
		return (
			<Dynamic variant="secondary" animate="goaway">
				<h1>Comunidad Startup</h1>
				<h2>Costa Rica</h2>
				<div className="flex flex-row py-3 align-center justify-center w-full h-auto">
					<BotonRectangular
						variant="primary"
						link="/iniciación"
						title="Iniciación"
					/>
					<BotonRectangular
						variant="primary"
						link="/fundamentos"
						title="Curso"
					/>
				</div>
			</Dynamic>
		);
	}
}
