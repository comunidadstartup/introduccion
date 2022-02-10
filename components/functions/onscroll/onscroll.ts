// Find items with data-prop
// Get Item's top value from page height (top)
// Get Item's bottom value from page height (top + height)
// Befofre scroll value is top, let static
// When scroll value is top start progress and let fixed
// When scroll value is bottom end progress
// Before scroll value beyond bottom, let absolute and percentage attribute

import relpercent from "../relpercent";
import relvalue from "../relvalue";

function itemData(
	{ parent, child }: { parent: HTMLElement; child: HTMLElement },
	position: "static" | "absolute" | "fixed",
	top: number | undefined,
	height: number,
	progress: number
) {
	parent.style.height = `${height}px`;
	parent.dataset.progress = `${progress}`;
	child.style.position = position;
	child.style.top = `${top}px`;
}

function relativeHeight(item: HTMLElement, good: number, bad: number): number {
	return item.children[0].clientHeight > window.innerHeight ? good : bad;
}

function onscroll() {
	const items = document.querySelectorAll<HTMLElement>("[data-scroll]"),
		{ scrollY, innerHeight } = window,
		viewBottom = scrollY + innerHeight; // View bottom

	items.forEach((i) => {
		const child = i.children[0] as HTMLElement,
			begin = i.offsetTop,
			end = begin + i.clientHeight;

		/* View is beyond end */
		if (viewBottom > end) {
			itemData(
				{ parent: i, child },
				"absolute",
				end - child.clientHeight,
				i.clientHeight,
				100
			);
			/* view beginning is below item's beginning */
		} else if (scrollY < begin) {
			itemData({ parent: i, child }, "static", undefined, i.clientHeight, 0);
			/* View is below item's end */
		} else if (viewBottom < end) {
			const percent = relpercent(viewBottom, begin, end);
			itemData({ parent: i, child }, "fixed", 0, i.clientHeight, percent);
		}
	});
}

export default function index() {
	onscroll();
	window.addEventListener("scroll", () => onscroll());
}
