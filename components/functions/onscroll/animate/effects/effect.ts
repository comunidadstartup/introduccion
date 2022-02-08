import relrange from "@/components/functions/relrange";
import anime, { AnimeParams } from "animejs";

export type range = [number, number];

export type effects = "showup" | "goaway";

const library = {
	showup: {
		translateY: [200, 0],
		opacity: [0, 1],
		easing: "easeInOutBack",
	},
	goaway: {
		translateY: [0, -400],
		easing: "easeInBack",
	},
};

export default async function effect(
	i: HTMLElement,
	parent: HTMLElement,
	effect: effects | "custom"
) {
	const progress = Number(parent.getAttribute("data-progress")),
		rawParams = i.getAttribute("data-params"),
		rawRange = i.getAttribute("data-range");

	const params = () => {
			if (rawParams)
				try {
					return JSON.parse(rawParams);
				} catch (err) {
					return undefined;
				}
		},
		range = () => {
			if (rawRange)
				try {
					return JSON.parse(rawRange);
				} catch (err) {
					return undefined;
				}
		};

	function animate(params: AnimeParams, range: range) {
		let animation = anime({
			targets: i,
			...params,
			autoplay: false,
		});
		let init = range[0],
			final = range[1];
		animation.seek(
			(relrange(progress, init, final) / 100) * animation.duration
		);
	}

	let resRange = await range();
	let resParams = await params();
	if (effect == "custom") {
		if (resParams || resRange) {
			animate(resParams, resRange);
		} else {
			console.log("No Params or Range defined");
		}
	} else {
		animate(library[effect], resRange ? resRange : [0, 100]);
	}
}
