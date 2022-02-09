import Dynamic from "@/components/blocks/dynamic/dynamic";
import React, { Component } from "react";

export default class DinamicaIV extends Component {
	render() {
		return (
			<Dynamic variant="secondary" animate="showup">
				<span style={{ marginBottom: "2rem" }} className="h4">
					Una vez decidida la vacante, se entrará en una etapa de adquisición de
					derechos (vesting) acordada.
				</span>
				<span className="p">
					Y durante esta etapa seguidas siendo instruido, seguiras creciendo,
					aportando y demostrando tus capacidades hasta adquirir la totalidad de
					los derechos del emprendimiento como socio o cofundador.
				</span>
			</Dynamic>
		);
	}
}
