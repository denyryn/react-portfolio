import React from "react";
import { Marquee } from "dynamic-marquee-react";
import { UserProps } from "../interfaces/UserProps";

interface RunningTextsProps extends UserProps {
  text?: string;
}

const RunningTexts: React.FC<RunningTextsProps> = ({ text }) => {
  return (
    <span className="text-sm font-medium hover-target">
      <Marquee startOnScreen={true}>
        <div className="text-blue-500">·&nbsp;{text}&nbsp;</div>
        {/* <div className="text-blue-500">🌏&nbsp;{text}&nbsp;</div>
        <div className="text-blue-500">🕸️&nbsp;{text}&nbsp;</div> */}
      </Marquee>
    </span>
  );
};

export default RunningTexts;
