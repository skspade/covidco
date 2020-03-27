import React from "react";
import Card from "./Card";
import { ListCompanysQuery } from "../../API";

interface Props {
  data: ListCompanysQuery;
}

const CardDeck = ({ data }: Props) => {
  return (
    <div className="flex">
      {data.listCompanys?.items?.map(company => {
        if (company) {
          return <Card company={company} />;
        }
      })}
    </div>
  );
};

export default CardDeck;
