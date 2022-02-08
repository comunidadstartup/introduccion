import relvalue from "../relvalue";

describe("Returns correct values", () => {
	it("Base returned if progress under range", () => {
		expect(relvalue(-10, 100, 200)).toEqual(100);
	});
	it("Limit returned if progress above range", () => {
		expect(relvalue(120, 100, 200)).toEqual(200);
	});
	it("Value returned inside range stright", () => {
		expect(relvalue(50, 100, 200)).toEqual(150);
	});
	it("Value returned inside range inverse", () => {
		expect(relvalue(50, 200, 100)).toEqual(150);
	});
});
