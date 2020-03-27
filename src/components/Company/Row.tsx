import React from "react";

interface Props {
  name: string;
  // imgUrl?:string
}
const CompanyRow = ({ name }: Props) => {
  //TODO Add a search bar
  return (
    <div className="border-2 rounded w-full flex mb-1 hover:shadow-md zoom">
      <div className="flex p-2">
        <img
          className="w-20 h-12 border-2 rounded"
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
