import relpercent from "../relpercent";

describe("Returns correct values", () => {
	it("Base returned if progress under range", () => {
		expect(relpercent(150, 240, 430)).toEqual(0);
	});
	it("Limit returned if progress above range", () => {
		expect(relpercent(440, 240, 430)).toEqual(100);
	});
	it("Value returned inside range straight", () => {
		expect(relpercent(250, 240, 430)).toEqual(5.26);
	});
	it("Value returned inside range inverse", () => {
		expect(relpercent(300, 400, 200)).toEqual(50);
	});
});
