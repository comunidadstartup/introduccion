import Dynamic from "@/components/blocks/dynamic/dynamic";
import React, { Component } from "react";

export default class FundamentosVI extends Component {
	render() {
		return (
			<Dynamic variant="primary" animate="showup">
				<span className="h3">
					Debes poner tu esfuerzo en los resultados que quieres ver, no tu
					dinero
				</span>
			</Dynamic>
		);
	}
}
