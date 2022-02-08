import React, { Component } from "react";
import { SunIcon as Light, MoonIcon as Dark } from "@heroicons/react/outline";

interface Props {
	mode: "light" | "dark";
	onClick: React.MouseEventHandler;
}

export default class ColorSwitch extends Component<Props> {
	render() {
		const { mode, onClick } = this.props;
		return (
			<div
				onClick={onClick}
				className="flex flex-row items-center justify-between w-auto h-auto"
			>
				{mode == "dark" ? (
					<Item classes="bg-black/40 hover:bg-black/60">
						<Dark className="w-6 h-6 stroke-white" />
					</Item>
				) : (
					<Item classes="bg-white/40 hover:bg-white/60">
						<Light className="w-6 h-6 stroke-black" />
					</Item>
				)}
			</div>
		);
	}
}

interface iProps {
	classes: string;
}

class Item extends Component<iProps> {
	render() {
		return (
			<div
				className={`flex items-center justify-center p-2 hover:cursor-pointer rounded-xl ${this.props.classes}`}
			>
				{this.props.children}
			</div>
		);
	}
}
