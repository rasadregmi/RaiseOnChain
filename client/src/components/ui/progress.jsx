import React from "react";
import { cn } from '../../lib/utils';

export function Progress({ value, max = 100, className = "" }) {
  const percentage = Math.min(Math.max(value, 0), max);
  return (
    <div className={cn("w-full bg-gray-200 rounded-full h-3 overflow-hidden", className)}>
      <div
        className="bg-primary h-3 rounded-full transition-all duration-500"
        style={{ width: `${(percentage / max) * 100}%` }}
      ></div>
    </div>
  );
}
