import React, { Component } from "react";

import styles from "./header.module.scss";

import Dynamic from "@/components/blocks/dynamic/dynamic";
import BotonRectangular from "@/components/button/rectangular/rectangular";

export default class InicioHeader extends Component {
	render() {
		return (
			<Dynamic variant="secondary" animate="goaway">
				<h1 style={{ textAlign: "center" }} className="w-full">
					Comunidad Startup
				</h1>
				<h2 style={{ textAlign: "center" }} className="w-full">
					Costa Rica
				</h2>
				<div
					className={[
						"flex align-center justify-center w-full h-auto",
						styles.options,
					].join(" ")}
				>
					<BotonRectangular
						variant="primary"
						link="/iniciacion"
						title="Iniciación"
					/>
					<BotonRectangular
						variant="primary"
						link="/fundamentos"
						title="Curso"
					/>
				</div>
			</Dynamic>
		);
	}
}
