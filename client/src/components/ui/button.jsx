import { cn } from '../../lib/utils';

export function Button({ children, className = "", variant = "primary", size = "sm", ...props }) {
  const base =
    "inline-flex items-center justify-center font-bold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-white text-primary border-2 border-primary hover:bg-primary/10",
    outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary/10",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm",
    md: "px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base",
    lg: "px-5 py-2.5 text-base sm:px-6 sm:py-3 sm:text-lg",
  };
  return (
    <button
      className={cn(base, variants[variant] || variants.primary, sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
