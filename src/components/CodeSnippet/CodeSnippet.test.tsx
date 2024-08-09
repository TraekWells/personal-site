import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CodeSnippet from "./CodeSnippet";

describe("<CodeSnippet />", () => {
  it("renders a code snippet", () => {
    render(<CodeSnippet />);
    const code = screen.getByText(/const/i);
    expect(code).toBeInTheDocument();
  });
});
