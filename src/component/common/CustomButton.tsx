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
  style,
  icon,
  onMouseOver,
  onMouseOut,
}) => {
  const buttonClasses = classNames(
    "text-gray-600 font-bold relative transform hover:scale-105 transition-transform duration-300 p-2",
    className
  );

  return (
    <div className="z-1">
      <button
        className={buttonClasses}
        style={style}
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {text}
        <span className="absolute inset-x-0 hover:scale-105 transition-transform bottom-0 h-1 bg-gradient-to-r from-sky-500 via-blue-900 to-purple-900"></span>
      </button>
    </div>
  );
};


