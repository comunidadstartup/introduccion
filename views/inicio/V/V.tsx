import Dynamic from "@/components/blocks/dynamic/dynamic";
import React, { Component } from "react";

export default class InicioV extends Component {
	render() {
		return (
			<Dynamic classes="w80" variant="primary" animate="showup">
				<span className="h4">
					Y en base a nuestra metodología, queremos ayudarte a crecer, porque
					nosotros crecemos ayudando a otros a crecer.
				</span>
			</Dynamic>
		);
	}
}
