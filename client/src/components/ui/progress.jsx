import React from "react";

export function Progress({ value, max = 100, className = "" }) {
  const percentage = Math.min(Math.max(value, 0), max);
  return (
    <div className={`w-full bg-gray-200 rounded-full h-4 ${className}`}>
      <div
        className="bg-green-600 h-4 rounded-full transition-all duration-300"
        style={{ width: `${(percentage / max) * 100}%` }}
      ></div>
    </div>
  );
}
