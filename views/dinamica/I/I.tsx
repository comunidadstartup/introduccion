import Dynamic from "@/components/blocks/dynamic/dynamic";
import SimpleCardCarousel from "@/components/carousel/simplecard/carousel";
import React, { Component } from "react";

export default class DinamicaI extends Component {
	render() {
		return (
			<Dynamic classes="full" variant="primary" animate="showup">
				<h2
					style={{ padding: "0px 2.5rem", marginBottom: "2rem" }}
					className="w-full"
				>
					Emprendedor
				</h2>
				<p
					style={{ padding: "0px 2.5rem", marginBottom: "2rem" }}
					className="w-full"
				>
					¿Tenés ideas pero no tenés el equipo para llevarlas acabo?
				</p>
				<SimpleCardCarousel
					items={[
						"Prepara un plan de formación técnica que cubra las necesidades que tu iniciativa requiere para desarrollarla",
						"Presenta el potencial de tu iniciativa al prospecto, así como el valor que el plan de formación aportará",
						"Prepara al vacante con el fin de lograr encontrar durante el proceso a un socio ideal para cofundar el emprendimiento",
						"Conforme a la metodología, tómate el tiempo en hacer crecer a tu socio para alcanzar construir grandes logros",
					]}
				/>
			</Dynamic>
		);
	}
}
