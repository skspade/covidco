import React from "react";
import Spinner from "../Spinner";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode;
  color: string;
  className?: string;
  loading?: boolean;
}
const Button = ({ children, color, className, loading, ...rest }: Props) => {
  return (
    <button
      className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
      {...rest}
    >
      {children}
      {loading && <Spinner className="ml-2" />}
    </button>
  );
};

export default Button;
