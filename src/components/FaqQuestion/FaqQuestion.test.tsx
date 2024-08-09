import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FaqQuestion from "./FaqQuestion";
import userEvent from "@testing-library/user-event";

describe("<FaqQuestion />", () => {
  it("renders a FAQ question", () => {
    render(<FaqQuestion question="test question">test answer</FaqQuestion>);
    const question = screen.getByText(/test question/i);
    expect(question).toBeInTheDocument();
  });
  it("toggles the answer when the question is clicked", async () => {
    const user = userEvent.setup();
    render(<FaqQuestion question="test question">test answer</FaqQuestion>);
    const question = screen.getByText(/test question/i);
    const articleContainer = document.querySelector("article") as HTMLElement;
    await user.click(question);
    expect(articleContainer).toHaveClass("faq open");
  });
});
