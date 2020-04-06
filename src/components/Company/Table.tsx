import React from "react";
import CompanyRow from "./Row";
import { ListCompanysQuery } from "../../API";
import { useLocation } from "react-router-dom";

interface Props {
  data: ListCompanysQuery;
}
const Table = ({ data }: Props) => {

  const location = useLocation();
  const type = location.pathname === '/table' ? 'row' : 'card';
  return (
    <section className={`flex ${type === 'row' ? 'flex-col' : ''}`}>
      {data.listCompanys?.items?.map(company => {
        if (company) {
          return <CompanyRow key={company.id} type={type} company={company} />;
        }
      })}
    </section>
  );
};

export default Table;
