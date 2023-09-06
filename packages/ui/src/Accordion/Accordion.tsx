/*
 *    FRAMEWORK
 */
import React, { useState } from "react";
/*
 *    STYLES
 */
import "./Accordion.css";

export interface AccordionProps {
  title: string;
  children?: React.ReactNode;
  onClick?: (isOpen: boolean) => void;
}

export const Accordion = ({ title, children, onClick }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-header">
        <span className="accordion-title">{title}</span>

        <span
          className="accordion-expander"
          onClick={() => {
            const newIsOpen = !isOpen;
            setIsOpen(newIsOpen);
            onClick?.(newIsOpen);
          }}
        >
          {isOpen === true ? "🔼" : "🔽"}
        </span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};
