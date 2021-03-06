import Dynamic from "@/components/blocks/dynamic/dynamic";
import React, { Component } from "react";

export default class InicioIV extends Component {
	render() {
		return (
			<Dynamic variant="primary" animate="showup">
				<span className="h3">
					Y en base a nuestra metodología, queremos ayudarte a crecer, porque
					nosotros crecemos ayudando a otros a crecer.
				</span>
			</Dynamic>
		);
	}
}
