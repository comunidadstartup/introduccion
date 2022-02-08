import { AnimeParams } from "animejs";
import React, { Component } from "react";

import {
	effects,
	range,
} from "@/components/functions/onscroll/animate/effects/effect";

export interface Props {
	animate: effects | "custom";
	params?: AnimeParams;
	range?: range;
	variant?: "primary" | "secondary";
	classes?: string;
}

interface State {}

export default class Dynamic extends Component<Props, State> {
	render() {
		const { animate, params, range, variant, classes } = this.props;
		return (
			<div
				data-block="main"
				data-scroll={true}
				className={`h-[200vh] w-full flex items-start justify-center block-${variant}`}
			>
				<div
					data-block="sub"
					data-animate={animate}
					data-params={JSON.stringify(params)}
					data-range={JSON.stringify(range)}
					className={`flex flex-col items-center justify-center min-h-screen h-auto ${classes}`}
				>
					{this.props.children}
				</div>
			</div>
		);
	}
}
