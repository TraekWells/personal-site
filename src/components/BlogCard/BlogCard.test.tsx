import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import BlogCard from "./BlogCard";

describe("<BlogCard />", () => {
  it("renders a blog card", () => {
    render(<BlogCard title="Test Title" summary="Test Summary" slug="/test" />);
    const title = screen.getByText(/test title/i);
    expect(title).toBeInTheDocument();
    const summary = screen.getByText(/test summary/i);
    expect(summary).toBeInTheDocument;
    const link = screen.getByRole("link", { name: /read this post/i });
    expect(link).toHaveAttribute("href", "/test");
  });
});
