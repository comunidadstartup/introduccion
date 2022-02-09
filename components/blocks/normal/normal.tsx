import React, { Component } from "react";

interface Props {
	variant?: "primary" | "secondary";
}

interface State {}

export default class Normal extends Component<Props, State> {
	render() {
		const { children, variant } = this.props;
		return (
			<div
				data-block="main"
				className={`flex flex-col items-center justify-center w-full max-w-7xl min-h-screen h-auto block-${variant}`}
			>
				{children}
			</div>
		);
	}
}
