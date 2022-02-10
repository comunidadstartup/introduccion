import Dynamic from "@/components/blocks/dynamic/dynamic";
import React, { Component } from "react";

export default class FundamentosII extends Component {
	render() {
		return (
			<Dynamic variant="primary" animate="showup">
				<span style={{ marginBottom: "4rem" }} className="h4 w-full">
					Por eso para crecer uno mismo hace más sentido esforzarse en hacer
					crecer a alguien que posea esa voluntad, que esforzarse con alguien
					que no tenga la voluntad de crecer
				</span>
				<span className="h4 w-full">Estos son nuestros fundamentos</span>
			</Dynamic>
		);
	}
}
