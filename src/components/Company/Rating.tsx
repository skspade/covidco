import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp
} from "@fortawesome/free-regular-svg-icons";

interface Props {
  rating: number
}
const Rating = ({rating }: Props) => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between h-full content-between">
        <div className=''>
          <FontAwesomeIcon
            fixedWidth
            icon={faArrowAltCircleUp}
            size='lg'
            className="text-green-400 self-center"
          />
        </div>
        <div className=''>
          <FontAwesomeIcon
            fixedWidth
            icon={faArrowAltCircleDown}
            size='lg'
            className="text-red-400 self-center"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-10">
        <div className="text-gray-700 font-semibold text-center">{rating}</div>
      </div>
    </div>
  );
};

export default Rating;
