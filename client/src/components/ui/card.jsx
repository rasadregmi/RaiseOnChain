import { cn } from '../../lib/utils';

export function Card({ children, className = "" }) {
  return <div className={cn("bg-white border border-border rounded-2xl shadow-lg p-3 transition-shadow hover:shadow-2xl", className)}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={cn("py-1 px-1", className)}>{children}</div>;
}
