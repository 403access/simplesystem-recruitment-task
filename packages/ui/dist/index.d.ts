import React from 'react';

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => JSX.Element;

interface AccordionProps {
    title: string;
    children?: React.ReactNode;
    onClick?: (isOpen: boolean) => void;
}
declare const Accordion: ({ title, children, onClick }: AccordionProps) => JSX.Element;

interface SeparatorProps {
    kind: "horizontal" | "vertical";
    size: string;
}
declare const Separator: ({ kind, size }: SeparatorProps) => JSX.Element;

interface InputProps {
    placeholder: string;
    value?: string;
    onChange: (value: string) => void;
}
declare const Input: ({ placeholder, value, onChange }: InputProps) => JSX.Element;

interface RepositoryViewProps {
    repository: {
        name: string;
        stars: number;
        description: string;
    };
}
declare const RepositoryView: ({ repository }: RepositoryViewProps) => JSX.Element;

export { Accordion, AccordionProps, Button, ButtonProps, Input, InputProps, RepositoryView, RepositoryViewProps, Separator, SeparatorProps };
