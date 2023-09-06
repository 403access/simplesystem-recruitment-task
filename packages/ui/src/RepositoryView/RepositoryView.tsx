/*
 *     FRAMEWORK
 */
import React from "react";
/*
 *     STYLES
 */
import "./RepositoryView.css";

export interface RepositoryViewProps {
  repository: { name: string; stars: number; description: string };
}

export const RepositoryView = ({ repository }: RepositoryViewProps) => {
  return (
    <div className="repository">
      <div className="repository-header">
        <span className="repository-header-name">{repository.name}</span>
        <span className="repository-header-star">⭐</span>
        <span className="repository-header-stars">{repository.stars}</span>
      </div>
      <div className="repository-content">{repository.description}</div>
    </div>
  );
};
