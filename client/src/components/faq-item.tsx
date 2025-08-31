import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  icon: string;
}

export default function FAQItem({ question, answer, icon }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card p-6 rounded-xl" data-testid="faq-item">
      <button
        className="w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="faq-question-button"
      >
        <h3 className="text-lg font-semibold text-secondary flex items-center gap-3">
          <i className={`${icon} text-secondary`}></i>
          {question}
          <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} ml-auto text-sm`}></i>
        </h3>
      </button>
      
      {isOpen && (
        <div className="mt-4 pl-8" data-testid="faq-answer">
          <p className="text-muted-foreground leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
