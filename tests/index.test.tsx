import { render, screen } from "@testing-library/react";
import Index from "../pages/index";

describe("Index", () => {
	it("Renders Hello", () => {
		render(<Index />);

		const heading = screen.getByRole("heading", {
			name: /Hello/i,
		});

		expect(heading).toBeInTheDocument();
	});
	it("Matches snaptchot", () => {
		const { container } = render(<Index />);
		expect(container).toMatchSnapshot();
	});
});
