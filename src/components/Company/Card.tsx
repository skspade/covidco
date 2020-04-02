import React from "react";
import * as mutations from "../../graphql/mutations";
import { useMutation } from "../../graphql/hooks/useMutation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface Props {
  company: {
    __typename: "Company";
    id: string;
    name: string;
    description: string;
    rating: number;
    logoUrl: string;
    references: Array<{
      __typename: "Reference";
      heading: string;
      url: string;
    }>;
  };
  // imgUrl?:string
}

const Card = ({ company }: Props) => {
  const { name, description, logoUrl, id } = company;
  const [{ loading }, deleteCompany] = useMutation(mutations.deleteCompany);
  return (
    <div>
      {loading && <div>Deleting...</div>}
      <div className="flex flex-col justify-center items-center rounded w-56 p-2 hover:shadow-md zoom">
        <img className="w-full h-20 border-2 rounded" src={logoUrl} alt="" />
        <div className=" mt-1 text-gray-900 flex justify-center font-bold w-20">
          {name}
        </div>
        <div className="flex items-center ml-4">{description}</div>
      </div>
      <div>
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => {
            deleteCompany({ input: { id } });
          }}
        />
      </div>
    </div>
  );
};

export default Card;
