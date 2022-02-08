import { render, screen } from "@testing-library/react";
import Index from "../pages/index";

describe("Index", () => {
	it("Matches snaptchot", () => {
		const { container } = render(<Index />);
		expect(container).toMatchSnapshot();
	});
});
