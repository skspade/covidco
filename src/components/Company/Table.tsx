import React from "react";
import CompanyRow from "./Row";
import { ListCompanysQuery } from "../../API";

interface Props {
  data: ListCompanysQuery;
}
const Table = ({ data }: Props) => {

  return (
    <section className={`flex`}>
      {data.listCompanys?.items?.map(company => {
        if (company) {
          return <CompanyRow key={company.id} company={company} />;
        }
      })}
    </section>
  );
};

export default Table;
