import React from "react";
import Rating from "./Rating";

interface Props {
  name: string;
  rating: number;
  // imgUrl?:string
}
const CompanyRow = ({ name, rating }: Props) => {
  return (
    <div className="border-2 rounded w-full flex mb-1 hover:shadow-md zoom">
      <Rating rating={rating} />
      <div className="flex p-2">
        <img
          className="w-20 ml-8 h-12 border-2 rounded"
          src="https://via.placeholder.com/150"
          alt=""
        />
        <div className="text-gray-900 flex items-center font-bold ml-5 w-20">{name}</div>
        <div className="flex items-center ml-4">
          Amazon has been forcing everyone into working long hours to meet
          demand
        </div>
      </div>
    </div>
  );
};

export default CompanyRow;
