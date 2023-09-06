/*
 *     FRAMEWORK
 */
import React from "react";

export interface InputProps {
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
}

export const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <input
      className="input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
