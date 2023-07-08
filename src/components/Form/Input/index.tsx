import clsx from "clsx";
import React from "react";
import InputMask from "react-input-mask";

interface IProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  wrapperClassName?: string;
  className?: string;
  error?: boolean;
  helperText?: string;
  mask?: string;
  maskChar?: string;
  textarea?: boolean;
}

const Input: React.FC<IProps> = ({
  wrapperClassName,
  className,
  error,
  helperText,
  textarea,
  mask,
  maskChar,
  ...props
}) => {
  return (
    <div className={wrapperClassName}>
      {!textarea ? (
        <InputMask
          mask={mask!}
          maskChar={maskChar}
          className={clsx(
            "w-full border-b-2 border-black outline-none text-xl py-1 active:border-green-500 focus:border-green-500",
            {
              "border-red-500": error,
            },
            className
          )}
          {...props}
        />
      ) : (
        <textarea
          className={clsx(
            "w-full h-fit border-b-2 border-black outline-none text-xl py-1 active:border-green-500 focus:border-green-500",
            {
              "border-red-500": error,
            },
            className
          )}
          {...props}
        />
      )}
      {error && (
        <p className={clsx("flex text-sm text-red-500", wrapperClassName)}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
