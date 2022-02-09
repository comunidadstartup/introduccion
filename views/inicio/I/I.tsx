import Dynamic from "@/components/blocks/dynamic/dynamic";
import Normal from "@/components/blocks/normal/normal";
import React, { Component } from "react";

export default class InicioI extends Component {
	render() {
		return (
			<Dynamic variant="primary" animate="showup">
				<span className="h4">
					Comunidad Startup es una startup con el objetivo de desarrollar y
					proveer el mejor ambiente para ayudar a las startups crecer.
				</span>
			</Dynamic>
		);
	}
}
