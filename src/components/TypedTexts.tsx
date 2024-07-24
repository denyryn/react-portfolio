import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { DesignProps } from "../interfaces/designProps";

interface TypedTextProps extends DesignProps {
  className?: string;
}
const TypedTexts: React.FC<TypedTextProps> = ({ texts, className }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: texts,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typed.destroy();
    };
  }, [texts]);

  return <span className={className} ref={el} />;
};

export default TypedTexts;
