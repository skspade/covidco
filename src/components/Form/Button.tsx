import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  color: string;
  className?: string;
}
const Button = ({ children, color, className, ...rest }: Props) => {
  return (
    <button
      className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
