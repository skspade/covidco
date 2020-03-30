import React from "react";
import CompanyRow from "./Row";
import { ListCompanysQuery } from "../../API";

interface Props {
  data: ListCompanysQuery;
}
const Table = ({ data }: Props) => {
  return (
    <section className="flex flex-col">
      {data.listCompanys?.items?.map(company => {
        if (company) {
          return <CompanyRow company={company} />;
        }
      })}
    </section>
  );
};

export default Table;
