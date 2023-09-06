/*
 *     FRAMEWORK
 */
import React from "react";

export interface SeparatorProps {
  kind: "horizontal" | "vertical";
  size: string;
}

export const Separator = ({ kind, size }: SeparatorProps) => {
  return (
    <div
      style={{
        width: kind === "horizontal" ? size : "1px",
        height: kind === "vertical" ? size : "1px",
      }}
    ></div>
  );
};
