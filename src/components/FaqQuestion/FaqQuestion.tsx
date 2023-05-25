import React from "react";
import Icon from "@/components/Icon";

interface FaqQuestionProps {
  question: string;
  children: React.ReactNode;
}

function FaqQuestion({ question, children }: FaqQuestionProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <article className={`faq ${isOpen ? "open" : ""}`}>
      <p className="faq__question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <Icon type="chevron" />
      </p>
      <p className="faq__answer">{children}</p>
    </article>
  );
}

export default FaqQuestion;
