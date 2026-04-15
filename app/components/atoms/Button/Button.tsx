import { clsx, type ClassValue } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]){
    return  twMerge(clsx(inputs))
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'full';
    isLoading?: boolean;
}

export const  Button = ({
    children,
    className,
    variant = 'primary',
    size = 'md',
    isLoading,
    disabled,
    ...props
}: ButtonProps) => {
    const variants = {
        primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-sm",
        secondary: "bg-secondary text-text-main hover:bg-danube-200 dark:hover:bg-danube-800",
        outline: "border border-border bg-transparent text-text-main hover:bg-danube-50 dark:hover:bg-danube-900",
        ghost: "bg-transparent text-text-description hover:bg-danube-100 dark:hover:bg-danube-800",
    };

    const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    full: "w-full px-auto py-4 text-md"
  };
  
  return (
    <button
    className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled: opacity-50",
        variants[variant],
        sizes[size],
        className
    )}
    disabled={isLoading || disabled}
    {...props}
    >
        {
            isLoading ? (
                <span
                className="mr-2 h-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                ></span>
            ): null}
            {children}
    </button>
  )
}