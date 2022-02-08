export default function relrange(value: number, base: number, target: number) {
	const calc = ((value - base) / (target - base)) * 100;
	return calc < 100 ? (calc > 0 ? calc : 0) : 100;
}
