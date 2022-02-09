import React, { Component } from "react";

interface Props {
	variant: "primary" | "secondary" | "tertiary";
	onClick: React.MouseEventHandler;
	svg: "fill" | "stroke";
}

interface State {}

export default class BotonRedondo extends Component<Props, State> {
	render() {
		const { onClick, variant, children, svg } = this.props;
		return (
			<button
				onClick={onClick}
				className={`flex items-center justify-center w-auto h-auto rounded-full p-3 
    opacity-75 transition-all hover:opacity-100 hover:scale-105 mr-3 last:mr-0
    button-${variant} ${svg}`}
			>
				{children}
			</button>
		);
	}
}
