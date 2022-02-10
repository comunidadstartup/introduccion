import Dynamic from "@/components/blocks/dynamic/dynamic";
import React, { Component } from "react";

export default class FundamentosV extends Component {
	render() {
		return (
			<Dynamic variant="primary" animate="showup">
				<span style={{ marginBottom: "20vh" }} className="h6 w-full">
					Expectativa Fundamental
				</span>
				<span style={{ marginBottom: "2rem" }} className="h4 w-full">
					La expectativa no se debe encontrar al final del aprendizaje
				</span>
				<span className="h2 w-full">
					El aprendizaje debe comenzar a partir de una expectativa.
				</span>
			</Dynamic>
		);
	}
}
