// create data attributes related to each type of animation
// each data attribute either
//      has settings in it to customize the animation properties. Ex: data-anim="{opacity: [0,1]}"
//      is related to other attributes specific to the animation properties. Ex: data-opacity="[0,1]"

import effect from "./effects/effect";

// The function searches all elements with the data attribute
// Attaches the scroll event with the animation
// Retrieves the progress percentage of the element
// Runs the animation timeline based

export default function animate() {
	const item = document.querySelectorAll<HTMLElement>("[data-animate]");
	item.forEach((i) => {
		const type = i.getAttribute("data-animate"),
			parent = i.parentElement;
		if (!parent || !parent.getAttribute("data-scroll")) {
			console.log(
				!parent ? "No parent element found" : "No parent attribute found"
			);
			return;
		}
		switch (type) {
			case "showup":
				effect(i, parent, "showup");
				window.addEventListener("scroll", () => effect(i, parent, "showup"));
				break;
			case "goaway":
				effect(i, parent, "goaway");
				window.addEventListener("scroll", () => effect(i, parent, "goaway"));
				break;
			case "custom":
				effect(i, parent, "custom");
				window.addEventListener("scroll", () => effect(i, parent, "custom"));
			default:
				return;
		}
	});
}
