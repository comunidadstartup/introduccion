import Dynamic from "@/components/blocks/dynamic/dynamic";
import React, { Component } from "react";

export default class FundamentosVII extends Component {
	render() {
		return (
			<Dynamic variant="primary" animate="showup">
				<span style={{ marginBottom: "2rem" }} className="h6 w-full">
					Así prentendemos <u>que</u>
				</span>
				<span style={{ marginBottom: "2rem" }} className="h2">
					<u>Un</u> emprendimiento sea la fuerza detrás de un esfuerzo formativo
				</span>
				<span style={{ marginBottom: "2rem" }} className="h4 right">
					<u>Las</u> necesidades del emprendimiento guíen la dirección de tu
					crecimiento
				</span>
				<span className="h6">
					<u>No</u> te atengas a ninguna garantía ajena, sino a tu propio
					esfuerzo para alcanzar los resultados que deseas
				</span>
			</Dynamic>
		);
	}
}
