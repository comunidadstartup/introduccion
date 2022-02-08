/**
 *
 * @param value value percentage between the range of values
 * @param base Base value representing the beginning of the element
 * @param target Limit value representing the end of the element
 * @returns
 * @description Utilizes a percentage to represent the value in a given range
 */
function relpercent(value: number, base: number, target: number) {
	const dir = base > target,
		range = dir
			? (value - base) / (target - base)
			: (value - target) / (base - target),
		percentage = range * 100,
		calc =
			percentage > 0
				? percentage < 100
					? dir
						? 100 - percentage
						: 100 - percentage
					: 0
				: 100;

	return Number(calc.toFixed(2));
}

export default relpercent;
