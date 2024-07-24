import { useRef, useEffect } from "react";
import "../App.css"; // Adjust the path as necessary

type CustomCursorProps = {
  className?: string;
};

const CustomCursor: React.FC<CustomCursorProps> = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    const addHoverEffect = () => {
      if (!cursorRef.current) return;
      cursorRef.current.classList.add("hovered");
      console.log("Hover effect added");
    };

    const removeHoverEffect = () => {
      if (!cursorRef.current) return;
      cursorRef.current.classList.remove("hovered");
      console.log("Hover effect removed");
    };

    window.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll(".hover-target");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  return <div id="cursor" className="custom-cursor" ref={cursorRef} />;
};

export default CustomCursor;
