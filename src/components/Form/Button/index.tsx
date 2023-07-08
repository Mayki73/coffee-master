import clsx from "clsx";
import React from "react";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<IProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={clsx(
        "px-10 py-3 h-max border-2 border-black",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
