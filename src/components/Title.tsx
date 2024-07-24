import React from "react";
import { DesignProps } from "../interfaces/DesignProps";

interface TitleProps extends DesignProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return (
    <div className={`mb-2 bg-white mix-blend-difference ${className}`}>
      <span className="block font-light tracking-widest text-white invert text-md">
        {text}
      </span>
    </div>
  );
};

export default Title;
