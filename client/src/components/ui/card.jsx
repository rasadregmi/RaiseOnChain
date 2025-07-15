export function Card({ children, className = "" }) {
  return <div className={`border rounded-lg shadow-md p-4 ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
