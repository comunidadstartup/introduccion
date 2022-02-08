import Dynamic from "@/components/blocks/dynamic/dynamic";
import React, { Component } from "react";

export default class DinamicaIII extends Component {
	render() {
		return (
			<Dynamic classes="w80" variant="secondary" animate="showup">
				<span style={{ marginBottom: "2rem" }} className="h4">
					En la primera etapa el vacante será iniciado en el ámbito de interés y
					mediante esta se le evaluará. No habrá ningún compromiso por ninguna
					parte.
				</span>
				<span className="p">
					Cuando alguno de las partes no sienta que se le ha cumplido su
					expectativa puede decidir terminar el curso
				</span>
			</Dynamic>
		);
	}
}
