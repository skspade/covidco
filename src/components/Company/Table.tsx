import React from "react";
import CompanyRow from "./Row";
import { ListCompanysQuery } from "../../API";

interface Props {
  data: ListCompanysQuery;
}
const Table = ({ data }: Props) => {
  return (
    <section className="mt-20 flex flex-col">
      <h3 className="text-xl text-gray-800 text-center">Companies</h3>
      {data.listCompanys?.items?.map(company => {
        if (company) {
          return <CompanyRow company={company} />;
        }
      })}
    </section>
  );
};

export default Table;
