import React from "react";

interface Props {
  name: string;
  // imgUrl?:string
}

const Card = ({ name }: Props) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center rounded w-56 p-2 hover:shadow-md zoom">
        <img
          className="w-full h-20 border-2 rounded"
          src="https://via.placeholder.com/150"
          alt=""
        />
        <div className=" mt-1 text-gray-900 flex justify-center font-bold w-20">
          {name}
        </div>
        <div className="flex items-center ml-4">
          Amazon has been forcing everyone into working long hours to meet
          demand
        </div>
      </div>
    </div>
  );
};

export default Card;
