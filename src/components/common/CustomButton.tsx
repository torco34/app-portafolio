import React from "react";
import classNames from "classnames";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  icon?: JSX.Element;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
}

export const CustomButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  icon,
  onMouseOver,
  onMouseOut,
}) => {
  const buttonClasses = classNames(" w-100 font-bold relative", className);

  return (
    <div className="relative right-4 p-2 rounded-full transition-transform bg-[#E78895] text-white hover:scale-105">
      <button
        className={buttonClasses}
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </button>
    </div>
  );
};
