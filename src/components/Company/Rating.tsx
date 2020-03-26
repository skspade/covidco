import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp
} from "@fortawesome/free-regular-svg-icons";

interface Props {
  name: string;
}
const Rating = ({ name }: Props) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-gray-900 text-center font-bold ">{name}</div>
      <div className="flex justify-between align-top">
        <FontAwesomeIcon
          fixedWidth
          icon={faArrowAltCircleUp}
          className="text-green-400 self-center"
        />
        <span className="text-gray-700 font-semibold">-100</span>
        <FontAwesomeIcon
          fixedWidth
          icon={faArrowAltCircleDown}
          className="text-red-400 self-center"
        />
      </div>
    </div>
  );
};

export default Rating;
