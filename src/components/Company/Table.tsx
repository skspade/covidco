import React from "react";
import CompanyRow from "./Row";
import { useQuery } from "../../graphql/hooks/useQuery";
import { listCompanys } from "../../graphql/queries";
import { ListCompanysQuery } from "../../API";

const Table = () => {
  const { data, error, loading } = useQuery<ListCompanysQuery>(listCompanys);
  if (loading) return <div>Loading...</div>;
  return (
    <section className="mt-20 flex flex-col">
      <h3 className="text-xl text-gray-800 text-center">Companies</h3>
      <CompanyRow name="Amazon" rating={-100} />
      <CompanyRow name="Bob's Burgers" rating={250} />
      {data.listCompanys?.items?.map(company => {
        if (company) {
          return <CompanyRow name={company.name} rating={company.rating} />;
        }
      })}
    </section>
  );
};

export default Table;
