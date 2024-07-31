import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CallToAction from "./CallToAction";

describe("<CallToAction />", () => {
  it("renders a call to action", () => {
    render(<CallToAction />);
    const title = screen.getByText(/Let's work together/i);
    expect(title).toBeInTheDocument();
  });
});
