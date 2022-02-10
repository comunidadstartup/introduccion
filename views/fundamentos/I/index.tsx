import Dynamic from "@/components/blocks/dynamic/dynamic";
import React, { Component } from "react";

export default class FundamentosI extends Component {
	render() {
		return (
			<Dynamic variant="primary" animate="showup">
				<span style={{ marginBottom: "2rem" }} className="h3 w-full">
					Es difícil encontrar a un socio ideal para co-fundar un emprendimiento
				</span>
				<span style={{ marginBottom: "2rem" }} className="h4 w-full right">
					Una persona con talento no es suficiente para ser un buen co-fundador,
					<b> sino una persona con voluntad para emprender</b>
				</span>
			</Dynamic>
		);
	}
}
