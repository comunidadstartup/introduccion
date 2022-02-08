/**
 *
 * @param progress Progress percentage between the range of values
 * @param base Base value representing the beginning of the element
 * @param target Limit value representing the end of the element
 * @returns
 * @description Utilizes a percentage to represent the progress in a given range
 */
function relvalue(progress: number, base: number, target: number): number;
function relvalue(
	progress: number,
	base: number,
	target: number,
	suffix: string
): string;
function relvalue(progress: any, base: any, target: any, suffix?: any): any {
	const dir = base > target,
		range = dir ? base - target : target - base,
		value = (progress * range) / 100,
		calc =
			progress > 0
				? progress < 100
					? dir
						? base - value
						: base + value
					: target
				: base,
		res = suffix ? calc + suffix : calc;

	return res;
}

export default relvalue;
