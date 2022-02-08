import anime, { AnimeParams } from "animejs";
import React, { Component } from "react";

export type EffectsType = "appear" | "slideleft";

const Effects = {
	appear: {
		in: {
			opacity: [0, 1],
			scale: [0, 1],
		},
		out: {
			opacity: [1, 0],
			scale: [1, 0],
		},
	},
	slideleft: {
		in: {
			opacity: [0, 1],
			translateX: [400, 0],
		},
		out: {
			opacity: [1, 0],
			translateX: [0, 400],
		},
	},
};

export function toggle(open: boolean, effect: EffectsType) {
	const cont = document.getElementById("modal-container"),
		child = cont?.firstChild;
	let dir: [0 | 1, 1 | 0];
	let fx: "in" | "out";
	const animation = () => {
		anime({
			targets: cont,
			opacity: dir,
			easing: "linear",
			duration: 500,
		});
		child
			? anime({
					targets: child,
					...Effects[effect][fx],
					easing: "easeInOutBack",
					duration: 500,
			  })
			: null;
	};
	if (open) {
		dir = [0, 1];
		fx = "in";
	} else {
		dir = [1, 0];
		fx = "out";
	}
	animation();
}

interface Props {
	effect: EffectsType;
}

interface State {}

export default class ModalContainer extends Component<Props, State> {
	componentDidMount() {
		toggle(true, this.props.effect);
	}

	place() {
		switch (this.props.effect) {
			case "appear":
				return "center";
			case "slideleft":
				return "flex-end";
		}
	}

	render() {
		return (
			<div
				id="modal-container"
				style={{ justifyContent: this.place() }}
				className={`fixed top-0 z-[100] flex items-center w-full h-screen md:p-6 bg-black/20 dark:bg-white/20`}
			>
				{this.props.children}
			</div>
		);
	}
}
