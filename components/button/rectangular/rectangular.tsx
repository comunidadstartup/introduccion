import React, { Component } from "react";
import Link from "next/link";

interface Props {
	title: string;
	onClick?: React.MouseEventHandler;
	link?: string;
	variant: "primary" | "secondary";
}

interface State {}

export default class BotonRectangular extends Component<Props, State> {
	styles(variant: Props["variant"]) {
		return `flex items-center justify-center w-full text-base sm:w-auto h-auto rounded-md px-6 py-3 
    opacity-75 transition-all hover:opacity-100 hover:scale-105 mr-3 last:mr-0
    button-${variant}`;
	}
	render() {
		const { onClick, title, link, variant } = this.props;
		return link ? (
			<a href={link} className={this.styles(variant)}>
				{title}
			</a>
		) : (
			<button onClick={onClick} className={this.styles(variant)}>
				{title}
			</button>
		);
	}
}
