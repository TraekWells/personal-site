import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  it("renders a primary button", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });
});
