import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {useMutation} from "../../graphql/hooks/useMutation";
import * as mutations from "../../graphql/mutations";

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
}
const CompanyRow = ({ company }: Props) => {
  const { name, description, logoUrl, id } = company;
  const [{ loading }, deleteCompany] = useMutation(mutations.deleteCompany);
  return (
    <div className="rounded w-full flex mb-1 hover:shadow-md zoom">
      <div className="flex p-2">
        <img
          className="w-20 h-12 border-2 rounded"
          src={logoUrl}
          alt=""
        />
        <div className="text-gray-900 flex items-center font-bold ml-5 w-20">
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

export default CompanyRow;
//TODO combine Row and Card
