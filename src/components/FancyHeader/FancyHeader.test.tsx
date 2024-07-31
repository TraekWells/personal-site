import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FancyHeader from "./FancyHeader";

describe("<FancyHeader />", () => {
  it("renders a fancy header", () => {
    render(<FancyHeader>Test Header</FancyHeader>);
    const title = screen.getByText(/Test Header/i);
    expect(title).toBeInTheDocument();
  });
});
