import Dynamic from "@/components/blocks/dynamic/dynamic";
import SimpleCardCarousel from "@/components/carousel/simplecard/carousel";
import React, { Component } from "react";

export default class DinamicaII extends Component {
	render() {
		return (
			<Dynamic variant="primary" animate="showup">
				<h2
					style={{ padding: "0px 5%", marginBottom: "2rem" }}
					className="w-full"
				>
					Cursante
				</h2>
				<p style={{ padding: "0px 5%" }} className="w-full">
					¿Deseás aprender o desarrollarte profesionalmente pero no encuentras
					la motivación ni la oportunidad? ¿Deseas solo invertir tu talento?
				</p>
				<SimpleCardCarousel
					items={[
						"Busca una iniciativa en la que encuentres un gran potencial así como interés",
						"Disponte a intentar cumplir con lo que implica ser emprendedor de una iniciativa emergente",
						"Presenta lo que te hace competitivo y demuéstralo.",
					]}
				/>
			</Dynamic>
		);
	}
}
