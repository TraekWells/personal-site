import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

describe("<Avatar />", () => {
  it("renders an avatar", () => {
    render(<Avatar />);
    const avatar = screen.getByAltText("Traek Wells");
    expect(avatar).toBeInTheDocument();
  });
});
