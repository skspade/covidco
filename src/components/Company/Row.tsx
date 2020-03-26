import React from "react";
import Rating from "./Rating";

interface Props {
  name: string;
  // imgUrl?:string
}
const CompanyRow = ({ name }: Props) => {
  return (
    <div className="border-2 rounded w-full flex justify-evenly p-2">
      <Rating name={name} />
      <img
        className="w-20 h-12 border-2 rounded"
        src="https://via.placeholder.com/150"
        alt=""
      />
      <div>
        Amazon has been forcing everyone into working long hours to meet demand
      </div>
    </div>
  );
};

export default CompanyRow;
