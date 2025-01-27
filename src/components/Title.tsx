import React from "react";
import { DesignProps } from "../interfaces/DesignProps";

interface TitleProps extends DesignProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return (
    <div className={`mb-2 bg-theme-invert ${className}`}>
      <span className="block font-light tracking-widest text-theme text-md hover-target">
        {text}
      </span>
    </div>
  );
};

export default Title;
