import React, { Component } from "react";
import Dynamic from "@/components/blocks/dynamic/dynamic";

export default class FundamentosIII extends Component {
	render() {
		return (
			<Dynamic variant="primary" animate="showup">
				<span style={{ marginBottom: "20vh" }} className="h6 w-full">
					Aprendizaje Práctico
				</span>
				<span style={{ marginBottom: "2rem" }} className="h4 w-full">
					Cuando se aprende en la vida no se hace para recibir títulos
				</span>
				<span className="h2 w-full">Sino para resolver problemas</span>
			</Dynamic>
		);
	}
}
