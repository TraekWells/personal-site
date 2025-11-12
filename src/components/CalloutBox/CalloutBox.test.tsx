import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CalloutBox from "./CalloutBox";

describe("<CalloutBox />", () => {
  it("renders a callout box", () => {
    render(
      <CalloutBox title="test title" body="test body" iconType="arrowRight" />
    );
    const title = screen.getByText(/test title/i);
    expect(title).toBeInTheDocument();
  });
});
