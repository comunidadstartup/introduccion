import anime from "animejs";
import relative from "../relative";

export default function dynamicBar(id: string, limit: number) {
	let lastScroll = window.scrollY,
		count: number = 0,
		percentage = (count * 100) / limit;

	const animation = anime({
		targets: id,
		translateY: [-200, 0],
		easing: "spring(5, 80, 50, 0)",
	});

	function scroller() {
		let { scrollY } = window;

		if (lastScroll > scrollY) count < 0 ? (count = 0) : count--;
		else count > limit ? (count = limit) : count++;

		lastScroll = scrollY;
		percentage = (count * 100) / limit;

		let range = percentage > 100 ? 100 : percentage < 0 ? 0 : percentage;

		let value = scrollY <= 0 ? 1 : relative(range, 1, 0);

		animation.seek(value * animation.duration);
	}

	scroller();
	window.addEventListener("scroll", () => scroller());
}
