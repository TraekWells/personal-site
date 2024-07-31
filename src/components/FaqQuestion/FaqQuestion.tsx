"use client";
import React from "react";
import Icon from "@/components/Icon";

type FaqQuestionProps = {
  question: string;
  children: React.ReactNode;
};

function FaqQuestion({ question, children }: FaqQuestionProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <article className={`faq ${isOpen ? "open" : ""}`}>
      <p className="faq__question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <Icon type="chevron" />
      </p>
      <div className="faq__answer">{children}</div>
    </article>
  );
}

export default FaqQuestion;
