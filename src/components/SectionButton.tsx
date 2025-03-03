import React from "react";
import { Link } from "react-scroll";

type SectionButtonProps = {
  destination: string;
  destinationName?: string;
};
const SectionButton: React.FC<SectionButtonProps> = ({
  destination,
  destinationName,
}) => {
  return (
    <Link
      to={destination}
      smooth={true}
      duration={500}
      className="duration-100 hover:text-white hover:mix-blend-difference hover-target hover:animate-pulse scale-90 hover:scale-100"
    >
      {destinationName}
    </Link>
  );
};

export default SectionButton;
