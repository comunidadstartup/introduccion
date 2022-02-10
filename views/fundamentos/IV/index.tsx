import Dynamic from "@/components/blocks/dynamic/dynamic";
import React, { Component } from "react";

export default class FundamentosIV extends Component {
	render() {
		return (
			<Dynamic variant="primary" animate="showup">
				<span style={{ marginBottom: "20vh" }} className="h6 w-full">
					Aprendizaje Resolutivo
				</span>
				<span style={{ marginBottom: "2rem" }} className="h4 w-full">
					Debe de haber un propósito y un objetivo en el aprender
				</span>
				<span className="h2 w-full">No una obligación ni un deber</span>
			</Dynamic>
		);
	}
}
