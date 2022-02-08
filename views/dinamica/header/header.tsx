import React, { Component } from "react";
import styles from "./header.module.scss";

import Dynamic from "@/components/blocks/dynamic/dynamic";
import BotonRectangular from "@/components/button/rectangular/rectangular";

export default class DinamicaHeader extends Component {
	render() {
		return (
			<Dynamic variant="secondary" animate="goaway">
				<div
					className={"flex flex-row items-center justify-center w-auto h-auto"}
				>
					<div className={styles.icon}></div>
					<h1 className="text-white">Dinámica</h1>
				</div>
				<div className="flex flex-row py-3 align-center justify-center w-full h-auto">
					<BotonRectangular variant="primary" link="/" title="Inicio" />
					<BotonRectangular
						variant="primary"
						link="/fundamentos"
						title="Fundamentos"
					/>
				</div>
			</Dynamic>
		);
	}
}
