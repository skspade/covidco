import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "../../graphql/hooks/useMutation";
import * as mutations from "../../graphql/mutations";
import { Auth } from "aws-amplify";

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
  type: "card" | "row";
}
const CompanyRow = ({ company, type }: Props) => {
  const { name, description, logoUrl, id } = company;
  const [{ loading }, deleteCompany] = useMutation(mutations.deleteCompany);

  if (type === "card")
    return (
      <div className="rounded w-full flex mb-1 hover:shadow-md zoom">
        <div className="flex p-2">
          <img className="w-20 h-12 border-2 rounded" src={logoUrl} alt="" />
          <div className="text-gray-900 flex items-center font-bold ml-5 w-20">
            {name}
          </div>
          <div className="flex items-center ml-4">{description}</div>
        </div>
        {Auth.currentAuthenticatedUser() && (
          <div className="flex items-center ml-auto mr-2">
            <FontAwesomeIcon
              icon={faTimes}
              className="text-red-500"
              onClick={() => {
                deleteCompany({ input: { id } });
              }}
            />
          </div>
        )}
      </div>
    );

  if (type === "row")
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
  return null
};

export default CompanyRow;
