import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ContentCard from "./ContentCard";

describe("<ContentCard />", () => {
  it("renders a blog card", () => {
    render(
      <ContentCard title="Test Title" summary="Test Summary" slug="/test" />
    );
    const title = screen.getByText(/test title/i);
    expect(title).toBeInTheDocument();
    const summary = screen.getByText(/test summary/i);
    expect(summary).toBeInTheDocument;
  });
});
