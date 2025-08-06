import React from "react";

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let badgeClasses: string;
  let badgeText: string;

  if (score > 70) {
    badgeClasses = "bg-green-100 text-green-800";
    badgeText = "Strong";
  } else if (score > 49) {
    badgeClasses = "bg-yellow-100 text-yellow-800";
    badgeText = "Good Start";
  } else {
    badgeClasses = "bg-red-100 text-red-800";
    badgeText = "Needs Work";
  }

  return (
    <div
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${badgeClasses}`}
    >
      <p>{badgeText}</p>
    </div>
  );
};

export default ScoreBadge;
